import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { InteractiveNeuralVortex } from "@/components/ui/interactive-neural-vortex-background";
import {
  ArrowUp,
  BriefcaseBusiness,
  House,
  LayoutGrid,
  Mail,
  UserRound,
  Wrench,
} from "lucide-react";

const CyberOrb = lazy(() => import("@/components/ui/cyber-orb"));

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Experience",
      projectList: "Projects",
      skills: "Skills",
      contact: "Contact",
      cv: "CV",
    },
    hero: {
      eyebrow: "Cyber Security | Software Engineer | UI/UX Designer",
      title: "PAULUS FIRAL OHOIWUTUN",
      description:
        "Informatics Engineering student with expertise in cyber security, full stack development, and UI/UX design. Experienced in working on technical projects both in teams and independently, with a focus on security, performance, and user experience.",
      viewProjects: "View Projects",
      viewCV: "View CV",
      badge: "B.Sc. Informatics Engineering",
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
        "A seventh-semester Informatics Engineering student at Perbanas Institute Jakarta with hands-on experience building and securing systems, including network security assessments (VAPT), Wazuh SIEM implementation, and Windows Server hardening. Completed several full-stack web development projects (DeBOOKS, NakamotoX, Younglings Store, Remesan, and Warungku), and gained internship experience as an RPA Developer, Software Engineer, ERP Developer, and UI/UX Designer at various companies. Active in HIMATIKA and continuously developing cybersecurity skills through PicoCTF, TryHackMe, Hacktrace Ranges, JadiHacker, ITBox, and Coding Studio.",
      readMore: "View details",
      readLess: "Show less",
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
      eyebrow: "Contact",
      heading: "Let's connect for collaboration and your next project.",
      description:
        "I'm open to discussions, ideas, or needs for a more modern and functional website.",
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
      projects: "Pengalaman",
      projectList: "Proyek",
      skills: "Keahlian",
      contact: "Kontak",
      cv: "CV",
    },
    hero: {
      eyebrow: "Cyber Security | Software Engineer | UI/UX Designer",
      title: "PAULUS FIRAL OHOIWUTUN",
      description:
        "A seventh-semester Informatics Engineering student at Perbanas Institute Jakarta with hands-on experience building and securing systems, including network security assessments (VAPT), Wazuh SIEM implementation, and Windows Server hardening. Completed several full-stack web development projects (DeBOOKS, NakamotoX, Younglings Store, Remesan, and Warungku), and gained internship experience as an RPA Developer, Software Engineer, ERP Developer, and UI/UX Designer at various companies. Active in HIMATIKA and continuously developing cybersecurity skills through PicoCTF, TryHackMe, Hacktrace Ranges, JadiHacker, ITBox, and Coding Studio.",
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
        "Mahasiswa semester 7 Teknik Informatika dengan pengalaman di Cyber Security, Web Development, dan UI/UX Designer.",
      description:
        "Mahasiswa semester 7 Teknik Informatika di Perbanas Institute Jakarta dengan pengalaman langsung membangun dan mengamankan sistem, mulai dari penilaian keamanan jaringan (VAPT), implementasi Wazuh SIEM, hingga hardening Windows Server. Telah menyelesaikan beberapa proyek pengembangan web full-stack (DeBOOKS, NakamotoX, Younglings Store, Remesan, Warungku) serta magang sebagai RPA Developer, Software Engineer, ERP Developer, dan UI/UX Designer di berbagai perusahaan. Aktif di HIMATIKA dan terus mengasah kemampuan keamanan siber melalui PicoCTF, TryHackMe, Hacktrace Ranges, JadiHacker, ITBox, dan Coding Studio.",
      readMore: "Lihat detail",
      readLess: "Sembunyikan",
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
      eyebrow: "Kontak",
      heading: "Terhubung dengan saya untuk kolaborasi dan proyek berikutnya.",
      description:
        "Saya terbuka untuk diskusi, ide, atau kebutuhan website yang lebih modern dan fungsional.",
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

const heroRoles = {
  en: ["Cyber Security", "Software Engineer", "UI/UX Designer"],
  id: ["Cyber Security", "Software Engineer", "UI/UX Designer"],
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
        "Network Security Assessment (VAPT), server hardening, and SIEM implementation with Wazuh, Zabbix, and Nagios Core.",
      tags: ["Cyber Security", "VAPT", "Server Hardening", "SIEM"],
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
        "Penilaian Keamanan Jaringan (VAPT), hardening server, dan implementasi SIEM dengan Wazuh, Zabbix, dan Nagios Core.",
      tags: ["Cyber Security", "VAPT", "Hardening Server", "SIEM"],
      repoUrl: "https://github.com/Paulusfiral",
    },
  ],
};

const skillGroups = [
  {
    title: "Cyber Security",
    items: [
      "VAPT",
      "Server Hardening",
      "SIEM",
      "DFIR",
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "OWASP ZAP",
      "Metasploit",
      "Nessus",
      "Nikto",
      "sqlmap",
      "Gobuster",
      "LinPEAS",
      "WinPEAS",
      "BloodHound",
      "Mimikatz",
      "Hashcat",
      "John the Ripper",
      "Hydra",
      "Aircrack-ng",
      "Wazuh SIEM",
      "Splunk",
      "ELK Stack",
      "Zabbix",
      "Nagios Core",
      "Kali Linux",
    ],
  },
  {
    title: "Bahasa Pemrograman",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "Solidity",
    ],
  },
  {
    title: "Full Stack Development",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "Flask",
      "REST API",
      "Laravel",
      "Flutter",
      "Dart",
    ],
  },
  {
    title: "ERP and Enterprise Systems",
    items: [
      "ERPNext",
      "Frappe Framework",
      "Inventory",
      "Accounting",
      "Sales",
      "HR",
    ],
  },
  {
    title: "Basis Data",
    items: ["PostgreSQL", "MariaDB", "MySQL", "MongoDB", "SQLite", "Firebase"],
  },
  {
    title: "DevOps & Deployment",
    items: ["Git", "GitHub", "Vercel", "Docker", "Clodios"],
  },
  {
    title: "Tools and Design",
    items: ["VS Code", "XAMPP", "DBeaver", "Postman"],
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
      period: "Aug 2026",
      title: "ERP Developer · PT Gema Cendekia Gemilang",
      text: "Developing and supporting enterprise resource planning workflows and business systems.",
    },
    {
      period: "Jul 2026",
      title: "Software Engineer · LAKESPRA",
      text: "Building software solutions with a focus on reliable implementation and practical user needs.",
    },
    {
      period: "Mar - Jun 2026",
      title: "UI/UX Designer · PT Aplikasi BenerIT Nusantara",
      text: "Designing clear, responsive interfaces and translating user needs into practical digital experiences.",
    },
    {
      period: "Sep - Dec 2025",
      title: "RPA Cyclone · PT Langit Inovasi Aksi Teknologi",
      text: "Working on Robotic Process Automation.",
    },
  ],
  id: [
    {
      period: "Agustus 2026",
      title: "ERP Developer · PT Gema Cendekia Gemilang",
      text: "Mengembangkan dan mendukung alur kerja enterprise resource planning serta sistem bisnis.",
    },
    {
      period: "Juli 2026",
      title: "Software Engineer · LAKESPRA",
      text: "Membangun solusi perangkat lunak dengan fokus pada implementasi yang andal dan kebutuhan pengguna.",
    },
    {
      period: "Maret - Juni 2026",
      title: "UI/UX Designer · PT Aplikasi BenerIT Nusantara",
      text: "Merancang interface yang jelas dan responsif serta menerjemahkan kebutuhan pengguna menjadi pengalaman digital yang praktis.",
    },
    {
      period: "September - Desember 2025",
      title: "RPA Cyclone · PT Langit Inovasi Aksi Teknologi",
      text: "Mengerjakan Robotic Process Automation.",
    },
  ],
};

const certificates = {
  en: [
    "Technical expertise certificate",
    "Web development training certificate",
    "Cyber security development training certificate",
    "Project and digital competency certificate",
  ],
  id: [
    "Sertifikat keahlian teknis",
    "Sertifikat pelatihan pengembangan web",
    "Sertifikat pelatihan pengembangan cyber security",
    "Sertifikat proyek dan kompetensi digital",
  ],
};

function App() {
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState("Memuat...");
  const [language, setLanguage] = useState("id");
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // "cv" or "certificates"
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [typedAboutDescription, setTypedAboutDescription] = useState("");
  const [introPhase, setIntroPhase] = useState("active");
  const [introProgress, setIntroProgress] = useState(0);
  const [heroRoleIndex, setHeroRoleIndex] = useState(0);
  const orbRef = useRef(null);
  const heroImageRef = useRef(null);
  const scrollProgressRef = useRef(null);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 90;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const t = translations[language];

  useEffect(() => {
    if (!aboutExpanded) {
      setTypedAboutDescription("");
      return undefined;
    }

    const description = t.about.description;
    let characterIndex = 0;
    setTypedAboutDescription("");

    const typeTimer = window.setInterval(() => {
      characterIndex += 2;
      setTypedAboutDescription(description.slice(0, characterIndex));

      if (characterIndex >= description.length) {
        window.clearInterval(typeTimer);
      }
    }, 18);

    return () => window.clearInterval(typeTimer);
  }, [aboutExpanded, language, t.about.description]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return undefined;

    const roleTimer = window.setInterval(() => {
      setHeroRoleIndex(
        (currentIndex) => (currentIndex + 1) % heroRoles[language].length,
      );
    }, 2600);

    return () => window.clearInterval(roleTimer);
  }, [language]);

  useEffect(() => {
    const pointerHoverTargets = document.querySelectorAll(
      ".card, .hero-card, .project-card, .service-card, .experience-card, .certificate-card, .skill-card, .contact-form",
    );

    const handlePointerMove = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      const rotateY = (x / 100 - 0.5) * 10;
      const rotateX = (0.5 - y / 100) * 10;

      event.currentTarget.style.setProperty("--pointer-x", `${x}%`);
      event.currentTarget.style.setProperty("--pointer-y", `${y}%`);
      event.currentTarget.style.setProperty(
        "--tilt-x",
        `${rotateX.toFixed(2)}deg`,
      );
      event.currentTarget.style.setProperty(
        "--tilt-y",
        `${rotateY.toFixed(2)}deg`,
      );
    };

    const handlePointerLeave = (event) => {
      event.currentTarget.style.removeProperty("--pointer-x");
      event.currentTarget.style.removeProperty("--pointer-y");
      event.currentTarget.style.setProperty("--tilt-x", "0deg");
      event.currentTarget.style.setProperty("--tilt-y", "0deg");
    };

    pointerHoverTargets.forEach((element) => {
      element.style.setProperty("--pointer-x", "50%");
      element.style.setProperty("--pointer-y", "50%");
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      element.addEventListener("pointermove", handlePointerMove);
      element.addEventListener("pointerleave", handlePointerLeave);
    });

    return () => {
      pointerHoverTargets.forEach((element) => {
        element.removeEventListener("pointermove", handlePointerMove);
        element.removeEventListener("pointerleave", handlePointerLeave);
      });
    };
  }, []);

  useEffect(() => {
    setReady(true);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const introExitDelay = prefersReducedMotion ? 500 : 3200;
    const introProgressTimer = window.setInterval(
      () => {
        setIntroProgress((currentProgress) =>
          Math.min(100, currentProgress + 2),
        );
      },
      Math.max(10, introExitDelay / 50),
    );
    const introExitTimer = window.setTimeout(() => {
      window.clearInterval(introProgressTimer);
      setIntroProgress(100);
      setIntroPhase("leaving");
    }, introExitDelay);
    const introFinishTimer = window.setTimeout(
      () => setIntroPhase("done"),
      introExitDelay + (prefersReducedMotion ? 120 : 720),
    );

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
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        scrollableHeight > 0 ? scrollY / scrollableHeight : 0;

      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.transform = `scaleX(${scrollProgress})`;
      }
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
      window.clearInterval(introProgressTimer);
      window.clearTimeout(introExitTimer);
      window.clearTimeout(introFinishTimer);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = introPhase === "done" ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [introPhase]);

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
    const sectionIds = [
      "home",
      "about",
      "experience",
      "projects",
      "skills",
      "contact",
    ];
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
    setSubmitted(false);
    setSubmitError("");
    setSending(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/firalohoiwutunnn@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Pesan Baru Portfolio dari ${formData.name}`,
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      const data = await res.json();
      if (res.ok && (data.success === "true" || data.success === true)) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else if (
        data.message &&
        data.message.toLowerCase().includes("activation")
      ) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setSubmitError(
          language === "en"
            ? "Activation email sent to firalohoiwutunnn@gmail.com. Please confirm it once to start receiving messages!"
            : "Email aktivasi telah dikirim ke firalohoiwutunnn@gmail.com. Silakan klik 'Activate Form' di email sekali saja!",
        );
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch {
      const subject = encodeURIComponent(
        `Portfolio contact from ${formData.name}`,
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      );
      window.location.href = `mailto:firalohoiwutunnn@gmail.com?subject=${subject}&body=${body}`;
      setSubmitError(
        language === "en"
          ? "Network error. Opening your email app to send directly..."
          : "Gagal mengirim otomatis. Membuka aplikasi email Anda untuk mengirim pesan...",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={`app-shell ${ready ? "is-ready" : ""}`}>
      {introPhase !== "done" && (
        <div
          className={`intro-loader intro-loader--${introPhase}`}
          role="status"
          aria-label="Memuat portfolio Paulus Firal"
        >
          <div className="intro-starfield" aria-hidden="true" />
          <div className="intro-grid" aria-hidden="true" />
          <div className="intro-orbit intro-orbit-one" aria-hidden="true" />
          <div className="intro-orbit intro-orbit-two" aria-hidden="true" />
          <div className="intro-black-hole" aria-hidden="true">
            <div className="intro-accretion-ring" />
            <div className="intro-event-horizon" />
          </div>
          <div className="intro-meteor intro-meteor-one" aria-hidden="true" />
          <div className="intro-meteor intro-meteor-two" aria-hidden="true" />
          <div className="intro-loader-copy">
            <p className="intro-loader-kicker">PAULUS FIRAL OHOIWUTUN</p>
            <h2>
              WELCOME <span>TO MY PORTFOLIO</span>
            </h2>
            <div className="intro-loader-progress" aria-hidden="true">
              <span />
            </div>
            <p className="intro-loader-status" aria-live="polite">
              LOADING{" "}
              <span className="intro-loader-percent">{introProgress}%</span>·
              Memuat pengalaman digital...
            </p>
          </div>
        </div>
      )}
      <div
        className="scroll-progress"
        ref={scrollProgressRef}
        aria-hidden="true"
      />
      <aside className="scroll-rail" aria-label="Section navigation">
        {[
          ["home", t.nav.home],
          ["about", t.nav.about],
          ["experience", t.nav.projects],
          ["projects", t.nav.projectList],
          ["skills", t.nav.skills],
          ["contact", t.nav.contact],
        ].map(([sectionId, label]) => (
          <a
            href={`#${sectionId}`}
            className={activeSection === sectionId ? "is-active" : ""}
            key={sectionId}
            aria-label={label}
            title={label}
            onClick={(event) => {
              event.preventDefault();
              handleNavClick(sectionId);
            }}
          >
            <span />
          </a>
        ))}
      </aside>
      <header className="site-header">
        <div className="container nav-bar">
          <a href="#home" className="brand">
            <img
              className="brand-mark"
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt=""
              aria-hidden="true"
            />
            <span>PAULUS FIRAL</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            className={`nav-links ${mobileMenuOpen ? "is-open" : ""}`}
            onClick={(event) => {
              if (event.target.closest("a")) {
                setMobileMenuOpen(false);
              }
            }}
          >
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("home");
              }}
            >
              {t.nav.home}
            </a>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("about");
              }}
            >
              {t.nav.about}
            </a>
            <a
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("experience");
              }}
            >
              {t.nav.projects}
            </a>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("projects");
              }}
            >
              {t.nav.projectList}
            </a>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("skills");
              }}
            >
              {t.nav.skills}
            </a>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("contact");
              }}
            >
              {t.nav.contact}
            </a>
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? "☀️" : "🌙"}
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

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("home");
          }}
        >
          <House aria-hidden="true" />
          <span>{t.nav.home}</span>
        </a>
        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("about");
          }}
        >
          <UserRound aria-hidden="true" />
          <span>{t.nav.about}</span>
        </a>
        <a
          href="#experience"
          className={activeSection === "experience" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("experience");
          }}
        >
          <BriefcaseBusiness aria-hidden="true" />
          <span>{language === "en" ? "Experience" : "Pengalaman"}</span>
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("projects");
          }}
        >
          <LayoutGrid aria-hidden="true" />
          <span>{language === "en" ? "Projects" : "Proyek"}</span>
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("skills");
          }}
        >
          <Wrench aria-hidden="true" />
          <span>{t.nav.skills}</span>
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("contact");
          }}
        >
          <Mail aria-hidden="true" />
          <span>{t.nav.contact}</span>
        </a>
      </nav>

      <main id="home">
        <section className="hero reveal-on-scroll">
          <InteractiveNeuralVortex />
          <Suspense fallback={null}>
            <CyberOrb />
          </Suspense>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1 className="hero-title">
                <span>{t.hero.title}</span>
              </h1>
              <p className="hero-role" aria-live="polite">
                <span className="hero-role-index">0{heroRoleIndex + 1}</span>
                <span
                  className="hero-role-name"
                  key={`${language}-${heroRoleIndex}`}
                >
                  {heroRoles[language][heroRoleIndex]}
                </span>
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  {t.hero.viewProjects}
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}Curriculum_Vitae_Paulus_Firal_Ohoiwutun.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  {t.hero.viewCV}
                </a>
              </div>
            </div>
            <div className="card hero-card">
              <div className="hero-depth-frame">
                <span className="hero-depth-line hero-depth-line-one" />
                <span className="hero-depth-line hero-depth-line-two" />
                <img
                  ref={heroImageRef}
                  src="/paulfir/profile.jpg"
                  alt="Paulus Firal"
                  className="hero-image"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/paulfir/profile.svg";
                  }}
                />
              </div>
              <span className="hero-badge">{t.hero.badge}</span>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section reveal-on-scroll">
          <div className="container about-grid">
            <div className="card about-card">
              <p className="eyebrow section-label">{t.about.eyebrow}</p>
              <h2>{t.about.title}</h2>
              <p
                className={`about-description ${aboutExpanded ? "is-expanded" : ""} ${aboutExpanded && typedAboutDescription.length < t.about.description.length ? "is-typing" : ""}`}
                aria-live="polite"
              >
                {typedAboutDescription}
                <span className="typing-caret" aria-hidden="true" />
              </p>
              <button
                className="about-toggle"
                type="button"
                aria-expanded={aboutExpanded}
                onClick={() => setAboutExpanded(!aboutExpanded)}
              >
                <span>
                  {aboutExpanded ? t.about.readLess : t.about.readMore}
                </span>
                <span aria-hidden="true">{aboutExpanded ? "−" : "+"}</span>
              </button>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section experience-section reveal-on-scroll"
        >
          <div className="container">
            <p className="eyebrow section-label">
              {language === "en" ? "Experience" : "Pengalaman"}
            </p>
            <div className="experience-grid timeline">
              {experienceDetails[language].map((item, index) => (
                <article
                  className="experience-card timeline-item"
                  key={item.title}
                >
                  <div className="timeline-marker" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-meta">
                      <span>{item.period}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
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
                  href={`${import.meta.env.BASE_URL}Curriculum_Vitae_Paulus_Firal_Ohoiwutun.pdf`}
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

        <section
          id="projects"
          className="section projects-section reveal-on-scroll"
        >
          <div className="container">
            <p className="eyebrow section-label">
              {language === "en" ? "Projects" : "Proyek"}
            </p>
            <div className="card-grid">
              {projects[language].map((project, index) => (
                <article
                  className={`card project-card ${index === 0 ? "project-card--featured" : ""} reveal-on-scroll`}
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

        <section
          id="skills"
          className="section skills-section reveal-on-scroll"
        >
          <div className="container">
            <p className="eyebrow section-label">
              {language === "en" ? "Skills" : "Keahlian"}
            </p>
            <div
              className="skill-constellation"
              aria-label="Interactive skill constellation"
            >
              <div className="skill-constellation-orbit orbit-large" />
              <div className="skill-constellation-orbit orbit-small" />
              <div className="skill-constellation-core">SKILLS</div>
              {skillGroups.map((group, index) => (
                <span
                  className={`skill-constellation-node skill-constellation-node--${index}`}
                  key={group.title}
                  title={group.items.join(", ")}
                >
                  {group.title}
                </span>
              ))}
            </div>
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

        <section
          id="contact"
          className="section alt contact-section reveal-on-scroll"
        >
          <div className="container contact-grid">
            <div>
              <p className="eyebrow section-label">{t.contact.eyebrow}</p>
              <h2>{t.contact.heading}</h2>
              <p>{t.contact.description}</p>
              <div className="contact-links">
                <a
                  href="https://github.com/Paulusfiral"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Paulus Firal"
                  title="GitHub"
                >
                  <svg
                    className="contact-brand-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.22-3.37-1.22-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 9.1a9.2 9.2 0 0 1 2.5.35c1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.21 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.65c0 .27.18.6.69.49A10.24 10.24 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/paulus-firal-ohoiwutun/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Paulus Firal"
                  title="LinkedIn"
                >
                  <svg
                    className="contact-brand-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.2h3.8V21H3.3V9.2Zm6.2 0h3.6v1.61h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.76V21h-3.8v-5.66c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V21H9.5V9.2Z" />
                  </svg>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=firalohoiwutunnn@gmail.com&su=Halo%20Paulus%20-%20Diskusi%20Proyek"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email Paulus Firal"
                  title="Kirim email ke firalohoiwutunnn@gmail.com"
                  onClick={(e) => {
                    const isMobile = /iPhone|iPad|iPod|Android/i.test(
                      navigator.userAgent,
                    );
                    if (isMobile) {
                      e.preventDefault();
                      window.location.href =
                        "mailto:firalohoiwutunnn@gmail.com?subject=Halo%20Paulus%20-%20Diskusi%20Proyek";
                    }
                  }}
                >
                  <Mail aria-hidden="true" />
                </a>
              </div>
            </div>
            <form
              className="card contact-form terminal-form"
              onSubmit={handleSubmit}
            >
              <div className="terminal-bar" aria-hidden="true">
                <span />
                <span />
                <span />
                <code>
                  {language === "en"
                    ? "LET'S CONNECT"
                    : "TERHUBUNG DENGAN SAYA"}
                </code>
              </div>
              <input
                placeholder={t.contact.name}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder={t.contact.email}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <textarea
                placeholder={t.contact.message}
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={sending}
              >
                {sending ? t.contact.sending : t.contact.send}
              </button>
              {submitted && (
                <div className="success-msg">
                  <p style={{ margin: "0.25rem 0", fontWeight: 700 }}>
                    {t.contact.success}
                  </p>
                  <p
                    style={{
                      margin: "0.25rem 0",
                      fontSize: "0.88rem",
                      opacity: 0.9,
                    }}
                  >
                    {t.contact.successMsg}
                  </p>
                </div>
              )}
              {submitError && <p className="submit-error">{submitError}</p>}
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
                      ? `${import.meta.env.BASE_URL}Curriculum_Vitae_Paulus_Firal_Ohoiwutun.pdf`
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
            <ArrowUp aria-hidden="true" size={16} />
            {language === "en" ? "Back to Home" : "Kembali ke beranda"}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
