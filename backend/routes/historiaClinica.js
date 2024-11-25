// routes/historiaClinicaRoutes.js

const express = require('express');
const router = express.Router();
const historiaClinicaController = require('../controllers/HistoriaClinicaController');

// const authMiddleware = require('../middlewares/authMiddleware');
// router.use(authMiddleware);

router.get('/', historiaClinicaController.getHistoriasClinicas);
router.get('/:id', historiaClinicaController.getHistoriaClinicaById);
router.post('/', historiaClinicaController.createHistoriaClinica);
router.put('/:id', historiaClinicaController.updateHistoriaClinica);
router.delete('/:id', historiaClinicaController.deleteHistoriaClinica);

module.exports = router;
