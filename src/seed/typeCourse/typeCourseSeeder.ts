import { prisma } from "../../application/database";

export const seedTypeCourse = async () => {
  await prisma.typeCourse.createMany({
    data: [
      {
        id: 1,
        typeName: "Free",
      },
      {
        id: 2,
        typeName: "Premium",
      },
    ],
  });
};
