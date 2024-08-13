import { Sequelize } from "sequelize";
import retry from "async-retry";

const isTestEnvironment = process.env.NODE_ENV === "test";

export const sequelize = new Sequelize({
  database: process.env.DB_NAME || "brain_agriculture",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  host: isTestEnvironment ? "test_db" : process.env.DB_HOST || "db",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

export const checkDatabaseConnection = async () => {
  await retry(
    async () => {
      try {
        await sequelize.authenticate();
        //  console.log("Conexão estabelecida com sucesso ao banco de dados.");
      } catch (error) {
        console.error("Tentativa de conexão falhou, tentando novamente...", error);
        throw error;
      }
    },
    { retries: 5, minTimeout: 1000 }
  );
};

checkDatabaseConnection();
