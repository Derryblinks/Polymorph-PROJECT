// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');
const encounterRoutes = require('./routes/encounterRoutes');
const nurseRoutes = require('./routes/nurseRoutes');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/medical-record-system', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/patients', patientRoutes);
app.use('/encounters', encounterRoutes);
app.use('/nurses', nurseRoutes);
app.use('/doctors', doctorRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
