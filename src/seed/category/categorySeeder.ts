import { prisma } from "../../application/database";

export const seedCategories = async () => {
  await prisma.category.deleteMany();

  await prisma.category.createMany({
    data: [
      {
        id: 1,
        categoryName: "Programming",
        categoryCode: "PRG",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 2,
        categoryName: "Data Science",
        categoryCode: "DS",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 3,
        categoryName: "Web Development",
        categoryCode: "WD",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 4,
        categoryName: "Mobile Development",
        categoryCode: "MD",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 5,
        categoryName: "Cloud Computing",
        categoryCode: "CC",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 6,
        categoryName: "Artificial Intelligence",
        categoryCode: "AI",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 7,
        categoryName: "Machine Learning",
        categoryCode: "ML",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 8,
        categoryName: "Cybersecurity",
        categoryCode: "CS",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 9,
        categoryName: "Blockchain",
        categoryCode: "BC",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 10,
        categoryName: "Game Development",
        categoryCode: "GD",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 11,
        categoryName: "Digital Marketing",
        categoryCode: "DM",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 12,
        categoryName: "Graphic Design",
        categoryCode: "GD",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 13,
        categoryName: "Project Management",
        categoryCode: "PM",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 14,
        categoryName: "DevOps",
        categoryCode: "DO",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
      {
        id: 15,
        categoryName: "Internet of Things",
        categoryCode: "IOT",
        image:
          "https://ik.imagekit.io/vyck38py3/Category/image.png?updatedAt=1728397802757",
      },
    ],
  });
};
