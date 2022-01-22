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

const viewEmployees = () => {
  db.query("SELECT * FROM employee", function (err, data) {
      console.table(data);
      askQuestions();
  })
}

const viewDepartments = () => {
  db.query("SELECT * FROM department", function (err, data) {
      console.table(data);
      askQuestions();
  })
}


const addEmployee = () => {
  inquirer.prompt([{
          type: "input",
          name: "firstName",
          message: "What is the employees first name?"
      },
      {
          type: "input",
          name: "lastName",
          message: "What is the employees last name?"
      },
      {
          type: "number",
          name: "roleId",
          message: "What is the employees role ID"
      },
      {
          type: "number",
          name: "managerId",
          message: "What is the employees manager's ID?"
      }
  ]).then(function(res) {
      db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          askQuestions();
      })
  })
}


const addDepartment = () =>{
  inquirer.prompt([{
      type: "input",
      name: "department",
      message: "What is the department that you want to add?"
  }, ]).then(function(res) {
      db.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          askQuestions();
      })
  })
}



const addRole = () => {
  inquirer.prompt([
      {
          message: "enter title:",
          type: "input",
          name: "title"
      }, {
          message: "enter salary:",
          type: "number",
          name: "salary"
      }, {
          message: "enter department ID:",
          type: "number",
          name: "department_id"
      }
  ]).then(function (response) {
      db.query("INSERT INTO roles (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.department_id], function (err, data) {
          console.table(data);
      })
      askQuestions();
  })

}

const updateEmployeeRole = () => {
  inquirer.prompt([
      {
          message: "which employee would you like to update? (use first name only for now)",
          type: "input",
          name: "name"
      }, {
          message: "enter the new role ID:",
          type: "number",
          name: "role_id"
      }
  ]).then(function (response) {
      db.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
          console.table(data);
      })
      askQuestions();
  })

}