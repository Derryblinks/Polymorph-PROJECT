const express = require('express');
const router = express.Router();
const { registerPatient } = require('../controllers/patientController');

// Define routes
router.post('/register', registerPatient);

const express = require('express');
const { registerPatient, startEncounter } = require('../controllers/patientController');

router.post('/register', registerPatient);
router.post('/:patientID/encounter', startEncounter);

module.exports = router;
