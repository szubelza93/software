const { Turno } = require('../models');

exports.getTurnos = async (req, res) => {
  try {
    const turnos = await Turno.findAll({order: [['id', 'ASC']]});
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTurno = async (req, res) => {
  try {
    const turno = await Turno.create(req.body);
    res.status(201).json(turno);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTurnoById = async (req, res) => {
  try {
    const turno = await Turno.findByPk(req.params.id);
    if (!turno) return res.status(404).json({ error: 'Turno no encontrado' });
    res.json(turno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTurno = async (req, res) => {
  try {
    const [updated] = await Turno.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Turno no encontrado' });
    res.json({ message: 'Turno actualizado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTurno = async (req, res) => {
  try {
    const deleted = await Turno.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Turno no encontrado' });
    res.json({ message: 'Turno eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
