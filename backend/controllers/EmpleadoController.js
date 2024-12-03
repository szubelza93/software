const { Empleado, Persona, Turno } = require('../models');

exports.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll({ include:[
                                                              { model: Persona, as: 'persona' },
                                                              { model: Turno, as: 'turno' }
                                                             ],
                                                             order: [['id', 'ASC']]});
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.create(req.body);
    res.status(201).json(empleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEmpleadoById = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id, { include: [ 
                                                                               { model: Persona, as: 'persona' },
                                                                               { model: Turno, as: 'turno' }
                                                                              ] });
    if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEmpleado = async (req, res) => {
  try {
    const [updated] = await Empleado.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json({ message: 'Empleado actualizado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEmpleado = async (req, res) => {
  try {
    const deleted = await Empleado.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
