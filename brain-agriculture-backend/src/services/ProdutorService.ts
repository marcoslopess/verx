import Produtor from "../models/Produtor";

export const cadastrarProdutor = async (dados: any) => {
  if (dados.areaAgricultavel + dados.areaVegetacao > dados.areaTotal) {
    throw new Error("A soma da área agricultável e vegetação não pode ser maior que a área total.");
  }

  const produtor = await Produtor.create(dados);
  return produtor;
};

export const editarProdutor = async (id: string, dados: any) => {
  try {
    const produtor = await Produtor.findByPk(id);
    if (!produtor) {
      throw new Error("Produtor não encontrado.");
    }

    const retornoProdutor = await produtor.update(dados);

    return retornoProdutor;
  } catch (error: any) {
    console.log(error);

    throw new Error(error.message);
  }
};

export const excluirProdutor = async (id: string) => {
  const produtor = await Produtor.findByPk(id);
  if (!produtor) {
    throw new Error("Produtor não encontrado.");
  }
  await produtor.destroy();
};
