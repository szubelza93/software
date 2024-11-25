'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Persona.init({
    ci: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    direccion: DataTypes.STRING,
    celular: DataTypes.STRING,
    correo: DataTypes.STRING,
    sexo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};