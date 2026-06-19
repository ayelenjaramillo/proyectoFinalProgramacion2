require("dotenv").config();
module.exports={
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3307,
    dialect: "mysql", 
    logging: false
  }
}


//Applications/MAMP/Library/bin/mysql57/bin/mysql