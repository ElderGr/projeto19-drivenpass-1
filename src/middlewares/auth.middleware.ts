import { Request, Response, NextFunction } from "express";

//import * as schema from "../schemas/auth.schema.js";

async function checkEmailIsAlreadyRegistered(req: Request, res: Response, next: NextFunction) {
    next();
}

async function validateRegistrationData(req: Request, res: Response, next: NextFunction){
    next();
}

export { checkEmailIsAlreadyRegistered, validateRegistrationData };