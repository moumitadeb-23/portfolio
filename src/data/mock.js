// ===========================
// Portfolio Mock Data
// All data is MOCKED for frontend-only display
// Will be replaced with backend API calls later
// ===========================

export const personalInfo = {
  name: "Moumita Deb",
  firstName: "Moumita",
  lastName: "Deb",
  greeting: "Hi, I'm",
  roles: ["Web Developer", "Data Analyst", "Cloud Enthusiast", "BCA Student"],
  tagline: "Crafting digital experiences with clean code and creative solutions",
  bio: "I'm a passionate BCA student at Techno India, Hooghly Campus, with a strong foundation in web development, cloud computing, and data analytics. I love building efficient systems and turning complex data into actionable insights.",
  avatar: "https://customer-assets.emergentagent.com/job_dev-portfolio-3d-71/artifacts/e3gknoxz_image.png",
  email: "moumitadeb.official@gmail.com",
  phone: "+91-8100690530",
  github: "https://github.com/moumitadeb-23",
  linkedin: "https://www.linkedin.com/in/moumitadeb23/",
  resumeUrl: "https://customer-assets.emergentagent.com/job_e139495e-2e04-40c5-86c9-27d4237c28aa/artifacts/c18761xm_Moumita-Resume.docx",
  location: "Hooghly, West Bengal, India",
};

export const education = [
  {
    institution: "Techno India (Hooghly Campus)",
    university: "MAKAUT, West Bengal",
    degree: "BCA",
    years: "2023 - 2027",
    score: "SGPA: 88.74",
    current: true,
  },
  {
    institution: "Hindmotor Education Centre",
    board: "C.B.S.E",
    degree: "Class XII",
    years: "2021 - 2023",
    score: "72.00%",
    current: false,
  },
  {
    institution: "Hindmotor High School",
    board: "W.B.B.S.E",
    degree: "Class X",
    years: "2013 - 2021",
    score: "93.2%",
    current: false,
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "Java", level: 75 },
    { name: "C", level: 70 },
    { name: "HTML / CSS", level: 90 },
  ],
  tools: [
    { name: "Power BI", level: 85 },
    { name: "DAX", level: 75 },
    { name: "Git & GitHub", level: 80 },
    { name: "Linux", level: 70 },
    { name: "MySQL", level: 75 },
  ],
  cloud: [
    { name: "AWS EC2", level: 80 },
    { name: "AWS S3", level: 85 },
    { name: "AWS Lambda", level: 80 },
    { name: "AWS IAM", level: 75 },
    { name: "CloudWatch", level: 70 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Serverless Image Sizer",
    description:
      "Automated image optimization system using AWS services. Resizes and optimizes images upon upload with edge caching for reduced latency.",
    tech: ["AWS Lambda", "S3", "CloudFront", "Python"],
    features: [
      "Fully serverless architecture",
      "Auto image resizing",
      "Edge caching",
      "Cost-effective & scalable",
    ],
    github: "https://github.com/moumitadeb-23",
    live: null,
    image:
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600&h=400&fit=crop",
    gradient: "from-violet-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Blood Bank Management System",
    description:
      "Web-based system to streamline blood donation and request processes with donor registration, admin dashboard, and secure authentication.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
    features: [
      "Donor registration",
      "Blood request system",
      "Admin dashboard",
      "Secure login",
    ],
    github: "https://github.com/moumitadeb-23/Blood-Bank-Management",
    live: null,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    gradient: "from-rose-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "Fraud Detection Dashboard",
    description:
      "Analyzed 285K+ financial transactions to identify fraud patterns. Detected 492 fraudulent cases using temporal trend and transaction amount analysis.",
    tech: ["Power BI", "DAX", "Data Analysis"],
    features: [
      "285K+ transactions analyzed",
      "492 fraud cases detected",
      "Interactive dashboards",
      "Real-time insights",
    ],
    github:
      "https://github.com/moumitadeb-23/Credit-Card-Fraud-Detection-PowerBI",
    live: null,
    image:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600&h=400&fit=crop",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export const certifications = [
  {
    title: "SAP ABAP Industrial Training",
    issuer: "SAP",
    date: "Aug 2025 - Jan 2026",
    description:
      "Bootcamp on SAP S/4 HANA using GBI 4.2 and ABAP development with hands-on exposure to real-time business scenarios.",
    type: "training",
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "Aug - Dec 2025",
    description:
      "Core cloud computing concepts, AWS infrastructure, EC2, S3, IAM, VPC, security, and architecture best practices.",
    type: "training",
  },
  {
    title: "GenAI Powered Data Analytics",
    issuer: "Tata Group",
    date: "2024",
    description: "Job simulation focused on GenAI-powered data analytics workflows.",
    type: "certification",
  },
  {
    title: "Cybersecurity Analyst Simulation",
    issuer: "Tata Group",
    date: "2024",
    description: "Hands-on cybersecurity analyst job simulation.",
    type: "certification",
  },
  {
    title: "Microsoft Power BI - Data Visualization",
    issuer: "Microsoft",
    date: "2024",
    description: "Analyzing and visualizing data with Microsoft Power BI.",
    type: "certification",
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS",
    date: "2024",
    description: "Professional development and career readiness training.",
    type: "certification",
  },
];

export const githubRepos = [
  {
    name: "Blood-Bank-Management",
    description: "Web-based blood donation and request management system",
    language: "PHP",
    stars: 5,
    forks: 2,
    url: "https://github.com/moumitadeb-23/Blood-Bank-Management",
  },
  {
    name: "Credit-Card-Fraud-Detection-PowerBI",
    description: "Financial fraud detection using Power BI analytics",
    language: "Power BI",
    stars: 3,
    forks: 1,
    url: "https://github.com/moumitadeb-23/Credit-Card-Fraud-Detection-PowerBI",
  },
  {
    name: "AWS-Serverless-Image-Sizer",
    description: "Automated image optimization with AWS Lambda & S3",
    language: "Python",
    stars: 4,
    forks: 0,
    url: "https://github.com/moumitadeb-23",
  },
  {
    name: "Portfolio-Website",
    description: "Personal developer portfolio built with React & Three.js",
    language: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/moumitadeb-23",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Projects", value: "3+" },
  { label: "Certifications", value: "7+" },
  { label: "Technologies", value: "15+" },
  { label: "SGPA", value: "88.74" },
];
