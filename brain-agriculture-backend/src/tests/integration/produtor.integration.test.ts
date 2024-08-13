import request from "supertest";
import app from "../../app";
import { sequelize } from "../../database";
import Produtor from "../../models/Produtor";

describe("Produtor - Integration", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await Produtor.destroy({ where: {}, truncate: true });
    await sequelize.close();
  });

  test("deve criar um produtor com sucesso", async () => {
    const mockProdutor = {
      cpfCnpj: "12345678901",
      nomeProdutor: "João da Silva",
      nomeFazenda: "Fazenda Exemplo",
      cidade: "Cidade Exemplo",
      estado: "EX",
      areaTotal: 100,
      areaAgricultavel: 60,
      areaVegetacao: 30,
    };

    const res = await request(app).post("/api/produtores").send(mockProdutor);
    expect(res.status).toBe(201);
    expect(res.body.cpfCnpj).toBe("12345678901");
  });

  test("não deve criar um produtor se a soma da área agricultável e vegetação for maior que a área total", async () => {
    const mockProdutor = {
      cpfCnpj: "12345678902",
      nomeProdutor: "João da Silva",
      nomeFazenda: "Fazenda Exemplo",
      cidade: "Cidade Exemplo",
      estado: "EX",
      areaTotal: 100,
      areaAgricultavel: 60,
      areaVegetacao: 50,
    };

    const res = await request(app).post("/api/produtores").send(mockProdutor);
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("A soma da área agricultável e vegetação não pode ser maior que a área total.");
  });

  test("deve editar um produtor com sucesso", async () => {
    const mockProdutor = await Produtor.create({
      cpfCnpj: "12345678903",
      nomeProdutor: "João da Silva",
      nomeFazenda: "Fazenda Exemplo",
      cidade: "Cidade Exemplo",
      estado: "EX",
      areaTotal: 100,
      areaAgricultavel: 60,
      areaVegetacao: 30,
    });

    const updateData = {
      nomeProdutor: "João Atualizado",
    };

    const res = await request(app).put(`/api/produtores/${mockProdutor.id}`).send(updateData);
    //  console.log(res);

    expect(res.status).toBe(200);
    expect(res.body.nomeProdutor).toBe("João Atualizado");
  });

  test("deve excluir um produtor com sucesso", async () => {
    const mockProdutor = await Produtor.create({
      cpfCnpj: "12345678904",
      nomeProdutor: "João da Silva",
      nomeFazenda: "Fazenda Exemplo",
      cidade: "Cidade Exemplo",
      estado: "EX",
      areaTotal: 100,
      areaAgricultavel: 60,
      areaVegetacao: 30,
    });

    const res = await request(app).delete(`/api/produtores/${mockProdutor.id}`);
    expect(res.status).toBe(204);
  });
});
