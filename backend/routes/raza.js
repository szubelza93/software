const express = require('express');
const router = express.Router();
const RazaController = require('../controllers/RazaController');

const authMiddleware = require('../middlewares/authMiddleware');
router.use(authMiddleware);

router.get('/', RazaController.getRazas);
router.post('/', RazaController.createRaza);
router.get('/:id', RazaController.getRazaById);
router.put('/:id', RazaController.updateRaza);
router.delete('/:id', RazaController.deleteRaza);

module.exports = router;
