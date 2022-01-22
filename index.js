const db = require('./db/connection');
const inquirer = require("inquirer");
const table = require("console.table");

db.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + db.threadId + "\n");
  //askQuestions();
});

