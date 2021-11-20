const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');
//const appFunctions = require('./db/functions');

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
    console.log(err)
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
};
// View Tables
function viewEmployees() {
    connection.query(`SELECT * FROM employee;`, (err, res) => {
    if (err) throw err;
    console.table('', res)
    initialPrompt() 
    })
};

function viewDepartments() {
    connection.query(`SELECT * FROM department;`, (err, res) => {
    if (err) throw err;
    console.table('', res)
    initialPrompt() 
    })
};

function viewRoles() {
    connection.query(`SELECT * FROM roles;`, (err, res) => {
    if (err) throw err;
    console.table('', res)
    initialPrompt() 
    })
};

//Add new elements (employees, roles, departments) to the tables
function addEmployee() {
    connection.query
};

function addDepartment() {
    inquirer.prompt({
      
        type: "input",
        message: "What is the name of the department you would like to add?",
        name: "dept_name"

    }).then(function(answer){
        //const deptName = answer.dept_name


        connection.query(`INSERT INTO department (dept_name) VALUES (?)`, [answer.dept_name], function(err, res) {
            if (err) throw err;
            console.table(res)
            viewDepartments()
            initialPrompt()
    })
    })
    
};

function addRole() {
    
    inquirer.prompt([
        {
      
            type: 'input',
            message: 'What is the job title for the role you would like to add?',
            name: 'roleName'
        },
        {
            type: 'input',
            message: 'What is the salary for the role?',
            name: 'salary'
        },
        {
            type: 'input',
            message: 'Which department is this role is under?',
            name: 'deptName'
        }
    ])
    .then(function(answer){
    
    
        connection.query(`INSERT INTO roles (job_title, salary, department) VALUES (?, ?, ?)`, [answer.roleName, answer.salary, answer.deptName], function(err, res) {
            if (err) throw err;
            viewRoles()
            initialPrompt()
        })
    })
    
};

function updateEmployeeRole() {
    const sql = `SELECT * FROM employee`;

};
