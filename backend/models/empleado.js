'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empleado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    // Relación con la tabla Persona
    Empleado.belongsTo(models.Persona, {
      foreignKey: 'id_persona',
      as: 'persona'
    });

    // Relación con la tabla Turno
    Empleado.belongsTo(models.Turno, {
      foreignKey: 'id_turno',
      as: 'turno'
    });
    }
  }
  Empleado.init({
    id_turno: DataTypes.INTEGER,
    id_persona: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Empleado',
  });
  return Empleado;
};