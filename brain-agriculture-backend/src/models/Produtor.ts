import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

class Produtor extends Model {
  public id!: number;
  public cpfCnpj!: string;
  public nomeProdutor!: string;
  public nomeFazenda!: string;
  public cidade!: string;
  public estado!: string;
  public areaTotal!: number;
  public areaAgricultavel!: number;
  public areaVegetacao!: number;
  public culturas!: string[];
}

Produtor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cpfCnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^(\d{11}|\d{14})$/,
      },
    },
    nomeProdutor: DataTypes.STRING,
    nomeFazenda: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    areaTotal: DataTypes.FLOAT,
    areaAgricultavel: DataTypes.FLOAT,
    areaVegetacao: DataTypes.FLOAT,
    culturas: DataTypes.ARRAY(DataTypes.STRING),
  },
  {
    sequelize,
    modelName: "Produtor",
  }
);

export default Produtor;
