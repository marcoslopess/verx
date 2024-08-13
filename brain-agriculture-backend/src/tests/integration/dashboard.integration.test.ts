import request from "supertest";
import app from "../../app";
import { sequelize } from "../../database";
import Produtor from "../../models/Produtor";

describe("Dashboard - Integration", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
    await Produtor.bulkCreate([
      {
        cpfCnpj: "12345678901",
        nomeProdutor: "João da Silva",
        nomeFazenda: "Fazenda Exemplo",
        cidade: "Cidade Exemplo",
        estado: "SP",
        areaTotal: 100,
        areaAgricultavel: 60,
        areaVegetacao: 40,
        culturas: ["Soja"],
      },
      {
        cpfCnpj: "12345678902",
        nomeProdutor: "João da Costa",
        nomeFazenda: "Fazenda Exemplo 2",
        cidade: "Cidade Exemplo 2",
        estado: "MG",
        areaTotal: 200,
        areaAgricultavel: 120,
        areaVegetacao: 80,
        culturas: ["Milho"],
      },
    ]);
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test("deve retornar o total de fazendas", async () => {
    const res = await request(app).get("/api/dashboard/total-fazendas");
    expect(res.status).toBe(200);
    expect(res.body.totalFazendas).toBe(2);
  });

  test("deve retornar o total de hectares", async () => {
    const res = await request(app).get("/api/dashboard/total-hectares");
    expect(res.status).toBe(200);
    expect(res.body.totalHectares).toBe(300);
  });

  test("deve retornar o gráfico de pizza por estado", async () => {
    const res = await request(app).get("/api/dashboard/pie-chart-state");
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(2);
  });

  test("deve retornar o gráfico de pizza por cultura", async () => {
    const res = await request(app).get("/api/dashboard/pie-chart-culture");
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(2);
  });

  // test("deve retornar o gráfico de pizza por uso de solo", async () => {
  //   const res = await request(app).get("/api/dashboard/pie-chart-land-use");
  //   expect(res.status).toBe(200);
  //   expect(res.body.totalAgricultavel).toBe(180);
  //   expect(res.body.totalVegetacao).toBe(120);
  // });
});
