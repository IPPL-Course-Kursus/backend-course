import { prisma } from "../../application/database";

export const seedCourseLevel = async () => {
  await prisma.courseLevel.createMany({
    data: [
      {
        id: 1,
        levelName: "Beginner",
      },
      {
        id: 2,
        levelName: "Intermediate",
      },
      {
        id: 3,
        levelName: "Advanced",
      },
    ],
  });
};
