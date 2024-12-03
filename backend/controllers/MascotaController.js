// controllers/mascotaController.js

const { Mascota, Cliente, Raza } = require('../models');

// Obtener todas las mascotas
const getMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.findAll({
      include: [
        { model: Cliente, as: 'cliente' },
        { model: Raza, as: 'raza' }
      ],
      order: [['id', 'ASC']]
    });
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Obtener una mascota por ID
const getMascotaById = async (req, res) => {
    try {
      const { id } = req.params;
      const mascota = await Mascota.findOne({
        where: { id },
        include: [
          { model: Cliente, as: 'cliente' },
          { model: Raza, as: 'raza' }
        ]
      });
      if (mascota) {
        res.json(mascota);
      } else {
        res.status(404).json({ message: 'Mascota no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Crear una nueva mascota
const createMascota = async (req, res) => {
  try {
    const { nombre, nacimiento, sexo, color, id_cliente, id_raza } = req.body;
    const mascota = await Mascota.create({ nombre, nacimiento, sexo, color, id_cliente, id_raza });
    res.status(201).json(mascota);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una mascota por ID
const updateMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, nacimiento, sexo, color, id_cliente, id_raza } = req.body;
    await Mascota.update({ nombre, nacimiento, sexo, color, id_cliente, id_raza }, { where: { id } });
    res.json({ message: 'Mascota actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una mascota por ID
const deleteMascota = async (req, res) => {
  try {
    const { id } = req.params;
    await Mascota.destroy({ where: { id } });
    res.json({ message: 'Mascota eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getMascotas, createMascota, updateMascota, deleteMascota, getMascotaById };
