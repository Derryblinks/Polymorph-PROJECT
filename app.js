const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/patient', patientRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
