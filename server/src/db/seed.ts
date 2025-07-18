import {reset, seed} from 'drizzle-seed';
import {db, sqlClient} from './connection.ts';
import { schema } from './schema/index.ts';

await reset(db, schema);

await seed(db, schema).refine(faker => {
  return {
    rooms: {
      count: 20,
      columns: {
        name: faker.companyName(),
        description: faker.loremIpsum()
      }
    }
  }
});