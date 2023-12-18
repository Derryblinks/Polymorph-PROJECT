const Patient = require('../models/patientModel');

const submitVitals = async (req, res) => {
  try {
    const { patientID, encounterID } = req.params;
    const { bloodPressure, temperature, pulse, spO2 } = req.body;

    const patient = await Patient.findOne({ patientID });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found.' });
    }

    const encounter = patient.encounters.id(encounterID);

    if (!encounter) {
      return res.status(404).json({ message: 'Encounter not found.' });
    }

    encounter.vitals = { bloodPressure, temperature, pulse, spO2, recordedAt: new Date() };
    await patient.save();

    res.status(201).json({ message: 'Vitals submitted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = { submitVitals };
