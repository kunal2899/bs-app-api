const { Pool } = require("pg");
require("dotenv/config");

const currEnvironment = process.env.CURRENT_ENVIRONMENT || "development";
const { [currEnvironment]: config } = require("./config.json");

let pool;

if ("env_var" in config) {
  const {
    username: uname,
    password: pass,
    host: hst,
    port: prt,
    database: db,
  } = config.env_var;
  const {
    [uname]: user,
    [pass]: password,
    [hst]: host,
    [prt]: port,
    [db]: database,
  } = process.env;
  pool = new Pool({ user, password, host, database, port });
} else {
  const { username: user, password, host, port, database } = config;
  pool = new Pool({ user, password, host, database, port });
}

module.exports = pool;
