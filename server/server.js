import "dotenv/config.js";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

const mailRecipient = process.env.EMAIL_TO || process.env.SMTP_USER;
const mailConfigured = Boolean(
  process.env.SMTP_HOST &&
  process.env.SMTP_PORT &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS &&
  mailRecipient,
);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

if (!mailConfigured) {
  console.warn(
    "SMTP belum dikonfigurasi. Pesan kontak hanya akan diterima di konsol sampai variabel lingkungan diatur.",
  );
}

app.get("/api/health", (_req, res) => {
  res.json({ status: "Backend online" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Data tidak lengkap" });
  }

  if (!mailConfigured) {
    console.error("Email tidak terkirim karena SMTP belum dikonfigurasi.", {
      name,
      email,
      message,
    });
    return res.status(500).json({
      ok: false,
      error:
        "Email server belum dikonfigurasi. Silakan atur SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, dan EMAIL_TO.",
    });
  }

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to: mailRecipient,
    subject: `Pesan baru dari ${name} (${email})`,
    text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    html: `<p><strong>Nama:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Pesan:</strong></p><p>${message.replace(/\n/g, "<br />")}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email kontak terkirim:", { name, email });
    return res.json({
      ok: true,
      message: "Pesan diterima dan dikirim ke email.",
    });
  } catch (error) {
    console.error("Gagal mengirim email kontak:", error);
    return res.status(500).json({ ok: false, error: "Gagal mengirim email." });
  }
});

app.listen(5000, () => {
  console.log("Server berjalan di http://localhost:5000");
});
