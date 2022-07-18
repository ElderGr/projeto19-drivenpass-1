// Code imported from Nivaldo Farias' typescript-project-template
// https://github.com/NivaldoFarias/drivenpass-api/blob/main/src/events/AppError.ts

import { Request, Response, NextFunction } from 'express';

import AppLog from './AppLog';

class AppError {
  log: string;
  statusCode: number;
  message: string;
  details: string | {} | string[];

  constructor(
    log: string,
    statusCode: number,
    message: string,
    details: string | {} | string[],
  ) {
    this.log = log;
    this.statusCode = statusCode;
    this.message = message;
    this.details = details;
  }
}

function ErrorHandler(
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { log, statusCode, message, details } = error;

  AppLog('Error', log ?? message);
  return error instanceof AppError
    ? res.status(statusCode).send({ message, details })
    : res.status(500).send({
        message: `Internal server error`,
        details: error,
      });
}

export { AppError };
export default ErrorHandler;