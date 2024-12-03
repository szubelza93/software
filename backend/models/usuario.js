'use strict';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
  Model
} = require('sequelize');
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
  },
  
  );


    // Método de instancia para generar un token JWT
    Usuario.prototype.generateToken = function() {
      const payload = {
        id: this.id,
        correo: this.correo,
        estado: this.estado
      };
      
      return jwt.sign(payload, 'clave_secreta_jwt', { expiresIn: '1h' }); // Cambia a una variable de entorno
    };
  
    // Método de clase para verificar la contraseña
    Usuario.prototype.validPassword = async function(password) {
      return await bcrypt.compare(password, this.password);
    };

  return Usuario;
};