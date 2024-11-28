const express = require('express');
const router = express.Router();
const EspecieController = require('../controllers/EspecieController');

 const authMiddleware = require('../middlewares/authMiddleware');
 router.use(authMiddleware);

router.get('/', EspecieController.getEspecies);
router.post('/', EspecieController.createEspecie);
router.get('/:id', EspecieController.getEspecieById);
router.put('/:id', EspecieController.updateEspecie);
router.delete('/:id', EspecieController.deleteEspecie);

module.exports = router;
