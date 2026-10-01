import React, { useEffect, useRef } from "react";

type InteractiveNeuralVortexProps = {
  className?: string;
};

const InteractiveNeuralVortex = ({
  className = "",
}: InteractiveNeuralVortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const gl =
      canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");

    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 vUv;
      void main() {
        vUv = 0.5 * (a_position + 1.0);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform float u_ratio;
      uniform vec2 u_pointer_position;
      uniform float u_scroll_progress;

      vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
      }

      float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.0);
        vec2 res = vec2(0.0);
        float scale = 8.0;

        for (int j = 0; j < 15; j++) {
          uv = rotate(uv, 1.0);
          sine_acc = rotate(sine_acc, 1.0);
          vec2 layer = uv * scale + float(j) + sine_acc - t;
          sine_acc += sin(layer) + 2.4 * p;
          res += (0.5 + 0.5 * cos(layer)) / scale;
          scale *= 1.2;
        }

        return res.x + res.y;
      }

      void main() {
        vec2 uv = 0.5 * vUv;
        uv.x *= u_ratio;

        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;

        float p = clamp(length(pointer), 0.0, 1.0);
        p = 0.5 * pow(1.0 - p, 2.0);

        float t = 0.001 * u_time;
        vec3 color = vec3(0.0);
        float noise = neuro_shape(uv, t, p);

        noise = 1.2 * pow(noise, 3.0);
        noise += pow(noise, 10.0);
        noise = max(0.0, noise - 0.5);
        noise *= (1.0 - length(vUv - 0.5));

        color = vec3(0.06, 0.55, 0.42);
        color = mix(
          color,
          vec3(0.12, 0.92, 0.74),
          0.32 + 0.16 * sin(2.0 * u_scroll_progress + 1.2)
        );
        color += vec3(0.05, 0.25, 0.18) * sin(2.0 * u_scroll_progress + 1.5);
        color = color * noise;

        gl_FragColor = vec4(color, noise);
      }
    `;

    const compileShader = (
      glContext: WebGLRenderingContext,
      source: string,
      type: number,
    ) => {
      const shader = glContext.createShader(type);
      if (!shader) return null;

      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);

      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.error("Shader error:", glContext.getShaderInfoLog(shader));
        glContext.deleteShader(shader);
        return null;
      }

      return shader;
    };

    const vertexShader = compileShader(
      gl,
      vertexShaderSource,
      gl.VERTEX_SHADER,
    );
    const fragmentShader = compileShader(
      gl,
      fragmentShaderSource,
      gl.FRAGMENT_SHADER,
    );

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) return;

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRatio = gl.getUniformLocation(program, "u_ratio");
    const uPointerPosition = gl.getUniformLocation(
      program,
      "u_pointer_position",
    );
    const uScrollProgress = gl.getUniformLocation(program, "u_scroll_progress");

    const resizeCanvas = () => {
      const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
      canvasEl.width = window.innerWidth * devicePixelRatio;
      canvasEl.height = window.innerHeight * devicePixelRatio;
      gl.viewport(0, 0, canvasEl.width, canvasEl.height);

      if (uRatio) {
        gl.uniform1f(uRatio, canvasEl.width / canvasEl.height);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      const currentTime = performance.now();

      pointerRef.current.x +=
        (pointerRef.current.targetX - pointerRef.current.x) * 0.2;
      pointerRef.current.y +=
        (pointerRef.current.targetY - pointerRef.current.y) * 0.2;

      if (uTime) gl.uniform1f(uTime, currentTime);
      if (uPointerPosition) {
        gl.uniform2f(
          uPointerPosition,
          pointerRef.current.x / window.innerWidth,
          1 - pointerRef.current.y / window.innerHeight,
        );
      }
      if (uScrollProgress) {
        gl.uniform1f(
          uScrollProgress,
          window.scrollY / (2 * window.innerHeight),
        );
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationRef.current = window.requestAnimationFrame(render);
    };

    render();

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current.targetX = event.clientX;
      pointerRef.current.targetY = event.clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      pointerRef.current.targetX = touch.clientX;
      pointerRef.current.targetY = touch.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <div className={`interactive-neural-vortex ${className}`.trim()}>
      <canvas
        ref={canvasRef}
        className="interactive-neural-vortex__canvas"
        aria-hidden="true"
      />
    </div>
  );
};

export { InteractiveNeuralVortex };
export default InteractiveNeuralVortex;
