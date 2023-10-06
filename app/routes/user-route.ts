import { FastifyInstance, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma-client";

export async function handleUsuarios(app: FastifyInstance) {
  app.post("/usuario", async (req: any) => {
    const { name, login, password } = req.body;

    return await prisma.user.create({
      data: {
        name,
        login,
        password,
      },
    });
  });
}
