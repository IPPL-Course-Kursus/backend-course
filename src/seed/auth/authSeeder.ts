import { prisma } from "../../application/database";

export const seedAuth = async () => {
  await prisma.user.createMany({
    data: [
      {
        uid: "rHfLqjvSmqXYwV1MhAFzbfUd8KN2",
        image:
          "https://ik.imagekit.io/vyck38py3/photoProfile/user_profile.jpg?updatedAt=1730528814856",
        fullName: "admin",
        phoneNumber: "08123456789",
        tanggalLahir: new Date("2000-01-01"),
        city: "Balikpapan",
        role: "Admin",
      },
      {
        uid: "dfdTOJlR6XSuOgvB121aritzzD43",
        image:
          "https://ik.imagekit.io/vyck38py3/photoProfile/user_profile.jpg?updatedAt=1730528814856",
        fullName: "Muhammad Nuralimsyah",
        phoneNumber: "08123456789",
        tanggalLahir: new Date("2000-02-01"),
        city: "Balikpapan",
        role: "Instruktur",
      },
    ],
  });
};
