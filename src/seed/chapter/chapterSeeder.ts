import { prisma } from "../../application/database";

export const seedChapter = async () => {
  await prisma.chapter.createMany({
    data: [
      {
        id: 1,
        sort: 1,
        chapterTitle: "Introduction to React Native",
        courseId: 1,
      },
      {
        id: 2,
        sort: 2,
        chapterTitle: "Setting Up the Environment",
        courseId: 1,
      },
      { id: 3, sort: 3, chapterTitle: "Creating Your First App", courseId: 1 },
      { id: 4, sort: 4, chapterTitle: "Understanding Components", courseId: 1 },
      { id: 5, sort: 5, chapterTitle: "Styling in React Native", courseId: 1 },
      { id: 6, sort: 6, chapterTitle: "Managing State", courseId: 1 },
      {
        id: 7,
        sort: 7,
        chapterTitle: "Navigation in React Native",
        courseId: 1,
      },
      { id: 8, sort: 8, chapterTitle: "Working with APIs", courseId: 1 },
      { id: 9, sort: 9, chapterTitle: "Publishing Your App", courseId: 1 },

      // Course 2: Advanced React Native
      { id: 10, sort: 1, chapterTitle: "Advanced Components", courseId: 2 },
      { id: 11, sort: 2, chapterTitle: "Native Modules", courseId: 2 },
      { id: 12, sort: 3, chapterTitle: "Optimizing Performance", courseId: 2 },
      {
        id: 13,
        sort: 4,
        chapterTitle: "Animations in React Native",
        courseId: 2,
      },
      { id: 14, sort: 5, chapterTitle: "Testing and Debugging", courseId: 2 },
      { id: 15, sort: 6, chapterTitle: "Deploying to App Stores", courseId: 2 },
      { id: 16, sort: 7, chapterTitle: "React Native vs Flutter", courseId: 2 },

      // Course 3: Flutter Development
      { id: 17, sort: 1, chapterTitle: "Introduction to Flutter", courseId: 3 },
      {
        id: 18,
        sort: 2,
        chapterTitle: "Setting Up Flutter Environment",
        courseId: 3,
      },
      { id: 19, sort: 3, chapterTitle: "Dart Programming Basics", courseId: 3 },
      { id: 20, sort: 4, chapterTitle: "Creating Flutter Apps", courseId: 3 },
      {
        id: 21,
        sort: 5,
        chapterTitle: "State Management in Flutter",
        courseId: 3,
      },
      { id: 22, sort: 6, chapterTitle: "Networking in Flutter", courseId: 3 },
      { id: 23, sort: 7, chapterTitle: "Publishing Flutter Apps", courseId: 3 },

      // Course 4: Python for Data Science
      {
        id: 24,
        sort: 1,
        chapterTitle: "Introduction to Data Science",
        courseId: 4,
      },
      { id: 25, sort: 2, chapterTitle: "Python Basics", courseId: 4 },
      {
        id: 26,
        sort: 3,
        chapterTitle: "Data Analysis with Pandas",
        courseId: 4,
      },
      {
        id: 27,
        sort: 4,
        chapterTitle: "Data Visualization with Matplotlib",
        courseId: 4,
      },
      { id: 28, sort: 5, chapterTitle: "Machine Learning Basics", courseId: 4 },
      {
        id: 29,
        sort: 6,
        chapterTitle: "Building a Simple ML Model",
        courseId: 4,
      },
      {
        id: 30,
        sort: 7,
        chapterTitle: "Deploying Data Science Models",
        courseId: 4,
      },

      // Course 5: Machine Learning
      {
        id: 31,
        sort: 1,
        chapterTitle: "Introduction to Machine Learning",
        courseId: 5,
      },
      {
        id: 32,
        sort: 2,
        chapterTitle: "Types of Machine Learning",
        courseId: 5,
      },
      { id: 33, sort: 3, chapterTitle: "Data Preprocessing", courseId: 5 },
      { id: 34, sort: 4, chapterTitle: "Regression Algorithms", courseId: 5 },
      {
        id: 35,
        sort: 5,
        chapterTitle: "Classification Algorithms",
        courseId: 5,
      },
      { id: 36, sort: 6, chapterTitle: "Model Evaluation", courseId: 5 },
      { id: 37, sort: 7, chapterTitle: "Building ML Projects", courseId: 5 },

      // Course 6: Web Development Bootcamp
      {
        id: 38,
        sort: 1,
        chapterTitle: "Introduction to Web Development",
        courseId: 6,
      },
      { id: 39, sort: 2, chapterTitle: "HTML Basics", courseId: 6 },
      { id: 40, sort: 3, chapterTitle: "CSS Fundamentals", courseId: 6 },
      { id: 41, sort: 4, chapterTitle: "JavaScript Basics", courseId: 6 },
      { id: 42, sort: 5, chapterTitle: "Frontend Frameworks", courseId: 6 },
      { id: 43, sort: 6, chapterTitle: "Backend Development", courseId: 6 },
      { id: 44, sort: 7, chapterTitle: "Deployment and Hosting", courseId: 6 },

      // Course 7: Advanced Web Development
      { id: 45, sort: 1, chapterTitle: "Progressive Web Apps", courseId: 7 },
      {
        id: 46,
        sort: 2,
        chapterTitle: "Web Performance Optimization",
        courseId: 7,
      },
      {
        id: 47,
        sort: 3,
        chapterTitle: "Testing Web Applications",
        courseId: 7,
      },
      {
        id: 48,
        sort: 4,
        chapterTitle: "Web Security Best Practices",
        courseId: 7,
      },
      {
        id: 49,
        sort: 5,
        chapterTitle: "Web Application Architecture",
        courseId: 7,
      },

      // Course 8: Cybersecurity Basics
      {
        id: 50,
        sort: 1,
        chapterTitle: "Introduction to Cybersecurity",
        courseId: 8,
      },
      {
        id: 51,
        sort: 2,
        chapterTitle: "Common Threats and Vulnerabilities",
        courseId: 8,
      },
      {
        id: 52,
        sort: 3,
        chapterTitle: "Network Security Principles",
        courseId: 8,
      },
      { id: 53, sort: 4, chapterTitle: "Cryptography Basics", courseId: 8 },
      { id: 54, sort: 5, chapterTitle: "Incident Response", courseId: 8 },

      // Course 9: Blockchain Technology
      {
        id: 55,
        sort: 1,
        chapterTitle: "Understanding Blockchain",
        courseId: 9,
      },
      { id: 56, sort: 2, chapterTitle: "Cryptocurrency Basics", courseId: 9 },
      { id: 57, sort: 3, chapterTitle: "Smart Contracts", courseId: 9 },
      {
        id: 58,
        sort: 4,
        chapterTitle: "Decentralized Applications",
        courseId: 9,
      },
      { id: 59, sort: 5, chapterTitle: "Blockchain Use Cases", courseId: 9 },

      // Course 10: Game Development
      {
        id: 60,
        sort: 1,
        chapterTitle: "Introduction to Game Development",
        courseId: 10,
      },
      { id: 61, sort: 2, chapterTitle: "Game Design Principles", courseId: 10 },
      { id: 62, sort: 3, chapterTitle: "Unity Basics", courseId: 10 },
      { id: 63, sort: 4, chapterTitle: "Creating 2D Games", courseId: 10 },
      {
        id: 64,
        sort: 5,
        chapterTitle: "Game Monetization Strategies",
        courseId: 10,
      },

      // Course 11: Digital Marketing
      {
        id: 65,
        sort: 1,
        chapterTitle: "Introduction to Digital Marketing",
        courseId: 11,
      },
      { id: 66, sort: 2, chapterTitle: "SEO Fundamentals", courseId: 11 },
      { id: 67, sort: 3, chapterTitle: "Social Media Marketing", courseId: 11 },
      {
        id: 68,
        sort: 4,
        chapterTitle: "Content Marketing Strategies",
        courseId: 11,
      },
      {
        id: 69,
        sort: 5,
        chapterTitle: "Analyzing Digital Marketing Campaigns",
        courseId: 11,
      },

      // Course 12: Graphic Design
      {
        id: 70,
        sort: 1,
        chapterTitle: "Introduction to Graphic Design",
        courseId: 12,
      },
      { id: 71, sort: 2, chapterTitle: "Design Principles", courseId: 12 },
      { id: 72, sort: 3, chapterTitle: "Color Theory", courseId: 12 },
      { id: 73, sort: 4, chapterTitle: "Typography Basics", courseId: 12 },
      {
        id: 74,
        sort: 5,
        chapterTitle: "Creating Visual Identities",
        courseId: 12,
      },

      // Course 13: Project Management
      {
        id: 75,
        sort: 1,
        chapterTitle: "Introduction to Project Management",
        courseId: 13,
      },
      { id: 76, sort: 2, chapterTitle: "Project Life Cycle", courseId: 13 },
      { id: 77, sort: 3, chapterTitle: "Agile Methodologies", courseId: 13 },
      { id: 78, sort: 4, chapterTitle: "Risk Management", courseId: 13 },
      { id: 79, sort: 5, chapterTitle: "Project Evaluation", courseId: 13 },

      // Course 14: DevOps
      { id: 80, sort: 1, chapterTitle: "Introduction to DevOps", courseId: 14 },
      { id: 81, sort: 2, chapterTitle: "Continuous Integration", courseId: 14 },
      { id: 82, sort: 3, chapterTitle: "Continuous Deployment", courseId: 14 },
      { id: 83, sort: 4, chapterTitle: "Infrastructure as Code", courseId: 14 },
      { id: 84, sort: 5, chapterTitle: "Monitoring and Logging", courseId: 14 },

      // Course 15: Internet of Things
      { id: 85, sort: 1, chapterTitle: "Introduction to IoT", courseId: 15 },
      { id: 86, sort: 2, chapterTitle: "IoT Architecture", courseId: 15 },
      { id: 87, sort: 3, chapterTitle: "Sensors and Actuators", courseId: 15 },
      {
        id: 88,
        sort: 4,
        chapterTitle: "IoT Communication Protocols",
        courseId: 15,
      },
      { id: 89, sort: 5, chapterTitle: "Building IoT Projects", courseId: 15 },
      // Course 16: Full Stack Development
      {
        id: 90,
        sort: 1,
        chapterTitle: "Introduction to Full Stack Development",
        courseId: 16,
      },
      {
        id: 91,
        sort: 2,
        chapterTitle: "Frontend Development Basics",
        courseId: 16,
      },
      {
        id: 92,
        sort: 3,
        chapterTitle: "Backend Development Basics",
        courseId: 16,
      },
      { id: 93, sort: 4, chapterTitle: "Database Integration", courseId: 16 },
      { id: 94, sort: 5, chapterTitle: "RESTful APIs", courseId: 16 },
      {
        id: 95,
        sort: 6,
        chapterTitle: "Authentication and Authorization",
        courseId: 16,
      },
      { id: 96, sort: 7, chapterTitle: "Deployment Strategies", courseId: 16 },

      // Course 17: Data Analysis with R
      {
        id: 97,
        sort: 1,
        chapterTitle: "Introduction to R and RStudio",
        courseId: 17,
      },
      {
        id: 98,
        sort: 2,
        chapterTitle: "Data Manipulation with dplyr",
        courseId: 17,
      },
      {
        id: 99,
        sort: 3,
        chapterTitle: "Data Visualization with ggplot2",
        courseId: 17,
      },
      {
        id: 100,
        sort: 4,
        chapterTitle: "Statistical Analysis Basics",
        courseId: 17,
      },
      {
        id: 101,
        sort: 5,
        chapterTitle: "Building Reports with RMarkdown",
        courseId: 17,
      },

      // Course 18: Mobile App Development with Flutter
      {
        id: 102,
        sort: 1,
        chapterTitle: "Getting Started with Flutter",
        courseId: 18,
      },
      { id: 103, sort: 2, chapterTitle: "Building Layouts", courseId: 18 },
      {
        id: 104,
        sort: 3,
        chapterTitle: "State Management Techniques",
        courseId: 18,
      },
      { id: 105, sort: 4, chapterTitle: "Networking and APIs", courseId: 18 },
      {
        id: 106,
        sort: 5,
        chapterTitle: "Publishing Flutter Apps",
        courseId: 18,
      },

      // Course 19: Advanced Python
      { id: 107, sort: 1, chapterTitle: "Python Decorators", courseId: 19 },
      { id: 108, sort: 2, chapterTitle: "Generators in Python", courseId: 19 },
      {
        id: 109,
        sort: 3,
        chapterTitle: "Error and Exception Handling",
        courseId: 19,
      },
      { id: 110, sort: 4, chapterTitle: "Working with APIs", courseId: 19 },
      {
        id: 111,
        sort: 5,
        chapterTitle: "Building Python Applications",
        courseId: 19,
      },

      // Course 20: Data Science with Python
      { id: 112, sort: 1, chapterTitle: "Data Science Overview", courseId: 20 },
      {
        id: 113,
        sort: 2,
        chapterTitle: "NumPy for Numerical Data",
        courseId: 20,
      },
      {
        id: 114,
        sort: 3,
        chapterTitle: "Pandas for Data Manipulation",
        courseId: 20,
      },
      {
        id: 115,
        sort: 4,
        chapterTitle: "Matplotlib for Data Visualization",
        courseId: 20,
      },
      {
        id: 116,
        sort: 5,
        chapterTitle: "Machine Learning with Scikit-Learn",
        courseId: 20,
      },

      // Course 21: JavaScript Fundamentals
      {
        id: 117,
        sort: 1,
        chapterTitle: "Introduction to JavaScript",
        courseId: 21,
      },
      {
        id: 118,
        sort: 2,
        chapterTitle: "Variables and Data Types",
        courseId: 21,
      },
      { id: 119, sort: 3, chapterTitle: "Functions and Scope", courseId: 21 },
      { id: 120, sort: 4, chapterTitle: "DOM Manipulation", courseId: 21 },
      { id: 121, sort: 5, chapterTitle: "Event Handling", courseId: 21 },

      // Course 22: Node.js Development
      {
        id: 122,
        sort: 1,
        chapterTitle: "Introduction to Node.js",
        courseId: 22,
      },
      {
        id: 123,
        sort: 2,
        chapterTitle: "Setting Up a Node.js Server",
        courseId: 22,
      },
      { id: 124, sort: 3, chapterTitle: "Express.js Framework", courseId: 22 },
      {
        id: 125,
        sort: 4,
        chapterTitle: "Working with Databases",
        courseId: 22,
      },
      { id: 126, sort: 5, chapterTitle: "Building RESTful APIs", courseId: 22 },

      // Course 23: Introduction to SQL
      { id: 127, sort: 1, chapterTitle: "What is SQL?", courseId: 23 },
      {
        id: 128,
        sort: 2,
        chapterTitle: "Database Design Principles",
        courseId: 23,
      },
      { id: 129, sort: 3, chapterTitle: "Basic SQL Queries", courseId: 23 },
      {
        id: 130,
        sort: 4,
        chapterTitle: "Data Manipulation Language (DML)",
        courseId: 23,
      },
      {
        id: 131,
        sort: 5,
        chapterTitle: "Data Definition Language (DDL)",
        courseId: 23,
      },

      // Course 24: Advanced SQL
      { id: 132, sort: 1, chapterTitle: "Joins in SQL", courseId: 24 },
      { id: 133, sort: 2, chapterTitle: "Subqueries and CTEs", courseId: 24 },
      {
        id: 134,
        sort: 3,
        chapterTitle: "Indexing for Performance",
        courseId: 24,
      },
      { id: 135, sort: 4, chapterTitle: "Stored Procedures", courseId: 24 },
      {
        id: 136,
        sort: 5,
        chapterTitle: "Transaction Management",
        courseId: 24,
      },

      // Course 25: Cloud Computing Fundamentals
      {
        id: 137,
        sort: 1,
        chapterTitle: "Introduction to Cloud Computing",
        courseId: 25,
      },
      {
        id: 138,
        sort: 2,
        chapterTitle: "Types of Cloud Services",
        courseId: 25,
      },
      {
        id: 139,
        sort: 3,
        chapterTitle: "Cloud Deployment Models",
        courseId: 25,
      },
      { id: 140, sort: 4, chapterTitle: "Cloud Security", courseId: 25 },
      {
        id: 141,
        sort: 5,
        chapterTitle: "Case Studies of Cloud Applications",
        courseId: 25,
      },

      // Course 26: Ethical Hacking
      {
        id: 142,
        sort: 1,
        chapterTitle: "Introduction to Ethical Hacking",
        courseId: 26,
      },
      {
        id: 143,
        sort: 2,
        chapterTitle: "Reconnaissance Techniques",
        courseId: 26,
      },
      { id: 144, sort: 3, chapterTitle: "Scanning Networks", courseId: 26 },
      {
        id: 145,
        sort: 4,
        chapterTitle: "Exploiting Vulnerabilities",
        courseId: 26,
      },
      {
        id: 146,
        sort: 5,
        chapterTitle: "Reporting and Documentation",
        courseId: 26,
      },

      // Course 27: Cybersecurity Threats
      {
        id: 147,
        sort: 1,
        chapterTitle: "Understanding Cyber Threats",
        courseId: 27,
      },
      { id: 148, sort: 2, chapterTitle: "Malware Analysis", courseId: 27 },
      {
        id: 149,
        sort: 3,
        chapterTitle: "Social Engineering Attacks",
        courseId: 27,
      },
      {
        id: 150,
        sort: 4,
        chapterTitle: "Network Defense Strategies",
        courseId: 27,
      },
      {
        id: 151,
        sort: 5,
        chapterTitle: "Incident Response Procedures",
        courseId: 27,
      },

      // Course 28: Digital Forensics
      {
        id: 152,
        sort: 1,
        chapterTitle: "Introduction to Digital Forensics",
        courseId: 28,
      },
      {
        id: 153,
        sort: 2,
        chapterTitle: "Forensic Investigation Process",
        courseId: 28,
      },
      {
        id: 154,
        sort: 3,
        chapterTitle: "Digital Evidence Collection",
        courseId: 28,
      },
      {
        id: 155,
        sort: 4,
        chapterTitle: "Analyzing Digital Evidence",
        courseId: 28,
      },
      {
        id: 156,
        sort: 5,
        chapterTitle: "Reporting Forensic Findings",
        courseId: 28,
      },

      // Course 29: Introduction to Robotics
      { id: 157, sort: 1, chapterTitle: "Overview of Robotics", courseId: 29 },
      { id: 158, sort: 2, chapterTitle: "Types of Robots", courseId: 29 },
      {
        id: 159,
        sort: 3,
        chapterTitle: "Basic Components of Robots",
        courseId: 29,
      },
      { id: 160, sort: 4, chapterTitle: "Programming Robots", courseId: 29 },
      {
        id: 161,
        sort: 5,
        chapterTitle: "Building Your First Robot",
        courseId: 29,
      },

      // Course 30: AI and Machine Learning
      { id: 162, sort: 1, chapterTitle: "Introduction to AI", courseId: 30 },
      {
        id: 163,
        sort: 2,
        chapterTitle: "Understanding Machine Learning",
        courseId: 30,
      },
      {
        id: 164,
        sort: 3,
        chapterTitle: "Supervised vs Unsupervised Learning",
        courseId: 30,
      },
      { id: 165, sort: 4, chapterTitle: "Building ML Models", courseId: 30 },
      {
        id: 166,
        sort: 5,
        chapterTitle: "Evaluating Model Performance",
        courseId: 30,
      },

      // Course 31: Blockchain Technology
      {
        id: 167,
        sort: 1,
        chapterTitle: "Introduction to Blockchain",
        courseId: 31,
      },
      { id: 168, sort: 2, chapterTitle: "How Blockchain Works", courseId: 31 },
      { id: 169, sort: 3, chapterTitle: "Cryptocurrency Basics", courseId: 31 },
      { id: 170, sort: 4, chapterTitle: "Smart Contracts", courseId: 31 },
      {
        id: 171,
        sort: 5,
        chapterTitle: "Future of Blockchain Technology",
        courseId: 31,
      },

      // Course 32: UX/UI Design
      {
        id: 172,
        sort: 1,
        chapterTitle: "Understanding UX and UI",
        courseId: 32,
      },
      {
        id: 173,
        sort: 2,
        chapterTitle: "User Research Techniques",
        courseId: 32,
      },
      {
        id: 174,
        sort: 3,
        chapterTitle: "Wireframing and Prototyping",
        courseId: 32,
      },
      { id: 175, sort: 4, chapterTitle: "Usability Testing", courseId: 32 },
      {
        id: 176,
        sort: 5,
        chapterTitle: "Design Handoff to Developers",
        courseId: 32,
      },

      // Course 33: Digital Marketing Strategies
      {
        id: 177,
        sort: 1,
        chapterTitle: "Introduction to Digital Marketing",
        courseId: 33,
      },
      { id: 178, sort: 2, chapterTitle: "SEO Fundamentals", courseId: 33 },
      { id: 179, sort: 3, chapterTitle: "Content Marketing", courseId: 33 },
      {
        id: 180,
        sort: 4,
        chapterTitle: "Social Media Marketing",
        courseId: 33,
      },
      {
        id: 181,
        sort: 5,
        chapterTitle: "Analyzing Marketing Metrics",
        courseId: 33,
      },

      // Course 34: Business Analysis
      {
        id: 182,
        sort: 1,
        chapterTitle: "Role of a Business Analyst",
        courseId: 34,
      },
      {
        id: 183,
        sort: 2,
        chapterTitle: "Requirements Gathering Techniques",
        courseId: 34,
      },
      {
        id: 184,
        sort: 3,
        chapterTitle: "Creating Business Models",
        courseId: 34,
      },
      {
        id: 185,
        sort: 4,
        chapterTitle: "Stakeholder Management",
        courseId: 34,
      },
      {
        id: 186,
        sort: 5,
        chapterTitle: "Project Management Tools",
        courseId: 34,
      },

      // Course 35: Human Resources Management
      { id: 187, sort: 1, chapterTitle: "Introduction to HRM", courseId: 35 },
      {
        id: 188,
        sort: 2,
        chapterTitle: "Recruitment and Selection",
        courseId: 35,
      },
      {
        id: 189,
        sort: 3,
        chapterTitle: "Performance Management",
        courseId: 35,
      },
      { id: 190, sort: 4, chapterTitle: "Employee Development", courseId: 35 },
      {
        id: 191,
        sort: 5,
        chapterTitle: "Compensation and Benefits",
        courseId: 35,
      },

      // Course 36: Financial Analysis
      {
        id: 192,
        sort: 1,
        chapterTitle: "Basics of Financial Analysis",
        courseId: 36,
      },
      {
        id: 193,
        sort: 2,
        chapterTitle: "Analyzing Financial Statements",
        courseId: 36,
      },
      { id: 194, sort: 3, chapterTitle: "Ratio Analysis", courseId: 36 },
      { id: 195, sort: 4, chapterTitle: "Cash Flow Analysis", courseId: 36 },
      { id: 196, sort: 5, chapterTitle: "Financial Modeling", courseId: 36 },

      // Course 37: Marketing Research
      {
        id: 197,
        sort: 1,
        chapterTitle: "Introduction to Marketing Research",
        courseId: 37,
      },
      {
        id: 198,
        sort: 2,
        chapterTitle: "Qualitative vs Quantitative Research",
        courseId: 37,
      },
      { id: 199, sort: 3, chapterTitle: "Survey Design", courseId: 37 },
      {
        id: 200,
        sort: 4,
        chapterTitle: "Data Analysis Techniques",
        courseId: 37,
      },
      {
        id: 201,
        sort: 5,
        chapterTitle: "Presenting Research Findings",
        courseId: 37,
      },

      // Course 38: Entrepreneurship
      {
        id: 202,
        sort: 1,
        chapterTitle: "Understanding Entrepreneurship",
        courseId: 38,
      },
      { id: 203, sort: 2, chapterTitle: "Business Planning", courseId: 38 },
      { id: 204, sort: 3, chapterTitle: "Funding Your Business", courseId: 38 },
      {
        id: 205,
        sort: 4,
        chapterTitle: "Marketing Your Startup",
        courseId: 38,
      },
      { id: 206, sort: 5, chapterTitle: "Scaling Your Business", courseId: 38 },

      // Course 39: Supply Chain Management
      {
        id: 207,
        sort: 1,
        chapterTitle: "Introduction to Supply Chain Management",
        courseId: 39,
      },
      { id: 208, sort: 2, chapterTitle: "Supply Chain Design", courseId: 39 },
      { id: 209, sort: 3, chapterTitle: "Inventory Management", courseId: 39 },
      { id: 210, sort: 4, chapterTitle: "Logistics Management", courseId: 39 },
      {
        id: 211,
        sort: 5,
        chapterTitle: "Sustainable Supply Chains",
        courseId: 39,
      },

      // Course 40: Quality Management
      {
        id: 212,
        sort: 1,
        chapterTitle: "Introduction to Quality Management",
        courseId: 40,
      },
      {
        id: 213,
        sort: 2,
        chapterTitle: "Quality Control Techniques",
        courseId: 40,
      },
      { id: 214, sort: 3, chapterTitle: "Process Improvement", courseId: 40 },
      {
        id: 215,
        sort: 4,
        chapterTitle: "Total Quality Management",
        courseId: 40,
      },
      {
        id: 216,
        sort: 5,
        chapterTitle: "Quality Assurance vs Quality Control",
        courseId: 40,
      },

      // Course 41: Risk Management
      {
        id: 217,
        sort: 1,
        chapterTitle: "Introduction to Risk Management",
        courseId: 41,
      },
      { id: 218, sort: 2, chapterTitle: "Identifying Risks", courseId: 41 },
      {
        id: 219,
        sort: 3,
        chapterTitle: "Risk Assessment Techniques",
        courseId: 41,
      },
      {
        id: 220,
        sort: 4,
        chapterTitle: "Risk Mitigation Strategies",
        courseId: 41,
      },
      {
        id: 221,
        sort: 5,
        chapterTitle: "Monitoring and Reviewing Risks",
        courseId: 41,
      },

      // Course 42: Strategic Management
      {
        id: 222,
        sort: 1,
        chapterTitle: "Introduction to Strategic Management",
        courseId: 42,
      },
      {
        id: 223,
        sort: 2,
        chapterTitle: "Strategic Planning Process",
        courseId: 42,
      },
      { id: 224, sort: 3, chapterTitle: "SWOT Analysis", courseId: 42 },
      {
        id: 225,
        sort: 4,
        chapterTitle: "Implementing Strategies",
        courseId: 42,
      },
      {
        id: 226,
        sort: 5,
        chapterTitle: "Evaluating Strategy Effectiveness",
        courseId: 42,
      },

      // Course 43: Change Management
      {
        id: 227,
        sort: 1,
        chapterTitle: "Understanding Change Management",
        courseId: 43,
      },
      {
        id: 228,
        sort: 2,
        chapterTitle: "The Change Management Process",
        courseId: 43,
      },
      {
        id: 229,
        sort: 3,
        chapterTitle: "Overcoming Resistance to Change",
        courseId: 43,
      },
      { id: 230, sort: 4, chapterTitle: "Change Communication", courseId: 43 },
      {
        id: 231,
        sort: 5,
        chapterTitle: "Measuring Change Success",
        courseId: 43,
      },

      // Course 44: Leadership Skills
      {
        id: 232,
        sort: 1,
        chapterTitle: "Introduction to Leadership",
        courseId: 44,
      },
      { id: 233, sort: 2, chapterTitle: "Leadership Styles", courseId: 44 },
      {
        id: 234,
        sort: 3,
        chapterTitle: "Effective Communication",
        courseId: 44,
      },
      { id: 235, sort: 4, chapterTitle: "Team Building Skills", courseId: 44 },
      { id: 236, sort: 5, chapterTitle: "Conflict Resolution", courseId: 44 },

      // Course 45: Presentation Skills
      {
        id: 237,
        sort: 1,
        chapterTitle: "Introduction to Presentation Skills",
        courseId: 45,
      },
      {
        id: 238,
        sort: 2,
        chapterTitle: "Structuring Your Presentation",
        courseId: 45,
      },
      {
        id: 239,
        sort: 3,
        chapterTitle: "Engaging Your Audience",
        courseId: 45,
      },
      { id: 240, sort: 4, chapterTitle: "Using Visual Aids", courseId: 45 },
      {
        id: 241,
        sort: 5,
        chapterTitle: "Handling Questions and Feedback",
        courseId: 45,
      },
    ],
  });
};
