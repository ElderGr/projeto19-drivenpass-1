import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

import { AppError } from "../events/AppError.js";
import AppLog from "../events/AppLog.js";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const { error } = schema.validate(body, { abortEarly: false });

    if (error) {
      throw new AppError(
        'Invalid input',
        422,
        'Invalid input',
        error.details.map((e) => e.message).join(', ')
      );
    }
    res.locals.body = req.body;
    AppLog('Middleware', `Schema validated`);
    next();
  };
}