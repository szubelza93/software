// controllers/consultaController.js

const { Consulta, HistoriaClinica, Empleado } = require('../models');

// Obtener todas las consultas
const getConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.findAll({
      include: [
        { model: HistoriaClinica, as: 'historiaClinica' },
        { model: Empleado, as: 'empleado' }
      ]
    });
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una consulta por ID
const getConsultaById = async (req, res) => {
  try {
    const { id } = req.params;
    const consulta = await Consulta.findOne({
      where: { id },
      include: [
        { model: HistoriaClinica, as: 'historiaClinica' },
        { model: Empleado, as: 'empleado' }
      ]
    });
    if (consulta) {
      res.json(consulta);
    } else {
      res.status(404).json({ message: 'Consulta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva consulta
const createConsulta = async (req, res) => {
  try {
    const { fecha, motivo, estado_actual, peso, temperatura, diagnostico, pronostico, tratamiento, id_hc, id_empleado } = req.body;
    const consulta = await Consulta.create({ fecha, motivo, estado_actual, peso, temperatura, diagnostico, pronostico, tratamiento, id_hc, id_empleado });
    res.status(201).json(consulta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una consulta por ID
const updateConsulta = async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, motivo, estado_actual, peso, temperatura, diagnostico, pronostico, tratamiento, id_hc, id_empleado } = req.body;
    await Consulta.update({ fecha, motivo, estado_actual, peso, temperatura, diagnostico, pronostico, tratamiento, id_hc, id_empleado }, { where: { id } });
    res.json({ message: 'Consulta actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una consulta por ID
const deleteConsulta = async (req, res) => {
  try {
    const { id } = req.params;
    await Consulta.destroy({ where: { id } });
    res.json({ message: 'Consulta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getConsultas, getConsultaById, createConsulta, updateConsulta, deleteConsulta };
