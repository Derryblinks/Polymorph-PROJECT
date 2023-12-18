const express = require('express');
const router = express.Router();
const { viewPatientList, viewPatientDetails } = require('../controllers/doctorController');

// Define routes
router.get('/patients', viewPatientList);
router.get('/patients/:patientID', viewPatientDetails);

module.exports = router;
