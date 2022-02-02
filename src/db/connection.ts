import { PrismaClient } from '@prisma/client';
const connection = new PrismaClient({ log: ['query'] });
// can invoke with { log: ['query'] } to log SQL queries as they're made

export default connection;
