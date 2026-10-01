import { useEffect, useRef } from "react";
import * as THREE from "three";

function CyberOrb({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.z = 5.8;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1.12, 40, 40),
      new THREE.MeshBasicMaterial({
        color: 0x071b20,
        transparent: true,
        opacity: 0.92,
      }),
    );
    orbGroup.add(core);

    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.SphereGeometry(1.16, 24, 16)),
      new THREE.LineBasicMaterial({
        color: 0x5eead4,
        transparent: true,
        opacity: 0.78,
      }),
    );
    orbGroup.add(wireframe);

    const rings = [
      {
        radius: 1.52,
        tube: 0.012,
        color: 0x5eead4,
        rotation: [0.98, 0.18, -0.24],
      },
      {
        radius: 1.78,
        tube: 0.008,
        color: 0x60a5fa,
        rotation: [1.32, -0.32, 0.52],
      },
      {
        radius: 1.38,
        tube: 0.006,
        color: 0x34d399,
        rotation: [0.32, 1.1, 0.88],
      },
    ];

    rings.forEach(({ radius, tube, color, rotation }) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, tube, 8, 96),
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.76,
        }),
      );
      ring.rotation.set(...rotation);
      ring.userData.spin = 0.0012 + radius * 0.0003;
      orbGroup.add(ring);
    });

    const particlePositions = new Float32Array(90 * 3);
    for (let index = 0; index < particlePositions.length; index += 3) {
      const radius = 1.8 + Math.random() * 0.95;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[index] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[index + 1] = radius * Math.cos(phi);
      particlePositions[index + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3),
    );
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: 0x99f6e4,
        size: 0.028,
        transparent: true,
        opacity: 0.82,
        sizeAttenuation: true,
      }),
    );
    orbGroup.add(particles);

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let animationFrame;

    const resize = () => {
      const width = container.clientWidth || 320;
      const height = container.clientHeight || 320;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const handlePointerMove = (event) => {
      const bounds = container.getBoundingClientRect();
      pointer.targetX =
        ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.targetY =
        ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      pointer.x += (pointer.targetX - pointer.x) * 0.06;
      pointer.y += (pointer.targetY - pointer.y) * 0.06;
      orbGroup.rotation.y += 0.0024;
      orbGroup.rotation.x = pointer.y * 0.16;
      orbGroup.rotation.z = pointer.x * -0.12;
      particles.rotation.y -= 0.001;
      orbGroup.children.forEach((child) => {
        if (child.userData.spin) child.rotation.z += child.userData.spin;
      });
      render();
      animationFrame = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    container.addEventListener("pointermove", handlePointerMove);

    if (reducedMotion) {
      render();
    } else {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", handlePointerMove);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      renderer.dispose();
      container.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`cyber-orb-scene ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export default CyberOrb;
