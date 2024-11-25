'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Raza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Raza.belongsTo(models.Especie, {
        foreignKey: 'id_especie',
        as: 'especie'
      });
      
    }
  }
  Raza.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    id_especie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Raza',
  });
  return Raza;
};