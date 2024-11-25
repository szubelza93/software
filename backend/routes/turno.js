const express = require('express');
const router = express.Router();
const TurnoController = require('../controllers/TurnoController');

//const authMiddleware = require('../middlewares/authMiddleware');
//router.use(authMiddleware);

router.get('/', TurnoController.getTurnos);
router.post('/', TurnoController.createTurno);
router.get('/:id', TurnoController.getTurnoById);
router.put('/:id', TurnoController.updateTurno);
router.delete('/:id', TurnoController.deleteTurno);

module.exports = router;
