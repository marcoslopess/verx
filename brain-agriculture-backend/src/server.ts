import { sequelize } from "./database";
import app from "./app";

// Conectar ao banco de dados e iniciar o servidor
const startServer = async () => {
  try {
    await sequelize.sync(); // Sincroniza os modelos com o banco de dados
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
      console.log("Documentação Swagger disponível em http://localhost:3000/api-docs");
    });
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
};

startServer();
