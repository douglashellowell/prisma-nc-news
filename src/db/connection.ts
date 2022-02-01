import { PrismaClient } from '@prisma/client';
const connection = new PrismaClient({ log: ['query'] });
// can invoke with { log: ['query'] } to log SQL queries as they're made

// connection.user
//   .findMany({
//     where: { username: 'tickle122' },
//     select: {
//       Comment: true,
//       Article: true,
//       avatar_url: true,
//       name: true,
//       username: true,
//     },
//   })
//   .then((res) => console.log(JSON.stringify(res, null, 2)));

export default connection;
