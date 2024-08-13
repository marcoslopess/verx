import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { checkNumber, countStrings } from "./src/algorithms";

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Algorithms API",
      version: "1.0.0",
    },
  },
  apis: ["./index.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /checkNumber:
 *   get:
 *     summary: Executa o algoritmo checkNumber
 *     responses:
 *       200:
 *         description: Algoritmo executado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
app.get("/checkNumber", (req, res) => {
  const result = checkNumber();
  res.json(result);
});

/**
 * @swagger
 * /countStrings:
 *   get:
 *     summary: Executa o algoritmo countStrings
 *     responses:
 *       200:
 *         description: Algoritmo executado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: integer
 */
app.get("/countStrings", (req, res) => {
  const strings = ["PaTiNeTe", "SKATE", "Patinete", "BicicletA"];
  const result = countStrings(strings);
  res.json(result);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
