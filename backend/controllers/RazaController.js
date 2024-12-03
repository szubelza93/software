const { Raza, Especie } = require('../models');

exports.getRazas = async (req, res) => {
  try {
    const razas = await Raza.findAll({ include: [{ model: Especie, as: 'especie' }] ,
    order: [['id', 'ASC']]});
    res.json(razas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createRaza = async (req, res) => {
  try {
    const raza = await Raza.create(req.body);
    res.status(201).json(raza);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRazaById = async (req, res) => {
  try {
    const raza = await Raza.findByPk(req.params.id, { include: [{ model: Especie, as: 'especie' }] });
    if (!raza) return res.status(404).json({ error: 'Raza no encontrada' });
    res.json(raza);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRaza = async (req, res) => {
  try {
    const [updated] = await Raza.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Raza no encontrada' });
    res.json({ message: 'Raza actualizada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRaza = async (req, res) => {
  try {
    const deleted = await Raza.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Raza no encontrada' });
    res.json({ message: 'Raza eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
