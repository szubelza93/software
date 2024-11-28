'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {

    static associate(models) {

      Usuario.belongsTo(models.Empleado, {
        foreignKey: 'id_empleado',
        as: 'empleado'
      });

    }
  }

  Usuario.init({
    correo: DataTypes.STRING,
    password: DataTypes.STRING,
    tipo: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    id_empleado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
    hooks: {
      beforeCreate: async (usuario) => {
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(usuario.password, salt);
      }
    }
    
  });
  return Usuario;
};