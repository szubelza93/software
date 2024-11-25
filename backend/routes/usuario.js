const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController');

//const authMiddleware = require('../middlewares/authMiddleware');
//router.use(authMiddleware);

router.get('/', usuarioController.getUsuarios);
router.get('/:id', usuarioController.getUsuarioById);
router.post('/', usuarioController.createUsuario);
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
