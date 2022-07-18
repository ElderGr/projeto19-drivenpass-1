import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";

import { AppError } from "../events/AppError.js";
import AppLog from "../events/AppLog.js";

import * as schema from "../schemas/auth.schema.js";
import * as repository from "../repositories/auth.repository.js";

async function validateRegistrationData(req: Request, res: Response, next: NextFunction){
  const { email, username, password } = req.body;

  const validate = schema.schemaRegisterUser.validate( { email, username, password }, { abortEarly: false });
  if (!validate) {
    throw new AppError(
      'Invalid Input',
      422,
      'Invalid Input',
      'Invalid Input',
    );
  }
  res.locals.body = req.body;
  AppLog('Middleware', `Schema validated`);
  next();
}

async function checkEmailIsAlreadyRegistered(_req: Request, res: Response, next: NextFunction) {
  const body: Prisma.usersCreateInput = res.locals.body;
  const { email } = body;

  const result = await repository.findByEmail(email);
  if (result) {
    throw new AppError(
      'Email already registered',
      409,
      'Email already registered',
      'Ensure to provide an email address that is not already in use',
    );
  }
  AppLog('Middleware', 'Email is unique');
  next();
}

export { validateRegistrationData, checkEmailIsAlreadyRegistered };