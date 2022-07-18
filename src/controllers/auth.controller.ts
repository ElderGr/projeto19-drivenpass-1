import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import dotenv from "dotenv";

import AppLog from "../events/AppLog.js";

dotenv.config({ path: '.env' });

import * as repository from "../repositories/auth.repository.js";
import * as service from "../services/auth.service.js";

async function registerUser(_req: Request, res: Response) {
    const body: Prisma.usersCreateInput = res.locals.body;
    const password = service.hashPassword(body.password);

    const data = { ...body, password };
    await repository.registerUser(data);

    AppLog('Controller', 'User signed up');
    return res.sendStatus(201);
}

export { registerUser };