const express = require('express') ;

const patientRouter = express.Router();

const patientRouter = require('./controller/patientController');
const patientController  = require('./controller/patientController');

patientRouter.route('/register')
.post(patientController.registerPatient);


module.exports = patientRouter ;