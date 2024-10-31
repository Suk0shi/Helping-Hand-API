const { Pool } = require("pg");
require('dotenv').config();

// module.exports = new Pool({
//   host: process.env.LOCALHOST, // or wherever the db is hosted
//   user: process.env.ROLE_NAME,
//   database: process.env.TOP_USERS,
//   password: process.env.PASSWORD,
//   port: 5432 // The default port
// });

// Could also use a connection URI
module.exports = new Pool({
  connectionString: process.env.CONNECTION_STRING
});