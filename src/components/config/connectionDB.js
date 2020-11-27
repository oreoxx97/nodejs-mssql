const dotenv = require('dotenv');
dotenv.config();
var sql = require("mssql");
// config for your database


var config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: 'DESKTOP-E7CM2D5',
  database: "SchoolDB",
  options: {
    instanceName: "SQLEXPRESS",
    encrypt: false,
    enableArithAbort: true,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));
module.exports = {
  sql,
  poolPromise,
};
