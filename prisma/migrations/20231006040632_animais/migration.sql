-- CreateEnum
CREATE TYPE "Porte" AS ENUM ('PEQUENO', 'MEDIO', 'GRANDE');

-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('MASCULINO', 'FEMININO');

-- CreateEnum
CREATE TYPE "TipoAnimal" AS ENUM ('CACHORRO', 'GATO');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" TEXT NOT NULL,
    "type" "TipoAnimal" NOT NULL,
    "name" TEXT,
    "idade" TEXT,
    "porte" "Porte" NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "adotado" BOOLEAN NOT NULL,
    "foto" TEXT,
    "dtInclusao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localizacao" TEXT,
    "raca" TEXT,
    "descricao" TEXT,
    "cuidadosVet" TEXT,
    "caracteristicas" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
