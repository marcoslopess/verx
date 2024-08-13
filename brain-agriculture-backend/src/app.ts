import express from "express";
import produtoresRoutes from "./routes/produtores";
import dashboardRoutes from "./routes/dashboard";
import { setupSwagger } from "./swagger";

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use("/api", produtoresRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Configura o Swagger
setupSwagger(app);

export default app;
