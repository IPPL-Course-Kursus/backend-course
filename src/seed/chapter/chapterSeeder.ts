import { prisma } from "../../application/database";

export const seedChapter = async () => {
  await prisma.chapter.createMany({
    data: [
      {
        courseId: "ace24f7a-dfab-4317-a085-ba613c9ba07d",
        sort: 1,
        chapterTitle: "Introduction to the Course",
      },
      {
        courseId: "ace24f7a-dfab-4317-a085-ba613c9ba07d",
        sort: 2,
        chapterTitle: "Understanding the Basics",
      },
      {
        courseId: "ace24f7a-dfab-4317-a085-ba613c9ba07d",
        sort: 3,
        chapterTitle: "Advanced Topics",
      },
      {
        courseId: "ace24f7a-dfab-4317-a085-ba613c9ba07d",
        sort: 4,
        chapterTitle: "Conclusion and Next Steps",
      },

      {
        courseId: "efbc4289-aa98-4ffc-8d48-cf9029127638",
        sort: 1,
        chapterTitle: "Getting Started",
      },
      {
        courseId: "efbc4289-aa98-4ffc-8d48-cf9029127638",
        sort: 2,
        chapterTitle: "Essential Concepts",
      },
      {
        courseId: "efbc4289-aa98-4ffc-8d48-cf9029127638",
        sort: 3,
        chapterTitle: "Practical Applications",
      },
      {
        courseId: "efbc4289-aa98-4ffc-8d48-cf9029127638",
        sort: 4,
        chapterTitle: "Review and Future Learning",
      },

      {
        courseId: "88b62468-1b85-430e-ae0b-7fc528f6ccf6",
        sort: 1,
        chapterTitle: "Course Overview",
      },
      {
        courseId: "88b62468-1b85-430e-ae0b-7fc528f6ccf6",
        sort: 2,
        chapterTitle: "Key Principles",
      },
      {
        courseId: "88b62468-1b85-430e-ae0b-7fc528f6ccf6",
        sort: 3,
        chapterTitle: "In-Depth Analysis",
      },
      {
        courseId: "88b62468-1b85-430e-ae0b-7fc528f6ccf6",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "039fe161-4e9b-4e4c-abc2-db3a94d3e885",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "039fe161-4e9b-4e4c-abc2-db3a94d3e885",
        sort: 2,
        chapterTitle: "Fundamentals",
      },
      {
        courseId: "039fe161-4e9b-4e4c-abc2-db3a94d3e885",
        sort: 3,
        chapterTitle: "Application and Impact",
      },
      {
        courseId: "039fe161-4e9b-4e4c-abc2-db3a94d3e885",
        sort: 4,
        chapterTitle: "Conclusion",
      },

      {
        courseId: "18a035dc-34ef-427c-a5df-27c96b1cacd4",
        sort: 1,
        chapterTitle: "Start Here",
      },
      {
        courseId: "18a035dc-34ef-427c-a5df-27c96b1cacd4",
        sort: 2,
        chapterTitle: "Learning the Basics",
      },
      {
        courseId: "18a035dc-34ef-427c-a5df-27c96b1cacd4",
        sort: 3,
        chapterTitle: "Intermediate Concepts",
      },
      {
        courseId: "18a035dc-34ef-427c-a5df-27c96b1cacd4",
        sort: 4,
        chapterTitle: "Advanced Techniques",
      },

      {
        courseId: "66a3ab73-2074-4080-8228-1a3dc2f898a1",
        sort: 1,
        chapterTitle: "Welcome",
      },
      {
        courseId: "66a3ab73-2074-4080-8228-1a3dc2f898a1",
        sort: 2,
        chapterTitle: "Basic Skills",
      },
      {
        courseId: "66a3ab73-2074-4080-8228-1a3dc2f898a1",
        sort: 3,
        chapterTitle: "Strategies for Success",
      },
      {
        courseId: "66a3ab73-2074-4080-8228-1a3dc2f898a1",
        sort: 4,
        chapterTitle: "Wrap Up",
      },

      {
        courseId: "973fa126-b331-4786-a3e2-247d4842e1b2",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "973fa126-b331-4786-a3e2-247d4842e1b2",
        sort: 2,
        chapterTitle: "Theoretical Background",
      },
      {
        courseId: "973fa126-b331-4786-a3e2-247d4842e1b2",
        sort: 3,
        chapterTitle: "Hands-On Learning",
      },
      {
        courseId: "973fa126-b331-4786-a3e2-247d4842e1b2",
        sort: 4,
        chapterTitle: "Closing Remarks",
      },

      {
        courseId: "6a78f933-0926-46b3-87ab-ba2337368838",
        sort: 1,
        chapterTitle: "Getting Started",
      },
      {
        courseId: "6a78f933-0926-46b3-87ab-ba2337368838",
        sort: 2,
        chapterTitle: "Learning Path",
      },
      {
        courseId: "6a78f933-0926-46b3-87ab-ba2337368838",
        sort: 3,
        chapterTitle: "Best Practices",
      },
      {
        courseId: "6a78f933-0926-46b3-87ab-ba2337368838",
        sort: 4,
        chapterTitle: "Next Steps",
      },

      {
        courseId: "33ba0824-083a-466c-bfbd-61c3eee030e7",
        sort: 1,
        chapterTitle: "Overview",
      },
      {
        courseId: "33ba0824-083a-466c-bfbd-61c3eee030e7",
        sort: 2,
        chapterTitle: "Key Insights",
      },
      {
        courseId: "33ba0824-083a-466c-bfbd-61c3eee030e7",
        sort: 3,
        chapterTitle: "Real-World Applications",
      },
      {
        courseId: "33ba0824-083a-466c-bfbd-61c3eee030e7",
        sort: 4,
        chapterTitle: "Summary",
      },

      {
        courseId: "28318348-7755-4531-8b96-87ce03262d3d",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "28318348-7755-4531-8b96-87ce03262d3d",
        sort: 2,
        chapterTitle: "Core Concepts",
      },
      {
        courseId: "28318348-7755-4531-8b96-87ce03262d3d",
        sort: 3,
        chapterTitle: "Applications",
      },
      {
        courseId: "28318348-7755-4531-8b96-87ce03262d3d",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "ca83b4d9-e9df-46d1-8b96-6d6cc68e1bc9",
        sort: 1,
        chapterTitle: "Kickoff",
      },
      {
        courseId: "ca83b4d9-e9df-46d1-8b96-6d6cc68e1bc9",
        sort: 2,
        chapterTitle: "Basic Techniques",
      },
      {
        courseId: "ca83b4d9-e9df-46d1-8b96-6d6cc68e1bc9",
        sort: 3,
        chapterTitle: "Advanced Skills",
      },
      {
        courseId: "ca83b4d9-e9df-46d1-8b96-6d6cc68e1bc9",
        sort: 4,
        chapterTitle: "Wrap Up",
      },

      {
        courseId: "93bd7caf-acdb-4a3e-a33b-1bbd1f47aab4",
        sort: 1,
        chapterTitle: "Start Here",
      },
      {
        courseId: "93bd7caf-acdb-4a3e-a33b-1bbd1f47aab4",
        sort: 2,
        chapterTitle: "In-Depth Concepts",
      },
      {
        courseId: "93bd7caf-acdb-4a3e-a33b-1bbd1f47aab4",
        sort: 3,
        chapterTitle: "Putting It All Together",
      },
      {
        courseId: "93bd7caf-acdb-4a3e-a33b-1bbd1f47aab4",
        sort: 4,
        chapterTitle: "Next Steps",
      },

      {
        courseId: "da681d77-78da-495d-b375-656667fb34a8",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "da681d77-78da-495d-b375-656667fb34a8",
        sort: 2,
        chapterTitle: "Understanding the Basics",
      },
      {
        courseId: "da681d77-78da-495d-b375-656667fb34a8",
        sort: 3,
        chapterTitle: "Practical Applications",
      },
      {
        courseId: "da681d77-78da-495d-b375-656667fb34a8",
        sort: 4,
        chapterTitle: "Conclusion",
      },

      {
        courseId: "4370d013-797b-4001-86b4-cbf93ec3df57",
        sort: 1,
        chapterTitle: "Welcome",
      },
      {
        courseId: "4370d013-797b-4001-86b4-cbf93ec3df57",
        sort: 2,
        chapterTitle: "Core Principles",
      },
      {
        courseId: "4370d013-797b-4001-86b4-cbf93ec3df57",
        sort: 3,
        chapterTitle: "Advanced Techniques",
      },
      {
        courseId: "4370d013-797b-4001-86b4-cbf93ec3df57",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "13fb06f8-079e-4b29-a26b-79741406b83c",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "13fb06f8-079e-4b29-a26b-79741406b83c",
        sort: 2,
        chapterTitle: "Foundations",
      },
      {
        courseId: "13fb06f8-079e-4b29-a26b-79741406b83c",
        sort: 3,
        chapterTitle: "Practical Skills",
      },
      {
        courseId: "13fb06f8-079e-4b29-a26b-79741406b83c",
        sort: 4,
        chapterTitle: "Review",
      },

      {
        courseId: "e2f65160-79da-42e7-beee-f667a0a0db4f",
        sort: 1,
        chapterTitle: "Overview",
      },
      {
        courseId: "e2f65160-79da-42e7-beee-f667a0a0db4f",
        sort: 2,
        chapterTitle: "Key Concepts",
      },
      {
        courseId: "e2f65160-79da-42e7-beee-f667a0a0db4f",
        sort: 3,
        chapterTitle: "Real-Life Applications",
      },
      {
        courseId: "e2f65160-79da-42e7-beee-f667a0a0db4f",
        sort: 4,
        chapterTitle: "Conclusions",
      },

      {
        courseId: "d5832088-7b64-473c-99ce-d1b89f3ffb51",
        sort: 1,
        chapterTitle: "Kickoff",
      },
      {
        courseId: "d5832088-7b64-473c-99ce-d1b89f3ffb51",
        sort: 2,
        chapterTitle: "Essential Techniques",
      },
      {
        courseId: "d5832088-7b64-473c-99ce-d1b89f3ffb51",
        sort: 3,
        chapterTitle: "Strategies for Success",
      },
      {
        courseId: "d5832088-7b64-473c-99ce-d1b89f3ffb51",
        sort: 4,
        chapterTitle: "Summary",
      },

      {
        courseId: "69d65ae7-64f3-42bd-8070-0f630992bd0c",
        sort: 1,
        chapterTitle: "Getting Started",
      },
      {
        courseId: "69d65ae7-64f3-42bd-8070-0f630992bd0c",
        sort: 2,
        chapterTitle: "In-Depth Analysis",
      },
      {
        courseId: "69d65ae7-64f3-42bd-8070-0f630992bd0c",
        sort: 3,
        chapterTitle: "Final Thoughts",
      },

      {
        courseId: "5d8b25ff-90d0-4403-94cd-62a2fd782d02",
        sort: 1,
        chapterTitle: "Introduction",
      },
      {
        courseId: "5d8b25ff-90d0-4403-94cd-62a2fd782d02",
        sort: 2,
        chapterTitle: "Core Concepts",
      },
      {
        courseId: "5d8b25ff-90d0-4403-94cd-62a2fd782d02",
        sort: 3,
        chapterTitle: "Practical Skills",
      },
      {
        courseId: "5d8b25ff-90d0-4403-94cd-62a2fd782d02",
        sort: 4,
        chapterTitle: "Conclusion",
      },

      {
        courseId: "ebccbbea-72d7-455a-b95f-6884439c33f1",
        sort: 1,
        chapterTitle: "Welcome",
      },
      {
        courseId: "ebccbbea-72d7-455a-b95f-6884439c33f1",
        sort: 2,
        chapterTitle: "Basic Concepts",
      },
      {
        courseId: "ebccbbea-72d7-455a-b95f-6884439c33f1",
        sort: 3,
        chapterTitle: "Advanced Topics",
      },
      {
        courseId: "ebccbbea-72d7-455a-b95f-6884439c33f1",
        sort: 4,
        chapterTitle: "Final Thoughts",
      },
    ],
  });
};
