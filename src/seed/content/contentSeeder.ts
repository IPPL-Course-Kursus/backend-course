import { prisma } from "../../application/database";

export const contentSeeder = async () => {
  await prisma.content.createMany({
    data: [
      // {
      //   sort: 1,
      //   chapterId: "c7ac147e-5ffa-4954-8cdd-d1cbd23133b9",
      //   interpreterId: null,
      //   contentTitle: "Introduction to Programming",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 180,
      //   teks: "Learn the fundamentals of programming and its applications.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "c7ac147e-5ffa-4954-8cdd-d1cbd23133b9",
      //   interpreterId: null,
      //   contentTitle: "Setting Up Your Environment",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 120,
      //   teks: "Instructions for setting up your development environment.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 2
      // {
      //   sort: 1,
      //   chapterId: "d6355fd0-f147-42d1-8cf9-afa33b2b32af",
      //   interpreterId: null,
      //   contentTitle: "Understanding Data Types",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 150,
      //   teks: "Explore the various data types available in programming.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "d6355fd0-f147-42d1-8cf9-afa33b2b32af",
      //   interpreterId: null,
      //   contentTitle: "Variables and Constants",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 180,
      //   teks: "Learn about variables and constants and their usage.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 3
      // {
      //   sort: 1,
      //   chapterId: "41ca227c-b849-4f77-b428-7cbf06ba1269",
      //   interpreterId: null,
      //   contentTitle: "Control Flow Statements",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 210,
      //   teks: "Understand how control flow statements work.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "41ca227c-b849-4f77-b428-7cbf06ba1269",
      //   interpreterId: null,
      //   contentTitle: "Functions and Scope",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 240,
      //   teks: "Dive deep into functions and variable scope.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 4
      // {
      //   sort: 1,
      //   chapterId: "d32cbe9a-946f-4d0a-a1f9-9b1979682556",
      //   interpreterId: null,
      //   contentTitle: "Object-Oriented Programming Basics",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 300,
      //   teks: "Introduction to the concepts of object-oriented programming.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "d32cbe9a-946f-4d0a-a1f9-9b1979682556",
      //   interpreterId: null,
      //   contentTitle: "Working with Classes and Objects",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 270,
      //   teks: "Learn how to create and manage classes and objects.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 5
      // {
      //   sort: 1,
      //   chapterId: "9d9c772e-ec76-49ff-bc09-ae6192bc247c",
      //   interpreterId: null,
      //   contentTitle: "Introduction to APIs",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 240,
      //   teks: "Learn about APIs and how to consume them in your applications.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "9d9c772e-ec76-49ff-bc09-ae6192bc247c",
      //   interpreterId: null,
      //   contentTitle: "Building a Simple API",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 360,
      //   teks: "Step-by-step guide on how to create a simple RESTful API.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 6
      // {
      //   sort: 1,
      //   chapterId: "8f21992a-170d-4df3-b2ca-7c3e4ed64e59",
      //   interpreterId: null,
      //   contentTitle: "Introduction to Databases",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 300,
      //   teks: "Understand the basics of databases and their importance.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "8f21992a-170d-4df3-b2ca-7c3e4ed64e59",
      //   interpreterId: null,
      //   contentTitle: "Working with SQL",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 360,
      //   teks: "Learn the fundamentals of SQL and how to manipulate data.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 7
      // {
      //   sort: 1,
      //   chapterId: "2e59d48b-2419-442e-bd2c-770357df3f83",
      //   interpreterId: null,
      //   contentTitle: "Advanced SQL Queries",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 420,
      //   teks: "Explore advanced SQL queries for complex data manipulation.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "2e59d48b-2419-442e-bd2c-770357df3f83",
      //   interpreterId: null,
      //   contentTitle: "Database Normalization",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 300,
      //   teks: "Learn about database normalization and its benefits.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 8
      // {
      //   sort: 1,
      //   chapterId: "06fe937f-84eb-4421-ae4d-7454ecb98e90",
      //   interpreterId: null,
      //   contentTitle: "Web Development Basics",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 360,
      //   teks: "Introduction to web development and its technologies.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "06fe937f-84eb-4421-ae4d-7454ecb98e90",
      //   interpreterId: null,
      //   contentTitle: "HTML and CSS Fundamentals",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 300,
      //   teks: "Learn the basics of HTML and CSS for web development.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 9
      // {
      //   sort: 1,
      //   chapterId: "79371320-6944-46ba-9fb2-75ca6aee1d91",
      //   interpreterId: null,
      //   contentTitle: "JavaScript Basics",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 360,
      //   teks: "Introduction to JavaScript and its applications in web development.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "79371320-6944-46ba-9fb2-75ca6aee1d91",
      //   interpreterId: null,
      //   contentTitle: "DOM Manipulation",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 300,
      //   teks: "Learn how to manipulate the DOM with JavaScript.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 10
      // {
      //   sort: 1,
      //   chapterId: "ece52734-de44-4069-b2cd-89f9d2d82895",
      //   interpreterId: null,
      //   contentTitle: "Introduction to Frontend Frameworks",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 240,
      //   teks: "Explore the world of frontend frameworks and their use cases.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "ece52734-de44-4069-b2cd-89f9d2d82895",
      //   interpreterId: null,
      //   contentTitle: "Building a Simple Web App",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 480,
      //   teks: "Step-by-step guide on how to build a simple web application.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 1,
      //   chapterId: "375b2166-6a93-45af-acb6-8176c793c731",
      //   interpreterId: null,
      //   contentTitle: "Responsive Web Design",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 360,
      //   teks: "Learn the principles of responsive web design.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "375b2166-6a93-45af-acb6-8176c793c731",
      //   interpreterId: null,
      //   contentTitle: "CSS Flexbox",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 300,
      //   teks: "Understand how to use CSS Flexbox for layout.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 12
      // {
      //   sort: 1,
      //   chapterId: "15b068b7-d1b7-4c05-a7f4-649aa580e3d5",
      //   interpreterId: null,
      //   contentTitle: "JavaScript ES6 Features",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 420,
      //   teks: "Explore the new features introduced in ES6.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "15b068b7-d1b7-4c05-a7f4-649aa580e3d5",
      //   interpreterId: null,
      //   contentTitle: "Async Programming in JavaScript",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 480,
      //   teks: "Learn about asynchronous programming patterns.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 13
      // {
      //   sort: 1,
      //   chapterId: "494a3da4-0963-4195-ad58-0856a18da1d2",
      //   interpreterId: null,
      //   contentTitle: "Introduction to Node.js",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 300,
      //   teks: "Understand what Node.js is and its use cases.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "494a3da4-0963-4195-ad58-0856a18da1d2",
      //   interpreterId: null,
      //   contentTitle: "Building REST APIs with Node.js",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 480,
      //   teks: "Step-by-step guide to building REST APIs using Node.js.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 14
      // {
      //   sort: 1,
      //   chapterId: "6e9293e0-a02a-49ab-b67c-26788a410a55",
      //   interpreterId: null,
      //   contentTitle: "Introduction to Express.js",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 300,
      //   teks: "Learn about Express.js and its features.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "6e9293e0-a02a-49ab-b67c-26788a410a55",
      //   interpreterId: null,
      //   contentTitle: "Middleware in Express",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 360,
      //   teks: "Understand how middleware works in Express applications.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 15
      // {
      //   sort: 1,
      //   chapterId: "54658802-377d-4359-9311-d7c3ea968193",
      //   interpreterId: null,
      //   contentTitle: "Introduction to MongoDB",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 300,
      //   teks: "Get to know MongoDB and NoSQL databases.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "54658802-377d-4359-9311-d7c3ea968193",
      //   interpreterId: null,
      //   contentTitle: "CRUD Operations in MongoDB",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 480,
      //   teks: "Learn how to perform CRUD operations in MongoDB.",
      //   interpreterStatus: false,
      // },
      // Konten untuk Chapter 16
      // {
      //   sort: 1,
      //   chapterId: "d0bc3b4c-5c78-46fa-be04-b1a77a4e8f14",
      //   interpreterId: null,
      //   contentTitle: "Introduction to GraphQL",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 360,
      //   teks: "Understand the basics of GraphQL and its benefits.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "d0bc3b4c-5c78-46fa-be04-b1a77a4e8f14",
      //   interpreterId: null,
      //   contentTitle: "Building APIs with GraphQL",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 480,
      //   teks: "Learn how to build a simple API using GraphQL.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 17
      // {
      //   sort: 1,
      //   chapterId: "a67de3b0-0d4f-488f-9dd1-1936de48f5dc",
      //   interpreterId: null,
      //   contentTitle: "Introduction to Testing in JavaScript",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 300,
      //   teks: "Learn about testing and its importance in development.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "a67de3b0-0d4f-488f-9dd1-1936de48f5dc",
      //   interpreterId: null,
      //   contentTitle: "Unit Testing with Jest",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 420,
      //   teks: "Understand how to write unit tests using Jest.",
      //   interpreterStatus: false,
      // },
      // // Konten untuk Chapter 18
      // {
      //   sort: 1,
      //   chapterId: "b9514307-4ef2-4a56-a241-63e3a2fbbe22",
      //   interpreterId: null,
      //   contentTitle: "Introduction to Docker",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 360,
      //   teks: "Get to know Docker and containerization.",
      //   interpreterStatus: false,
      // },
      // {
      //   sort: 2,
      //   chapterId: "b9514307-4ef2-4a56-a241-63e3a2fbbe22",
      //   interpreterId: null,
      //   contentTitle: "Dockerizing a Node.js Application",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 480,
      //   teks: "Learn how to dockerize a Node.js application.",
      //   interpreterStatus: false,
      // },
      // Konten untuk Chapter 19
      // {
      //   sort: 1,
      //   chapterId: "3658bedb-9cf3-4162-8ab5-6e7c9059dd85",
      //   interpreterId: null,
      //   contentTitle: "Introduction to CI/CD",
      //   contentUrl:
      //     "https://www.youtube.com/embed/56hTiA2EPu8?si=b3tAVJAxa5skkRFy",
      //   duration: 300,
      //   teks: "Understand the principles of CI/CD.",
      //   interpreterStatus: false,
      // },
      {
        sort: 2,
        chapterId: "3658bedb-9cf3-4162-8ab5-6e7c9059dd85",
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
        chapterId: "61fc91d7-c5fc-48e9-b189-03239e939af1",
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
        chapterId: "61fc91d7-c5fc-48e9-b189-03239e939af1",
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
        chapterId: "d6d3628d-0c7d-4c15-94ef-04588bed0e3f",
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
        chapterId: "d6d3628d-0c7d-4c15-94ef-04588bed0e3f",
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
        chapterId: "3b984b33-994f-4a98-bb18-61ad077a36ea",
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
        chapterId: "3b984b33-994f-4a98-bb18-61ad077a36ea",
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
        chapterId: "d7d44115-332f-4278-b029-b5a89f87fd10",
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
        chapterId: "d7d44115-332f-4278-b029-b5a89f87fd10",
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
        chapterId: "3004b94b-b6cf-4b94-8bd6-762ad6e037b5",
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
        chapterId: "3004b94b-b6cf-4b94-8bd6-762ad6e037b5",
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
        chapterId: "ecdf9c04-eed4-428c-b8b3-efba4fc7ad01",
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
        chapterId: "ecdf9c04-eed4-428c-b8b3-efba4fc7ad01",
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
        chapterId: "655dc27e-5031-45ad-ad2a-d538a8a6cf6c",
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
        chapterId: "655dc27e-5031-45ad-ad2a-d538a8a6cf6c",
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
        chapterId: "f450df06-5215-4ec6-b021-54e6dd0a1e2b",
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
        chapterId: "f450df06-5215-4ec6-b021-54e6dd0a1e2b",
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
        chapterId: "f8b07460-e1c5-4c13-8e4a-e0f2b680b6a2",
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
        chapterId: "f8b07460-e1c5-4c13-8e4a-e0f2b680b6a2",
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
        chapterId: "0fb8bde3-6798-475a-b54f-45a99ac4fd33",
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
        chapterId: "0fb8bde3-6798-475a-b54f-45a99ac4fd33",
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
        chapterId: "13be79fe-588a-4495-9512-d405587687c2",
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
        chapterId: "13be79fe-588a-4495-9512-d405587687c2",
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
        chapterId: "cf80f54d-e38a-48bc-b256-1fd5e7ed316d",
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
        chapterId: "cf80f54d-e38a-48bc-b256-1fd5e7ed316d",
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
        chapterId: "e0567ebb-6e9d-49d9-977f-31d9a69ce3e9",
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
        chapterId: "e0567ebb-6e9d-49d9-977f-31d9a69ce3e9",
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
        chapterId: "f6eb93d0-4f6c-4159-8f81-fdacf048da06",
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
        chapterId: "f6eb93d0-4f6c-4159-8f81-fdacf048da06",
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
        chapterId: "3029870a-044e-4952-a51f-a226e2a21c8b",
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
        chapterId: "3029870a-044e-4952-a51f-a226e2a21c8b",
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
        chapterId: "ab93030a-1443-49be-86a8-4a3eea3509aa",
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
        chapterId: "ab93030a-1443-49be-86a8-4a3eea3509aa",
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
        chapterId: "8a1d8275-425c-415c-a7ba-3aa650dfe0ff",
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
        chapterId: "8a1d8275-425c-415c-a7ba-3aa650dfe0ff",
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
        chapterId: "bfb9125d-1ef8-4a80-9286-ddaef00688bb",
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
        chapterId: "bfb9125d-1ef8-4a80-9286-ddaef00688bb",
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
        chapterId: "b463f69a-9840-4445-8aea-c3f6117c8c33",
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
        chapterId: "b463f69a-9840-4445-8aea-c3f6117c8c33",
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
        chapterId: "2d4d942e-9991-4d3a-be73-b5d0c0809c4a",
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
        chapterId: "2d4d942e-9991-4d3a-be73-b5d0c0809c4a",
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
        chapterId: "c4d4a5ec-7f62-4577-939f-0c8975d81300",
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
        chapterId: "c4d4a5ec-7f62-4577-939f-0c8975d81300",
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
        chapterId: "5251988e-ec4c-4ad4-8153-4e937e86adf6",
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
        chapterId: "5251988e-ec4c-4ad4-8153-4e937e86adf6",
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
        chapterId: "2887c09d-a410-429d-8364-d011edfdbe98",
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
        chapterId: "2887c09d-a410-429d-8364-d011edfdbe98",
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
        chapterId: "c3626fe9-1566-483a-bf32-4b5db37d9198",
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
        chapterId: "c3626fe9-1566-483a-bf32-4b5db37d9198",
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
        chapterId: "f719020a-0ef0-45f2-9b26-fe96403787df",
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
        chapterId: "f719020a-0ef0-45f2-9b26-fe96403787df",
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
        chapterId: "646f566f-c41f-4007-ad49-4648da4a3cd5",
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
        chapterId: "646f566f-c41f-4007-ad49-4648da4a3cd5",
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
        chapterId: "36721a71-80ad-4bcf-b1c1-2214c3fc90fe",
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
        chapterId: "36721a71-80ad-4bcf-b1c1-2214c3fc90fe",
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
        chapterId: "3d671c84-6e36-4794-9e81-35aec26b4182",
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
        chapterId: "3d671c84-6e36-4794-9e81-35aec26b4182",
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
        chapterId: "819e4494-fd6e-4128-ae74-dcd4ec06fa34",
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
        chapterId: "819e4494-fd6e-4128-ae74-dcd4ec06fa34",
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
        chapterId: "26b06787-3ddc-4432-9ff8-59e1e4277140",
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
        chapterId: "26b06787-3ddc-4432-9ff8-59e1e4277140",
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
        chapterId: "437e550b-5433-43e2-b2cb-88f550acab10",
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
        chapterId: "437e550b-5433-43e2-b2cb-88f550acab10",
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
        chapterId: "a290b672-5b0f-4b90-9b39-a4b61fd4c77c",
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
        chapterId: "a290b672-5b0f-4b90-9b39-a4b61fd4c77c",
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
        chapterId: "398c219c-f02b-4c21-baeb-a50352979a60",
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
        chapterId: "398c219c-f02b-4c21-baeb-a50352979a60",
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
        chapterId: "fd1ac549-a53d-471f-82f7-92070587d8a9",
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
        chapterId: "fd1ac549-a53d-471f-82f7-92070587d8a9",
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
        chapterId: "0c9568c7-2fdd-4c4c-8fc2-088b1cc450c2",
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
        chapterId: "0c9568c7-2fdd-4c4c-8fc2-088b1cc450c2",
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
        chapterId: "ea56c712-6972-4d88-8277-c21b3bc648e9",
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
        chapterId: "ea56c712-6972-4d88-8277-c21b3bc648e9",
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
        chapterId: "23cfe779-e359-44ec-8553-03b4c3878c79",
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
        chapterId: "23cfe779-e359-44ec-8553-03b4c3878c79",
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
        chapterId: "352479d7-12fa-4795-99d5-7f6a91b9f96c",
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
        chapterId: "352479d7-12fa-4795-99d5-7f6a91b9f96c",
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
        chapterId: "9eb30e4a-28b8-40d6-b575-dc708c3ed8b7",
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
        chapterId: "9eb30e4a-28b8-40d6-b575-dc708c3ed8b7",
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
        chapterId: "4877e9a3-7bde-45a0-ade1-bae00a067676",
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
        chapterId: "4877e9a3-7bde-45a0-ade1-bae00a067676",
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
        chapterId: "19b4ac42-d088-47e7-ab28-50570037501f",
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
        chapterId: "19b4ac42-d088-47e7-ab28-50570037501f",
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
        chapterId: "218a26db-760f-4649-aa00-f3ed95c71a3e",
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
        chapterId: "218a26db-760f-4649-aa00-f3ed95c71a3e",
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
        chapterId: "e2a27ae9-3278-4c60-ad89-15fa928077cb",
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
        chapterId: "e2a27ae9-3278-4c60-ad89-15fa928077cb",
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
        chapterId: "313ac0df-58eb-4b2b-90e7-b016786fa394",
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
        chapterId: "313ac0df-58eb-4b2b-90e7-b016786fa394",
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
        chapterId: "14a43ead-8731-46e6-a68f-ff4714ab99e7",
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
        chapterId: "14a43ead-8731-46e6-a68f-ff4714ab99e7",
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
        chapterId: "f3e24cdc-1c26-4912-bae0-4f831553255a",
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
        chapterId: "f3e24cdc-1c26-4912-bae0-4f831553255a",
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
        chapterId: "be4b8894-9712-4901-81f8-e0835ec4986c",
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
        chapterId: "be4b8894-9712-4901-81f8-e0835ec4986c",
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
        chapterId: "fe39eb32-c859-4073-b77d-dff41f61a33e",
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
        chapterId: "fe39eb32-c859-4073-b77d-dff41f61a33e",
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
        chapterId: "031ee1bb-91b2-43a4-9937-f545500ea65d",
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
        chapterId: "031ee1bb-91b2-43a4-9937-f545500ea65d",
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
        chapterId: "849bf419-3342-4a0f-a9b7-d87065ccc32c",
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
        chapterId: "849bf419-3342-4a0f-a9b7-d87065ccc32c",
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
        chapterId: "1f04abfb-2b84-4dea-9143-6092962d9a51",
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
        chapterId: "1f04abfb-2b84-4dea-9143-6092962d9a51",
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
        chapterId: "ae98c356-829c-4335-8915-2bf47da3d453",
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
        chapterId: "ae98c356-829c-4335-8915-2bf47da3d453",
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
        chapterId: "7bb54b98-5059-4986-9f63-9939d35700aa",
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
        chapterId: "7bb54b98-5059-4986-9f63-9939d35700aa",
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
        chapterId: "0eb641ec-22d5-4117-b770-0a99ca9d3ac9",
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
        chapterId: "0eb641ec-22d5-4117-b770-0a99ca9d3ac9",
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
        chapterId: "3d5f0bb5-af94-4c35-b8df-742762e936c6",
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
        chapterId: "3d5f0bb5-af94-4c35-b8df-742762e936c6",
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
        chapterId: "35beae77-474d-4ccc-9324-5f3675ec8758",
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
        chapterId: "35beae77-474d-4ccc-9324-5f3675ec8758",
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
        chapterId: "792339e3-7567-4c89-91de-e6d7a7144b8b",
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
        chapterId: "792339e3-7567-4c89-91de-e6d7a7144b8b",
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
        chapterId: "71214666-dcde-4a1e-9dd9-aaee3d62e6b2",
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
        chapterId: "71214666-dcde-4a1e-9dd9-aaee3d62e6b2",
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
        chapterId: "d815cce5-7e13-47de-8d0f-a6114a2c7be7",
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
        chapterId: "d815cce5-7e13-47de-8d0f-a6114a2c7be7",
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
        chapterId: "68f75586-dbed-4e0e-8d76-052ff1bd4de4",
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
        chapterId: "68f75586-dbed-4e0e-8d76-052ff1bd4de4",
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
