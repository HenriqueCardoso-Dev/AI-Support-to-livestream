import postgres from 'postgres';
import { env } from '../env.ts';
import { drizzle } from 'drizzle-orm/postgres-js'
import { schema } from './schema/index.ts';

export const sqlClient = postgres(env.DATABASE_URL) 
export const db = drizzle(sqlClient, {
  schema,
  casing: 'snake_case'
})