'use strict';

const mysql = require('./lib/mysql');

module.exports = app => {
  if (app.config.nodeMysql.app) mysql(app);
};
