import { FastifyInstance, FastifyReply } from "fastify";
import { prisma } from "../../lib/prisma-client";

export async function handleAnimais(app: FastifyInstance) {
  app.get("/animal", async () => {
    console.log("get animais");
    const animais = await prisma.animal.findMany();

    return { animais };
  });

  app.post("/animal", async (req: any, reply: FastifyReply) => {
    console.log("criando animais");
    const { type, name, idade, porte, sexo, responsavel, adotado, userId } =
      req.body;
    return prisma.animal.create({
      data: {
        type,
        name,
        idade,
        porte,
        sexo,
        responsavel,
        adotado,
        userId,
      },
    });
  });
}
