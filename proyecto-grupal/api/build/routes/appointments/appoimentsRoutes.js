"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
<<<<<<< HEAD
const { postAppointmentModel, getAppointmentAsPsychologist, getAppointmentAsClient, deleteAppointAsPsychologist, deleteAppointAsClient, putAppointment, getAppointmentById } = require('./appointments');
=======
const { postAppointmentModel, getAppointmentAsPsychologist, getAppointmentAsClient, deleteAppointAsPsychologist, deleteAppointAsClient, putAppointment } = require('./appointments');
>>>>>>> 8424f811845507213321a3bb74eda39f9f0abbcf
const appoimentRouter = (0, express_1.Router)();
const validateUsers = require("../../middleware/validateUsers");
const validatePsychologist = require("../../middleware/validatePsychologist");
const validateClient = require("../../middleware/validateClient");
appoimentRouter.post('/create/:IdUserPsychologist', validateUsers, postAppointmentModel);
appoimentRouter.get('/psychologist', validatePsychologist, getAppointmentAsPsychologist);
appoimentRouter.get('/client', validateClient, getAppointmentAsClient);
<<<<<<< HEAD
appoimentRouter.delete('/delete/psychologist/:IdAppointment', validatePsychologist, deleteAppointAsPsychologist);
appoimentRouter.delete('/delete/client/:IdAppointment', validateClient, deleteAppointAsClient);
appoimentRouter.put('/put_appointment/:IdAppointment', validateUsers, putAppointment);
appoimentRouter.get('/:IdAppointment', validateUsers, getAppointmentById);
=======
appoimentRouter.delete('/delete/psychologist', validatePsychologist, deleteAppointAsPsychologist);
appoimentRouter.delete('/client/:id', validateClient, deleteAppointAsClient);
appoimentRouter.put('/put_appointment/:IdAppointment', validateUsers, putAppointment);
// /appointment/put_appointment/${IdAppointment}
>>>>>>> 8424f811845507213321a3bb74eda39f9f0abbcf
module.exports = appoimentRouter;
