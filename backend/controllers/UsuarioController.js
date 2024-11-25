const { Usuario, Empleado } = require('../models');

// Obtener todos los usuarios
exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      include: [{ model: Empleado, as: 'empleado' }]
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un usuario por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id, {
      include: [{ model: Empleado, as: 'empleado' }]
    });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo usuario
exports.createUsuario = async (req, res) => {
  try {
    const { correo, password, tipo, estado, id_empleado } = req.body;
    const nuevoUsuario = await Usuario.create({
      correo,
      password,
      tipo,
      estado,
      id_empleado
    });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un usuario existente
exports.updateUsuario = async (req, res) => {
  try {
    const { correo, password, tipo, estado, id_empleado } = req.body;
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await usuario.update({ correo, password, tipo, estado, id_empleado });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un usuario
exports.deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await usuario.destroy();
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
