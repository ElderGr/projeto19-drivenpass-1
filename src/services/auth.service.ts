import bcrypt from "bcrypt";
import dotenv from "dotenv";

import AppLog from "../events/AppLog.js";

dotenv.config({ path: '.env' });

function hashPassword(password: string) {
  const encrypted = bcrypt.hashSync(password, +process.env.SALT);

  AppLog('Service', 'Password encrypted');
  return encrypted;
}

export { hashPassword };