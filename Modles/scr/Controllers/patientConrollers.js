

const Patient = require('../models/patientModel');

const registerPatient = async (req, res) => {
  try {
    const {
      patientID,
      surname,
      othernames,
      gender,
      phoneNumber,
      residentialAddress,
      emergencyContact,
    } = req.body;

    const existingPatient = await Patient.findOne({ patientID });

    if (existingPatient) {
      return res.status(400).json({ message: 'Patient already registered.' });
    }

    const newPatient = new Patient({
      patientID,
      surname,
      othernames,
      gender,
      phoneNumber,
      residentialAddress,
      emergencyContact,
    });

    await newPatient.save();

    res.status(201).json({ message: 'Patient registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};



const Patient = require('../models/patientModel');

const startEncounter = async (req, res) => {
  try {
    const { patientID } = req.params;
    const { date, time, type } = req.body;

    const patient = await Patient.findOne({ patientID });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found.' });
    }

    const newEncounter = { date, time, type };
    patient.encounters.push(newEncounter);
    await patient.save();

    res.status(201).json({ message: 'Encounter started successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = { registerPatient, startEncounter };
module.exports = { registerPatient };
