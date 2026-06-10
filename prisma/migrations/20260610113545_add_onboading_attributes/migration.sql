-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hasCompletedOnboading" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "onboadingAnswers" JSONB;
