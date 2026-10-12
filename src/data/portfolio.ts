// ─── Profile & links ──────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Rishabh Rawat",
  role: "Full Stack Developer · Backend Architect",
  email: "rajputrishabh359@gmail.com",
  resume: "/Rishabh_Rawat.pdf",
  github: "https://github.com/RishabhRawat2003",
  linkedin: "https://www.linkedin.com/in/rishabh-rawat-371453228/",
};

export const STATS = [
  { value: "2.5+", label: "Years in industry" },
  { value: "3.5+", label: "Years writing code" },
  { value: "4+", label: "Freelance projects shipped" },
];

export const HERO_STACK = [
  "React", "Next.js", "Node.js", "NestJS", "TypeScript",
  "MongoDB", "PostgreSQL", "Redis", "AWS", "Docker",
];

// ─── About ────────────────────────────────────────────────────────────────────

export const ABOUT = {
  intro:
    "I build robust, scalable systems that power modern applications. Specialising in backend architectures with Node.js, MongoDB, NestJS, PostgreSQL, and cloud-native solutions — I turn complex requirements into maintainable, high-performance code.",
  focus:
    "Focused on system design and building scalable systems, while expanding expertise in AWS (Lambda, S3, EC2) and container orchestration with Docker and Kubernetes.",
  philosophy:
    "I believe in building systems that are not only functional but also resilient, scalable, and a joy to maintain. Code should tell a story — clear, purposeful, and built to last.",
};

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "HTML5 / CSS3"],
  },
  {
    title: "Backend & Databases",
    skills: ["NestJS", "Node.js / Express", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS (EC2, S3, Lambda)", "RabbitMQ", "BullMQ", "Git / GitHub", "CI/CD (GitHub Actions)"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectCategory = "personal" | "collaborative" | "freelancing";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  date: string;
  category: ProjectCategory;
  role?: string;
  status?: string;
  team?: string;
  featured?: boolean;
  highlight?: boolean;
  metric?: { value: string; label: string };
  url?: string;
}

export const PROJECT_CATEGORIES: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "personal", label: "Personal" },
  { id: "collaborative", label: "Team" },
  { id: "freelancing", label: "Freelance" },
];

export const PROJECTS: Project[] = [
  {
    title: "JobScrape",
    category: "personal",
    description:
      "Job aggregator that replaces jumping between LinkedIn, Indeed, Naukri, and Instahyre. A Chrome extension takes your preferences — job title keywords, skills, location, and experience range — scrapes matching listings, stores them in a database, and surfaces everything in one dashboard where you can filter, tag (Applied, Interview, Rejected, Bookmark), and track applications.",
    tech: ["React", "Chrome Extension", "NodeJS", "MongoDB"],
    date: "2026",
    featured: true,
    highlight: true,
    metric: { value: "200+", label: "real users and growing" },
    status: "Live in production",
    url: "https://www.jobscrape.in/",
  },
  {
    title: "Patternsee",
    category: "personal",
    description:
      "A visual way to grind DSA for coding interviews. Patternsee turns interview patterns into playable, step-by-step animations so you can actually see how two pointers, sliding windows, trees, graphs, and DP unfold. 86 patterns across three levels — Must-Have, Strong Mid, and Product Company — plus a code lab and a review queue to lock patterns in.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    date: "2026",
    featured: true,
    status: "Live · 86 animated patterns",
    url: "https://patternsee.vercel.app/",
  },
  {
    title: "DbPulse",
    category: "personal",
    description:
      "A desktop app built with Electron that tracks every query hitting your database (MongoDB, PostgreSQL, MySQL). See which API triggers how many queries, execution time, method, duration, and the exact query log — all per API call. Desktop + agent architecture, available for Windows, Linux, and Mac.",
    tech: ["React", "Electron", "NodeJS", "Socket.io", "Mongoose", "PostgreSQL", "MySQL", "npm", "pip", "Maven"],
    date: "2026",
    featured: true,
    status: "Cross-platform (Win, Mac, Linux)",
    url: "https://dbpulse-beta.vercel.app/",
  },
  {
    title: "SURYACON",
    category: "collaborative",
    description:
      "ERP system for one of the largest construction companies in Mohali–Chandigarh. Built modules for HRMS, Item Master, Task Master, Purchase, Inventory, Planning, and Projects. Used MongoDB change streams with Socket.io for real-time UI updates, RabbitMQ for background job queues, and cron jobs for scheduled tasks.",
    tech: ["NodeJS", "TypeScript", "MongoDB", "Socket.io", "RabbitMQ", "Cron"],
    role: "Backend Developer",
    date: "2026",
    featured: true,
    team: "15+ members",
  },
  {
    title: "ISKCON Wave City Website",
    category: "collaborative",
    description:
      "Full-stack platform for a global religious organisation. Features include an admin dashboard (React + Tailwind), automatic YouTube livestream updates via API, and a secure CSR donation system with payment gateway integration.",
    tech: ["React", "Tailwind", "NodeJS", "MongoDB", "AWS EC2"],
    role: "Full Stack Developer",
    date: "2025",
  },
  {
    title: "AI-Powered Insurance Claim System",
    category: "collaborative",
    description:
      "Architected a scalable backend using NodeJS and MongoDB that integrates OpenAI APIs to automate insurance claim processing. The system parses claim documents and emails, performs contextual analysis with LLMs, and generates intelligent assessment reports. RabbitMQ orchestrates background claim workflows.",
    tech: ["NodeJS", "MongoDB", "OpenAI", "RabbitMQ", "Redis", "AWS S3"],
    role: "Backend Developer",
    date: "2025",
  },
  {
    title: "Skywall – E-commerce for Televisions",
    category: "collaborative",
    description:
      "End-to-end e-commerce platform with NestJS backend, PostgreSQL database, and Redis caching. Implemented secure payment gateways, bulk order support, and product inventory management.",
    tech: ["React", "NestJS", "PostgreSQL", "Redis", "Tailwind", "AWS EC2"],
    role: "Full Stack Developer",
    date: "2025",
  },
  {
    title: "Kisan Kumbh – AgriTech Event Platform",
    category: "collaborative",
    description:
      "Built a comprehensive platform for agritech events featuring exhibitors, sponsors, and slot booking with payment integration. Used NestJS and MySQL in the backend, and Tailwind for the frontend.",
    tech: ["React", "NodeJS", "MySQL", "Tailwind"],
    role: "Full Stack Developer",
    date: "2025",
  },
  {
    title: "Elevate Edge – Startup & Bootcamp Platform",
    category: "collaborative",
    description:
      "Platform for masterclasses and bootcamps with user authentication, event booking, and mentor profiles. Used MongoDB, ExpressJS, NodeJS and React for the backend, and Tailwind for the frontend.",
    tech: ["React", "NodeJS", "MongoDB", "Tailwind", "ExpressJS"],
    role: "Full Stack Developer",
    date: "2025",
  },
  {
    title: "Bharatronix – Electronics E-commerce",
    category: "collaborative",
    description:
      "Backend development for an electronics e-commerce platform. Built scalable APIs with NodeJS, managed MongoDB schemas, and implemented business logic using BullMQ for order processing.",
    tech: ["NodeJS", "MongoDB", "AWS S3", "Geolocation", "BullMQ"],
    role: "Backend Developer",
    date: "2025",
  },
  {
    title: "Mentor Sudhir – Personal Portfolio",
    category: "collaborative",
    description:
      "Crafted a visually engaging personal portfolio with smooth animations and responsive design. Utilized React and Tailwind for the frontend, and React Context API for state management.",
    tech: ["React", "Tailwind"],
    role: "Frontend Developer",
    date: "2025",
  },
  {
    title: "TaxRishi – Tax Solutions Platform",
    category: "collaborative",
    description:
      "Feature-rich tax services website with complex business logic calculators covering GST, VAT, and Excise. Built with React and Tailwind, using React Context API for state management.",
    tech: ["React", "Tailwind"],
    role: "Frontend Developer",
    date: "2024",
  },
  {
    title: "KDSure – Real Estate Listings",
    category: "collaborative",
    description:
      "Developed a sleek frontend for property listings with animated maps and filtering. Optimized for mobile responsiveness. Built with React and Tailwind, using React Context API for state management.",
    tech: ["React", "Tailwind"],
    role: "Full Stack Developer",
    date: "2024",
  },
  {
    title: "Neev Global Solution",
    category: "freelancing",
    description:
      "Full-stack platform for a multi-domain business group spanning product marketing, property listings, startup promotions, commercial vehicle sales/rentals, and jaggery exports. Built user and admin dashboards along with a lead management system that lets admins track, manage, and assign leads to team members.",
    tech: ["NodeJS", "MongoDB", "ExpressJS", "Tailwind", "NextJS", "BullMQ", "Render"],
    role: "Full Stack Developer",
    team: "2 members",
    date: "2026",
  },
  {
    title: "Stay Unfiltered",
    category: "freelancing",
    description:
      "Mental wellness platform serving individuals and organizations, enabling companies to offer employee wellness programs and users to access personalized therapy plans. Implemented payments, goal-based progress tracking between therapists and users, automated therapist matching based on real-time availability, and an admin dashboard.",
    tech: ["NextJS", "NodeJS", "MongoDB", "ExpressJS", "Tailwind", "Razorpay", "OAuth"],
    role: "Full Stack Developer",
    team: "4 members",
    date: "2025",
  },
  {
    title: "NexMentor – NEET Mentorship Platform",
    category: "freelancing",
    description:
      "Architected and led full-stack development of an EdTech platform serving 5k+ users. Delivered personalized dashboards for students, mentors, and admins, integrated a payment gateway, built real-time chat using WebSockets, and implemented scheduled email notifications.",
    tech: ["React", "NodeJS", "MongoDB", "ExpressJS", "Render", "OAuth", "Razorpay"],
    role: "Full Stack Lead",
    team: "2 members",
    date: "2025",
  },
  {
    title: "MyCampus Safari – Campus Tour Platform",
    category: "freelancing",
    description:
      "Platform for campus tours with itinerary creation, email notifications, and payment integration. Backend uses NodeJS, MongoDB, and Cloudinary for image uploads; frontend uses React, Tailwind, and React Context API.",
    tech: ["React", "NodeJS", "MongoDB", "Tailwind", "Cloudinary"],
    role: "Full Stack Developer",
    team: "3 members",
    date: "2025",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export interface Experience {
  company: string;
  logo: string;
  title: string;
  start: string;
  end: string;
  current: boolean;
  description: string;
  skills: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: "PSquare Company",
    logo: "https://res.cloudinary.com/rishabh09/image/upload/v1774091093/psquare_company_logo_bacpyp.jpg",
    title: "MERN Stack Developer",
    start: "Aug 2025",
    end: "Present",
    current: true,
    description:
      "Architected and developed backends using Node.js, NestJS and MongoDB. Implemented message queues with RabbitMQ and Socket.IO for real-time updates. Used Redis for caching and session management, and AWS S3 for media storage.",
    skills: ["NestJS", "PostgreSQL", "Redis", "RabbitMQ", "MongoDB", "MySQL", "NodeJS", "AWS S3", "React", "Next.js", "TailwindCSS", "TypeScript", "EC2"],
  },
  {
    company: "TruwixTech Solutions Pvt. Ltd.",
    logo: "https://res.cloudinary.com/rishabh09/image/upload/v1752990797/truwixLogo-D2MuqVTI_jqp9o0.svg",
    title: "Software Developer",
    start: "Jan 2025",
    end: "Jul 2025",
    current: false,
    description:
      "Architected and developed scalable backend services using Node.js, PostgreSQL, and Redis. Implemented message queues with RabbitMQ and integrated AWS S3 for media storage. Collaborated on frontend with React and Next.js, ensuring high performance and responsive design.",
    skills: ["NodeJS", "PostgreSQL", "Redis", "RabbitMQ", "MongoDB", "AWS S3", "React", "Next.js", "TailwindCSS", "TypeScript", "EC2"],
  },
  {
    company: "Campaigning Source",
    logo: "https://res.cloudinary.com/rishabh09/image/upload/v1752990797/logo-white_yosjt4.webp",
    title: "Software Developer Trainee",
    start: "Nov 2024",
    end: "Jan 2025",
    current: false,
    description:
      "Developed full-stack applications using Node.js and MongoDB. Built RESTful APIs and implemented authentication using JWT. Worked with React and TailwindCSS on the frontend, and ExpressJS and TypeScript on the backend.",
    skills: ["NodeJS", "MongoDB", "ExpressJS", "TypeScript", "React", "TailwindCSS"],
  },
  {
    company: "Crazy WebDev Technologies",
    logo: "https://res.cloudinary.com/rishabh09/image/upload/v1753370055/crazywebdev_srrhkt.png",
    title: "Software Developer Intern",
    start: "Jan 2024",
    end: "Jun 2024",
    current: false,
    description:
      "Contributed to full-stack projects using Node.js and MongoDB. Enhanced UI/UX with React and TailwindCSS, achieving a 20% increase in user engagement. Implemented JWT authentication to secure access to sensitive data.",
    skills: ["MongoDB", "Node.js", "React", "TailwindCSS", "JavaScript"],
  },
];

export const CURRENT_STATUS =
  "Currently focused on mastering system design and cloud-native DevOps infrastructure at scale. Open to opportunities where I can build high-performance, scalable systems, take on challenging engineering problems, and contribute to growth-driven teams.";

export const OPEN_TO = ["Full-time roles", "Contract work", "Freelance projects"];
