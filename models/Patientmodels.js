const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  type: { type: String, enum: ['Emergency', 'OPD', 'Specialist Care'], required: true },
});

  // existing fields...
  encounters: [encounterSchema],

module.exports = Patient;

// src/models/patientModel.js

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientID: {
    type: String,
    required: true,
    unique: true,
  },
  surname: {
    type: String,
    required: true,
  },
  otherNames: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  residentialAddress: {
    type: String,
    required: true,
  },
  emergencyContact: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
  },
  encounters: [
    {
      date: {
        type: Date,
        required: true,
      },
      type: {
        type: String,
        enum: ['Emergency', 'OPD', 'Specialist Care'],
        required: true,
      },
      vitals: {
        bloodPressure: String,
        temperature: String,
        pulse: String,
        spO2: String,
      },
    },
  ],
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
