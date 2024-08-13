import { Request, Response } from "express";
import {
  obterTotalFazendas,
  obterTotalHectares,
  obterGraficoPorEstado,
  obterGraficoPorCultura,
  obterGraficoPorUsoSolo,
} from "../services/DashboardService";

export const getTotalFazendas = async (req: Request, res: Response) => {
  try {
    const total = await obterTotalFazendas();
    res.status(200).json({ totalFazendas: total });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Erro ao buscar o total de fazendas." });
  }
};

export const getTotalHectares = async (req: Request, res: Response) => {
  try {
    const totalHectares = await obterTotalHectares();
    res.status(200).json({ totalHectares });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o total de hectares." });
  }
};

export const getPieChartByState = async (req: Request, res: Response) => {
  try {
    const data = await obterGraficoPorEstado();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do gráfico de pizza por estado." });
  }
};

export const getPieChartByCulture = async (req: Request, res: Response) => {
  try {
    const data = await obterGraficoPorCultura();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do gráfico de pizza por cultura." });
  }
};

export const getPieChartByLandUse = async (req: Request, res: Response) => {
  try {
    const data = await obterGraficoPorUsoSolo();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do gráfico de pizza por uso de solo." });
  }
};
