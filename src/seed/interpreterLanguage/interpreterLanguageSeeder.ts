import { prisma } from "../../application/database";

export const seedInterpreterLanguage = async () => {
  await prisma.interpreterLanguage.createMany({
    data: [
      {
        id: 1,
        languageInterpreter: "Python",
        version: "3.10.0",
      },
      {
        id: 2,
        languageInterpreter: "javascript",
        version: "18.15.0",
      },
      {
        id: 3,
        languageInterpreter: "php",
        version: "8.1.0",
      },
      {
        id: 4,
        languageInterpreter: "java",
        version: "17.0.0",
      },
    ],
  });
};
