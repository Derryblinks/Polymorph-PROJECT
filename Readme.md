git add README.md
git commit -m "docs: Update README with project structure"
EMR System for UGTMC
Overview
This project is the implementation of an Electronic Medical Record (EMR) system for the University of Ghana Medical Center (UGTMC). The system is designed to manage patient records, encounters, and vital information for efficient healthcare management.

Tech Stack
Node.js: Runtime environment for JavaScript.
Express: Web application framework for building REST APIs.
MongoDB: NoSQL database for persisting data.
Project Structure
The project follows a modular structure for better organization:

/src: Source code directory.

/controllers: Contains route handlers or controllers.
/models: MongoDB models for data structure.
/routes: Route definitions for different user roles.
/config: Configuration files (e.g., database connection).
/middleware: Custom middleware for the application.
app.js: Main entry point for the application.
/node_modules: Directory for project dependencies.

/tests: Directory for writing tests (not implemented in this example).

package.json: Metadata file containing project details and dependencies.

.gitignore: File specifying intentionally untracked files to ignore.

Functionality
Patient Registration:

Front-desk executives can register new patients with details such as Patient ID, Surname, Othernames, Gender, Phone Number, Residential Address, Emergency Contact, and Relationship.
Encounter Management:

Front-desk executives can start an encounter for a patient, specifying the Date, Time, and Type of encounter (Emergency/OPD/Specialist Care).
Nurses can submit patient vitals (Blood Pressure, Temperature, Pulse, SP02) during an encounter.
Doctor's Dashboard:

Doctors can view a list of patients.
Doctors can view detailed information about each patient.
Getting Started
Install Node.js and npm.
Set up a MongoDB database and update the connection string in /src/config/database.js.
Run npm install to install project dependencies.
Start your MongoDB server.
Run the application with node src/app.js.
API Endpoints
/api/patient/register: POST - Register a new patient.
/api/patient/{patientID}/encounter: POST - Start an encounter for a patient.
/api/nurse/{patientID}/encounter/{encounterID}/vitals: POST - Submit patient vitals.
/api/doctor/patients: GET - View a list of patients.
/api/doctor/patients/{patientID}: GET - View details of a specific patient.