const express = require('express');
const router = express.Router();
const EmpleadoController = require('../controllers/EmpleadoController');

//const authMiddleware = require('../middlewares/authMiddleware');
//router.use(authMiddleware);

router.get('/', EmpleadoController.getEmpleados);
router.post('/', EmpleadoController.createEmpleado);
router.get('/:id', EmpleadoController.getEmpleadoById);
router.put('/:id', EmpleadoController.updateEmpleado);
router.delete('/:id', EmpleadoController.deleteEmpleado);

module.exports = router;