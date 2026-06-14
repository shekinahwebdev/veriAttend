/*
  Warnings:

  - You are about to drop the column `departmentId` on the `Course` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[programId,level,name]` on the table `AcademicGroup` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `programId` to the `AcademicGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `programId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AcademicGroup" DROP CONSTRAINT "AcademicGroup_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_departmentId_fkey";

-- DropIndex
DROP INDEX "AcademicGroup_departmentId_level_name_key";

-- AlterTable
ALTER TABLE "AcademicGroup" ADD COLUMN     "programId" TEXT NOT NULL,
ALTER COLUMN "departmentId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "departmentId",
ADD COLUMN     "programId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Program" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT,
    "departmentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AcademicGroup_programId_level_name_key" ON "AcademicGroup"("programId", "level", "name");

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcademicGroup" ADD CONSTRAINT "AcademicGroup_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcademicGroup" ADD CONSTRAINT "AcademicGroup_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
