import { prisma } from "../../application/database";

export const seedChapter = async () => {
  await prisma.chapter.createMany({
    data: [
      {
        courseId: "22441f45-97ac-4ec1-8942-20a9ba6adcf5",
        sort: 1,
        chapterTitle: "Introduction to the Course",
      },
      {
        courseId: "22441f45-97ac-4ec1-8942-20a9ba6adcf5",
        sort: 2,
        chapterTitle: "Understanding the Basics",
      },
      {
        courseId: "22441f45-97ac-4ec1-8942-20a9ba6adcf5",
        sort: 3,
        chapterTitle: "Advanced Topics",
      },
      {
        courseId: "22441f45-97ac-4ec1-8942-20a9ba6adcf5",
        sort: 4,
        chapterTitle: "Conclusion and Next Steps",
      },

      {
        courseId: "aa6404e2-367a-4f2e-be5e-d1417a479c21",
        sort: 1,
        chapterTitle: "Getting Started",
      },
      {
        courseId: "aa6404e2-367a-4f2e-be5e-d1417a479c21",
        sort: 2,
        chapterTitle: "Essential Concepts",
      },
      {
        courseId: "aa6404e2-367a-4f2e-be5e-d1417a479c21",
        sort: 3,
        chapterTitle: "Practical Applications",
      },
      {
        courseId: "aa6404e2-367a-4f2e-be5e-d1417a479c21",
        sort: 4,
        chapterTitle: "Review and Future Learning",
      },

      {
        courseId: "a4d94eaa-fc5f-43c0-9b49-128a79751f3f",
        sort: 1,
        chapterTitle: "Course Overview",
      },
      {
        courseId: "a4d94eaa-fc5f-43c0-9b49-128a79751f3f",
        sort: 2,
        chapterTitle: "Key Principles",
      },
      {
        courseId: "a4d94eaa-fc5f-43c0-9b49-128a79751f3f",
        sort: 3,
        chapterTitle: "In-Depth Analysis",
      },
      {
        courseId: "a4d94eaa-fc5f-43c0-9b49-128a79751f3f",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "0942be09-b4df-4dd3-9fa3-5fdb974b3d99",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "0942be09-b4df-4dd3-9fa3-5fdb974b3d99",
        sort: 2,
        chapterTitle: "Fundamentals",
      },
      {
        courseId: "0942be09-b4df-4dd3-9fa3-5fdb974b3d99",
        sort: 3,
        chapterTitle: "Application and Impact",
      },
      {
        courseId: "0942be09-b4df-4dd3-9fa3-5fdb974b3d99",
        sort: 4,
        chapterTitle: "Conclusion",
      },

      {
        courseId: "1aa5a85a-1158-4578-aae4-f52d95086841",
        sort: 1,
        chapterTitle: "Start Here",
      },
      {
        courseId: "1aa5a85a-1158-4578-aae4-f52d95086841",
        sort: 2,
        chapterTitle: "Learning the Basics",
      },
      {
        courseId: "1aa5a85a-1158-4578-aae4-f52d95086841",
        sort: 3,
        chapterTitle: "Intermediate Concepts",
      },
      {
        courseId: "1aa5a85a-1158-4578-aae4-f52d95086841",
        sort: 4,
        chapterTitle: "Advanced Techniques",
      },

      {
        courseId: "2ffb847f-8b0d-4c42-976f-e470cda635d3",
        sort: 1,
        chapterTitle: "Welcome",
      },
      {
        courseId: "2ffb847f-8b0d-4c42-976f-e470cda635d3",
        sort: 2,
        chapterTitle: "Basic Skills",
      },
      {
        courseId: "2ffb847f-8b0d-4c42-976f-e470cda635d3",
        sort: 3,
        chapterTitle: "Strategies for Success",
      },
      {
        courseId: "2ffb847f-8b0d-4c42-976f-e470cda635d3",
        sort: 4,
        chapterTitle: "Wrap Up",
      },

      {
        courseId: "2b6ad034-1175-4b17-9a3b-fcdd916083d5",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "2b6ad034-1175-4b17-9a3b-fcdd916083d5",
        sort: 2,
        chapterTitle: "Theoretical Background",
      },
      {
        courseId: "2b6ad034-1175-4b17-9a3b-fcdd916083d5",
        sort: 3,
        chapterTitle: "Hands-On Learning",
      },
      {
        courseId: "2b6ad034-1175-4b17-9a3b-fcdd916083d5",
        sort: 4,
        chapterTitle: "Closing Remarks",
      },

      {
        courseId: "4a50767b-e112-4337-bd61-4a2008f1d405",
        sort: 1,
        chapterTitle: "Getting Started",
      },
      {
        courseId: "4a50767b-e112-4337-bd61-4a2008f1d405",
        sort: 2,
        chapterTitle: "Learning Path",
      },
      {
        courseId: "4a50767b-e112-4337-bd61-4a2008f1d405",
        sort: 3,
        chapterTitle: "Best Practices",
      },
      {
        courseId: "4a50767b-e112-4337-bd61-4a2008f1d405",
        sort: 4,
        chapterTitle: "Next Steps",
      },

      {
        courseId: "c4a7bc63-10a8-464f-b117-50eb724be475",
        sort: 1,
        chapterTitle: "Overview",
      },
      {
        courseId: "c4a7bc63-10a8-464f-b117-50eb724be475",
        sort: 2,
        chapterTitle: "Key Insights",
      },
      {
        courseId: "c4a7bc63-10a8-464f-b117-50eb724be475",
        sort: 3,
        chapterTitle: "Real-World Applications",
      },
      {
        courseId: "c4a7bc63-10a8-464f-b117-50eb724be475",
        sort: 4,
        chapterTitle: "Summary",
      },

      {
        courseId: "860a5abb-07d9-49e3-9467-4534172a87be",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "860a5abb-07d9-49e3-9467-4534172a87be",
        sort: 2,
        chapterTitle: "Core Concepts",
      },
      {
        courseId: "860a5abb-07d9-49e3-9467-4534172a87be",
        sort: 3,
        chapterTitle: "Applications",
      },
      {
        courseId: "860a5abb-07d9-49e3-9467-4534172a87be",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "cd4c3c3b-d9ce-41d1-9549-152f2d8c0b41",
        sort: 1,
        chapterTitle: "Kickoff",
      },
      {
        courseId: "cd4c3c3b-d9ce-41d1-9549-152f2d8c0b41",
        sort: 2,
        chapterTitle: "Basic Techniques",
      },
      {
        courseId: "cd4c3c3b-d9ce-41d1-9549-152f2d8c0b41",
        sort: 3,
        chapterTitle: "Advanced Skills",
      },
      {
        courseId: "cd4c3c3b-d9ce-41d1-9549-152f2d8c0b41",
        sort: 4,
        chapterTitle: "Wrap Up",
      },

      {
        courseId: "9ecbb4a9-c5f7-4813-8b4c-4b99931c83e1",
        sort: 1,
        chapterTitle: "Start Here",
      },
      {
        courseId: "9ecbb4a9-c5f7-4813-8b4c-4b99931c83e1",
        sort: 2,
        chapterTitle: "In-Depth Concepts",
      },
      {
        courseId: "9ecbb4a9-c5f7-4813-8b4c-4b99931c83e1",
        sort: 3,
        chapterTitle: "Putting It All Together",
      },
      {
        courseId: "9ecbb4a9-c5f7-4813-8b4c-4b99931c83e1",
        sort: 4,
        chapterTitle: "Next Steps",
      },

      {
        courseId: "d09905f8-759f-4934-868e-a6f53caa3784",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "d09905f8-759f-4934-868e-a6f53caa3784",
        sort: 2,
        chapterTitle: "Understanding the Basics",
      },
      {
        courseId: "d09905f8-759f-4934-868e-a6f53caa3784",
        sort: 3,
        chapterTitle: "Practical Applications",
      },
      {
        courseId: "d09905f8-759f-4934-868e-a6f53caa3784",
        sort: 4,
        chapterTitle: "Conclusion",
      },

      {
        courseId: "933c301a-2137-419d-8c47-297de0be9b86",
        sort: 1,
        chapterTitle: "Welcome",
      },
      {
        courseId: "933c301a-2137-419d-8c47-297de0be9b86",
        sort: 2,
        chapterTitle: "Core Principles",
      },
      {
        courseId: "933c301a-2137-419d-8c47-297de0be9b86",
        sort: 3,
        chapterTitle: "Advanced Techniques",
      },
      {
        courseId: "933c301a-2137-419d-8c47-297de0be9b86",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "ef62d2bc-0a31-4c75-ba3c-b01a4c37c228",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "ef62d2bc-0a31-4c75-ba3c-b01a4c37c228",
        sort: 2,
        chapterTitle: "Foundations",
      },
      {
        courseId: "ef62d2bc-0a31-4c75-ba3c-b01a4c37c228",
        sort: 3,
        chapterTitle: "Practical Skills",
      },
      {
        courseId: "ef62d2bc-0a31-4c75-ba3c-b01a4c37c228",
        sort: 4,
        chapterTitle: "Review",
      },

      {
        courseId: "b9fe7cbb-1ef5-4dd0-a62d-01c81ce1663c",
        sort: 1,
        chapterTitle: "Overview",
      },
      {
        courseId: "b9fe7cbb-1ef5-4dd0-a62d-01c81ce1663c",
        sort: 2,
        chapterTitle: "Key Concepts",
      },
      {
        courseId: "b9fe7cbb-1ef5-4dd0-a62d-01c81ce1663c",
        sort: 3,
        chapterTitle: "Real-Life Applications",
      },
      {
        courseId: "b9fe7cbb-1ef5-4dd0-a62d-01c81ce1663c",
        sort: 4,
        chapterTitle: "Conclusions",
      },

      {
        courseId: "db6b543e-0801-40b5-8b47-debe24d6155c",
        sort: 1,
        chapterTitle: "Kickoff",
      },
      {
        courseId: "db6b543e-0801-40b5-8b47-debe24d6155c",
        sort: 2,
        chapterTitle: "Essential Techniques",
      },
      {
        courseId: "db6b543e-0801-40b5-8b47-debe24d6155c",
        sort: 3,
        chapterTitle: "Strategies for Success",
      },
      {
        courseId: "db6b543e-0801-40b5-8b47-debe24d6155c",
        sort: 4,
        chapterTitle: "Summary",
      },

      {
        courseId: "2345e9ae-c1ff-4b9e-9343-d41df936b33d",
        sort: 1,
        chapterTitle: "Getting Started",
      },
      {
        courseId: "2345e9ae-c1ff-4b9e-9343-d41df936b33d",
        sort: 2,
        chapterTitle: "In-Depth Analysis",
      },
      {
        courseId: "2345e9ae-c1ff-4b9e-9343-d41df936b33d",
        sort: 3,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "2c7570f0-0957-4c63-9358-01c9430a20fe",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "2c7570f0-0957-4c63-9358-01c9430a20fe",
        sort: 2,
        chapterTitle: "Core Concepts",
      },
      {
        courseId: "2c7570f0-0957-4c63-9358-01c9430a20fe",
        sort: 3,
        chapterTitle: "Practical Skills",
      },
      {
        courseId: "2c7570f0-0957-4c63-9358-01c9430a20fe",
        sort: 4,
        chapterTitle: "Conclusion",
      },

      {
        courseId: "69d74f0e-ee5b-4139-898c-2dace283b213",
        sort: 1,
        chapterTitle: "Welcome",
      },
      {
        courseId: "69d74f0e-ee5b-4139-898c-2dace283b213",
        sort: 2,
        chapterTitle: "Basic Concepts",
      },
      {
        courseId: "69d74f0e-ee5b-4139-898c-2dace283b213",
        sort: 3,
        chapterTitle: "Advanced Topics",
      },
      {
        courseId: "69d74f0e-ee5b-4139-898c-2dace283b213",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },
    ],
  });
};
