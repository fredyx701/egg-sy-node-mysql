'use strict';

const MySQL = require('bi-node-mysql');

module.exports = app => {
  const config = app.config.nodeMysql.clients;
  app.mysql = new MySQL(config);
};
