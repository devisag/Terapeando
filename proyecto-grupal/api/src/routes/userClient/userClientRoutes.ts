import { Router } from "express";
import logInClient from "./signIn";
const {
    getUserClient,
    createUserClient,
    deleteUserClient,
    putUserClient,
    getPsychologistDetails
} = require('./userClient.ts')
const validatePassport = require('../../middleware/passport')
const validateClient = require('../../middleware/validateClient')
// const validateAdmin = require('../../middleware/validatePsychologistOrAdmin')
const validateAdmin = require('../../middleware/ValidateAdminToken')
const clientRouter: Router = Router();

clientRouter.get('/client',validateClient, getUserClient);
clientRouter.get('/auth/google/callback',validateClient, getUserClient);
clientRouter.get('/:IdUserPsychologist', validateClient ,getPsychologistDetails)
clientRouter.post('/client/register', createUserClient)
clientRouter.post('/client/login', logInClient)
clientRouter.delete('/deleteuserclient', validateClient, deleteUserClient)
clientRouter.put('/editprofile', validateClient, putUserClient)

//Falta middleware solo de admin
module.exports = clientRouter;