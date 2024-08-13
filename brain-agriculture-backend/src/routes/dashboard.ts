import { Router } from "express";
import {
  getTotalFazendas,
  getTotalHectares,
  getPieChartByState,
  getPieChartByCulture,
  getPieChartByLandUse,
} from "../controllers/dashboardController";

const router = Router();

/**
 * @swagger
 * /dashboard/total-fazendas:
 *   get:
 *     summary: Retorna o total de fazendas em quantidade
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Número total de fazendas
 */
router.get("/total-fazendas", getTotalFazendas);

/**
 * @swagger
 * /dashboard/total-hectares:
 *   get:
 *     summary: Retorna o total de hectares (área total)
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Total de hectares
 */
router.get("/total-hectares", getTotalHectares);

/**
 * @swagger
 * /dashboard/pie-chart-state:
 *   get:
 *     summary: Retorna um gráfico de pizza por estado
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Gráfico de pizza por estado
 */
router.get("/pie-chart-state", getPieChartByState);

/**
 * @swagger
 * /dashboard/pie-chart-culture:
 *   get:
 *     summary: Retorna um gráfico de pizza por cultura
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Gráfico de pizza por cultura
 */
router.get("/pie-chart-culture", getPieChartByCulture);

/**
 * @swagger
 * /dashboard/pie-chart-land-use:
 *   get:
 *     summary: Retorna um gráfico de pizza por uso de solo (Área agricultável e vegetação)
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Gráfico de pizza por uso de solo
 */
router.get("/pie-chart-land-use", getPieChartByLandUse);

export default router;
