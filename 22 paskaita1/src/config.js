require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET,
  dbconfig: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.mysqlport,
  },
};
