'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // define association here
      Cliente.belongsTo(models.Persona, {
        foreignKey: 'id_persona',
        as: 'persona'
      });

    }
  }
  
  Cliente.init({
    nit: DataTypes.STRING,
    id_persona: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};