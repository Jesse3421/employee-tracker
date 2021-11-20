const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');
const appFunctions = require('./db/functions')

var connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306, 
        user: 'root', 
        password: 'rootpassword',
        database: 'employeeTracker'
    }
);


connection.connect((err) => {
    if (err) throw err
    console.log('connection error')
    initialPrompt()
});

function initialPrompt() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: "Please choose and option from the list.",
        choices: [
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "Add Employee",
            "Add Department",
            "Add Role",
            "Update Employee Role",
            "Exit" 
        ]
    })

    .then((choice) => {
        switch (choice.menu) {
            case "View All Employees":
            viewEmployees(); //create view all employees function
            break;

            case "View All Departments":
            viewDepartments(); //create function
            break; 

            case "View All Roles":
            viewRoles(); //create function
            break; 

            case "Add Employee":
            addEmployee(); //create function
            break; 

            case "Add Department":
            addDepartment(); //create function
            break; 

            case "Add Role":
            addRole(); //create function
            break; 
            
            case "Update Employee Role":
            updateEmployeeRole(); //create function
            break; 
            
            case "Exit":
            Connection.end();
            break; 
        }
    })
}



