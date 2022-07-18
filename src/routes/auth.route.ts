import { Router } from "express";

import * as middleware from "../middlewares/auth.middleware.js";
import * as controller from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post(
    '/sign-up', 
    middleware.checkEmailIsAlreadyRegistered, 
    middleware.validateRegistrationData, 
    controller.registerUser
);

