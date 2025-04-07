-- CreateEnum
CREATE TYPE "Type" AS ENUM ('add', 'subtract', 'multiply', 'divide');

-- CreateTable
CREATE TABLE "Calculate" (
    "id" SERIAL NOT NULL,
    "a" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "answer" INTEGER NOT NULL,
    "type" "Type" NOT NULL,

    CONSTRAINT "Calculate_pkey" PRIMARY KEY ("id")
);
