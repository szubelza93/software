const { Cliente, Persona } = require('../models');

exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({ 
      include: [{ model: Persona, as: 'persona' }],
      order: [['id', 'ASC']]
     });
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id, { include: [{ model: Persona, as: 'persona' }] });
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCliente = async (req, res) => {
  try {
    const [updated] = await Cliente.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json({ message: 'Cliente actualizado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCliente = async (req, res) => {
  try {
    const deleted = await Cliente.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
