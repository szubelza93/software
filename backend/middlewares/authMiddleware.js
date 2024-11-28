// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado' });
  }

  try {
    const decoded = jwt.verify(token, 'clave_secreta_jwt'); // Cambia la clave a una variable de entorno
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;
