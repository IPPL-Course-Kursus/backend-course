import { prisma } from "../../application/database";

export const updateContentSeeder = async () => {
  await prisma.content.updateMany({
    where: {
      contentUrl: "https://www.youtube.com/watch?v=ckEa0SGYgFI",
    },
    data: {
      contentUrl: "https://www.youtube.com/embed/ckEa0SGYgFI",
    },
  });
};
