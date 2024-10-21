-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('User', 'Instruktur', 'Admin');

-- CreateEnum
CREATE TYPE "Publish" AS ENUM ('Published', 'Archived');

-- CreateEnum
CREATE TYPE "LanguageInterpreter" AS ENUM ('Python', 'Java', 'Kotlin', 'JavaScript', 'PHP', 'Swift', 'Dart');

-- CreateEnum
CREATE TYPE "CourseStatus" AS ENUM ('NotStarted', 'InProgress', 'Completed');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('pending', 'success', 'failure', 'expire', 'cancel', 'deny', 'settlement', 'capture');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "fullName" VARCHAR(100) NOT NULL,
    "image" TEXT,
    "phoneNumber" VARCHAR(15) NOT NULL,
    "role" "RoleType" NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "courseLevelId" INTEGER NOT NULL,
    "typeCourseId" INTEGER NOT NULL,
    "courseCode" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "aboutCourse" TEXT NOT NULL,
    "intendedFor" TEXT NOT NULL,
    "courseDiscountPercent" INTEGER NOT NULL DEFAULT 0,
    "coursePrice" DOUBLE PRECISION NOT NULL,
    "courseDiscountPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "promoStatus" BOOLEAN NOT NULL DEFAULT false,
    "publish" "Publish" NOT NULL,
    "totalDuration" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "certificateStatus" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,
    "categoryCode" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course_levels" (
    "id" SERIAL NOT NULL,
    "levelName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_courses" (
    "id" SERIAL NOT NULL,
    "typeName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "type_courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chapters" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "chapterTitle" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contents" (
    "id" SERIAL NOT NULL,
    "chapterId" INTEGER NOT NULL,
    "interpreterId" INTEGER,
    "contentTitle" TEXT NOT NULL,
    "contentUrl" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "teks" TEXT NOT NULL,
    "interpreterStatus" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interpreters" (
    "id" SERIAL NOT NULL,
    "languageInterpreter" "LanguageInterpreter" NOT NULL,
    "sourceCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "interpreters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course_users" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "contentFinish" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "courseStatus" "CourseStatus" NOT NULL DEFAULT 'NotStarted',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_content_progress" (
    "id" SERIAL NOT NULL,
    "courseUserId" INTEGER NOT NULL,
    "contentId" INTEGER NOT NULL,
    "contentStatus" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_content_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certificates" (
    "id" SERIAL NOT NULL,
    "courseUserId" INTEGER NOT NULL,
    "certificateNumber" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "certificates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "courseName" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "ppn" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "paymentStatus" "PaymentStatus" NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "linkPayment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_uid_key" ON "users"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "course_courseCode_key" ON "course"("courseCode");

-- CreateIndex
CREATE UNIQUE INDEX "categories_categoryCode_key" ON "categories"("categoryCode");

-- CreateIndex
CREATE UNIQUE INDEX "course_users_courseId_key" ON "course_users"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "certificates_courseUserId_key" ON "certificates"("courseUserId");

-- CreateIndex
CREATE UNIQUE INDEX "transactions_orderId_key" ON "transactions"("orderId");

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_courseLevelId_fkey" FOREIGN KEY ("courseLevelId") REFERENCES "course_levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_typeCourseId_fkey" FOREIGN KEY ("typeCourseId") REFERENCES "type_courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contents" ADD CONSTRAINT "contents_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "chapters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contents" ADD CONSTRAINT "contents_interpreterId_fkey" FOREIGN KEY ("interpreterId") REFERENCES "interpreters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_users" ADD CONSTRAINT "course_users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_users" ADD CONSTRAINT "course_users_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_content_progress" ADD CONSTRAINT "user_content_progress_courseUserId_fkey" FOREIGN KEY ("courseUserId") REFERENCES "course_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_content_progress" ADD CONSTRAINT "user_content_progress_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_courseUserId_fkey" FOREIGN KEY ("courseUserId") REFERENCES "course_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
