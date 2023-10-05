import { Request, Response } from "express";

export async function handleAnimais(req: Request, res: Response) {
  res.json({
    animal: "gato",
    nome: "felinao bolado",
  });
}
