'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mascota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mascota.belongsTo(models.Cliente, {
        foreignKey: 'id_cliente',
        as: 'cliente'
      });

      Mascota.belongsTo(models.Raza, {
        foreignKey: 'id_raza',
        as: 'raza'
      });
      
    }
  }
  Mascota.init({
    nombre: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    sexo: DataTypes.STRING,
    color: DataTypes.STRING,
    id_cliente: DataTypes.INTEGER,
    id_raza: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mascota',
  });
  return Mascota;
};