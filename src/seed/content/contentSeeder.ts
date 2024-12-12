import { prisma } from "../../application/database";

export const contentSeeder = async () => {
  await prisma.content.createMany({
    data: [
      {
        sort: 1,
        chapterId: "0436b4d6-8f49-4eb5-9c6e-4f5342865902",
        interpreterId: null,
        contentTitle: "Introduction to Programming",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 180,
        teks: "Learn the fundamentals of programming and its applications.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "0436b4d6-8f49-4eb5-9c6e-4f5342865902",
        interpreterId: null,
        contentTitle: "Setting Up Your Environment",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 120,
        teks: "Instructions for setting up your development environment.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 2
      {
        sort: 1,
        chapterId: "1b5e0b02-9c45-46f0-83ab-fba5f706d9ef",
        interpreterId: null,
        contentTitle: "Understanding Data Types",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 150,
        teks: "Explore the various data types available in programming.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "1b5e0b02-9c45-46f0-83ab-fba5f706d9ef",
        interpreterId: null,
        contentTitle: "Variables and Constants",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 180,
        teks: "Learn about variables and constants and their usage.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 3
      {
        sort: 1,
        chapterId: "dfb7461e-406b-48ce-9d5d-4648ae8ea46a",
        interpreterId: null,
        contentTitle: "Control Flow Statements",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 210,
        teks: "Understand how control flow statements work.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "dfb7461e-406b-48ce-9d5d-4648ae8ea46a",
        interpreterId: null,
        contentTitle: "Functions and Scope",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 240,
        teks: "Dive deep into functions and variable scope.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 4
      {
        sort: 1,
        chapterId: "ee399ddd-5ddd-49c0-ae75-ae2aa14ae625",
        interpreterId: null,
        contentTitle: "Object-Oriented Programming Basics",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Introduction to the concepts of object-oriented programming.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "ee399ddd-5ddd-49c0-ae75-ae2aa14ae625",
        interpreterId: null,
        contentTitle: "Working with Classes and Objects",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 270,
        teks: "Learn how to create and manage classes and objects.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 5
      {
        sort: 1,
        chapterId: "808c5d80-e9d6-480e-a69d-c42984ba8db4",
        interpreterId: null,
        contentTitle: "Introduction to APIs",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 240,
        teks: "Learn about APIs and how to consume them in your applications.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "808c5d80-e9d6-480e-a69d-c42984ba8db4",
        interpreterId: null,
        contentTitle: "Building a Simple API",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 360,
        teks: "Step-by-step guide on how to create a simple RESTful API.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 6
      {
        sort: 1,
        chapterId: "aa5dcac8-2d26-4915-af17-fdad385e4bee",
        interpreterId: null,
        contentTitle: "Introduction to Databases",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of databases and their importance.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "aa5dcac8-2d26-4915-af17-fdad385e4bee",
        interpreterId: null,
        contentTitle: "Working with SQL",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 360,
        teks: "Learn the fundamentals of SQL and how to manipulate data.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 7
      {
        sort: 1,
        chapterId: "3b7b3f48-c874-4ec5-b152-d9a4dfb45a8c",
        interpreterId: null,
        contentTitle: "Advanced SQL Queries",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 420,
        teks: "Explore advanced SQL queries for complex data manipulation.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "3b7b3f48-c874-4ec5-b152-d9a4dfb45a8c",
        interpreterId: null,
        contentTitle: "Database Normalization",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Learn about database normalization and its benefits.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 8
      {
        sort: 1,
        chapterId: "2800f2ce-26b4-479b-86df-5d5518994f06",
        interpreterId: null,
        contentTitle: "Web Development Basics",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 360,
        teks: "Introduction to web development and its technologies.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "2800f2ce-26b4-479b-86df-5d5518994f06",
        interpreterId: null,
        contentTitle: "HTML and CSS Fundamentals",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Learn the basics of HTML and CSS for web development.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 9
      {
        sort: 1,
        chapterId: "8c4ed6f6-a0f4-4a9d-9856-c3b301e3f71a",
        interpreterId: null,
        contentTitle: "JavaScript Basics",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 360,
        teks: "Introduction to JavaScript and its applications in web development.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "8c4ed6f6-a0f4-4a9d-9856-c3b301e3f71a",
        interpreterId: null,
        contentTitle: "DOM Manipulation",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Learn how to manipulate the DOM with JavaScript.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 10
      {
        sort: 1,
        chapterId: "12a6bfc3-e50a-4128-b5b7-048cfc155e21",
        interpreterId: null,
        contentTitle: "Introduction to Frontend Frameworks",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 240,
        teks: "Explore the world of frontend frameworks and their use cases.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "12a6bfc3-e50a-4128-b5b7-048cfc155e21",
        interpreterId: null,
        contentTitle: "Building a Simple Web App",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Step-by-step guide on how to build a simple web application.",
        interpreterStatus: false,
      },
      {
        sort: 1,
        chapterId: "17ce2231-35f1-413a-adf2-2b41bdc23394",
        interpreterId: null,
        contentTitle: "Responsive Web Design",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 360,
        teks: "Learn the principles of responsive web design.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "17ce2231-35f1-413a-adf2-2b41bdc23394",
        interpreterId: null,
        contentTitle: "CSS Flexbox",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand how to use CSS Flexbox for layout.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 12
      {
        sort: 1,
        chapterId: "310f043f-c5df-4962-84f9-878206f40c96",
        interpreterId: null,
        contentTitle: "JavaScript ES6 Features",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 420,
        teks: "Explore the new features introduced in ES6.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "310f043f-c5df-4962-84f9-878206f40c96",
        interpreterId: null,
        contentTitle: "Async Programming in JavaScript",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about asynchronous programming patterns.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 13
      {
        sort: 1,
        chapterId: "a9b9dfcb-5d21-4c8a-90cd-9519a05b5234",
        interpreterId: null,
        contentTitle: "Introduction to Node.js",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand what Node.js is and its use cases.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "a9b9dfcb-5d21-4c8a-90cd-9519a05b5234",
        interpreterId: null,
        contentTitle: "Building REST APIs with Node.js",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Step-by-step guide to building REST APIs using Node.js.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 14
      {
        sort: 1,
        chapterId: "874aad6d-725d-48db-a889-9dc0fffeec73",
        interpreterId: null,
        contentTitle: "Introduction to Express.js",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Learn about Express.js and its features.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "874aad6d-725d-48db-a889-9dc0fffeec73",
        interpreterId: null,
        contentTitle: "Middleware in Express",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 360,
        teks: "Understand how middleware works in Express applications.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 15
      {
        sort: 1,
        chapterId: "e4f58dba-9dab-4d34-980b-c7f2c0c272b1",
        interpreterId: null,
        contentTitle: "Introduction to MongoDB",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know MongoDB and NoSQL databases.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "e4f58dba-9dab-4d34-980b-c7f2c0c272b1",
        interpreterId: null,
        contentTitle: "CRUD Operations in MongoDB",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn how to perform CRUD operations in MongoDB.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 16
      {
        sort: 1,
        chapterId: "48901412-c8f2-42c1-87bb-af8caeda43d7",
        interpreterId: null,
        contentTitle: "Introduction to GraphQL",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 360,
        teks: "Understand the basics of GraphQL and its benefits.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "48901412-c8f2-42c1-87bb-af8caeda43d7",
        interpreterId: null,
        contentTitle: "Building APIs with GraphQL",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn how to build a simple API using GraphQL.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 17
      {
        sort: 1,
        chapterId: "9e4cc2b6-33d3-447b-9440-eee8a7af1b10",
        interpreterId: null,
        contentTitle: "Introduction to Testing in JavaScript",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Learn about testing and its importance in development.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "9e4cc2b6-33d3-447b-9440-eee8a7af1b10",
        interpreterId: null,
        contentTitle: "Unit Testing with Jest",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 420,
        teks: "Understand how to write unit tests using Jest.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 18
      {
        sort: 1,
        chapterId: "8295565e-31b2-403d-ac9b-2bca97e6358c",
        interpreterId: null,
        contentTitle: "Introduction to Docker",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 360,
        teks: "Get to know Docker and containerization.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "8295565e-31b2-403d-ac9b-2bca97e6358c",
        interpreterId: null,
        contentTitle: "Dockerizing a Node.js Application",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn how to dockerize a Node.js application.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 19
      {
        sort: 1,
        chapterId: "fd9cd595-13c6-4867-900c-05d9554cb25e",
        interpreterId: null,
        contentTitle: "Introduction to CI/CD",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the principles of CI/CD.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "fd9cd595-13c6-4867-900c-05d9554cb25e",
        interpreterId: null,
        contentTitle: "Setting Up CI/CD with GitHub Actions",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn how to set up CI/CD pipelines using GitHub Actions.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 20
      {
        sort: 1,
        chapterId: "36155b1a-66a8-4165-8224-e5675718661e",
        interpreterId: null,
        contentTitle: "Introduction to TypeScript",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand what TypeScript is and its benefits.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "36155b1a-66a8-4165-8224-e5675718661e",
        interpreterId: null,
        contentTitle: "Using TypeScript with Node.js",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 360,
        teks: "Learn how to use TypeScript in Node.js applications.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 21
      {
        sort: 1,
        chapterId: "028260d9-e167-4459-8c66-7a06f5f82f05",
        interpreterId: null,
        contentTitle: "Introduction to Angular",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know Angular and its features.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "028260d9-e167-4459-8c66-7a06f5f82f05",
        interpreterId: null,
        contentTitle: "Building a Simple Angular App",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Step-by-step guide to building a simple Angular application.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 22
      {
        sort: 1,
        chapterId: "89cd147c-8e0d-43c7-8749-6987574e376f",
        interpreterId: null,
        contentTitle: "Introduction to React",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of React and its components.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "89cd147c-8e0d-43c7-8749-6987574e376f",
        interpreterId: null,
        contentTitle: "Building a Simple React App",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn how to build a simple application using React.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 23
      {
        sort: 1,
        chapterId: "e79a5959-2441-4969-9cae-4dc548ecb913",
        interpreterId: null,
        contentTitle: "Introduction to Vue.js",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know Vue.js and its ecosystem.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "e79a5959-2441-4969-9cae-4dc548ecb913",
        interpreterId: null,
        contentTitle: "Building a Simple Vue App",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Step-by-step guide to building a simple Vue application.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 24
      {
        sort: 1,
        chapterId: "d636206b-7bd3-4680-8eda-a8f132b640c0",
        interpreterId: null,
        contentTitle: "Introduction to Mobile Development",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of mobile application development.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "d636206b-7bd3-4680-8eda-a8f132b640c0",
        interpreterId: null,
        contentTitle: "Building a Simple Mobile App",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn how to build a simple mobile application.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 25
      {
        sort: 1,
        chapterId: "d1a7bbc2-fdcd-444c-8cd1-cc4f75b0e02c",
        interpreterId: null,
        contentTitle: "Introduction to SEO",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of Search Engine Optimization.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "d1a7bbc2-fdcd-444c-8cd1-cc4f75b0e02c",
        interpreterId: null,
        contentTitle: "SEO Best Practices",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 420,
        teks: "Learn the best practices for optimizing your website for search engines.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 26
      {
        sort: 1,
        chapterId: "de16c68e-3c0f-45f8-bf39-928774c6b734",
        interpreterId: null,
        contentTitle: "Introduction to UI/UX Design",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the principles of UI and UX design.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "de16c68e-3c0f-45f8-bf39-928774c6b734",
        interpreterId: null,
        contentTitle: "UI/UX Design Tools",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various tools for UI and UX design.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 27
      {
        sort: 1,
        chapterId: "5fd743e4-9b83-43b9-85fc-38a1b9d0d0b4",
        interpreterId: null,
        contentTitle: "Introduction to Digital Marketing",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Learn the basics of digital marketing strategies.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "5fd743e4-9b83-43b9-85fc-38a1b9d0d0b4",
        interpreterId: null,
        contentTitle: "Social Media Marketing Strategies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Understand how to effectively use social media for marketing.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 28
      {
        sort: 1,
        chapterId: "c7e45b50-301b-495a-92c6-c0dfe2ccde51",
        interpreterId: null,
        contentTitle: "Introduction to Blockchain",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of blockchain technology.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "c7e45b50-301b-495a-92c6-c0dfe2ccde51",
        interpreterId: null,
        contentTitle: "Cryptocurrencies and Their Applications",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about various cryptocurrencies and their use cases.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 29
      {
        sort: 1,
        chapterId: "8a2a40e4-e3e0-49a5-bd55-3a22cc1a20d9",
        interpreterId: null,
        contentTitle: "Introduction to Cloud Computing",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of cloud computing.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "8a2a40e4-e3e0-49a5-bd55-3a22cc1a20d9",
        interpreterId: null,
        contentTitle: "Cloud Services Overview",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 420,
        teks: "Explore various cloud services and their applications.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 30
      {
        sort: 1,
        chapterId: "ce9c5ad6-6184-4434-af20-7896cbb4cf56",
        interpreterId: null,
        contentTitle: "Introduction to Cybersecurity",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Learn the fundamentals of cybersecurity.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "ce9c5ad6-6184-4434-af20-7896cbb4cf56",
        interpreterId: null,
        contentTitle: "Cybersecurity Best Practices",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Understand the best practices for maintaining cybersecurity.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 31
      {
        sort: 1,
        chapterId: "60244431-b1d5-4fb3-95f7-35708f81ddc4",
        interpreterId: null,
        contentTitle: "Introduction to Data Science",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of data science.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "60244431-b1d5-4fb3-95f7-35708f81ddc4",
        interpreterId: null,
        contentTitle: "Data Analysis with Python",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn how to analyze data using Python.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 32
      {
        sort: 1,
        chapterId: "3960316a-7d65-4dbd-b66b-45738a890310",
        interpreterId: null,
        contentTitle: "Introduction to Machine Learning",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of machine learning.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "3960316a-7d65-4dbd-b66b-45738a890310",
        interpreterId: null,
        contentTitle: "Machine Learning Algorithms",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various machine learning algorithms.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 33
      {
        sort: 1,
        chapterId: "f127c7d1-ff26-443e-abf5-2973bc1410f1",
        interpreterId: null,
        contentTitle: "Introduction to Artificial Intelligence",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of artificial intelligence.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "f127c7d1-ff26-443e-abf5-2973bc1410f1",
        interpreterId: null,
        contentTitle: "Applications of AI",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about various applications of artificial intelligence.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 34
      {
        sort: 1,
        chapterId: "43323694-eb77-417a-b0b3-b45ef3345abe",
        interpreterId: null,
        contentTitle: "Introduction to Robotics",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of robotics.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "43323694-eb77-417a-b0b3-b45ef3345abe",
        interpreterId: null,
        contentTitle: "Building Simple Robots",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn how to build simple robots.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 35
      {
        sort: 1,
        chapterId: "d1f3562a-112b-41f4-8497-35ca7e5f895a",
        interpreterId: null,
        contentTitle: "Introduction to IoT",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of the Internet of Things.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "d1f3562a-112b-41f4-8497-35ca7e5f895a",
        interpreterId: null,
        contentTitle: "IoT Applications and Use Cases",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about various applications and use cases of IoT.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 36
      {
        sort: 1,
        chapterId: "9a83ded6-85ac-480b-89f7-6a5e6dfbd261",
        interpreterId: null,
        contentTitle: "Introduction to Augmented Reality",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of augmented reality.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "9a83ded6-85ac-480b-89f7-6a5e6dfbd261",
        interpreterId: null,
        contentTitle: "Building AR Applications",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn how to build simple augmented reality applications.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 37
      {
        sort: 1,
        chapterId: "ec2fe9f5-9e18-4ba3-aa02-a2d88f322d6f",
        interpreterId: null,
        contentTitle: "Introduction to Virtual Reality",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of virtual reality.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "ec2fe9f5-9e18-4ba3-aa02-a2d88f322d6f",
        interpreterId: null,
        contentTitle: "Building VR Experiences",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn how to create virtual reality experiences.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 38
      {
        sort: 1,
        chapterId: "81a11dd9-bd94-4ec5-9fdd-803dcdc8ec4a",
        interpreterId: null,
        contentTitle: "Introduction to 3D Printing",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of 3D printing technology.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "81a11dd9-bd94-4ec5-9fdd-803dcdc8ec4a",
        interpreterId: null,
        contentTitle: "Applications of 3D Printing",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about various applications of 3D printing.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 39
      {
        sort: 1,
        chapterId: "d8f5ef2c-6807-4292-96e0-8b8d7b2d44f6",
        interpreterId: null,
        contentTitle: "Introduction to Quantum Computing",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of quantum computing.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "d8f5ef2c-6807-4292-96e0-8b8d7b2d44f6",
        interpreterId: null,
        contentTitle: "Quantum Algorithms",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about various quantum algorithms.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 40
      {
        sort: 1,
        chapterId: "15b78438-2d1b-41cc-b932-0002992c7ee3",
        interpreterId: null,
        contentTitle: "Introduction to Data Visualization",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the principles of data visualization.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "15b78438-2d1b-41cc-b932-0002992c7ee3",
        interpreterId: null,
        contentTitle: "Data Visualization Tools",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various tools for data visualization.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 41
      {
        sort: 1,
        chapterId: "d5443135-60dc-465d-8dc8-cd7e6b3759f5",
        interpreterId: null,
        contentTitle: "Introduction to Web Development Frameworks",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of web development frameworks.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "d5443135-60dc-465d-8dc8-cd7e6b3759f5",
        interpreterId: null,
        contentTitle: "Popular Web Development Frameworks",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about various popular frameworks for web development.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 42
      {
        sort: 1,
        chapterId: "2935c2a0-a7d6-41b0-a242-d98bab3c8edf",
        interpreterId: null,
        contentTitle: "Introduction to Software Testing",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of software testing.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "2935c2a0-a7d6-41b0-a242-d98bab3c8edf",
        interpreterId: null,
        contentTitle: "Software Testing Methods",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about various software testing methods.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 43
      {
        sort: 1,
        chapterId: "dfa4b2f8-0440-4ad7-913a-4249a7f84837",
        interpreterId: null,
        contentTitle: "Introduction to Agile Methodologies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of agile methodologies.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "dfa4b2f8-0440-4ad7-913a-4249a7f84837",
        interpreterId: null,
        contentTitle: "Agile Project Management",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Understand the principles of agile project management.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 44
      {
        sort: 1,
        chapterId: "45341e29-e30c-4ba5-9fa9-435219e8ecf6",
        interpreterId: null,
        contentTitle: "Introduction to DevOps",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Learn the basics of DevOps practices.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "45341e29-e30c-4ba5-9fa9-435219e8ecf6",
        interpreterId: null,
        contentTitle: "DevOps Tools and Technologies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various tools and technologies used in DevOps.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 45
      {
        sort: 1,
        chapterId: "0901d2e0-ec16-4c89-a2e6-0eb9fc029273",
        interpreterId: null,
        contentTitle: "Introduction to Mobile Game Development",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of mobile game development.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "0901d2e0-ec16-4c89-a2e6-0eb9fc029273",
        interpreterId: null,
        contentTitle: "Building a Mobile Game",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn how to create a simple mobile game.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 46
      {
        sort: 1,
        chapterId: "05be1ad2-a7e1-4097-a961-f94f473f36f3",
        interpreterId: null,
        contentTitle: "Introduction to Game Design",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the principles of game design.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "05be1ad2-a7e1-4097-a961-f94f473f36f3",
        interpreterId: null,
        contentTitle: "Game Design Process",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about the game design process and methodologies.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 47
      {
        sort: 1,
        chapterId: "858a0dcf-c5a5-4831-94b2-410ecf3095df",
        interpreterId: null,
        contentTitle: "Introduction to Game Development Engines",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of game development engines.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "858a0dcf-c5a5-4831-94b2-410ecf3095df",
        interpreterId: null,
        contentTitle: "Popular Game Development Engines",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various popular game development engines.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 48
      {
        sort: 1,
        chapterId: "c7b23607-6a7a-4f85-9eed-5343bb141ae5",
        interpreterId: null,
        contentTitle: "Introduction to Ethical Hacking",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of ethical hacking.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "c7b23607-6a7a-4f85-9eed-5343bb141ae5",
        interpreterId: null,
        contentTitle: "Ethical Hacking Techniques",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about various ethical hacking techniques.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 49
      {
        sort: 1,
        chapterId: "9a68a914-a8e9-4147-beb6-c5f6046dbbfb",
        interpreterId: null,
        contentTitle: "Introduction to Data Protection",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of data protection laws.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "9a68a914-a8e9-4147-beb6-c5f6046dbbfb",
        interpreterId: null,
        contentTitle: "Data Protection Compliance",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about the compliance requirements for data protection.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 50
      {
        sort: 1,
        chapterId: "d830b585-0613-4fbe-a833-c76a3cfc8f94",
        interpreterId: null,
        contentTitle: "Introduction to Ethics in Technology",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the ethical considerations in technology.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "d830b585-0613-4fbe-a833-c76a3cfc8f94",
        interpreterId: null,
        contentTitle: "Technology and Society",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore the impact of technology on society.",
        interpreterStatus: false,
      },
      {
        sort: 1,
        chapterId: "4bf49f8d-d993-4b72-a5c2-1475f7710950",
        interpreterId: null,
        contentTitle: "Introduction to Smart Cities",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the concept of smart cities and their components.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "4bf49f8d-d993-4b72-a5c2-1475f7710950",
        interpreterId: null,
        contentTitle: "Smart City Technologies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various technologies used in smart cities.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 52
      {
        sort: 1,
        chapterId: "c209f0d2-ca0b-4b13-84ec-5e08eff12ccf",
        interpreterId: null,
        contentTitle: "Introduction to Renewable Energy",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of renewable energy sources.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "c209f0d2-ca0b-4b13-84ec-5e08eff12ccf",
        interpreterId: null,
        contentTitle: "Renewable Energy Technologies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about technologies that harness renewable energy.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 53
      {
        sort: 1,
        chapterId: "f1116c08-e5e5-4e4e-8425-49e1a5256410",
        interpreterId: null,
        contentTitle: "Introduction to Blockchain Technology",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the principles of blockchain technology.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "f1116c08-e5e5-4e4e-8425-49e1a5256410",
        interpreterId: null,
        contentTitle: "Blockchain Applications",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various applications of blockchain technology.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 54
      {
        sort: 1,
        chapterId: "657fdafd-797d-401f-88d5-8dc58ac50030",
        interpreterId: null,
        contentTitle: "Introduction to Artificial Intelligence Ethics",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the ethical considerations in AI.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "657fdafd-797d-401f-88d5-8dc58ac50030",
        interpreterId: null,
        contentTitle: "AI and Society",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about the societal impacts of AI technology.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 55
      {
        sort: 1,
        chapterId: "4aff943e-e3f3-4ff8-9fc8-971e9dec3232",
        interpreterId: null,
        contentTitle: "Introduction to Cybersecurity Fundamentals",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of cybersecurity.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "4aff943e-e3f3-4ff8-9fc8-971e9dec3232",
        interpreterId: null,
        contentTitle: "Cybersecurity Threats",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about various cybersecurity threats and how to mitigate them.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 56
      {
        sort: 1,
        chapterId: "bd9cd7d3-85c1-47bb-bf7f-2975a33d1661",
        interpreterId: null,
        contentTitle: "Introduction to Internet of Things (IoT)",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of the Internet of Things.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "bd9cd7d3-85c1-47bb-bf7f-2975a33d1661",
        interpreterId: null,
        contentTitle: "IoT Applications",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various applications of IoT in different fields.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 57
      {
        sort: 1,
        chapterId: "81650826-53a3-4e01-b744-02c868343874",
        interpreterId: null,
        contentTitle: "Introduction to Cloud Computing",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the fundamentals of cloud computing.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "81650826-53a3-4e01-b744-02c868343874",
        interpreterId: null,
        contentTitle: "Cloud Service Models",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about different cloud service models: IaaS, PaaS, SaaS.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 58
      {
        sort: 1,
        chapterId: "1d1f772b-9d18-4a71-83ae-f53bd90fed36",
        interpreterId: null,
        contentTitle: "Introduction to Big Data",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of big data concepts.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "1d1f772b-9d18-4a71-83ae-f53bd90fed36",
        interpreterId: null,
        contentTitle: "Big Data Technologies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore technologies used for big data processing.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 59
      {
        sort: 1,
        chapterId: "09d52ec8-0ea3-41e2-a398-e256693ada7d",
        interpreterId: null,
        contentTitle: "Introduction to Augmented Reality",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the principles of augmented reality.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "09d52ec8-0ea3-41e2-a398-e256693ada7d",
        interpreterId: null,
        contentTitle: "Applications of Augmented Reality",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about various applications of augmented reality technology.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 60
      {
        sort: 1,
        chapterId: "c8824455-b65f-4312-861b-f86f2d1404ac",
        interpreterId: null,
        contentTitle: "Introduction to Virtual Reality",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of virtual reality.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "c8824455-b65f-4312-861b-f86f2d1404ac",
        interpreterId: null,
        contentTitle: "Virtual Reality Applications",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various applications of virtual reality.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 61
      {
        sort: 1,
        chapterId: "67c416f3-1721-49c3-901c-a8ee85a72d07",
        interpreterId: null,
        contentTitle: "Introduction to 5G Technology",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of 5G technology.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "67c416f3-1721-49c3-901c-a8ee85a72d07",
        interpreterId: null,
        contentTitle: "5G Applications",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about the potential applications of 5G technology.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 62
      {
        sort: 1,
        chapterId: "9a124a5d-4ba6-41a5-983c-6d8b42e5f66e",
        interpreterId: null,
        contentTitle: "Introduction to Data Science",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the fundamentals of data science.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "9a124a5d-4ba6-41a5-983c-6d8b42e5f66e",
        interpreterId: null,
        contentTitle: "Data Science Techniques",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various techniques used in data science.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 63
      {
        sort: 1,
        chapterId: "0db00fcc-9283-4a17-adb1-394f0d3bce8c",
        interpreterId: null,
        contentTitle: "Introduction to User Experience Design",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of user experience design.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "0db00fcc-9283-4a17-adb1-394f0d3bce8c",
        interpreterId: null,
        contentTitle: "UX Design Principles",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about key principles in user experience design.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 64
      {
        sort: 1,
        chapterId: "b3a9088a-5795-4a8f-9b24-1772eeece28c",
        interpreterId: null,
        contentTitle: "Introduction to Responsive Web Design",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of responsive web design.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "b3a9088a-5795-4a8f-9b24-1772eeece28c",
        interpreterId: null,
        contentTitle: "Responsive Design Techniques",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore techniques for creating responsive web designs.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 65
      {
        sort: 1,
        chapterId: "6a1e997a-cead-4c2e-9a2f-54fd15d6c931",
        interpreterId: null,
        contentTitle: "Introduction to Search Engine Optimization (SEO)",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the fundamentals of SEO.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "6a1e997a-cead-4c2e-9a2f-54fd15d6c931",
        interpreterId: null,
        contentTitle: "SEO Strategies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about effective SEO strategies.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 66
      {
        sort: 1,
        chapterId: "7638cd3d-edc5-4c3f-bfb5-7665918cd8b0",
        interpreterId: null,
        contentTitle: "Introduction to Digital Marketing",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of digital marketing.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "7638cd3d-edc5-4c3f-bfb5-7665918cd8b0",
        interpreterId: null,
        contentTitle: "Digital Marketing Channels",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various digital marketing channels.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 67
      {
        sort: 1,
        chapterId: "f8224d16-8fe7-48f4-b38f-1476c2f6ed79",
        interpreterId: null,
        contentTitle: "Introduction to Project Management",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the fundamentals of project management.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "f8224d16-8fe7-48f4-b38f-1476c2f6ed79",
        interpreterId: null,
        contentTitle: "Project Management Methodologies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about different project management methodologies.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 68
      {
        sort: 1,
        chapterId: "38807d99-12ce-4c59-b8b3-505691e5ff24",
        interpreterId: null,
        contentTitle: "Introduction to Agile Methodology",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of agile methodology.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "38807d99-12ce-4c59-b8b3-505691e5ff24",
        interpreterId: null,
        contentTitle: "Agile Practices",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore practices used in agile project management.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 69
      {
        sort: 1,
        chapterId: "73c90e24-c59d-4edd-a1b5-23fccc2b7b77",
        interpreterId: null,
        contentTitle: "Introduction to Risk Management",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the principles of risk management.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "73c90e24-c59d-4edd-a1b5-23fccc2b7b77",
        interpreterId: null,
        contentTitle: "Risk Management Strategies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about strategies to manage project risks.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 70
      {
        sort: 1,
        chapterId: "50d9afa2-3183-40dd-baf0-ae7f16d8f4d6",
        interpreterId: null,
        contentTitle: "Introduction to Business Analysis",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the fundamentals of business analysis.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "50d9afa2-3183-40dd-baf0-ae7f16d8f4d6",
        interpreterId: null,
        contentTitle: "Business Analysis Techniques",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore techniques used in business analysis.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 71
      {
        sort: 1,
        chapterId: "949e3adf-8e63-48cc-a766-baa6de7913d6",
        interpreterId: null,
        contentTitle: "Introduction to Customer Relationship Management (CRM)",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the basics of customer relationship management.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "949e3adf-8e63-48cc-a766-baa6de7913d6",
        interpreterId: null,
        contentTitle: "CRM Strategies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about effective CRM strategies.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 72
      {
        sort: 1,
        chapterId: "e5fbc569-e404-4811-a458-19e2b8fcd8d8",
        interpreterId: null,
        contentTitle: "Introduction to Supply Chain Management",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of supply chain management.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "e5fbc569-e404-4811-a458-19e2b8fcd8d8",
        interpreterId: null,
        contentTitle: "Supply Chain Strategies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various strategies in supply chain management.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 73
      {
        sort: 1,
        chapterId: "b2c7cb38-bb6f-4eb7-a502-9e70dd5270c3",
        interpreterId: null,
        contentTitle: "Introduction to Financial Management",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the fundamentals of financial management.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "b2c7cb38-bb6f-4eb7-a502-9e70dd5270c3",
        interpreterId: null,
        contentTitle: "Financial Analysis Techniques",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about techniques used in financial analysis.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 74
      {
        sort: 1,
        chapterId: "97af819b-c9ba-4d3a-a86d-479400d76259",
        interpreterId: null,
        contentTitle: "Introduction to Entrepreneurship",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of entrepreneurship.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "97af819b-c9ba-4d3a-a86d-479400d76259",
        interpreterId: null,
        contentTitle: "Entrepreneurial Strategies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various strategies for successful entrepreneurship.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 75
      {
        sort: 1,
        chapterId: "bee8a3f8-0f57-4711-a55c-40fefe006bb1",
        interpreterId: null,
        contentTitle: "Introduction to Human Resource Management",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the fundamentals of human resource management.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "bee8a3f8-0f57-4711-a55c-40fefe006bb1",
        interpreterId: null,
        contentTitle: "HR Management Practices",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about effective HR management practices.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 76
      {
        sort: 1,
        chapterId: "ae20d461-228d-4821-9a02-036aac22e7f6",
        interpreterId: null,
        contentTitle: "Introduction to Organizational Behavior",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the basics of organizational behavior.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "ae20d461-228d-4821-9a02-036aac22e7f6",
        interpreterId: null,
        contentTitle: "Organizational Behavior Theories",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore various theories in organizational behavior.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 77
      {
        sort: 1,
        chapterId: "92a97ab1-4449-4cea-bb71-6f7276ff6a2a",
        interpreterId: null,
        contentTitle: "Introduction to Business Ethics",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the principles of business ethics.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "92a97ab1-4449-4cea-bb71-6f7276ff6a2a",
        interpreterId: null,
        contentTitle: "Ethical Decision Making",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about making ethical decisions in business.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 78
      {
        sort: 1,
        chapterId: "5091a584-fc8a-4663-be51-76c900309b08",
        interpreterId: null,
        contentTitle: "Introduction to Leadership",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Get to know the fundamentals of leadership.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "5091a584-fc8a-4663-be51-76c900309b08",
        interpreterId: null,
        contentTitle: "Leadership Styles",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Explore different leadership styles and their impact.",
        interpreterStatus: false,
      },
      // Konten untuk Chapter 79
      {
        sort: 1,
        chapterId: "19d069cb-07f8-4914-aecd-90d96e34ec4f",
        interpreterId: null,
        contentTitle: "Introduction to Innovation Management",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 300,
        teks: "Understand the importance of innovation management.",
        interpreterStatus: false,
      },
      {
        sort: 2,
        chapterId: "19d069cb-07f8-4914-aecd-90d96e34ec4f",
        interpreterId: null,
        contentTitle: "Innovation Strategies",
        contentUrl:
          "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
        duration: 480,
        teks: "Learn about strategies for managing innovation.",
        interpreterStatus: false,
      },
    ],
  });
};
