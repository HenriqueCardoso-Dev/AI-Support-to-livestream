import postgres from 'postgres';
import { env } from '../env.ts';

export const sqlClient = postgres(env.DATABASE_URL) 