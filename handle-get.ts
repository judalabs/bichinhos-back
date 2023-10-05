import { Request, Response } from "express";

function handleGet(req: Request, res: Response) {
  res.json({
    animal: "gato",
    nome: "felinao bolado",
  });
}

export default handleGet;
