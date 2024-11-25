const express = require('express');
const router = express.Router();
const PersonaController = require('../controllers/PersonaController');

//const authMiddleware = require('../middlewares/authMiddleware');
//router.use(authMiddleware);

router.get('/', PersonaController.getPersonas);
router.post('/', PersonaController.createPersona);
router.get('/:id', PersonaController.getPersonaById);
router.put('/:id', PersonaController.updatePersona);
router.delete('/:id', PersonaController.deletePersona);

module.exports = router;
