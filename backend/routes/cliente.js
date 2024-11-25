const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

// const authMiddleware = require('../middlewares/authMiddleware');
// router.use(authMiddleware);

router.get('/', ClienteController.getClientes);
router.post('/', ClienteController.createCliente);
router.get('/:id', ClienteController.getClienteById);
router.put('/:id', ClienteController.updateCliente);
router.delete('/:id', ClienteController.deleteCliente);

module.exports = router;
