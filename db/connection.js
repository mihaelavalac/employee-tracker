const mysql = require("mysql2"); //Import mysql package from node_modules.

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "",
    database: "employee",
  },
  console.log("Connected to the employee database.")
);

module.exports = db;