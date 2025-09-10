-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."Position" ADD VALUE 'DIRECTORIAL_COMMITTEE_CHAIR';
ALTER TYPE "public"."Position" ADD VALUE 'MEDIA_SERVICE';
ALTER TYPE "public"."Position" ADD VALUE 'PROFESSIONAL_DEVELOPMENT';

-- AlterTable
ALTER TABLE "public"."Newsletter" ADD COLUMN     "yearId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Newsletter" ADD CONSTRAINT "Newsletter_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "public"."Year"("id") ON DELETE CASCADE ON UPDATE CASCADE;
