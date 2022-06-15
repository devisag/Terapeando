import { Router} from "express";
import logInAdmin from "./logIn";
const {registerAdmin} = require("./adminController")
const adminRouter: Router = Router();

adminRouter.post('/logIn', logInAdmin)
adminRouter.post('/signUp', registerAdmin )

module.exports = adminRouter;