const express = require('express');
const router = express.Router();

 const authMiddleware = require('../middlewares/authMiddleware');
 router.use(authMiddleware);

const consultaController = require('../controllers/ConsultaController');

router.get('/', consultaController.getConsultas);
router.get('/:id', consultaController.getConsultaById);
router.post('/', consultaController.createConsulta);
router.put('/:id', consultaController.updateConsulta);
router.delete('/:id', consultaController.deleteConsulta);

module.exports = router;
