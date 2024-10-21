import { prisma } from "../../application/database";

export const seedCourse = async () => {
  await prisma.course.createMany({
    data: [
      {
        id: 1,
        categoryId: 1,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "RN0001",
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
        id: 2,
        categoryId: 1,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "FD0002",
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
        id: 3,
        categoryId: 1,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "KOT0003",
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
        id: 4,
        categoryId: 2,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "WD0001",
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
        id: 5,
        categoryId: 2,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "JS0002",
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
        id: 6,
        categoryId: 2,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "NJS0003",
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
        id: 7,
        categoryId: 3,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "PYDS001",
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
        id: 8,
        categoryId: 3,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "DSAN002",
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
        id: 9,
        categoryId: 3,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "MLDS003",
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
        id: 10,
        categoryId: 4,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "AWS001",
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
        id: 11,
        categoryId: 4,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "AZC002",
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
        id: 12,
        categoryId: 4,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "GCPC003",
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
        id: 13,
        categoryId: 5,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "FLUT001",
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
        id: 14,
        categoryId: 5,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "IOSD002",
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
        id: 15,
        categoryId: 5,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "ANDD003",
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
        id: 16,
        categoryId: 6,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "AI001",
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
        id: 17,
        categoryId: 6,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "ML002",
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
        id: 18,
        categoryId: 6,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "DL003",
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
        id: 19,
        categoryId: 7,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "ML001",
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
        id: 20,
        categoryId: 7,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "SUPML002",
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
      {
        id: 21,
        categoryId: 7,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "UNSUPML003",
        courseName: "Unsupervised Learning Techniques",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kursus ini membahas teknik unsupervised learning seperti clustering dan dimensionality reduction. Kamu akan belajar cara menganalisis dan mengelompokkan data tanpa label dan bagaimana metode ini digunakan dalam berbagai aplikasi industri.",
        intendedFor:
          "Cocok bagi para profesional yang ingin mendalami analisis data tanpa label. Pengalaman dalam machine learning atau data science akan sangat membantu.",
        coursePrice: 400000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 340000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 200,
      },

      // Kategori 8: Cybersecurity
      {
        id: 22,
        categoryId: 8,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "CYBER001",
        courseName: "Cybersecurity Basics",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pahami dasar-dasar keamanan siber, termasuk ancaman umum, teknik pencegahan, dan praktik terbaik untuk menjaga data aman. Kamu akan belajar tentang firewall, enkripsi, dan keamanan jaringan.",
        intendedFor:
          "Dirancang untuk pemula yang tertarik mempelajari dasar-dasar keamanan siber. Cocok bagi siapa saja yang ingin memahami ancaman online dan cara melindungi data pribadi.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 120,
      },
      {
        id: 23,
        categoryId: 8,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "NETSEC002",
        courseName: "Network Security Fundamentals",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Belajar tentang keamanan jaringan, termasuk teknik untuk melindungi jaringan dari serangan. Kursus ini mencakup VPN, firewall, dan berbagai metode enkripsi.",
        intendedFor:
          "Ideal untuk profesional IT yang ingin memahami bagaimana melindungi jaringan komputer mereka. Pengetahuan dasar tentang jaringan komputer sangat membantu.",
        coursePrice: 350000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 315000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 180,
      },
      {
        id: 24,
        categoryId: 8,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "ETHHACK003",
        courseName: "Ethical Hacking and Penetration Testing",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari teknik-teknik hacking etis dan bagaimana melakukan pengujian penetrasi pada sistem komputer untuk menemukan kelemahan. Kamu akan belajar tentang eksploitasi, metode serangan, dan bagaimana melindungi sistem dari peretas.",
        intendedFor:
          "Cocok bagi para profesional keamanan siber yang ingin mendalami teknik hacking etis. Pengalaman dalam keamanan jaringan atau administrasi sistem sangat dianjurkan.",
        coursePrice: 500000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 425000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 240,
      },

      // Kategori 9: Blockchain
      {
        id: 25,
        categoryId: 9,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "BC001",
        courseName: "Blockchain Basics",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pahami konsep dasar teknologi blockchain, termasuk cara kerjanya, penggunaan kriptografi, dan bagaimana blockchain digunakan dalam cryptocurrency seperti Bitcoin.",
        intendedFor:
          "Ideal untuk pemula yang ingin memahami teknologi blockchain dan aplikasinya di berbagai industri. Tidak diperlukan pengalaman sebelumnya dalam pemrograman atau teknologi.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 100,
      },
      {
        id: 26,
        categoryId: 9,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "ETHBC002",
        courseName: "Smart Contracts with Ethereum",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari cara membuat dan mengimplementasikan smart contracts di blockchain Ethereum. Kursus ini membahas Solidity, bahasa pemrograman untuk pengembangan smart contract, serta langkah-langkah untuk membangun aplikasi desentralisasi.",
        intendedFor:
          "Cocok bagi developer yang ingin mempelajari pengembangan blockchain dan smart contracts. Pengetahuan dasar tentang pemrograman akan sangat membantu.",
        coursePrice: 400000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 340000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 180,
      },
      {
        id: 27,
        categoryId: 9,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "BCADV003",
        courseName: "Advanced Blockchain Development",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kursus ini membahas teknik pengembangan blockchain tingkat lanjut, termasuk konsensus, scalability, dan interoperabilitas antar jaringan blockchain.",
        intendedFor:
          "Dirancang untuk developer blockchain yang ingin memperdalam pemahaman mereka tentang teknologi blockchain dan mengembangkan aplikasi yang lebih kompleks.",
        coursePrice: 450000,
        courseDiscountPercent: 20,
        courseDiscountPrice: 360000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 200,
      },
      {
        id: 28,
        categoryId: 10,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "GAMEDEV001",
        courseName: "Introduction to Game Development",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari dasar-dasar pengembangan game dari konsep hingga implementasi. Kursus ini membahas desain game, pemrograman dasar, dan cara membuat game sederhana yang menarik.",
        intendedFor:
          "Cocok bagi pemula yang tertarik untuk belajar membuat game sendiri. Kamu tidak memerlukan pengalaman sebelumnya di bidang pemrograman, namun akan sangat membantu.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 100,
      },
      {
        id: 29,
        categoryId: 10,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "UNITYDEV002",
        courseName: "Game Development with Unity",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kuasai Unity, salah satu game engine paling populer di dunia. Kamu akan belajar bagaimana membuat game 2D dan 3D, serta memahami scripting, animasi, dan penggunaan asset di Unity.",
        intendedFor:
          "Dirancang untuk developer pemula hingga menengah yang ingin menguasai Unity. Pengetahuan dasar tentang pemrograman akan membantu kamu dalam mengikuti kursus ini.",
        coursePrice: 400000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 360000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 150,
      },
      {
        id: 30,
        categoryId: 10,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "ADVGAMEDEV003",
        courseName: "Advanced Game Development Techniques",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari teknik pengembangan game tingkat lanjut termasuk optimalisasi, AI, dan desain gameplay yang kompleks. Kursus ini membantu kamu memahami berbagai aspek pembuatan game profesional.",
        intendedFor:
          "Ideal untuk developer yang ingin memperdalam keterampilan mereka dalam pengembangan game. Pengalaman sebelumnya dalam pemrograman dan pengembangan game sangat dianjurkan.",
        coursePrice: 500000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 425000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 200,
      },

      // Kategori 11: Digital Marketing
      {
        id: 31,
        categoryId: 11,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "DIGIMARK001",
        courseName: "Fundamentals of Digital Marketing",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari dasar-dasar pemasaran digital termasuk SEO, SEM, dan strategi konten. Kursus ini memberikan pemahaman menyeluruh tentang bagaimana cara meningkatkan kehadiran online.",
        intendedFor:
          "Cocok untuk pemula yang ingin mempelajari cara mengoptimalkan pemasaran digital. Tidak diperlukan pengalaman sebelumnya, tetapi pemahaman dasar tentang bisnis dan teknologi akan berguna.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 80,
      },
      {
        id: 32,
        categoryId: 11,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "SOCIALMED002",
        courseName: "Social Media Marketing Mastery",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kuasai strategi pemasaran media sosial untuk meningkatkan brand awareness dan engagement. Kamu akan belajar cara membuat konten menarik dan kampanye efektif di berbagai platform sosial.",
        intendedFor:
          "Dirancang untuk pemilik bisnis, marketer, dan individu yang ingin meningkatkan keterampilan pemasaran di media sosial. Tidak diperlukan pengalaman sebelumnya dalam pemasaran digital.",
        coursePrice: 300000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 270000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 120,
      },
      {
        id: 33,
        categoryId: 11,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "DIGITALSTR003",
        courseName: "Advanced Digital Marketing Strategies",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari strategi pemasaran digital tingkat lanjut, termasuk analisis data, periklanan berbayar, dan automasi pemasaran untuk meningkatkan ROI. Kursus ini mempersiapkan kamu menjadi ahli dalam pemasaran digital.",
        intendedFor:
          "Ideal untuk profesional pemasaran yang ingin meningkatkan keterampilan mereka dan belajar strategi pemasaran digital tingkat lanjut. Pengalaman dasar dalam pemasaran akan sangat membantu.",
        coursePrice: 500000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 425000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 180,
      },

      // Kategori 12: Graphic Design
      {
        id: 34,
        categoryId: 12,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "GRAPHDES001",
        courseName: "Introduction to Graphic Design",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari dasar-dasar desain grafis, termasuk penggunaan warna, tipografi, dan komposisi. Kursus ini memberikan fondasi yang kuat untuk memulai karier sebagai desainer grafis.",
        intendedFor:
          "Cocok bagi pemula yang ingin belajar desain grafis. Tidak diperlukan pengalaman sebelumnya, tetapi kreativitas dan minat dalam seni visual akan sangat membantu.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 100,
      },
      {
        id: 35,
        categoryId: 12,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "PHOTOSHOP002",
        courseName: "Mastering Adobe Photoshop",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kuasai Adobe Photoshop untuk membuat desain yang menakjubkan. Kamu akan belajar teknik manipulasi gambar, pengeditan foto, dan desain digital dari awal hingga mahir.",
        intendedFor:
          "Dirancang untuk siapa saja yang ingin menjadi ahli Photoshop. Pengetahuan dasar tentang desain grafis atau software pengeditan foto akan sangat membantu.",
        coursePrice: 400000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 360000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 140,
      },
      {
        id: 36,
        categoryId: 12,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "ILLUSTRATOR003",
        courseName: "Advanced Illustrator Techniques",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari teknik desain vektor tingkat lanjut dengan Adobe Illustrator. Kamu akan belajar cara membuat desain profesional, ikon, logo, dan ilustrasi digital.",
        intendedFor:
          "Ideal untuk desainer yang ingin memperdalam keterampilan mereka dalam desain vektor dan Adobe Illustrator. Pengalaman dalam desain grafis akan sangat berguna.",
        coursePrice: 450000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 382500,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 180,
      },
      {
        id: 37,
        categoryId: 13,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "PROJMAN001",
        courseName: "Introduction to Project Management",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari dasar-dasar manajemen proyek, termasuk perencanaan, pelaksanaan, dan pengendalian proyek. Kursus ini memberikan pemahaman tentang metodologi manajemen proyek yang efektif.",
        intendedFor:
          "Cocok untuk pemula yang tertarik dalam manajemen proyek dan ingin memahami prinsip-prinsip dasar. Tidak ada pengalaman sebelumnya yang diperlukan.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 90,
      },
      {
        id: 38,
        categoryId: 13,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "AGILEPROJ002",
        courseName: "Agile Project Management",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kuasai prinsip-prinsip manajemen proyek Agile untuk meningkatkan efisiensi dan fleksibilitas dalam pengelolaan proyek. Pelajari teknik Scrum dan Kanban.",
        intendedFor:
          "Ideal untuk manajer proyek, pemimpin tim, dan profesional yang ingin menerapkan metodologi Agile dalam proyek mereka. Pengalaman dalam manajemen proyek sebelumnya akan sangat membantu.",
        coursePrice: 350000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 315000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 120,
      },
      {
        id: 39,
        categoryId: 13,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "PROJLEAD003",
        courseName: "Leadership in Project Management",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari keterampilan kepemimpinan yang diperlukan untuk memimpin tim proyek yang sukses. Kursus ini mencakup komunikasi, motivasi, dan pengelolaan risiko.",
        intendedFor:
          "Didesain untuk manajer proyek berpengalaman dan pemimpin tim yang ingin meningkatkan keterampilan kepemimpinan mereka. Pengalaman dalam manajemen proyek sangat dianjurkan.",
        coursePrice: 500000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 425000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 150,
      },

      // Kategori 14: DevOps
      {
        id: 40,
        categoryId: 14,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "DEVOPS101",
        courseName: "Introduction to DevOps",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari prinsip-prinsip dasar DevOps, termasuk integrasi dan pengiriman berkelanjutan. Kursus ini memberikan pemahaman tentang kolaborasi antara pengembang dan tim operasi.",
        intendedFor:
          "Cocok untuk pengembang dan profesional IT yang ingin memahami konsep DevOps. Tidak diperlukan pengalaman sebelumnya, tetapi pengetahuan dasar tentang pengembangan perangkat lunak sangat membantu.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 100,
      },
      {
        id: 41,
        categoryId: 14,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "CICD202",
        courseName: "Continuous Integration and Continuous Deployment",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kuasai teknik integrasi dan pengiriman berkelanjutan untuk meningkatkan efisiensi pengembangan perangkat lunak. Kamu akan belajar menggunakan alat seperti Jenkins dan GitLab CI.",
        intendedFor:
          "Dirancang untuk pengembang perangkat lunak dan profesional DevOps yang ingin meningkatkan keterampilan mereka dalam CI/CD. Pengetahuan sebelumnya tentang DevOps akan sangat berguna.",
        coursePrice: 400000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 360000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 130,
      },
      {
        id: 42,
        categoryId: 14,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "CLOUDDEVOPS303",
        courseName: "DevOps on Cloud Platforms",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari cara menerapkan praktik DevOps di platform cloud seperti AWS, Azure, dan Google Cloud. Kursus ini mencakup alat dan teknik untuk manajemen infrastruktur.",
        intendedFor:
          "Ideal untuk profesional IT yang ingin menerapkan praktik DevOps dalam lingkungan cloud. Pengalaman dalam DevOps dan cloud computing sangat dianjurkan.",
        coursePrice: 550000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 467500,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 180,
      },

      // Kategori 15: Internet of Things
      {
        id: 43,
        categoryId: 15,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 1,
        typeCourseId: 1,
        courseCode: "IOT101",
        courseName: "Introduction to Internet of Things (IoT)",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari konsep dasar Internet of Things dan aplikasinya dalam kehidupan sehari-hari. Kursus ini memberikan pemahaman tentang perangkat, jaringan, dan sistem IoT.",
        intendedFor:
          "Cocok untuk pemula yang ingin memahami konsep IoT. Tidak diperlukan pengalaman sebelumnya, tetapi ketertarikan pada teknologi akan sangat membantu.",
        coursePrice: 0,
        courseDiscountPercent: 0,
        courseDiscountPrice: 0,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 90,
      },
      {
        id: 44,
        categoryId: 15,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 2,
        typeCourseId: 2,
        courseCode: "SMARTDEV202",
        courseName: "Building Smart IoT Devices",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Kuasai cara membangun perangkat IoT pintar dengan menggunakan Raspberry Pi dan Arduino. Kursus ini mencakup sensor, aktuator, dan pemrograman untuk IoT.",
        intendedFor:
          "Dirancang untuk pengembang dan engineer yang ingin membangun perangkat IoT. Pengetahuan dasar tentang pemrograman dan elektronik akan sangat berguna.",
        coursePrice: 450000,
        courseDiscountPercent: 10,
        courseDiscountPrice: 405000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 150,
      },
      {
        id: 45,
        categoryId: 15,
        userId: "dfdTOJlR6XSuOgvB121aritzzD43",
        courseLevelId: 3,
        typeCourseId: 2,
        courseCode: "IOTSEC303",
        courseName: "IoT Security and Privacy",
        image:
          "https://ik.imagekit.io/vyck38py3/Course/image.png?updatedAt=1727984881238",
        aboutCourse:
          "Pelajari cara melindungi perangkat IoT dan data pribadi dari ancaman keamanan. Kursus ini mencakup teknik enkripsi, pengaturan privasi, dan kebijakan keamanan.",
        intendedFor:
          "Ideal untuk profesional keamanan siber dan developer IoT yang ingin memahami isu keamanan dalam IoT. Pengalaman dalam keamanan IT sangat dianjurkan.",
        coursePrice: 500000,
        courseDiscountPercent: 15,
        courseDiscountPrice: 425000,
        promoStatus: true,
        certificateStatus: true,
        publish: "Published",
        totalDuration: 180,
      },
    ],
  });
};
