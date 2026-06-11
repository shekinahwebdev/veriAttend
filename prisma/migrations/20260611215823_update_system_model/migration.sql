/*
  Warnings:

  - You are about to drop the column `hasCompletedOnboading` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `onboadingAnswers` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[departmentId,level,name]` on the table `AcademicGroup` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[institutionId,code]` on the table `Department` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `departmentId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "AcademicGroup_departmentId_id_key";

-- DropIndex
DROP INDEX "Department_institutionId_id_key";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "departmentId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "hasCompletedOnboading",
DROP COLUMN "onboadingAnswers",
ADD COLUMN     "hasCompletedOnboarding" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mustChangePassword" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "onboardingAnswers" JSONB;

-- CreateIndex
CREATE UNIQUE INDEX "AcademicGroup_departmentId_level_name_key" ON "AcademicGroup"("departmentId", "level", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_institutionId_code_key" ON "Department"("institutionId", "code");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
