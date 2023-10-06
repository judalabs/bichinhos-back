import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma-client";
import { Animal } from "@prisma/client";

export async function handleAnimaisService(app: FastifyInstance) {
  app.post("/animal", async (req: any, response: FastifyReply) => {
    const { type, name, idade, porte, sexo, adotado, userId } = req.body;
    // const animais = await prisma.animal.findMany();
    console.log(req);
    return await prisma.animal.create({
      // data: req.body,
      data: {
        type,
        name,
        idade,
        porte,
        sexo,
        adotado,
        userId,
      },
    });
    // return { animais };
  });
}

enum Porte {
  PEQUENO,
  MEDIO,
  GRANDE,
}

enum Sexo {
  MACHO,
  FEMEA,
}

enum TipoAnimal {
  CACHORRO,
  GATO,
}
