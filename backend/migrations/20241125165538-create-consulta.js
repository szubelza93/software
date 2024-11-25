'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Consulta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      motivo: {
        type: Sequelize.STRING
      },
      estado_actual: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.FLOAT
      },
      temperatura: {
        type: Sequelize.FLOAT
      },
      diagnostico: {
        type: Sequelize.STRING
      },
      pronostico: {
        type: Sequelize.STRING
      },
      tratamiento: {
        type: Sequelize.STRING
      },
      id_hc: {
        type: Sequelize.INTEGER,
        references: {
          model: 'HistoriaClinicas', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      id_empleado: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Empleados', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Consulta');
  }
};