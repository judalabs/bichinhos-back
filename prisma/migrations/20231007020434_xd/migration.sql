/*
  Warnings:

  - The `idade` column on the `Animal` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "idade",
ADD COLUMN     "idade" DECIMAL(65,30);
