// import { faker } from "@faker-js/faker";
// import prisma from "../../application/database";

// const generateCategories = async (num: number) => {
//   for (let i = 0; i < num; i++) {
//     await prisma.category.create({
//       data: {
//         categoryName: faker.commerce.department(),
//         categoryCode: faker.random.alphaNumeric(5),
//         image: faker.image.abstract(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     });
//   }
//   console.log(`${num} categories created.`);
// };

// const generateCourseLevels = async (num: number) => {
//   for (let i = 0; i < num; i++) {
//     await prisma.courseLevel.create({
//       data: {
//         levelName: faker.lorem.word(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     });
//   }
//   console.log(`${num} course levels created.`);
// };

// const generateTypeCourses = async (num: number) => {
//   for (let i = 0; i < num; i++) {
//     await prisma.typeCourse.create({
//       data: {
//         typeName: faker.lorem.word(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     });
//   }
//   console.log(`${num} type courses created.`);
// };

// const generateUsers = async (num: number) => {
//   for (let i = 0; i < num; i++) {
//     await prisma.user.create({
//       data: {
//         uid: faker.datatype.uuid(),
//         fullName: faker.name.fullName(),
//         image: faker.image.avatar(),
//         phoneNumber: faker.phone.number("+62 ### #### ####"),
//         role: faker.helpers.arrayElement(["User", "Instruktur", "Admin"]),
//         tanggalLahir: faker.date.past(30, new Date("2000-01-01")),
//         city: faker.address.city(),
//         country: faker.address.country(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     });
//   }
//   console.log(`${num} users created.`);
// };

// const generateCourses = async (num: number) => {
//   const users = await prisma.user.findMany();
//   const categories = await prisma.category.findMany();
//   const courseLevels = await prisma.courseLevel.findMany();
//   const typeCourses = await prisma.typeCourse.findMany();

//   for (let i = 0; i < num; i++) {
//     const user = faker.helpers.arrayElement(users);
//     const category = faker.helpers.arrayElement(categories);
//     const courseLevel = faker.helpers.arrayElement(courseLevels);
//     const typeCourse = faker.helpers.arrayElement(typeCourses);

//     await prisma.course.create({
//       data: {
//         categoryId: category.id,
//         userId: user.uid,
//         courseLevelId: courseLevel.id,
//         typeCourseId: typeCourse.id,
//         courseCode: faker.random.alphaNumeric(8),
//         courseName: faker.company.name(),
//         image: faker.image.abstract(),
//         aboutCourse: faker.lorem.paragraph(),
//         intendedFor: faker.lorem.sentence(),
//         courseDiscountPercent: faker.datatype.number({ min: 0, max: 50 }),
//         coursePrice: faker.datatype.float({
//           min: 100,
//           max: 1000,
//           precision: 0.01,
//         }),
//         courseDiscountPrice: faker.datatype.float({
//           min: 0,
//           max: 500,
//           precision: 0.01,
//         }),
//         promoStatus: faker.datatype.boolean(),
//         publish: faker.helpers.arrayElement(["Published", "Archived"]),
//         totalDuration: faker.datatype.float({
//           min: 1,
//           max: 100,
//           precision: 0.1,
//         }),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     });
//   }
//   console.log(`${num} courses created.`);
// };

// const generateChapters = async (num: number) => {
//   const courses = await prisma.course.findMany();

//   for (let i = 0; i < num; i++) {
//     const course = faker.helpers.arrayElement(courses);

//     await prisma.chapter.create({
//       data: {
//         courseId: course.id,
//         chapterTitle: faker.lorem.words(3),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     });
//   }
//   console.log(`${num} chapters created.`);
// };

// const generateInterpreters = async (num: number) => {
//   for (let i = 0; i < num; i++) {
//     await prisma.interpreter.create({
//       data: {
//         languageInterpreter: faker.helpers.arrayElement([
//           "Python",
//           "Java",
//           "Kotlin",
//           "JavaScript",
//           "PHP",
//           "Swift",
//           "Dart",
//         ]),
//         sourceCode: faker.lorem.paragraph(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     });
//   }
//   console.log(`${num} interpreters created.`);
// };

// const generateContents = async (num: number) => {
//   const chapters = await prisma.chapter.findMany();
//   const interpreters = await prisma.interpreter.findMany();

//   for (let i = 0; i < num; i++) {
//     const chapter = faker.helpers.arrayElement(chapters);
//     const interpreter = faker.helpers.arrayElement(interpreters);

//     await prisma.content.create({
//       data: {
//         chapterId: chapter.id,
//         interpreterId: interpreter.id,
//         contentTitle: faker.lorem.words(3),
//         contentUrl: faker.internet.url(),
//         duration: faker.random.numeric(2),
//         teks: faker.lorem.paragraph(),
//         interpreterStatus: faker.datatype.boolean(),
//         contentStatus: faker.datatype.boolean(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     });
//   }
//   console.log(`${num} contents created.`);
// };

// const generateCourseUsers = async (num: number) => {
//   const users = await prisma.user.findMany();
//   const courses = await prisma.course.findMany();

//   for (let i = 0; i < num; i++) {
//     const user = faker.helpers.arrayElement(users);
//     const course = faker.helpers.arrayElement(courses);

//     await prisma.courseUser.create({
//       data: {
//         userId: user.id,
//         courseId: course.id,
//         contentFinish: faker.datatype.float({
//           min: 0,
//           max: 100,
//           precision: 0.1,
//         }),
//         courseStatus: faker.helpers.arrayElement([
//           "NotStarted",
//           "InProgress",
//           "Completed",
//         ]),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     });
//   }
//   console.log(`${num} course users created.`);
// };

// const generateCertificates = async (num: number) => {
//   const courseUsers = await prisma.courseUser.findMany();

//   for (let i = 0; i < num; i++) {
//     const courseUser = faker.helpers.arrayElement(courseUsers);

//     await prisma.certificate.create({
//       data: {
//         courseUserId: courseUser.id,
//         certificateNumber: faker.random.alphaNumeric(10),
//         issueDate: faker.date.past(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     });
//   }
//   console.log(`${num} certificates created.`);
// };

// const generateTransactions = async (num: number) => {
//   const users = await prisma.user.findMany();
//   const courses = await prisma.course.findMany();

//   for (let i = 0; i < num; i++) {
//     const user = faker.helpers.arrayElement(users);
//     const course = faker.helpers.arrayElement(courses);

//     await prisma.transaction.create({
//       data: {
//         userId: user.id,
//         courseId: course.id,
//         courseName: course.courseName,
//         orderId: faker.datatype.number(),
//         ppn: faker.datatype.float({ min: 0, max: 10, precision: 0.1 }),
//         price: course.coursePrice,
//         totalPrice: course.coursePrice * 1.1, // Contoh hitungan total harga dengan ppn
//         paymentStatus: faker.helpers.arrayElement([
//           "Pending",
//           "Success",
//           "Failed",
//         ]),
//         paymentMethod: faker.helpers.arrayElement(["Debit", "Credit", "Qris"]),
//         linkPayment: faker.internet.url(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     });
//   }
//   console.log(`${num} transactions created.`);
// };

// const seed = async () => {
//   console.log("Start seeding...");
//   await generateCategories(5); // Generate 5 categories
//   await generateCourseLevels(3); // Generate 3 course levels
//   await generateTypeCourses(3); // Generate 3 type courses
//   await generateUsers(10); // Generate 10 users
//   await generateCourses(5); // Generate 5 courses
//   await generateChapters(10); // Generate 10 chapters
//   await generateInterpreters(5); // Generate 5 interpreters
//   await generateContents(10); // Generate 10 contents
//   await generateCourseUsers(10); // Generate 10 course users
//   await generateCertificates(10); // Generate 10 certificates
//   await generateTransactions(10); // Generate 10 transactions
//   console.log("Seeding finished.");
// };

// seed()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
