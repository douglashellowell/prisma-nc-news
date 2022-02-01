import seed from './seed';
import devData from '../../../data/development-data/index.js';
import connection from '../connection';

seed(devData)
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    connection.$disconnect();
  });
