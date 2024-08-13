import Produtor from "../models/Produtor";
import { sequelize } from "../database";

export const obterTotalFazendas = async () => {
  try {
    const total = await Produtor.count();
    return total;
  } catch (error) {
    console.log(error);
  }
};

export const obterTotalHectares = async () => {
  const totalHectares = await Produtor.sum("areaTotal");
  return totalHectares;
};

export const obterGraficoPorEstado = async () => {
  const data = await Produtor.findAll({
    attributes: ["estado", [sequelize.fn("COUNT", sequelize.col("estado")), "total"]],
    group: ["estado"],
  });
  return data;
};

export const obterGraficoPorCultura = async () => {
  const data = await Produtor.findAll({
    attributes: ["culturas", [sequelize.fn("COUNT", sequelize.col("culturas")), "total"]],
    group: ["culturas"],
  });
  return data;
};

export const obterGraficoPorUsoSolo = async () => {
  try {
    const data = await Produtor.findAll({
      attributes: [
        [sequelize.literal('SUM("areaAgricultavel")'), "totalAgricultavel"],
        [sequelize.literal('SUM("areaVegetacao")'), "totalVegetacao"],
      ],
    });
    return data[0];
  } catch (error) {
    console.log(error);
  }
};
