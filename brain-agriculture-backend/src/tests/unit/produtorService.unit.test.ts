import { cadastrarProdutor, editarProdutor, excluirProdutor } from "../../services/ProdutorService";
import Produtor from "../../models/Produtor";

jest.mock("../../models/Produtor", () => ({
  create: jest.fn(),
  findByPk: jest.fn(),
  destroy: jest.fn(),
  update: jest.fn(),
}));

describe("ProdutorService - Unit", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("deve cadastrar um produtor com sucesso", async () => {
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

    jest.spyOn(Produtor, "create").mockResolvedValue(mockProdutor as any);

    const produtor = await cadastrarProdutor(mockProdutor);
    expect(produtor).toEqual(mockProdutor);
    expect(Produtor.create).toHaveBeenCalledWith(mockProdutor);
  });

  test("deve lançar erro se a soma da área agricultável e vegetação for maior que a área total", async () => {
    const mockProdutor = {
      cpfCnpj: "12345678901",
      nomeProdutor: "João da Silva",
      nomeFazenda: "Fazenda Exemplo",
      cidade: "Cidade Exemplo",
      estado: "EX",
      areaTotal: 100,
      areaAgricultavel: 60,
      areaVegetacao: 50,
    };

    await expect(cadastrarProdutor(mockProdutor)).rejects.toThrow(
      "A soma da área agricultável e vegetação não pode ser maior que a área total."
    );
  });

  test("deve editar um produtor existente com sucesso", async () => {
    const mockProdutor = {
      id: "1",
      cpfCnpj: "12345678901",
      nomeProdutor: "João Atualizado",
    };

    const mockDbProdutor = {
      update: jest.fn().mockResolvedValue(mockProdutor),
    };

    jest.spyOn(Produtor, "findByPk").mockResolvedValue(mockDbProdutor as any);

    const produtor = await editarProdutor("1", mockProdutor);

    expect(Produtor.findByPk).toHaveBeenCalledWith("1");
    expect(mockDbProdutor.update).toHaveBeenCalledWith(mockProdutor);
    expect(produtor).toEqual(mockProdutor);
  });

  test("deve excluir um produtor existente com sucesso", async () => {
    jest.spyOn(Produtor, "findByPk").mockResolvedValue({
      destroy: jest.fn().mockResolvedValue(true),
    } as any);

    await excluirProdutor("1");
    expect(Produtor.findByPk).toHaveBeenCalledWith("1");
  });
});
