import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';
// import seedData from '../data/test-data';
import connection from './db/connection';
// import seed from './db/seeds/seed';

jest.mock('./db/connection', () => {
  return {
    __esModule: true,
    default: mockDeep<PrismaClient>(),
  };
});

beforeEach(async () => {
  mockReset(prismaMock);
  //   await seed(seedData);
});

export const prismaMock = connection as unknown as DeepMockProxy<PrismaClient>;
