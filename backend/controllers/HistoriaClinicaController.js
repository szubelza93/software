// controllers/historiaClinicaController.js

const { HistoriaClinica, Mascota } = require('../models');

// Obtener todas las historias clínicas
const getHistoriasClinicas = async (req, res) => {
  try {
    const historiasClinicas = await HistoriaClinica.findAll({
      include: [{ model: Mascota, as: 'mascota' }]
    });
    res.json(historiasClinicas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una historia clínica por ID
const getHistoriaClinicaById = async (req, res) => {
  try {
    const { id } = req.params;
    const historiaClinica = await HistoriaClinica.findOne({
      where: { id },
      include: [{ model: Mascota, as: 'mascota' }]
    });
    if (historiaClinica) {
      res.json(historiaClinica);
    } else {
      res.status(404).json({ message: 'Historia clínica no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva historia clínica
const createHistoriaClinica = async (req, res) => {
  try {
    const { numero, fecha, id_mascota } = req.body;
    const historiaClinica = await HistoriaClinica.create({ numero, fecha, id_mascota });
    res.status(201).json(historiaClinica);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una historia clínica por ID
const updateHistoriaClinica = async (req, res) => {
  try {
    const { id } = req.params;
    const { numero, fecha, id_mascota } = req.body;
    await HistoriaClinica.update({ numero, fecha, id_mascota }, { where: { id } });
    res.json({ message: 'Historia clínica actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una historia clínica por ID
const deleteHistoriaClinica = async (req, res) => {
  try {
    const { id } = req.params;
    await HistoriaClinica.destroy({ where: { id } });
    res.json({ message: 'Historia clínica eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getHistoriasClinicas, getHistoriaClinicaById, createHistoriaClinica, updateHistoriaClinica, deleteHistoriaClinica };
