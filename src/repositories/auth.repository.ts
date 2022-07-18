import { Prisma } from "@prisma/client";

import client from "../config/database.js";
import AppLog from "../events/AppLog.js";

async function findByEmail(email: string) {
  AppLog('Repository', 'User searched by email');

  return await client.users.findUnique({where: { email }});
}

async function registerUser(data: Prisma.usersCreateInput) {
  await client.users.create({ data });

  return AppLog('Repository', 'User instance inserted');
}

export { findByEmail, registerUser };