// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

// Ruta de login
router.post('/', authController.login);

module.exports = router;
