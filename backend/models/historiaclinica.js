'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistoriaClinica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HistoriaClinica.belongsTo(models.Mascota, { 
        foreignKey: 'id_mascota', 
        as: 'mascota'
      });
    }
  }
  HistoriaClinica.init({
    numero: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    id_mascota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HistoriaClinica',
  });
  return HistoriaClinica;
};