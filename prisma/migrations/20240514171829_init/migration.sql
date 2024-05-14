-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "statement" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);
