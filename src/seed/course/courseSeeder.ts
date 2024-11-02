import { prisma } from "../../application/database";

export const seedCourse = async () => {
  await prisma.course.createMany({
    data: [
      {
        categoryId: 1,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseName: "React Native",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Di era dunia yang penuh dengan teknologi canggih ini, kebanyakan orang lebih cenderung menggunakan gadget seluler. Hal ini mendorong kebutuhan akan aplikasi mobile yang intuitif dan fungsional. Dalam kursus ini, kamu akan belajar tentang React Native, framework populer untuk membangun aplikasi mobile dengan efisiensi tinggi. Kamu akan memahami cara kerja React Native, serta teknik dan best practices dalam pengembangan aplikasi yang responsif.",
        intendedFor:
          "Kelas ini cocok untuk kamu yang ingin menjadi Mobile Developer, terutama yang memiliki minat di bidang pengembangan aplikasi. Tidak diperlukan pengalaman sebelumnya dalam pengembangan aplikasi, namun pengetahuan dasar tentang Javascript dan React JS akan sangat membantu proses belajar kamu.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 150,
      },
      {
        categoryId: 1,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseName: "Flutter Development",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari cara membuat aplikasi mobile lintas platform dengan Flutter. Kursus ini mencakup dasar-dasar pemrograman Dart, widget Flutter, dan integrasi API. Kamu akan belajar cara membangun aplikasi yang bisa berjalan di Android dan iOS dengan satu basis kode.",
        intendedFor:
          "Kelas ini cocok untuk pengembang aplikasi yang ingin mengembangkan aplikasi lintas platform dengan mudah dan efisien. Jika kamu sudah memiliki pengetahuan dasar tentang pemrograman, kursus ini akan membantumu mempercepat karir di bidang mobile development.",
        coursePrice: 150000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 135000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 180,
      },
      {
        categoryId: 1,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseName: "Kotlin for Android Development",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kursus ini membahas pemrograman Android dengan Kotlin. Kamu akan belajar tentang fitur-fitur Kotlin yang membuat pengembangan aplikasi Android menjadi lebih mudah dan efisien. Mulai dari dasar hingga teknik lanjutan, kursus ini dirancang untuk membantumu menjadi pengembang Android yang handal.",
        intendedFor:
          "Kelas ini dirancang untuk pengembang yang ingin fokus pada pengembangan aplikasi Android menggunakan Kotlin. Jika kamu sudah familiar dengan pemrograman Java atau pernah bekerja dengan Android, kursus ini adalah langkah berikutnya untuk meningkatkan keterampilanmu.",
        coursePrice: 200000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 170000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 200,
      },

      // Kategori Web Development
      {
        categoryId: 3,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseName: "HTML & CSS Fundamentals",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari dasar-dasar HTML dan CSS, dua teknologi inti untuk membangun website. Kursus ini mencakup struktur HTML, styling dengan CSS, dan teknik dasar untuk membuat layout yang responsif dan menarik.",
        intendedFor:
          "Kelas ini cocok untuk pemula yang ingin memulai karir di bidang pengembangan web. Jika kamu ingin belajar cara membuat website sederhana, kursus ini adalah tempat yang tepat untuk memulai.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 80,
      },
      {
        categoryId: 3,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseName: "JavaScript Programming",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kursus ini membahas dasar-dasar pemrograman JavaScript, bahasa pemrograman yang paling banyak digunakan di web. Kamu akan belajar tentang variabel, fungsi, objek, dan teknik pemrograman lainnya yang akan membantumu membangun website yang interaktif.",
        intendedFor:
          "Kelas ini cocok untuk developer web yang ingin memperdalam pengetahuan mereka tentang JavaScript. Jika kamu sudah memiliki pemahaman dasar tentang HTML dan CSS, kursus ini akan membantumu meningkatkan kemampuan coding kamu.",
        coursePrice: 150000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 135000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 120,
      },
      {
        categoryId: 3,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseName: "Node.js and Express",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari cara membangun backend aplikasi web dengan Node.js dan Express. Kursus ini mencakup dasar-dasar server-side development, RESTful API, dan manajemen database. Kamu akan memahami bagaimana membuat aplikasi web yang cepat dan scalable.",
        intendedFor:
          "Kelas ini dirancang untuk pengembang web yang ingin memperdalam pengetahuan mereka tentang backend development. Jika kamu sudah familiar dengan JavaScript dan ingin belajar tentang pengembangan server-side, kursus ini adalah pilihan yang tepat.",
        coursePrice: 200000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 170000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 180,
      },
      {
        categoryId: 2,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseName: "Python for Data Science",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari dasar-dasar Python yang akan membantumu memahami bagaimana data dapat dimanipulasi dan dianalisis. Dalam kursus ini, kamu akan mengenal variabel, struktur data, serta teknik dasar pengolahan data dengan Python. Kursus ini dirancang untuk pemula yang ingin memulai perjalanan di dunia Data Science.",
        intendedFor:
          "Cocok untuk pemula yang ingin memulai karir di Data Science. Jika kamu belum pernah menggunakan Python sebelumnya, kursus ini akan memberikan fondasi yang kuat.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 100,
      },
      {
        categoryId: 2,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseName: "Data Analysis with Pandas",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kuasai teknik analisis data dengan Pandas, salah satu library Python yang paling kuat untuk Data Science. Kamu akan belajar bagaimana membersihkan, memanipulasi, dan menganalisis dataset besar. Kursus ini juga mencakup teknik visualisasi data untuk menyajikan hasil analisis secara efektif.",
        intendedFor:
          "Dirancang untuk mereka yang sudah memiliki pengetahuan dasar Python dan ingin meningkatkan keterampilan analisis data. Sangat cocok bagi profesional yang bekerja dengan data atau ingin mengasah keterampilan analitik mereka.",
        coursePrice: 200000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 180000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 150,
      },
      {
        categoryId: 2,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseName: "Machine Learning for Data Science",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari teknik dasar Machine Learning untuk Data Science. Kamu akan memahami algoritma seperti regresi, klasifikasi, clustering, dan model supervised serta unsupervised learning. Kursus ini juga akan membahas bagaimana mengimplementasikan algoritma ini menggunakan Python.",
        intendedFor:
          "Cocok bagi mereka yang memiliki pemahaman dasar dalam pemrograman Python dan ingin memperdalam pengetahuan mereka tentang Machine Learning. Kursus ini ideal bagi profesional yang bekerja di bidang data atau ingin memulai karir di bidang Data Science.",
        coursePrice: 300000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 255000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 200,
      },

      // Kategori 4: Cloud Computing
      {
        categoryId: 5,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseName: "Introduction to AWS",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kenali layanan-layanan AWS yang menjadi fondasi Cloud Computing modern. Pelajari cara menggunakan AWS untuk berbagai kebutuhan bisnis, mulai dari hosting situs web hingga manajemen data skala besar. Kursus ini mencakup konsep dasar seperti EC2, S3, dan layanan AWS lainnya.",
        intendedFor:
          "Pemula yang ingin memahami dasar-dasar layanan AWS. Cocok bagi mereka yang baru mengenal dunia Cloud Computing dan ingin tahu bagaimana layanan cloud dapat diterapkan di bisnis mereka.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 90,
      },
      {
        categoryId: 5,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseName: "Azure Cloud Essentials",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Mengenal layanan Azure dan cara menggunakannya untuk membangun solusi cloud. Kursus ini akan membantu kamu memahami cara menggunakan layanan Azure seperti Virtual Machines, Azure Blob Storage, dan lain-lain. Kursus ini akan membahas dasar-dasar deployment dan management di Azure.",
        intendedFor:
          "Dirancang untuk developer dan administrator IT yang ingin memulai menggunakan Azure dalam proyek mereka. Jika kamu ingin tahu bagaimana membangun dan mengelola aplikasi di cloud, kursus ini akan membantu kamu memulai.",
        coursePrice: 250000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 225000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 120,
      },
      {
        categoryId: 5,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseName: "Google Cloud Platform: From Beginner to Expert",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Menjadi ahli Google Cloud Platform (GCP) dengan kursus yang mencakup semua fitur utama dari GCP. Mulai dari komputasi, penyimpanan, hingga machine learning, kursus ini membantu kamu menguasai GCP secara menyeluruh.",
        intendedFor:
          "Pengembang, admin sistem, atau siapa saja yang ingin menjadi profesional Cloud di GCP. Kursus ini dirancang untuk mereka yang ingin mendalami bagaimana menggunakan layanan GCP secara efektif dalam skala besar.",
        coursePrice: 400000,
        courseDiscountPercent: 20,
        courseDiscountPrice: 320000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 250,
      },
      {
        categoryId: 4,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseName: "Introduction to Flutter",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kursus ini memberikan pengantar lengkap untuk Flutter, framework populer untuk membangun aplikasi mobile multiplatform. Kamu akan belajar bagaimana memulai proyek Flutter, membuat widget dasar, dan mengimplementasikan fitur-fitur menarik dalam aplikasi mobile.",
        intendedFor:
          "Cocok bagi pemula yang ingin memulai pengembangan aplikasi mobile dengan Flutter. Tidak diperlukan pengalaman sebelumnya, namun pengetahuan dasar tentang pemrograman akan membantu dalam proses belajar.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 100,
      },
      {
        categoryId: 4,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseName: "iOS Development with Swift",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari dasar-dasar pengembangan aplikasi iOS menggunakan Swift. Kursus ini akan membahas arsitektur aplikasi iOS, layout, navigasi, dan interaksi antar komponen. Kamu juga akan belajar menggunakan berbagai fitur bawaan iOS untuk meningkatkan pengalaman pengguna.",
        intendedFor:
          "Dirancang untuk developer yang ingin mengembangkan aplikasi untuk perangkat iOS. Cocok bagi mereka yang memiliki dasar pemrograman dan ingin memperdalam kemampuan mereka di Swift.",
        coursePrice: 300000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 270000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 150,
      },
      {
        categoryId: 4,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseName: "Advanced Android Development",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Tingkatkan keterampilan pengembangan Android kamu dengan teknik lanjutan. Kursus ini membahas topik seperti implementasi database lokal, koneksi ke API, pemakaian library pihak ketiga, dan pengelolaan proyek yang lebih besar.",
        intendedFor:
          "Cocok bagi mereka yang sudah memiliki pengalaman dasar dalam pengembangan Android dan ingin memperdalam pengetahuan mereka. Sangat ideal bagi developer yang ingin meningkatkan karier mereka di bidang pengembangan aplikasi mobile.",
        coursePrice: 400000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 340000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 200,
      },

      // Kategori 6: Artificial Intelligence
      {
        categoryId: 6,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseName: "Introduction to Artificial Intelligence",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Dunia kecerdasan buatan menawarkan banyak potensi untuk masa depan teknologi. Kursus ini mengajarkan dasar-dasar AI, termasuk konsep machine learning, neural networks, dan aplikasinya dalam kehidupan nyata.",
        intendedFor:
          "Dirancang untuk pemula yang ingin memulai memahami kecerdasan buatan. Kamu tidak perlu pengalaman sebelumnya dalam AI, tetapi pengetahuan dasar tentang pemrograman akan memudahkan proses belajar.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 120,
      },
      {
        categoryId: 6,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseName: "Machine Learning with Python",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kursus ini akan mengajarkan cara membangun model machine learning menggunakan Python. Kamu akan belajar tentang supervised learning, unsupervised learning, dan teknik-teknik utama yang dibutuhkan dalam proses pengembangan model.",
        intendedFor:
          "Ideal untuk developer dan data scientist yang ingin memperdalam pemahaman mereka tentang machine learning. Pengetahuan dasar Python dan statistik akan membantu dalam mengikuti materi ini.",
        coursePrice: 350000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 315000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 180,
      },
      {
        categoryId: 6,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseName: "Deep Learning for AI",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Memahami lebih dalam tentang deep learning, teknik yang mendasari banyak aplikasi AI canggih saat ini. Kursus ini mencakup neural networks, convolutional neural networks (CNN), dan recurrent neural networks (RNN) untuk berbagai aplikasi mulai dari pengenalan gambar hingga analisis teks.",
        intendedFor:
          "Cocok untuk developer atau peneliti yang ingin mendalami lebih lanjut teknik deep learning. Pengalaman sebelumnya dalam machine learning atau AI sangat disarankan untuk mengikuti kursus ini.",
        coursePrice: 500000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 425000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 240,
      },
      {
        categoryId: 7,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseName: "Introduction to Machine Learning",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari dasar-dasar machine learning dan bagaimana teknologi ini dapat digunakan untuk membuat sistem yang cerdas. Kursus ini membahas algoritma dasar, teknik evaluasi, dan proses pelatihan model.",
        intendedFor:
          "Dirancang untuk pemula yang ingin memahami konsep dasar machine learning. Kamu akan belajar konsep utama yang mendasari sistem pembelajaran mesin dan cara memulai membangun model sederhana.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 120,
      },
      {
        categoryId: 7,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseName: "Supervised Machine Learning",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Memahami teknik supervised learning dalam machine learning. Kamu akan belajar cara membuat model yang dapat memprediksi hasil berdasarkan data pelatihan. Topik termasuk regresi, klasifikasi, dan teknik evaluasi.",
        intendedFor:
          "Cocok bagi mereka yang sudah memiliki pengetahuan dasar tentang pemrograman dan statistik. Kursus ini akan memperdalam pemahaman kamu tentang model supervised learning dan penerapannya di dunia nyata.",
        coursePrice: 350000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 315000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 180,
      },
    ],
  });
};
