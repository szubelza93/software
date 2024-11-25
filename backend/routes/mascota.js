// routes/mascotaRoutes.js

const express = require('express');
const router = express.Router();
const mascotaController = require('../controllers/MascotaController');

// const authMiddleware = require('../middlewares/authMiddleware');
// router.use(authMiddleware);

router.get('/', mascotaController.getMascotas);
router.post('/', mascotaController.createMascota);
router.get('/:id', mascotaController.getMascotaById);
router.put('/:id', mascotaController.updateMascota);
router.delete('/:id', mascotaController.deleteMascota);

module.exports = router;
