/*
  Warnings:

  - You are about to drop the column `units` on the `bloodRequests` table. All the data in the column will be lost.
  - You are about to drop the column `confirmedAt` on the `donations` table. All the data in the column will be lost.
  - Added the required column `unitsRequired` to the `bloodRequests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `donationOutcome` to the `donations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `donors` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DonationOutcome" AS ENUM ('DONATED', 'NO_SHOW');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('NEW_BLOOD_REQUEST', 'RESPONSE_ACCEPTED', 'DONATION_CONFIRMED', 'REQUEST_CANCELLED');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "bloodRequests" DROP COLUMN "units",
ADD COLUMN     "unitsFulfilled" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "unitsRequired" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "donations" DROP COLUMN "confirmedAt",
ADD COLUMN     "donationOutcome" "DonationOutcome" NOT NULL,
ADD COLUMN     "outcomeRecordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "units" DROP NOT NULL;

-- AlterTable
ALTER TABLE "donors" ADD COLUMN     "gender" "Gender" NOT NULL;

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "donorId" TEXT,
    "hospitalId" TEXT,
    "requestId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "notifications_donorId_idx" ON "notifications"("donorId");

-- CreateIndex
CREATE INDEX "notifications_hospitalId_idx" ON "notifications"("hospitalId");

-- CreateIndex
CREATE INDEX "notifications_requestId_idx" ON "notifications"("requestId");

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "donors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "hospitals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "bloodRequests"("id") ON DELETE SET NULL ON UPDATE CASCADE;
