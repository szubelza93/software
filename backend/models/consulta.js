'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consulta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Consulta.belongsTo(models.HistoriaClinica, { 
        foreignKey: 'id_hc', 
        as: 'historiaClinica' 
      });
  
      Consulta.belongsTo(models.Empleado, { 
        foreignKey: 'id_empleado', 
        as: 'empleado' 
      });
    }
  }
  Consulta.init({
    fecha: DataTypes.DATE,
    motivo: DataTypes.STRING,
    estado_actual: DataTypes.STRING,
    peso: DataTypes.FLOAT,
    temperatura: DataTypes.FLOAT,
    diagnostico: DataTypes.STRING,
    pronostico: DataTypes.STRING,
    tratamiento: DataTypes.STRING,
    id_hc: DataTypes.INTEGER,
    id_empleado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Consulta',
  });
  return Consulta;
};