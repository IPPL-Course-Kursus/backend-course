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
    ],
  });
};
