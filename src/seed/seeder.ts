import { prisma } from "../application/database";
import { seedCourseLevel } from "./courseLevel/courseLevelSeeder";
import { seedTypeCourse } from "./typeCourse/typeCourseSeeder";
import { seedCategories } from "./category/categorySeeder";
import { seedCourse } from "./course/courseSeeder";
import { seedChapter } from "./chapter/chapterSeeder";
import { contentSeeder } from "./content/contentSeeder";

const seed = async () => {
  try {
    // await seedCourseLevel();
    // await seedTypeCourse();
    // await seedCategories();
    await seedCourse();
    await seedChapter();
    await contentSeeder();
    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
