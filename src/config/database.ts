import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

import AppLog from './../events/AppLog.js';

dotenv.config({ path: '.env' });

const client = new PrismaClient();
connectToDatabase();

export default client;

async function connectToDatabase() {
  try {
    await client.$connect();
    AppLog('Server', 'Connected to database');
  } catch (error) {
    AppLog('Error', `${error}`);
  }
}