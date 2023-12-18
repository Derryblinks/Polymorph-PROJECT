const express = require('express');
const router = express.Router();
const { submitVitals } = require('../controllers/nurseController');

// Define routes
router.post('/:patientID/encounter/:encounterID/vitals', submitVitals);

module.exports = router;
