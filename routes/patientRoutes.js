const express = require('express');
const router = express.Router();
const { registerPatient } = require('../controllers/patientController');

// Define routes
router.post('/register', registerPatient);

module.exports = router;
