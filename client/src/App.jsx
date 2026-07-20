import { useEffect, useRef, useState } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      cv: "CV",
    },
    hero: {
      eyebrow: "Cyber Security | Software Engineer | UI/UX Designer",
      title:
        "PAULUS FIRAL OHOIWUTUN. CYBER SECURITY, FULL STACK DEVELOPMENT, AND MODERN WEB EXPERIENCES.",
      description:
        "Informatics Engineering student with expertise in cyber security, full stack development, and UI/UX design. Experienced in working on technical projects both in teams and independently, with a focus on security, performance, and user experience.",
      viewProjects: "View Projects",
      viewCV: "View CV",
      badge: "Informatics Engineering S1",
      cardTitle: "Cyber Security & Full Stack Engineer",
      cardDescription:
        "7th semester student with experience in security assessment, full stack development, and UI/UX design. Active in organizational activities and industry training.",
    },
    stats: {
      projects: "Projects Completed",
      stacks: "Tech Stacks Mastered",
      experience: "Organization & Internship Experience",
    },
    about: {
      eyebrow: "About Me",
      title:
        "7th semester Informatics Engineering student with experience in web development, network security, and UI/UX design.",
      description:
        "Currently studying at Perbanas Institute Jakarta with a strong interest in web development, database management, and network security.",
      points: [
        "Built blockchain donation, food ordering, online top-up, POS systems, and SIEM/NMS support.",
        "Experienced with team-based and independent technical projects.",
        "Active in student organizations and cybersecurity training.",
      ],
    },
    experience: {
      period1: "2023-2024",
      title1: "Web Development Foundation",
      text1:
        "Building web projects like DeBOOKS, Remesan, and WarungKu to strengthen full stack development understanding.",
      period2: "2025",
      title2: "RPA & Cyber Security",
      text2:
        "Internship experience at PT Langit Inovasi Aksi Teknologi focusing on Robotic Process Automation and SIEM/Network Monitoring.",
      period3: "2026",
      title3: "UI/UX & Professional Development",
      text3:
        "UI/UX Designer at PT Aplikasi BenerIT Nusantara, and continuing to develop skills in network security and development.",
    },
    projects: {
      title: "Projects",
    },
    skills: {
      title: "Skills",
      programming: "Programming Languages",
      fullstack: "Full Stack & Frameworks",
      database: "Database & DevOps",
      security: "Security & Tools",
    },
    services: {
      title1: "Full Stack Development",
      text1:
        "Building modern web applications with responsive React frontend and scalable Node.js backend.",
      title2: "Cyber Security & Assessment",
      text2:
        "Conducting network security assessment, SIEM implementation, and security monitoring for IT infrastructure.",
      title3: "UI/UX Design",
      text3:
        "Creating user-friendly, accessible, and professional interfaces for optimal user experience.",
    },
    contact: {
      title: "Get in Touch",
      description: "Let's discuss your project or collaboration opportunity.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      successMsg: "Thanks for reaching out. I'll get back to you soon.",
    },
    apiStatus: "API Status:",
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      skills: "Keahlian",
      contact: "Kontak",
      cv: "CV",
    },
    hero: {
      eyebrow: "Cyber Security | Software Engineer | UI/UX Designer",
      title:
        "PAULUS FIRAL OHOIWUTUN. CYBER SECURITY, FULL STACK DEVELOPMENT, DAN UI/UX DESIGNER.",
      description:
        "Mahasiswa Teknik Informatika dengan expertise dalam cyber security, full stack development, dan UI/UX design. Memiliki pengalaman dalam mengerjakan proyek teknis baik tim maupun mandiri, dengan fokus pada keamanan, performa, dan user experience.",
      viewProjects: "Lihat Proyek",
      viewCV: "Lihat CV",
      badge: "Teknik Informatika S1",
      cardTitle: "Cyber Security & Full Stack Engineer",
      cardDescription:
        "Mahasiswa semester 7 dengan pengalaman dalam security assessment, full stack development, dan UI/UX design. Aktif dalam organisasi dan pelatihan industri.",
    },
    stats: {
      projects: "Project yang telah dikerjakan",
      stacks: "Tech Stack yang dikuasai",
      experience: "Pengalaman Organisasi & Magang",
    },
    about: {
      eyebrow: "Tentang Saya",
      title:
        "Mahasiswa semester 7 Teknik Informatika dengan pengalaman di web development, keamanan jaringan, dan UI/UX Designer.",
      description:
        "Mahasiswa Teknik Informatika di Perbanas Institute Jakarta dengan ketertarikan kuat pada pengembangan web, manajemen basis data, dan keamanan jaringan.",
      points: [
        "Membangun sistem donasi blockchain, pemesanan makanan, top-up game, POS inventaris, dan dukungan SIEM/NMS.",
        "Pengalaman proyek tim dan mandiri dalam pengembangan teknis.",
        "Aktif dalam organisasi dan pelatihan cybersecurity.",
      ],
    },
    experience: {
      period1: "2023-2024",
      title1: "Web Development Foundation",
      text1:
        "Membangun proyek-proyek web seperti DeBOOKS, Remesan, dan WarungKu untuk memperkuat pemahaman full stack development.",
      period2: "2025",
      title2: "RPA & Cyber Security",
      text2:
        "Pengalaman magang di PT Langit Inovasi Aksi Teknologi dengan fokus pada Robotic Process Automation dan SIEM/Network Monitoring.",
      period3: "2026",
      title3: "UI/UX & Professional Development",
      text3:
        "UI/UX Designer di PT Aplikasi BenerIT Nusantara, serta terus mengembangkan skill dalam keamanan jaringan dan development.",
    },
    projects: {
      title: "Proyek",
    },
    skills: {
      title: "Keahlian",
      programming: "Programming Languages",
      fullstack: "Full Stack & Frameworks",
      database: "Database & DevOps",
      security: "Security & Tools",
    },
    services: {
      title1: "Full Stack Development",
      text1:
        "Membangun aplikasi web modern dengan frontend React yang responsive dan backend Node.js yang scalable.",
      title2: "Cyber Security & Assessment",
      text2:
        "Melakukan penilaian keamanan jaringan, implementasi SIEM, dan security monitoring untuk infrastruktur IT.",
      title3: "UI/UX Design",
      text3:
        "Menciptakan interface yang user-friendly, accessible, dan profesional untuk pengalaman pengguna yang optimal.",
    },
    contact: {
      title: "Hubungi Saya",
      description: "Mari kita diskusikan proyek atau peluang kolaborasi Anda.",
      name: "Nama Anda",
      email: "Email Anda",
      message: "Pesan Anda",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      success: "Pesan berhasil dikirim!",
      successMsg: "Terima kasih telah menghubungi. Saya akan membalas segera.",
    },
    apiStatus: "Status API:",
  },
};

const highlights = {
  en: [
    "Cyber Security & Network Monitoring",
    "Full Stack Development & UI/UX Design",
    "Technical Projects & Security Assessment",
  ],
  id: [
    "Cyber Security & Network Monitoring",
    "Full Stack Development & UI/UX Design",
    "Proyek Teknis & Security Assessment",
  ],
};

const stats = {
  en: [
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Tech Stacks Mastered" },
    { value: "3", label: "Organization & Internship Experience" },
  ],
  id: [
    { value: "10+", label: "Project yang telah dikerjakan" },
    { value: "5+", label: "Tech Stack yang dikuasai" },
    { value: "3", label: "Pengalaman Organisasi & Magang" },
  ],
};

const experiences = {
  en: [
    {
      year: "2023-2024",
      title: "Web Development Foundation",
      text: "Building web projects like DeBOOKS, Remesan, and WarungKu to strengthen full stack development understanding.",
    },
    {
      year: "2025",
      title: "RPA & Cyber Security",
      text: "Internship experience at PT Langit Inovasi Aksi Teknologi focusing on Robotic Process Automation and SIEM/Network Monitoring.",
    },
    {
      year: "2026",
      title: "UI/UX & Professional Development",
      text: "UI/UX Designer at PT Aplikasi BenerIT Nusantara, and continuing to develop skills in network security and development.",
    },
  ],
  id: [
    {
      year: "2023-2024",
      title: "Web Development Foundation",
      text: "Membangun proyek-proyek web seperti DeBOOKS, Remesan, dan WarungKu untuk memperkuat pemahaman full stack development.",
    },
    {
      year: "2025",
      title: "RPA & Cyber Security",
      text: "Pengalaman magang di PT Langit Inovasi Aksi Teknologi dengan fokus pada Robotic Process Automation dan SIEM/Network Monitoring.",
    },
    {
      year: "2026",
      title: "UI/UX & Professional Development",
      text: "UI/UX Designer di PT Aplikasi BenerIT Nusantara, serta terus mengembangkan skill dalam keamanan jaringan dan development.",
    },
  ],
};

const projects = {
  en: [
    {
      title: "DeBOOKS",
      description:
        "Blockchain-based Book Donation and Transaction Website with full security and transparency features.",
      tags: ["Blockchain", "Web", "Full Stack"],
      repoUrl: "https://github.com/Paulusfiral/DeBOOKS_Paulus",
    },
    {
      title: "Remesan",
      description:
        "Food Ordering and Delivery Website with order management system and real-time tracking.",
      tags: ["JavaScript", "Full Stack", "Commerce"],
      repoUrl: "https://github.com/Paulusfiral/ProjectUasRemesan",
    },
    {
      title: "WarungKu",
      description:
        "Inventory Management and Point of Sale (POS) System for efficient store operations.",
      tags: ["App", "POS", "Inventory"],
      repoUrl: "https://github.com/Paulusfiral/warungku-app",
    },
    {
      title: "Younglings Store",
      description:
        "Online Game Top-Up Website with user-friendly interface and integrated payment system.",
      tags: ["TypeScript", "Store", "UI"],
      repoUrl: "https://github.com/Paulusfiral/younglings-store",
    },
    {
      title: "NakamotoX",
      description:
        "Cryptography Simulation System to understand encryption algorithms and data security.",
      tags: ["Python", "Cryptography", "Security"],
      repoUrl: "https://github.com/Paulusfiral/kripto_simulator",
    },
    {
      title: "Security Assessment",
      description:
        "Network Security Assessment (VAPT) and SIEM implementation with Wazuh, Zabbix, and Nagios Core.",
      tags: ["Cyber Security", "VAPT", "SIEM"],
      repoUrl: "https://github.com/Paulusfiral",
    },
  ],
  id: [
    {
      title: "DeBOOKS",
      description:
        "Website Donasi dan Transaksi Buku Berbasis Blockchain dengan fitur keamanan dan transparansi penuh.",
      tags: ["Blockchain", "Web", "Full Stack"],
      repoUrl: "https://github.com/Paulusfiral/DeBOOKS_Paulus",
    },
    {
      title: "Remesan",
      description:
        "Website Pemesanan dan Pengantaran Makanan dengan sistem manajemen order dan tracking real-time.",
      tags: ["JavaScript", "Full Stack", "Commerce"],
      repoUrl: "https://github.com/Paulusfiral/ProjectUasRemesan",
    },
    {
      title: "WarungKu",
      description:
        "Sistem Manajemen Inventaris dan Point of Sale (POS) untuk operasional toko yang efisien.",
      tags: ["App", "POS", "Inventory"],
      repoUrl: "https://github.com/Paulusfiral/warungku-app",
    },
    {
      title: "Younglings Store",
      description:
        "Website Top Up Game Online dengan interface yang user-friendly dan sistem pembayaran terintegrasi.",
      tags: ["TypeScript", "Store", "UI"],
      repoUrl: "https://github.com/Paulusfiral/younglings-store",
    },
    {
      title: "NakamotoX",
      description:
        "Sistem Simulasi Kriptografi untuk memahami algoritma enkripsi dan keamanan data.",
      tags: ["Python", "Cryptography", "Security"],
      repoUrl: "https://github.com/Paulusfiral/kripto_simulator",
    },
    {
      title: "Security Assessment",
      description:
        "Penilaian Keamanan Jaringan (VAPT) dan implementasi SIEM dengan Wazuh, Zabbix, dan Nagios Core.",
      tags: ["Cyber Security", "VAPT", "SIEM"],
      repoUrl: "https://github.com/Paulusfiral",
    },
  ],
};

const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "HTML/CSS",
      "Solidity",
    ],
  },
  {
    title: "Full Stack & Frameworks",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Flask",
      "Laravel",
      "REST API",
    ],
  },
  {
    title: "Database & DevOps",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Git",
      "Docker",
      "Vercel",
    ],
  },
  {
    title: "Security & Tools",
    items: [
      "VAPT",
      "Wazuh SIEM",
      "Wireshark",
      "Burp Suite",
      "Zabbix",
      "Nagios Core",
    ],
  },
];

const services = {
  en: [
    {
      title: "Full Stack Development",
      text: "Building modern web applications with responsive React frontend and scalable Node.js backend.",
    },
    {
      title: "Cyber Security & Assessment",
      text: "Conducting network security assessment, SIEM implementation, and security monitoring for IT infrastructure.",
    },
    {
      title: "UI/UX Design",
      text: "Creating user-friendly, accessible, and professional interfaces for optimal user experience.",
    },
  ],
  id: [
    {
      title: "Full Stack Development",
      text: "Membangun aplikasi web modern dengan frontend React yang responsive dan backend Node.js yang scalable.",
    },
    {
      title: "Cyber Security & Assessment",
      text: "Melakukan penilaian keamanan jaringan, implementasi SIEM, dan security monitoring untuk infrastruktur IT.",
    },
    {
      title: "UI/UX Design",
      text: "Menciptakan interface yang user-friendly, accessible, dan profesional untuk pengalaman pengguna yang optimal.",
    },
  ],
};

const experienceDetails = {
  en: [
    {
      period: "2023-2024",
      title: "Development & Security Learning",
      text: "Completed technical projects like DeBOOKS blockchain, Network Security Assessment (VAPT), and SIEM/NMS implementation.",
    },
    {
      period: "2025",
      title: "RPA Cyclone",
      text: "Internship at PT Langit Inovasi Aksi Teknologi focusing on Robotic Process Automation and Wazuh SIEM implementation for security monitoring.",
    },
    {
      period: "2026",
      title: "UI/UX Designer",
      text: "UI/UX Designer at PT Aplikasi BenerIT Nusantara, actively participating in cyber security training and advanced programming courses.",
    },
  ],
  id: [
    {
      period: "2023-2024",
      title: "Development & Security Learning",
      text: "Menyelesaikan proyek-proyek teknis seperti DeBOOKS blockchain, Network Security Assessment (VAPT), dan SIEM/NMS implementation.",
    },
    {
      period: "2025",
      title: "RPA Cyclone",
      text: "Magang di PT Langit Inovasi Aksi Teknologi fokus pada Robotic Process Automation dan implementasi Wazuh SIEM untuk security monitoring.",
    },
    {
      period: "2026",
      title: "UI/UX Designer",
      text: "UI/UX Designer di PT Aplikasi BenerIT Nusantara, serta aktif mengikuti pelatihan cyber security dan advanced programming.",
    },
  ],
};

const certificates = {
  en: [
    "Technical expertise certificate",
    "Web development training certificate",
    "Project and digital competency certificate",
  ],
  id: [
    "Sertifikat keahlian teknis",
    "Sertifikat pelatihan pengembangan web",
    "Sertifikat proyek dan kompetensi digital",
  ],
};

function App() {
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState("Memuat...");
  const [language, setLanguage] = useState("id");
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // "cv" or "certificates"
  const orbRef = useRef(null);
  const heroImageRef = useRef(null);

  const t = translations[language];

  useEffect(() => {
    setReady(true);

    const revealItems = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealItems.forEach((item) => observer.observe(item));

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (orbRef.current) {
        orbRef.current.style.transform = `translate3d(${scrollY * 0.02}px, ${scrollY * 0.02}px, 0)`;
      }
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${scrollY * 0.02}px) rotate(${scrollY * 0.01}deg)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let current = "home";

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Backend belum aktif"));
  }, []);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const openModal = (modalKey) => {
    setActiveModal(modalKey);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className={`app-shell ${ready ? "is-ready" : ""}`}>
      <header className="site-header">
        <div className="container nav-bar">
          <a href="#home" className="brand">
            PAULUS
          </a>
          <nav className="nav-links">
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={() => setActiveSection("home")}
            >
              {t.nav.home}
            </a>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={() => setActiveSection("about")}
            >
              {t.nav.about}
            </a>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => setActiveSection("projects")}
            >
              {t.nav.projects}
            </a>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
              onClick={() => setActiveSection("skills")}
            >
              {t.nav.skills}
            </a>
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
            <button
              className="lang-toggle"
              onClick={() => setLanguage(language === "en" ? "id" : "en")}
              title={
                language === "en" ? "Switch to Indonesian" : "Switch to English"
              }
            >
              {language === "en" ? "ID 🌍" : "EN 🌍"}
            </button>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero reveal-on-scroll">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1 className="hero-title">
                <span>{t.hero.title}</span>
              </h1>
              <p className="hero-text">{t.hero.description}</p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  {t.hero.viewProjects}
                </a>
                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  {t.hero.viewCV}
                </a>
              </div>
              <ul className="highlight-list">
                {highlights[language].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card hero-card">
              <img
                ref={heroImageRef}
                src="/profile.jpg"
                alt="Paulus Firal"
                className="hero-image"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/profile.svg";
                }}
              />
              <span className="hero-badge">{t.hero.badge}</span>
              <h3>{t.hero.cardTitle}</h3>
              <p>{t.hero.cardDescription}</p>
              <div className="divider" />
              <ul className="hero-side-list">
                <li>Full Stack: React, Next.js, Node.js, Express, Flask</li>
                <li>
                  Cyber Security: VAPT, SIEM, Network Monitoring, Wireshark,
                  Burp Suite
                </li>
                <li>Design: UI/UX, Responsive, Professional Interfaces</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section reveal-on-scroll">
          <div className="container stats-grid">
            {stats[language].map((item) => (
              <div className="card stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section reveal-on-scroll">
          <div className="container about-grid">
            <div className="card about-card">
              <p className="eyebrow">{t.about.eyebrow}</p>
              <h2>{t.about.title}</h2>
              <p>{t.about.description}</p>
              <ul className="about-highlights">
                {t.about.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="section reveal-on-scroll">
          <div className="container">
            <p className="eyebrow">
              {language === "en" ? "Experience" : "Pengalaman"}
            </p>
            <h2>
              {language === "en"
                ? "Roles and projects that show my growth."
                : "Peran dan proyek yang menunjukkan perkembangan saya."}
            </h2>
            <div className="experience-grid">
              {experienceDetails[language].map((item) => (
                <article className="card experience-card" key={item.title}>
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="service-grid">
              {services[language].map((service) => (
                <div className="card service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="certificate-grid">
              <div
                className="card certificate-card"
                role="button"
                tabIndex={0}
                onClick={() => openModal("cv")}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    openModal("cv");
                  }
                }}
              >
                <h3>
                  {language === "en" ? "Curriculum Vitae" : "Curriculum Vitae"}
                </h3>
                <p>
                  {language === "en"
                    ? "Download my CV to see a summary of my experience, learning focus, and skills I've developed."
                    : "Unduh CV saya untuk melihat ringkasan pengalaman, fokus belajar, dan kemampuan yang saya kembangkan."}
                </p>
                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-repo"
                  onClick={(e) => e.stopPropagation()}
                >
                  {language === "en" ? "View CV" : "Lihat CV"}
                </a>
              </div>
              <div
                className="card certificate-card"
                role="button"
                tabIndex={0}
                onClick={() => openModal("certificates")}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    openModal("certificates");
                  }
                }}
              >
                <h3>{language === "en" ? "Certificates" : "Sertifikat"}</h3>
                <ul className="certificate-list">
                  {certificates[language].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href="https://drive.google.com/drive/folders/18uoZ5SoLZ9icB7tEromP7mooWIEfem2o?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-repo"
                  onClick={(e) => e.stopPropagation()}
                >
                  {language === "en" ? "View Certificates" : "Lihat Sertifikat"}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section reveal-on-scroll">
          <div className="container">
            <div className="card-grid">
              {projects[language].map((project) => (
                <article
                  className="card project-card reveal-on-scroll"
                  key={project.title}
                  onClick={() => handleOpenProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleOpenProject(project);
                    }
                  }}
                >
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-repo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {language === "en" ? "View Repo" : "Lihat Repo"}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section reveal-on-scroll">
          <div className="container">
            <p className="eyebrow">
              {language === "en" ? "Skills" : "Keahlian"}
            </p>
            <h2>
              {language === "en"
                ? "Technologies I currently use and study."
                : "Teknologi yang saat ini saya gunakan dan pelajari."}
            </h2>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <div className="card skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section alt reveal-on-scroll">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">
                {language === "en" ? "Contact" : "Kontak"}
              </p>
              <h2>
                {language === "en"
                  ? "Let's connect for collaboration and your next project."
                  : "Terhubung dengan saya untuk kolaborasi dan proyek berikutnya."}
              </h2>
              <p>
                {language === "en"
                  ? "I'm open to discussions, ideas, or needs for a more modern and functional website."
                  : "Saya terbuka untuk diskusi, ide, atau kebutuhan website yang lebih modern dan fungsional."}
              </p>
              <div className="contact-links">
                <a
                  href="https://github.com/Paulusfiral"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/firal-ohoiwutun-377874370"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <form className="card contact-form" onSubmit={handleSubmit}>
              <input
                placeholder={language === "en" ? "Your Name" : "Nama"}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder={language === "en" ? "Your Email" : "Email"}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <textarea
                placeholder={language === "en" ? "Your Message" : "Pesan"}
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
              <button type="submit" className="btn btn-primary">
                {language === "en" ? "Send Message" : "Kirim Pesan"}
              </button>
              {submitted && (
                <p className="success-msg">
                  {language === "en"
                    ? "Message sent successfully!"
                    : "Pesan berhasil dikirim."}
                </p>
              )}
            </form>
          </div>
        </section>

        {selectedProject && (
          <div className="popup-overlay" onClick={closeProject}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeProject}>
                ×
              </button>
              <div className="project-modal-content">
                <p className="eyebrow">Project Detail</p>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
                <div className="tag-list modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  className="btn btn-repo modal-repo-btn"
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {language === "en" ? "View Repo" : "Lihat Repo"}
                </a>
              </div>
            </div>
          </div>
        )}

        {activeModal && (
          <div className="popup-overlay" onClick={closeModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <div className="project-modal-content">
                <p className="eyebrow">
                  {activeModal === "cv"
                    ? language === "en"
                      ? "Curriculum Vitae"
                      : "Curriculum Vitae"
                    : language === "en"
                      ? "Certificates"
                      : "Sertifikat"}
                </p>
                <h2>
                  {activeModal === "cv"
                    ? language === "en"
                      ? "View My CV"
                      : "Lihat CV Saya"
                    : language === "en"
                      ? "Certificate List"
                      : "Daftar Sertifikat"}
                </h2>
                <p>
                  {activeModal === "cv"
                    ? language === "en"
                      ? "Download my CV to see a summary of my experience, learning focus, and skills."
                      : "Unduh CV saya untuk melihat ringkasan pengalaman, fokus belajar, dan kemampuan saya."
                    : language === "en"
                      ? "Browse my professional certificates and training achievements."
                      : "Lihat sertifikat kompetensi dan pelatihan saya."}
                </p>
                {activeModal === "certificates" && (
                  <ul className="certificate-list modal-certificate-list">
                    {certificates[language].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <a
                  className="btn btn-repo modal-repo-btn"
                  href={
                    activeModal === "cv"
                      ? "/CV.pdf"
                      : "https://drive.google.com/drive/folders/18uoZ5SoLZ9icB7tEromP7mooWIEfem2o?usp=sharing"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {activeModal === "cv"
                    ? language === "en"
                      ? "Open CV"
                      : "Buka CV"
                    : language === "en"
                      ? "Open Certificates"
                      : "Buka Sertifikat"}
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <p>© 2026 Paulus Firal Ohoiwutun</p>
          <a href="#home">
            {language === "en" ? "Back to Home" : "Kembali ke beranda"}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
