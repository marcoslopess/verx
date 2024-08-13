import {
  obterTotalFazendas,
  obterTotalHectares,
  obterGraficoPorEstado,
  obterGraficoPorCultura,
  obterGraficoPorUsoSolo,
} from "../../services/DashboardService";
import Produtor from "../../models/Produtor";

// Mock para a camada do Sequelize
jest.mock("../../models/Produtor", () => ({
  count: jest.fn(),
  sum: jest.fn(),
  findAll: jest.fn(),
}));

describe("DashboardService - Unit", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("deve retornar o total de fazendas", async () => {
    const countSpy = jest.spyOn(Produtor, "count").mockResolvedValue(10);
    const total = await obterTotalFazendas();
    expect(total).toBe(10);
    expect(countSpy).toHaveBeenCalledTimes(1);
  });

  test("deve retornar o total de hectares", async () => {
    const sumSpy = jest.spyOn(Produtor, "sum").mockResolvedValue(1000);
    const totalHectares = await obterTotalHectares();
    expect(totalHectares).toBe(1000);
    expect(sumSpy).toHaveBeenCalledTimes(1);
  });

  test("deve retornar os dados para o gráfico de pizza por estado", async () => {
    const mockData = [
      { estado: "SP", total: 5 },
      { estado: "MG", total: 3 },
    ];
    const findAllSpy = jest.spyOn(Produtor, "findAll").mockResolvedValue(mockData as any);
    const data = await obterGraficoPorEstado();
    expect(data).toEqual(mockData);
    expect(findAllSpy).toHaveBeenCalledTimes(1);
  });

  test("deve retornar os dados para o gráfico de pizza por cultura", async () => {
    const mockData = [
      { culturas: "Soja", total: 5 },
      { culturas: "Milho", total: 3 },
    ];
    const findAllSpy = jest.spyOn(Produtor, "findAll").mockResolvedValue(mockData as any);
    const data = await obterGraficoPorCultura();
    expect(data).toEqual(mockData);
    expect(findAllSpy).toHaveBeenCalledTimes(1);
  });

  test("deve retornar os dados para o gráfico de pizza por uso de solo", async () => {
    const mockData = [{ totalAgricultavel: 600, totalVegetacao: 400 }];
    const findAllSpy = jest.spyOn(Produtor, "findAll").mockResolvedValue(mockData as any);
    const data = await obterGraficoPorUsoSolo();
    expect(data).toEqual(mockData[0]);
    expect(findAllSpy).toHaveBeenCalledTimes(1);
  });
});
