# egg-sy-node-mysql

mysql builder plugin
> 依赖 sy-node-mysql

[![npm package](https://nodei.co/npm/egg-sy-node-mysql.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/egg-sy-node-mysql/)


## Getting Started
```shell
$ npm install sy-node-mysql --save
```


## 开启插件

```js
// config/plugin.js
exports.nodeMysql = {
  enable: true,
  package: 'egg-node-mysql',
};

//config.default.js
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
  app: true,   // default true
  agent: false,   // default false
};
```

## 使用插件 
参考 [sy-node-mysql](https://github.com/FredyXue/sy-node-mysql)

```js
const pool = app.mysql.get('TEST_DATABASE');
await pool.query(sql, opts);

//the same as
await app.mysql.query(sql, opts, 'TEST_DATABASE');
```