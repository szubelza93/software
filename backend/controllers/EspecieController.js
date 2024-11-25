const { Especie } = require('../models');

exports.getEspecies = async (req, res) => {
  try {
    const especies = await Especie.findAll();
    res.json(especies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEspecie = async (req, res) => {
  try {
    const especie = await Especie.create(req.body);
    res.status(201).json(especie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEspecieById = async (req, res) => {
  try {
    const especie = await Especie.findByPk(req.params.id);
    if (!especie) return res.status(404).json({ error: 'Especie no encontrada' });
    res.json(especie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEspecie = async (req, res) => {
  try {
    const [updated] = await Especie.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Especie no encontrada' });
    res.json({ message: 'Especie actualizada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEspecie = async (req, res) => {
  try {
    const deleted = await Especie.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Especie no encontrada' });
    res.json({ message: 'Especie eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
 