const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Usuario } = require('../models');

const login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    // 1. Verificar si el usuario existe
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // 2. Verificar la contraseña
    
    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      return res.status(401).json({ message: 'Contraseña incorrecta'});
    }

    // 3. Crear el token
    const token = jwt.sign(
      { id: usuario.id, correo: usuario.correo },
      'clave_secreta_jwt', // Cambia esto a una variable de entorno en producción
      { expiresIn: '8h' }
    );

    // 4. Enviar respuesta con el token
    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};

module.exports = { login };
