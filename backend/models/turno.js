'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Turno.init({
    nombre: DataTypes.STRING,
    hora_ini: DataTypes.TIME,
    hora_fin: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Turno',
  });
  return Turno;
};