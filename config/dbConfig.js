const { Pool } = require("pg");
require("dotenv/config");

const currEnvironment = process.env.NODE_ENV || "development";
let { [currEnvironment]: config } = require("./config.json");

if ("env_var" in config) {
  const { [config.env_var]: connectionString } = process.env;
  config = { connectionString };
}

const pool = new Pool(config);

module.exports = pool;
