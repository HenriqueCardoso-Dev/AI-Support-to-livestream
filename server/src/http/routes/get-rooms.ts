import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { db } from '../../db/connection.ts'
import { rooms } from '../../db/schema/rooms.ts';

export const getRoomsRoute : FastifyPluginCallbackZod = (app) => {
  app.get('/rooms', async () => {
    const result = await db.select({
      id: rooms.id,
      name: rooms.name
    }).from(rooms).orderBy(rooms.createdAt);

    return result;

  })
}