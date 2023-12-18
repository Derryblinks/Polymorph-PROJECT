const Patient = require('../models/patientModel');

const viewPatientList = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const viewPatientDetails = async (req, res) => {
  try {
    const { patientID } = req.params;
    const patient = await Patient.findOne({ patientID });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found.' });
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = { viewPatientList, viewPatientDetails };
