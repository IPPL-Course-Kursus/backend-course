import { prisma } from "../../application/database";

export const seedChapter = async () => {
  await prisma.chapter.createMany({
    data: [
      {
        courseId: "2d85440b-0a34-446f-ad0f-6d657741d3d3",
        sort: 1,
        chapterTitle: "Introduction to the Course",
      },
      {
        courseId: "2d85440b-0a34-446f-ad0f-6d657741d3d3",
        sort: 2,
        chapterTitle: "Understanding the Basics",
      },
      {
        courseId: "2d85440b-0a34-446f-ad0f-6d657741d3d3",
        sort: 3,
        chapterTitle: "Advanced Topics",
      },
      {
        courseId: "2d85440b-0a34-446f-ad0f-6d657741d3d3",
        sort: 4,
        chapterTitle: "Conclusion and Next Steps",
      },

      {
        courseId: "b8d8eea8-fff7-4ec8-b4a1-2df34a84ccb3",
        sort: 1,
        chapterTitle: "Getting Started",
      },
      {
        courseId: "b8d8eea8-fff7-4ec8-b4a1-2df34a84ccb3",
        sort: 2,
        chapterTitle: "Essential Concepts",
      },
      {
        courseId: "b8d8eea8-fff7-4ec8-b4a1-2df34a84ccb3",
        sort: 3,
        chapterTitle: "Practical Applications",
      },
      {
        courseId: "b8d8eea8-fff7-4ec8-b4a1-2df34a84ccb3",
        sort: 4,
        chapterTitle: "Review and Future Learning",
      },

      {
        courseId: "ce528725-c92e-46ce-8a37-671448f937e0",
        sort: 1,
        chapterTitle: "Course Overview",
      },
      {
        courseId: "ce528725-c92e-46ce-8a37-671448f937e0",
        sort: 2,
        chapterTitle: "Key Principles",
      },
      {
        courseId: "ce528725-c92e-46ce-8a37-671448f937e0",
        sort: 3,
        chapterTitle: "In-Depth Analysis",
      },
      {
        courseId: "ce528725-c92e-46ce-8a37-671448f937e0",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "a1ded3c6-d52a-4ca1-95bd-cf2ca22bdb06",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "a1ded3c6-d52a-4ca1-95bd-cf2ca22bdb06",
        sort: 2,
        chapterTitle: "Fundamentals",
      },
      {
        courseId: "a1ded3c6-d52a-4ca1-95bd-cf2ca22bdb06",
        sort: 3,
        chapterTitle: "Application and Impact",
      },
      {
        courseId: "a1ded3c6-d52a-4ca1-95bd-cf2ca22bdb06",
        sort: 4,
        chapterTitle: "Conclusion",
      },

      {
        courseId: "4df6e4dd-2592-4f7c-8511-190d9dfe6d4b",
        sort: 1,
        chapterTitle: "Start Here",
      },
      {
        courseId: "4df6e4dd-2592-4f7c-8511-190d9dfe6d4b",
        sort: 2,
        chapterTitle: "Learning the Basics",
      },
      {
        courseId: "4df6e4dd-2592-4f7c-8511-190d9dfe6d4b",
        sort: 3,
        chapterTitle: "Intermediate Concepts",
      },
      {
        courseId: "4df6e4dd-2592-4f7c-8511-190d9dfe6d4b",
        sort: 4,
        chapterTitle: "Advanced Techniques",
      },

      {
        courseId: "42939947-28ac-42b2-a309-e1fb05ca9b01",
        sort: 1,
        chapterTitle: "Welcome",
      },
      {
        courseId: "42939947-28ac-42b2-a309-e1fb05ca9b01",
        sort: 2,
        chapterTitle: "Basic Skills",
      },
      {
        courseId: "42939947-28ac-42b2-a309-e1fb05ca9b01",
        sort: 3,
        chapterTitle: "Strategies for Success",
      },
      {
        courseId: "42939947-28ac-42b2-a309-e1fb05ca9b01",
        sort: 4,
        chapterTitle: "Wrap Up",
      },

      {
        courseId: "a6a6a725-ae92-4429-b280-67e67a3023bd",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "a6a6a725-ae92-4429-b280-67e67a3023bd",
        sort: 2,
        chapterTitle: "Theoretical Background",
      },
      {
        courseId: "a6a6a725-ae92-4429-b280-67e67a3023bd",
        sort: 3,
        chapterTitle: "Hands-On Learning",
      },
      {
        courseId: "a6a6a725-ae92-4429-b280-67e67a3023bd",
        sort: 4,
        chapterTitle: "Closing Remarks",
      },

      {
        courseId: "5bca5980-c648-4a2c-909d-29b17f5008ad",
        sort: 1,
        chapterTitle: "Getting Started",
      },
      {
        courseId: "5bca5980-c648-4a2c-909d-29b17f5008ad",
        sort: 2,
        chapterTitle: "Learning Path",
      },
      {
        courseId: "5bca5980-c648-4a2c-909d-29b17f5008ad",
        sort: 3,
        chapterTitle: "Best Practices",
      },
      {
        courseId: "5bca5980-c648-4a2c-909d-29b17f5008ad",
        sort: 4,
        chapterTitle: "Next Steps",
      },

      {
        courseId: "bb3a80f2-d016-4fd4-94b1-334a07269fec",
        sort: 1,
        chapterTitle: "Overview",
      },
      {
        courseId: "bb3a80f2-d016-4fd4-94b1-334a07269fec",
        sort: 2,
        chapterTitle: "Key Insights",
      },
      {
        courseId: "bb3a80f2-d016-4fd4-94b1-334a07269fec",
        sort: 3,
        chapterTitle: "Real-World Applications",
      },
      {
        courseId: "bb3a80f2-d016-4fd4-94b1-334a07269fec",
        sort: 4,
        chapterTitle: "Summary",
      },

      {
        courseId: "dfe3f305-2654-40d2-86e1-962de5f2ffea",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "dfe3f305-2654-40d2-86e1-962de5f2ffea",
        sort: 2,
        chapterTitle: "Core Concepts",
      },
      {
        courseId: "dfe3f305-2654-40d2-86e1-962de5f2ffea",
        sort: 3,
        chapterTitle: "Applications",
      },
      {
        courseId: "dfe3f305-2654-40d2-86e1-962de5f2ffea",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "a8729f79-3702-4442-b398-5266d33aab19",
        sort: 1,
        chapterTitle: "Kickoff",
      },
      {
        courseId: "a8729f79-3702-4442-b398-5266d33aab19",
        sort: 2,
        chapterTitle: "Basic Techniques",
      },
      {
        courseId: "a8729f79-3702-4442-b398-5266d33aab19",
        sort: 3,
        chapterTitle: "Advanced Skills",
      },
      {
        courseId: "a8729f79-3702-4442-b398-5266d33aab19",
        sort: 4,
        chapterTitle: "Wrap Up",
      },

      {
        courseId: "77fda9bf-1b0a-4558-93ad-6580d6e70ec1",
        sort: 1,
        chapterTitle: "Start Here",
      },
      {
        courseId: "77fda9bf-1b0a-4558-93ad-6580d6e70ec1",
        sort: 2,
        chapterTitle: "In-Depth Concepts",
      },
      {
        courseId: "77fda9bf-1b0a-4558-93ad-6580d6e70ec1",
        sort: 3,
        chapterTitle: "Putting It All Together",
      },
      {
        courseId: "77fda9bf-1b0a-4558-93ad-6580d6e70ec1",
        sort: 4,
        chapterTitle: "Next Steps",
      },

      {
        courseId: "83aa31de-80c2-4b8d-bcb5-bdd8e5eeff2c",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "83aa31de-80c2-4b8d-bcb5-bdd8e5eeff2c",
        sort: 2,
        chapterTitle: "Understanding the Basics",
      },
      {
        courseId: "83aa31de-80c2-4b8d-bcb5-bdd8e5eeff2c",
        sort: 3,
        chapterTitle: "Practical Applications",
      },
      {
        courseId: "83aa31de-80c2-4b8d-bcb5-bdd8e5eeff2c",
        sort: 4,
        chapterTitle: "Conclusion",
      },

      {
        courseId: "1cdfb3ab-6df6-4de6-b5ce-c993c915d214",
        sort: 1,
        chapterTitle: "Welcome",
      },
      {
        courseId: "1cdfb3ab-6df6-4de6-b5ce-c993c915d214",
        sort: 2,
        chapterTitle: "Core Principles",
      },
      {
        courseId: "1cdfb3ab-6df6-4de6-b5ce-c993c915d214",
        sort: 3,
        chapterTitle: "Advanced Techniques",
      },
      {
        courseId: "1cdfb3ab-6df6-4de6-b5ce-c993c915d214",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "22246ddc-d866-40cf-b60e-dbd6be2f32e5",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "22246ddc-d866-40cf-b60e-dbd6be2f32e5",
        sort: 2,
        chapterTitle: "Foundations",
      },
      {
        courseId: "22246ddc-d866-40cf-b60e-dbd6be2f32e5",
        sort: 3,
        chapterTitle: "Practical Skills",
      },
      {
        courseId: "22246ddc-d866-40cf-b60e-dbd6be2f32e5",
        sort: 4,
        chapterTitle: "Review",
      },

      {
        courseId: "a6ebab0b-4c13-43ce-a745-a013cba93b22",
        sort: 1,
        chapterTitle: "Overview",
      },
      {
        courseId: "a6ebab0b-4c13-43ce-a745-a013cba93b22",
        sort: 2,
        chapterTitle: "Key Concepts",
      },
      {
        courseId: "a6ebab0b-4c13-43ce-a745-a013cba93b22",
        sort: 3,
        chapterTitle: "Real-Life Applications",
      },
      {
        courseId: "a6ebab0b-4c13-43ce-a745-a013cba93b22",
        sort: 4,
        chapterTitle: "Conclusions",
      },

      {
        courseId: "0a515ac2-b54b-43fc-a0de-f25545748eec",
        sort: 1,
        chapterTitle: "Kickoff",
      },
      {
        courseId: "0a515ac2-b54b-43fc-a0de-f25545748eec",
        sort: 2,
        chapterTitle: "Essential Techniques",
      },
      {
        courseId: "0a515ac2-b54b-43fc-a0de-f25545748eec",
        sort: 3,
        chapterTitle: "Strategies for Success",
      },
      {
        courseId: "0a515ac2-b54b-43fc-a0de-f25545748eec",
        sort: 4,
        chapterTitle: "Summary",
      },

      {
        courseId: "9d52e518-3e6f-4939-a65c-7aa5c001415b",
        sort: 1,
        chapterTitle: "Getting Started",
      },
      {
        courseId: "9d52e518-3e6f-4939-a65c-7aa5c001415b",
        sort: 2,
        chapterTitle: "In-Depth Analysis",
      },
      {
        courseId: "9d52e518-3e6f-4939-a65c-7aa5c001415b",
        sort: 3,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "415ec293-8467-4fa2-aef9-dd1a6b22fc52",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "415ec293-8467-4fa2-aef9-dd1a6b22fc52",
        sort: 2,
        chapterTitle: "Core Concepts",
      },
      {
        courseId: "415ec293-8467-4fa2-aef9-dd1a6b22fc52",
        sort: 3,
        chapterTitle: "Practical Skills",
      },
      {
        courseId: "415ec293-8467-4fa2-aef9-dd1a6b22fc52",
        sort: 4,
        chapterTitle: "Conclusion",
      },

      {
        courseId: "e27ec582-2549-42e1-9899-8e6b70dd3dfd",
        sort: 1,
        chapterTitle: "Welcome",
      },
      {
        courseId: "e27ec582-2549-42e1-9899-8e6b70dd3dfd",
        sort: 2,
        chapterTitle: "Basic Concepts",
      },
      {
        courseId: "e27ec582-2549-42e1-9899-8e6b70dd3dfd",
        sort: 3,
        chapterTitle: "Advanced Topics",
      },
      {
        courseId: "e27ec582-2549-42e1-9899-8e6b70dd3dfd",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },
    ],
  });
};
