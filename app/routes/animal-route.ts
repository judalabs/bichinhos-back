import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma-client";

export async function handleAnimais(app: FastifyInstance) {
  app.get("/animal", async () => {
    const animais = await prisma.animal.findMany();

    return { animais };
  });
}
