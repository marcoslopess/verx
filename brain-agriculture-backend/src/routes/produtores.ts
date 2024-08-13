import { Router } from "express";
import { criarProdutor, atualizarProdutor, deletarProdutor } from "../controllers/produtorController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Produtores
 *   description: Endpoints para gerenciar produtores rurais
 */

/**
 * @swagger
 * /produtores:
 *   post:
 *     summary: Cria um novo produtor rural
 *     tags: [Produtores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cpfCnpj:
 *                 type: string
 *               nomeProdutor:
 *                 type: string
 *               nomeFazenda:
 *                 type: string
 *               cidade:
 *                 type: string
 *               estado:
 *                 type: string
 *               areaTotal:
 *                 type: number
 *               areaAgricultavel:
 *                 type: number
 *               areaVegetacao:
 *                 type: number
 *     responses:
 *       201:
 *         description: Produtor criado com sucesso
 *       400:
 *         description: Erro na criação do produtor
 */
router.post("/produtores", criarProdutor);

/**
 * @swagger
 * /produtores/{id}:
 *   put:
 *     summary: Atualiza um produtor existente
 *     tags: [Produtores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produtor a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeProdutor:
 *                 type: string
 *               nomeFazenda:
 *                 type: string
 *               cidade:
 *                 type: string
 *               estado:
 *                 type: string
 *               areaTotal:
 *                 type: number
 *               areaAgricultavel:
 *                 type: number
 *               areaVegetacao:
 *                 type: number
 *     responses:
 *       200:
 *         description: Produtor atualizado com sucesso
 *       400:
 *         description: Erro na atualização do produtor
 */
router.put("/produtores/:id", atualizarProdutor);

/**
 * @swagger
 * /produtores/{id}:
 *   delete:
 *     summary: Exclui um produtor
 *     tags: [Produtores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produtor a ser excluído
 *     responses:
 *       204:
 *         description: Produtor excluído com sucesso
 *       400:
 *         description: Erro na exclusão do produtor
 */
router.delete("/produtores/:id", deletarProdutor);

export default router;
