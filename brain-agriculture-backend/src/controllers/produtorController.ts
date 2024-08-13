import { Request, Response } from "express";
import { cadastrarProdutor, editarProdutor, excluirProdutor } from "../services/ProdutorService";

export const criarProdutor = async (req: Request, res: Response) => {
  try {
    const produtor = await cadastrarProdutor(req.body);
    res.status(201).json(produtor);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const atualizarProdutor = async (req: Request, res: Response) => {
  try {
    const produtor = await editarProdutor(req.params.id, req.body);
    res.status(200).json(produtor);
  } catch (error: any) {
    console.log(error.message);

    res.status(400).json({ error: error.message });
  }
};

export const deletarProdutor = async (req: Request, res: Response) => {
  try {
    await excluirProdutor(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
