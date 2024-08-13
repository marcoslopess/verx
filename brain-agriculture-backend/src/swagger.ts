import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

// Configurações do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Brain Agriculture API",
      version: "1.0.0",
      description: "API para gestão de produtores rurais",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // Caminho para os arquivos onde estão as rotas e controladores
};

// Inicializa o Swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Função para configurar o Swagger na aplicação Express
export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
