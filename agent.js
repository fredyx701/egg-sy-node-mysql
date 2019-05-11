'use strict';

const mysql = require('./lib/mysql');

module.exports = agent => {
  if (agent.config.nodeMysql.agent) mysql(agent);
};
