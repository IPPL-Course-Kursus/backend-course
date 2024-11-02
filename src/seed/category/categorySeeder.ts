import { prisma } from "../../application/database";

export const seedCategories = async () => {
  await prisma.category.deleteMany();

  await prisma.category.createMany({
    data: [
      {
        id: 1,
        categoryName: "Programming",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 2,
        categoryName: "Data Science",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 3,
        categoryName: "Web Development",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 4,
        categoryName: "Mobile Development",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 5,
        categoryName: "Cloud Computing",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 6,
        categoryName: "Artificial Intelligence",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 7,
        categoryName: "Machine Learning",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
    ],
  });
};
