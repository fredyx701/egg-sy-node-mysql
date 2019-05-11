'use strict';


exports.nodeMysql = {
  clients: [
    {
      name: 'TEST_DATABASE',
      database: 'db_one',
      port: 3306,
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      charset: 'UTF8MB4_GENERAL_CI',
      connectionLimit: 50,
    },
    {
      name: 'TEST_DATABASE',
      readonly: true,
      database: 'db_one',
      port: 3307,
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      charset: 'UTF8MB4_GENERAL_CI',
      connectionLimit: 100,
    },
  ],
  app: true,
  agent: false,
};
