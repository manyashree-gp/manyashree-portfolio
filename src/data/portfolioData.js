/**
 * Centralized Portfolio Data Configuration for Manyashree GP
 * 
 * ============================================================================
 * PERSONALIZATION INSTRUCTIONS:
 * 1. Profile Photo:
 *    Place your photo file at: public/images/profile.jpg
 * 
 * 2. Resume PDF:
 *    Place your resume PDF at: public/resume/Manyashree_GP_Resume.pdf
 * 
 * 3. Connected Profiles:
 *    Update the `email`, `github`, and `linkedin` fields below with your URLs.
 *    (Leave them empty "" to display non-breaking corporate placeholders)
 * ============================================================================
 */

export const personalInfo = {
  name: "Manyashree GP",
  title: "Software Engineer & Full Stack Developer",
  roleHeadline: "Building Impactful, Scalable & Intuitive Web Solutions",
  naturalBio: "Hi, I'm Manyashree. I am a software engineer with a genuine enthusiasm for creating clean, user-focused web applications and solving real-world challenges through code. Whether I'm building responsive frontends, architecting structured workflows, or leading team initiatives like the Smart India Hackathon 2025, I focus on delivering reliable, high-performance software that makes a difference.",
  location: "Bangalore, India • Available for Remote & On-site",
  status: "Open to Professional Opportunities",
  sihNomination: "Smart India Hackathon 2025 — Team Leader",

  // 1. Profile photo path (drop your image at public/images/profile.jpg)
  profileImage: "/images/profile.jpg", 
  
  // 2. Official resume PDF path (drop your PDF at public/resume/Manyashree_GP_Resume.pdf)
  resumeUrl: "/resume/Manyashree_GP_Resume.pdf",

  // 3. Connected profiles (Configured with official URLs)
  email: "manyashreedayananda@gmail.com",
  emailSubject: "Professional Opportunity - Manyashree GP",
  emailMailto: "mailto:manyashreedayananda@gmail.com?subject=Professional%20Opportunity%20-%20Manyashree%20GP",
  github: "https://github.com/manyashree-gp",
  linkedin: "https://www.linkedin.com/in/manyashree-g-p-02a3a0297",
  phone: "",
};

export const aboutData = {
  heading: "Engineering with Purpose, Precision & Empathy",
  subheading: "About Manyashree GP",
  paragraphs: [
    "I believe that great software is born at the intersection of clean architecture, thoughtful user experience, and continuous curiosity. As a Software Engineer, my journey has been shaped by a desire to take complex, multi-layered ideas and transform them into intuitive, dependable digital products.",
    "My hands-on experience spans modern JavaScript, React, and modular component architectures, coupled with an engineering mindset grounded in core computer science fundamentals. From conceptualizing agro-tech solutions like KrishiBandhu to building dynamic web applications like NEXUS ABYSS and BookAura, I prioritize maintainability, responsiveness, and performance.",
    "Beyond individual programming, I thrive in collaborative team environments. Being nominated as a Team Leader for Smart India Hackathon 2025 reinforced my passion for technical roadmap planning, clear communication, and empowering cross-functional teams to build impactful solutions under tight timelines."
  ],
  stats: [
    { label: "Core Competency", value: "Full Stack & Modern React" },
    { label: "Leadership", value: "SIH 2025 Team Leader" },
    { label: "Engineering Standard", value: "Clean, Modular Architecture" },
    { label: "Availability", value: "Full-Time & Internships" },
  ],
  pillars: [
    {
      title: "Clean Architecture",
      description: "Writing self-documenting, modular code with reusable components and high maintainability.",
      icon: "Code2"
    },
    {
      title: "Team Leadership",
      description: "Nominated SIH 2025 Team Leader with experience in technical roadmapping, task delegation, and agile sprints.",
      icon: "Trophy"
    },
    {
      title: "Performance & Responsiveness",
      description: "Ensuring sub-second load times, fluid mobile responsiveness, and high accessibility standards.",
      icon: "Zap"
    },
    {
      title: "User-Centered Engineering",
      description: "Building empathetic interfaces that solve genuine user problems, from student housing to agro-tech.",
      icon: "Users"
    }
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Frontend Development",
      description: "Crafting modern, accessible, and responsive user interfaces",
      skills: [
        { name: "React.js", level: "Advanced", proficiency: 92 },
        { name: "JavaScript (ES6+)", level: "Advanced", proficiency: 90 },
        { name: "HTML5 & Semantic Structure", level: "Advanced", proficiency: 95 },
        { name: "CSS3 / Modern Flexbox & Grid", level: "Advanced", proficiency: 92 },
        { name: "Responsive & Mobile-First UI", level: "Advanced", proficiency: 94 },
        { name: "State Management (Hooks & Context)", level: "Advanced", proficiency: 88 },
        { name: "Vite & Build Tooling", level: "Intermediate", proficiency: 85 },
      ]
    },
    {
      name: "Backend & System Integration",
      description: "Connecting interfaces to reliable data APIs and services",
      skills: [
        { name: "RESTful API Integration", level: "Advanced", proficiency: 88 },
        { name: "Asynchronous JavaScript (Async/Await)", level: "Advanced", proficiency: 89 },
        { name: "JSON Data Serialization", level: "Advanced", proficiency: 92 },
        { name: "Node.js Fundamentals", level: "Intermediate", proficiency: 78 },
        { name: "HTTP Protocols & Status Codes", level: "Intermediate", proficiency: 82 },
        { name: "Client-Side Data Caching", level: "Intermediate", proficiency: 80 },
      ]
    },
    {
      name: "Databases, Tools & Platforms",
      description: "Industry-standard developer workflows and version control",
      skills: [
        { name: "Git & Version Control", level: "Advanced", proficiency: 88 },
        { name: "GitHub Collaboration & PRs", level: "Advanced", proficiency: 86 },
        { name: "SQL & Relational Concepts", level: "Intermediate", proficiency: 80 },
        { name: "VS Code & Browser DevTools", level: "Advanced", proficiency: 92 },
        { name: "Postman & API Testing", level: "Intermediate", proficiency: 82 },
        { name: "npm Package Management", level: "Advanced", proficiency: 88 },
      ]
    },
    {
      name: "Core Engineering & Methodologies",
      description: "Fundamental computer science principles and collaboration practices",
      skills: [
        { name: "Data Structures & Algorithms", level: "Proficient", proficiency: 82 },
        { name: "Object-Oriented Programming (OOP)", level: "Proficient", proficiency: 85 },
        { name: "Agile & Sprint Planning", level: "Advanced", proficiency: 88 },
        { name: "Clean Code & Refactoring", level: "Advanced", proficiency: 90 },
        { name: "Technical Communication & Docs", level: "Advanced", proficiency: 89 },
        { name: "Problem Decomposition", level: "Advanced", proficiency: 92 },
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "nexus-abyss",
    title: "NEXUS ABYSS",
    category: "Interactive Web Application",
    type: "Web Application",
    tagline: "Dynamic interactive platform with real-time state and high-performance UI",
    description: "An immersive, high-performance web platform engineered with modular React component architecture, optimized rendering pipelines, and responsive navy-themed interfaces for dynamic interaction.",
    challenge: "Handling complex interactive state transitions, dynamic user flows, and maintaining 60fps responsiveness across both desktop and mobile screens without UI latency.",
    solution: "Designed a lightweight component tree with localized state hooks, optimized DOM re-renders, and custom CSS layout rules that ensure high rendering efficiency.",
    features: [
      "Modular, reusable UI components built with React and modern JavaScript",
      "Dynamic state management with instant client-side responsiveness",
      "Fluid interactive controls optimized for touchscreen and keyboard accessibility",
      "Sophisticated corporate navy and high-contrast visual styling"
    ],
    techStack: ["React", "JavaScript (ES6+)", "Vite", "CSS3 Flexbox/Grid", "Local State"],
    githubUrl: "https://github.com/manyashree-gp", // Linked to your official GitHub
    demoUrl: "",
    metrics: "Optimized 60fps rendering speed; 100% responsive across devices"
  },
  {
    id: "bookaura",
    title: "BookAura",
    category: "Full Stack Platform",
    type: "Full Stack Application",
    tagline: "Digital book discovery, personalized reading shelves, and literary reviews",
    description: "A comprehensive digital bookstore and literary community platform enabling readers to search extensive book catalogs, organize reading collections, explore curated genres, and inspect detailed book reviews.",
    challenge: "Structuring multi-dimensional book metadata (genres, authors, ISBN, ratings) with instant client-side search filtering without sluggish page reloads.",
    solution: "Built a fast, indexed search engine with category taxonomy chips, responsive card layouts, and accessible modal-based previews for book summaries and reader ratings.",
    features: [
      "Real-time multi-criteria search filtering by title, author, and genre",
      "Interactive reading shelf organizer (Want to Read, Currently Reading, Completed)",
      "Detailed book modal with synopsis, publishing metadata, and ratings breakdown",
      "Clean corporate card layout with smooth image fallback handling"
    ],
    techStack: ["React", "JavaScript", "REST APIs", "CSS Modules", "Responsive Design"],
    githubUrl: "https://github.com/manyashree-gp",
    demoUrl: "",
    metrics: "Sub-20ms search filtering across extensive mock library data"
  },
  {
    id: "krishibandhu",
    title: "KrishiBandhu",
    category: "Agro-Tech Platform",
    type: "Web Application",
    tagline: "Farmer empowerment portal for agricultural insights, crop prices, and advisories",
    description: "An agro-tech web platform designed to empower agricultural communities by delivering real-time regional crop price trends, actionable weather forecasts, seasonal crop advisories, and farming support channels.",
    challenge: "Developing an interface that remains accessible, fast-loading, and simple to navigate for users operating on low-bandwidth rural mobile connections.",
    solution: "Engineered an ultra-lightweight, high-contrast user interface with minimal asset overhead, intuitive icon navigation, and structured data summaries.",
    features: [
      "Live regional market (Mandi) crop price tracking with price change indicators",
      "Weather forecast integration with weather advisory alerts for sowing and harvesting",
      "Crop disease identification guide and preventative recommendations",
      "Mobile-optimized touch targets and high-contrast typography for outdoor viewing"
    ],
    techStack: ["React", "JavaScript (ES6+)", "REST APIs", "Modern CSS", "Mobile-First UX"],
    githubUrl: "https://github.com/manyashree-gp",
    demoUrl: "",
    metrics: "Lightweight footprint (<100KB initial bundle); mobile-first design"
  },
  {
    id: "hostel-finder",
    title: "Hostel Finder",
    category: "Student Housing & Services",
    type: "Web Application",
    tagline: "Verified student accommodation and hostel discovery portal",
    description: "A centralized housing platform helping university students and young professionals find verified hostels, compare room amenities, check fee structures, and submit direct accommodation inquiries.",
    challenge: "Overcoming fragmented, outdated accommodation listings and making it simple for students to compare critical amenities like Wi-Fi, food, and security.",
    solution: "Built a structured filtering engine allowing students to filter hostels by budget, room sharing (single/double/triple), distance to campus, and included amenities, complete with interactive booking inquiry forms.",
    features: [
      "Multi-parameter filter for monthly budget, room type, and essential amenities",
      "Verified badge verification system and transparent fee breakdown",
      "Interactive room photo galleries and map location previews",
      "Direct inquiry booking form with instant validation feedback"
    ],
    techStack: ["React", "JavaScript", "CSS3 Grid", "Form Validation", "Local State"],
    githubUrl: "https://github.com/manyashree-gp",
    demoUrl: "",
    metrics: "Structured multi-filter eliminates browsing friction for student housing"
  }
];

export const achievementsData = [
  {
    id: "sih-2025",
    title: "Smart India Hackathon (SIH) 2025 — Team Leader",
    category: "Leadership & National Innovation",
    issuer: "Ministry of Education's Innovation Cell & AICTE, Govt. of India",
    date: "2025 Nomination",
    badge: "Featured Leadership Honor",
    featured: true,
    description: "Selected and nominated as Team Leader for Smart India Hackathon 2025, directing a multidisciplinary engineering team to design, prototype, and deliver software solutions for national problem statements.",
    highlights: [
      "Nominated as Team Leader to oversee team sprint planning, architectural strategy, and milestone delivery",
      "Led technical requirement decomposition, task allocation, and Git collaboration across team members",
      "Championed clean modular code practices, corporate UI standards, and accessible user workflows",
      "Represented the team in technical presentations, stakeholder discussions, and evaluation panels"
    ]
  },
  {
    id: "academic-excellence",
    title: "Academic & Engineering Distinction",
    category: "Academic Excellence",
    issuer: "Engineering Institution",
    date: "Continuous Recognition",
    badge: "Academic Honor",
    featured: false,
    description: "Consistently maintained top-percentile academic standing in core computer science coursework, software engineering methodologies, algorithms, and database systems.",
    highlights: [
      "High academic performance across Data Structures, Algorithms, Web Technologies, and OOP",
      "Active participant in technical symposiums, departmental hackathons, and coding seminars"
    ]
  },
  {
    id: "web-certification",
    title: "Full Stack Web Engineering Certification",
    category: "Technical Certification",
    issuer: "Industry Recognized Program",
    date: "Certified Professional",
    badge: "Certification",
    featured: false,
    description: "Completed comprehensive advanced training and practical certification covering modern JavaScript (ES6+), React component hierarchies, asynchronous operations, and REST APIs.",
    highlights: [
      "Rigorous mastery of modern component architecture, hooks, and clean state handling",
      "Hands-on project development adhering to corporate-grade web performance benchmarks"
    ]
  },
  {
    id: "tech-mentorship",
    title: "Peer Technical Mentorship & Community",
    category: "Leadership & Community",
    issuer: "Developer Community",
    date: "Ongoing Initiative",
    badge: "Leadership",
    featured: false,
    description: "Actively conducted collaborative peer code review sessions, guided junior engineering peers in web development fundamentals, and produced clear technical documentation.",
    highlights: [
      "Facilitated peer knowledge sessions on React best practices, modern CSS, and Git workflows",
      "Advocated for accessibility standards, responsive design, and clean architecture"
    ]
  }
];

export const resumeData = {
  summary: "Motivated and detail-oriented Software Engineer with practical competence in developing responsive, scalable, and user-centric web applications using React, modern JavaScript (ES6+), and clean CSS architectures. Nominated Team Leader for Smart India Hackathon 2025 with strong capabilities in technical leadership, problem decomposition, and collaborative engineering.",
  
  leadership: [
    {
      title: "Team Leader — Smart India Hackathon (SIH) 2025",
      issuer: "Ministry of Education's Innovation Cell & AICTE, Govt. of India",
      timeline: "2025",
      description: "Nominated as Team Leader to head a multi-disciplinary software engineering team addressing complex real-world national challenges. Directed technical architecture, sprint execution, and prototype delivery."
    }
  ],

  projectsSummary: [
    {
      name: "NEXUS ABYSS",
      description: "Dynamic interactive web platform with React component architecture, optimized rendering, and high-performance UI state handling."
    },
    {
      name: "BookAura",
      description: "Digital bookstore and reading collection manager with multi-criteria search filtering, shelf organization, and reviews."
    },
    {
      name: "KrishiBandhu",
      description: "Agro-tech web platform delivering live regional crop prices, weather advisory alerts, and disease identification."
    },
    {
      name: "Hostel Finder",
      description: "Student accommodation discovery and verified room booking engine with multi-parameter filter systems."
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) / Technology",
      field: "Computer Science & Engineering",
      institution: "Engineering Institution / University",
      timeline: "Graduate",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Web Technologies, Database Management Systems, Software Engineering, Computer Networks.",
        "Engineering projects focused on real-world web applications and intuitive user interfaces.",
        "Active member of departmental coding clubs and technical seminars."
      ]
    }
  ],

  coreCompetencies: [
    "Frontend Engineering (React.js, Modern JSX, Custom Hooks, State Architecture)",
    "Modern JavaScript (ES6+, Async/Await, Promises, Closures, DOM Architecture)",
    "Responsive Layout Design (CSS3, Flexbox, Grid, Mobile-First Media Queries)",
    "API & Data Integration (REST APIs, JSON, Asynchronous Fetch Architecture)",
    "Developer Tooling (Vite, Git, GitHub, VS Code, Postman, npm)",
    "Engineering Principles (Clean Code, OOP, DSA, Agile Sprints, Team Leadership)"
  ]
};
