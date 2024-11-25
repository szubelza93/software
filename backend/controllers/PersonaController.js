const { Persona } = require('../models');

exports.getPersonas = async (req, res) => {
  try {
    const personas = await Persona.findAll();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPersona = async (req, res) => {
  try {
    const persona = await Persona.create(req.body);
    res.status(201).json(persona);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPersonaById = async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (!persona) return res.status(404).json({ error: 'Persona no encontrada' });
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePersona = async (req, res) => {
  try {
    const [updated] = await Persona.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Persona no encontrada' });
    res.json({ message: 'Persona actualizada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePersona = async (req, res) => {
  try {
    const deleted = await Persona.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Persona no encontrada' });
    res.json({ message: 'Persona eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
