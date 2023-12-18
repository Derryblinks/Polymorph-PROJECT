const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  type: { type: String, enum: ['Emergency', 'OPD', 'Specialist Care'], required: true },
});

  // existing fields...
  encounters: [encounterSchema],





const patientSchema = new mongoose.Schema({
    encounters: [encounterSchema],
  patientID: { type: String, unique: true, required: true },
  surname: { type: String, required: true },
  othernames: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  phoneNumber: { type: String, required: true },
  residentialAddress: { type: String, required: true },
  emergencyContact: {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    relationship: { type: String, required: true },
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
