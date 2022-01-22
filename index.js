const db = require('./db/connection');
const inquirer = require("inquirer");
const table = require("console.table");

db.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + db.threadId + "\n");
  askQuestions();
});


const askQuestions = () =>  {
  inquirer.prompt({
      message: "what would you like to do?",
      type: "list",
      choices: [
          "View all employees",
          "View all departments",
          "Add employee",
          "Add department",
          "Add role",
          "Update employee role",
          "QUIT"
      ],
      name: "choice"
  }).then(answers => {
      console.log(answers.choice);
      switch (answers.choice) {
          case "View all employees":
              viewEmployees()
              break;

          case "View all departments":
              viewDepartments()
              break;

          case "Add employee":
              addEmployee()
              break;

          case "Add department":
              addDepartment()
              break;

          case "Add role":
              addRole()
              break;

          case "Update employee role":
              updateEmployeeRole();
              break;

          default:
              db.end()
              break;
      }
  })
}
