import { prisma } from "../../application/database";

export const contentSeeder = async () => {
  await prisma.content.createMany({
    data: [
      {
        sort: 1,
        chapterId: "9f295f6c-8397-4d4e-ae7e-fd207c1939cd", // Ganti dengan chapterId yang sesuai
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
        chapterId: "9f295f6c-8397-4d4e-ae7e-fd207c1939cd",
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
        chapterId: "f44e6e23-6c4b-4245-ab3a-384e32b2e122", // Ganti dengan chapterId yang sesuai
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
        chapterId: "f44e6e23-6c4b-4245-ab3a-384e32b2e122",
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
        chapterId: "c5421466-a67e-41ed-9d3a-a1004d9f139e", // Ganti dengan chapterId yang sesuai
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
        chapterId: "c5421466-a67e-41ed-9d3a-a1004d9f139e",
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
        chapterId: "672a8e76-968d-44ac-a46c-d53a278e1ab4", // Ganti dengan chapterId yang sesuai
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
        chapterId: "672a8e76-968d-44ac-a46c-d53a278e1ab4",
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
        chapterId: "37c7bda0-186c-452d-adf3-a3a243969212", // Ganti dengan chapterId yang sesuai
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
        chapterId: "37c7bda0-186c-452d-adf3-a3a243969212",
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
        chapterId: "5064d6d2-4970-4eb3-9693-f3f8dc2ad987", // Ganti dengan chapterId yang sesuai
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
        chapterId: "5064d6d2-4970-4eb3-9693-f3f8dc2ad987",
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
        chapterId: "eee397e5-e7b0-4923-bde9-d4a9d188fcbd", // Ganti dengan chapterId yang sesuai
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
        chapterId: "eee397e5-e7b0-4923-bde9-d4a9d188fcbd",
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
        chapterId: "590fd4ab-8892-41e7-adaf-3a56b19c598b", // Ganti dengan chapterId yang sesuai
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
        chapterId: "590fd4ab-8892-41e7-adaf-3a56b19c598b",
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
        chapterId: "f5e5b9fb-5050-4615-9872-e7ce51cd0364", // Ganti dengan chapterId yang sesuai
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
        chapterId: "f5e5b9fb-5050-4615-9872-e7ce51cd0364",
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
        chapterId: "a91d633b-18bb-4bd7-be5a-77d8ab0e460c", // Ganti dengan chapterId yang sesuai
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
        chapterId: "a91d633b-18bb-4bd7-be5a-77d8ab0e460c",
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
        chapterId: "814ed27c-d49c-423e-aa6e-c7ed21ddd0ea",
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
        chapterId: "814ed27c-d49c-423e-aa6e-c7ed21ddd0ea",
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
        chapterId: "320dc949-9389-47de-9356-b6032b6f0a48",
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
        chapterId: "320dc949-9389-47de-9356-b6032b6f0a48",
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
        chapterId: "785a6dd7-d01d-4e78-b0ad-a3f8540df26a",
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
        chapterId: "785a6dd7-d01d-4e78-b0ad-a3f8540df26a",
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
        chapterId: "04f09a8f-e650-44e4-8e24-0797fefa1a1c",
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
        chapterId: "04f09a8f-e650-44e4-8e24-0797fefa1a1c",
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
        chapterId: "4e6875cf-570f-43fe-a838-97dec4af7283",
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
        chapterId: "4e6875cf-570f-43fe-a838-97dec4af7283",
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
        chapterId: "3c7df72c-2cb4-42bb-80c1-fefb94f21093",
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
        chapterId: "3c7df72c-2cb4-42bb-80c1-fefb94f21093",
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
        chapterId: "d0b777e0-1059-4b0f-81a9-123ce817a059",
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
        chapterId: "d0b777e0-1059-4b0f-81a9-123ce817a059",
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
        chapterId: "ec248ea4-2493-4783-865b-c4536c2070e9",
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
        chapterId: "ec248ea4-2493-4783-865b-c4536c2070e9",
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
        chapterId: "38649e77-d7a6-465f-b6bf-d4783d618cf6",
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
        chapterId: "38649e77-d7a6-465f-b6bf-d4783d618cf6",
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
        chapterId: "17afd761-2437-4eee-9cd3-aa6296111c3a",
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
        chapterId: "17afd761-2437-4eee-9cd3-aa6296111c3a",
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
        chapterId: "7d7423eb-d7f4-436d-835f-d48cb34a75d1",
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
        chapterId: "7d7423eb-d7f4-436d-835f-d48cb34a75d1",
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
        chapterId: "abc80555-46d8-4596-b70c-6ae983e6f410",
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
        chapterId: "abc80555-46d8-4596-b70c-6ae983e6f410",
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
        chapterId: "0ed3be5c-4ed4-4387-a486-f05d4dd604c6",
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
        chapterId: "0ed3be5c-4ed4-4387-a486-f05d4dd604c6",
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
        chapterId: "0931356f-dcc0-47e6-921f-386ef2ffeb2f",
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
        chapterId: "0931356f-dcc0-47e6-921f-386ef2ffeb2f",
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
        chapterId: "8a16ff4c-afcb-44d2-92e4-2d28644cab75",
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
        chapterId: "8a16ff4c-afcb-44d2-92e4-2d28644cab75",
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
        chapterId: "c89ec26a-9feb-456e-ae90-9b5874d1570b",
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
        chapterId: "c89ec26a-9feb-456e-ae90-9b5874d1570b",
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
        chapterId: "96094833-a07c-4dc1-a061-c9167b39b83b",
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
        chapterId: "96094833-a07c-4dc1-a061-c9167b39b83b",
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
        chapterId: "f3601f95-4206-42d7-b2d7-3a9354804c51",
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
        chapterId: "f3601f95-4206-42d7-b2d7-3a9354804c51",
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
        chapterId: "83f94d75-1f09-4df7-aeb7-988517c9196f",
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
        chapterId: "83f94d75-1f09-4df7-aeb7-988517c9196f",
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
        chapterId: "d334f393-67f3-4d26-b417-eaec0df50bd7",
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
        chapterId: "d334f393-67f3-4d26-b417-eaec0df50bd7",
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
        chapterId: "64db12c9-ea11-40cc-9239-1b092a4fcf17",
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
        chapterId: "64db12c9-ea11-40cc-9239-1b092a4fcf17",
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
        chapterId: "0bc38a0e-8a2b-42e3-8421-fe9c81da00dd",
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
        chapterId: "0bc38a0e-8a2b-42e3-8421-fe9c81da00dd",
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
        chapterId: "f5468d22-3d9d-449e-8987-f309e113ad95",
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
        chapterId: "f5468d22-3d9d-449e-8987-f309e113ad95",
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
        chapterId: "9b4c994e-f12a-4c20-8550-6a4e8a7df395",
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
        chapterId: "9b4c994e-f12a-4c20-8550-6a4e8a7df395",
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
        chapterId: "9b37fa63-1d3f-4534-af77-7abcbc60f077",
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
        chapterId: "9b37fa63-1d3f-4534-af77-7abcbc60f077",
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
        chapterId: "c7f3c90c-5530-4afa-99e0-a255cc8afb09",
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
        chapterId: "c7f3c90c-5530-4afa-99e0-a255cc8afb09",
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
        chapterId: "df49934d-97b8-48e7-b6a0-4a3b1e205d72",
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
        chapterId: "df49934d-97b8-48e7-b6a0-4a3b1e205d72",
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
        chapterId: "b85ff571-b183-4313-81e4-6ed1cb96d882",
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
        chapterId: "b85ff571-b183-4313-81e4-6ed1cb96d882",
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
        chapterId: "21aa06ea-7f3c-490b-ad86-ae78c659bc49",
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
        chapterId: "21aa06ea-7f3c-490b-ad86-ae78c659bc49",
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
        chapterId: "08c19828-1940-48ed-b389-98333bc0556e",
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
        chapterId: "08c19828-1940-48ed-b389-98333bc0556e",
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
        chapterId: "f410ac69-3475-49a7-8101-ff044533eaae",
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
        chapterId: "f410ac69-3475-49a7-8101-ff044533eaae",
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
        chapterId: "fa7f7f3a-51ef-4bcd-910b-b00bd49bc645",
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
        chapterId: "fa7f7f3a-51ef-4bcd-910b-b00bd49bc645",
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
        chapterId: "72622f8d-dbea-4816-ae88-f18ce4ae233f",
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
        chapterId: "72622f8d-dbea-4816-ae88-f18ce4ae233f",
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
        chapterId: "49038969-e29c-486c-91f8-508edb1532dc",
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
        chapterId: "49038969-e29c-486c-91f8-508edb1532dc",
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
        chapterId: "1eb52d92-95ad-4428-a5af-3e6a1ffeb033",
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
        chapterId: "1eb52d92-95ad-4428-a5af-3e6a1ffeb033",
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
        chapterId: "f729db60-dcaa-4b37-9b88-e3c864102d9c",
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
        chapterId: "f729db60-dcaa-4b37-9b88-e3c864102d9c",
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
        chapterId: "11b232fe-862f-4640-a856-dd63266ac86d",
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
        chapterId: "11b232fe-862f-4640-a856-dd63266ac86d",
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
        chapterId: "46404efc-9de2-4c8c-b389-38b3032a9e18",
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
        chapterId: "46404efc-9de2-4c8c-b389-38b3032a9e18",
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
        chapterId: "df15fc6a-cbeb-4721-9e58-3c9d8d0f27ff",
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
        chapterId: "df15fc6a-cbeb-4721-9e58-3c9d8d0f27ff",
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
        chapterId: "e4b53968-71c3-4ab4-9116-eca407c9ffb9",
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
        chapterId: "e4b53968-71c3-4ab4-9116-eca407c9ffb9",
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
        chapterId: "ec2b0a3e-0569-4a78-978d-6971a349c448",
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
        chapterId: "ec2b0a3e-0569-4a78-978d-6971a349c448",
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
        chapterId: "5d55a6ef-b8c4-418a-ae1f-79edb9e13cca",
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
        chapterId: "5d55a6ef-b8c4-418a-ae1f-79edb9e13cca",
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
        chapterId: "de7c6098-97b2-4df2-a125-493362c5c09a",
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
        chapterId: "de7c6098-97b2-4df2-a125-493362c5c09a",
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
        chapterId: "8cc394e8-0469-4235-a525-895492afd55f",
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
        chapterId: "8cc394e8-0469-4235-a525-895492afd55f",
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
        chapterId: "e8e110e9-5100-42fc-bd2e-c29de6308e90",
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
        chapterId: "e8e110e9-5100-42fc-bd2e-c29de6308e90",
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
        chapterId: "9a52ce77-ddea-404f-b862-e4b6d214367e",
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
        chapterId: "9a52ce77-ddea-404f-b862-e4b6d214367e",
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
        chapterId: "8041af55-9468-42c1-8c5b-16f1336e8f62",
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
        chapterId: "8041af55-9468-42c1-8c5b-16f1336e8f62",
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
        chapterId: "baf5d7b2-3f8b-4cb3-b951-49c5bd0549fb",
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
        chapterId: "baf5d7b2-3f8b-4cb3-b951-49c5bd0549fb",
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
        chapterId: "b5e3cc9c-e98c-400e-9091-309ef684dd65",
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
        chapterId: "b5e3cc9c-e98c-400e-9091-309ef684dd65",
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
        chapterId: "a3970a73-be74-4ab9-a7c0-41f04ac39f2c",
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
        chapterId: "a3970a73-be74-4ab9-a7c0-41f04ac39f2c",
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
        chapterId: "d943e8d2-9097-4ae0-8364-be12a625bb74",
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
        chapterId: "d943e8d2-9097-4ae0-8364-be12a625bb74",
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
        chapterId: "449c94b0-8105-47b5-91bd-83aa1ee19d7c",
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
        chapterId: "449c94b0-8105-47b5-91bd-83aa1ee19d7c",
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
        chapterId: "157ab447-5424-41dc-985f-677cfb2ebaf2",
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
        chapterId: "157ab447-5424-41dc-985f-677cfb2ebaf2",
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
        chapterId: "677cfa73-aef3-4797-88e9-22a3c318cc67",
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
        chapterId: "677cfa73-aef3-4797-88e9-22a3c318cc67",
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
        chapterId: "4df453f5-9462-420b-9dbd-0022e388040a",
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
        chapterId: "4df453f5-9462-420b-9dbd-0022e388040a",
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
        chapterId: "92d171a2-2590-4486-89d7-e78cce7d3b46",
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
        chapterId: "92d171a2-2590-4486-89d7-e78cce7d3b46",
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
        chapterId: "f0589034-e7ea-43c8-964c-55a0b23e22c9",
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
        chapterId: "f0589034-e7ea-43c8-964c-55a0b23e22c9",
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
        chapterId: "41ae9b42-b1a7-4b13-b943-fd732f5af056",
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
        chapterId: "41ae9b42-b1a7-4b13-b943-fd732f5af056",
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
        chapterId: "4511c6e0-4ccd-46b8-b081-eb60b92641d5",
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
        chapterId: "4511c6e0-4ccd-46b8-b081-eb60b92641d5",
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
        chapterId: "5fcf5f33-0a45-40da-94f7-51cb7d549f95",
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
        chapterId: "5fcf5f33-0a45-40da-94f7-51cb7d549f95",
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
        chapterId: "895c9bcb-4bc7-488f-88a0-727a3b952fee",
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
        chapterId: "895c9bcb-4bc7-488f-88a0-727a3b952fee",
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
        chapterId: "686e87fe-ecdc-4348-be19-0a3a96f6ad18",
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
        chapterId: "686e87fe-ecdc-4348-be19-0a3a96f6ad18",
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
        chapterId: "dcf36917-1162-4834-b806-2c166d2a73f5",
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
        chapterId: "dcf36917-1162-4834-b806-2c166d2a73f5",
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
        chapterId: "c5a3b70f-8101-4d50-abe4-5c9c54ae9f55",
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
        chapterId: "c5a3b70f-8101-4d50-abe4-5c9c54ae9f55",
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
        chapterId: "e40aeffe-0cad-4d7c-9b7c-5eda49266bd1",
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
        chapterId: "e40aeffe-0cad-4d7c-9b7c-5eda49266bd1",
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
        chapterId: "89abca4f-1eed-463b-b12e-9ba8ca8a704f",
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
        chapterId: "89abca4f-1eed-463b-b12e-9ba8ca8a704f",
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
        chapterId: "70fa1d92-6048-44f7-ae63-545a5692e198",
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
        chapterId: "70fa1d92-6048-44f7-ae63-545a5692e198",
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
        chapterId: "cf1f4692-fe2c-4ad9-8bd4-02484f39527a",
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
        chapterId: "cf1f4692-fe2c-4ad9-8bd4-02484f39527a",
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
        chapterId: "cf0b3434-107b-4645-9881-476bfe343df1",
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
        chapterId: "cf0b3434-107b-4645-9881-476bfe343df1",
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
