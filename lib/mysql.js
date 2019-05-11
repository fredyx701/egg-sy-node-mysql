'use strict';

const MySQL = require('sy-node-mysql');

module.exports = app => {
  const config = app.config.nodeMysql.clients;
  app.mysql = new MySQL(config);
};
