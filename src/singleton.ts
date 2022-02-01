import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';
import connection from './db/connection';

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
