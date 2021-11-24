const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');
const db = require('./db');
const { listenerCount } = require('events');


initialPrompt();

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
    db.findAllEmployees()
    .then(([employees]) => {
        console.table(employees)
    })
    .then(() => initialPrompt())    
};
function viewDepartments() {
    db.findAllDept()
    .then(([ department ]) => {
        console.table(department)
    })
    .then(() => initialPrompt())
};
function viewRoles() {
    db.findRoles()
    .then(([ roles ]) =>  {
        console.table(roles)
    })
    .then(() => initialPrompt())
};

//Add new elements (employees, roles, departments) to the tables
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the first name of the employee you would like to add?",
            name: "first_name"
        },
        {
            type: "input",
            message: "What is the last name of the employee you would like to add?",
            name: "last_name"
        }
    ]).then(function(answer){
        
        let firstName = answer.first_name;
        let lastName = answer.last_name;
        db.findRoles()
        .then(([ roles ]) => {
            const roleChoices = roles.map(({ id, title }) => ({
                name: title,
                value: id
            }))
            inquirer.prompt ({ 
                type: 'list',
                name: 'roleId',
                message: 'What is the role of the employee?',
                choices: roleChoices
            }).then(answer => {
                let roleId = answer.roleId
               db.assignManager()
               .then(([ employees ]) => {
                   const managerChoices = employees.map(({ id, first_name, last_name }) => ({
                       name: `${first_name} ${last_name}`,
                       value: 'id',
                   })) 
            inquirer.prompt({
                type: 'list',
                name: 'managerId',
                message: 'Who is the manager of the new employee?',
                choices: managerChoices
            }).then(answer => {
                let employee = {
                    manager_id: answer.manager_id,
                    role_id: answer.roleId,
                    first_name: firstName,
                    last_name: last_name
                    }
                db.addEmployee()
                .then(([ employee ]) => {
                    console.table(employee);
                }).then(() => initialPrompt());
               }) 
               })
            })
        })
    })      
    };
// function addDepartment() {
//     inquirer.prompt({
      
//         type: "input",
//         message: "What is the name of the department you would like to add?",
//         name: "dept_name"

//     }).then(function(answer){
//         //const deptName = answer.dept_name

//     })
    
    
// };

// function addRole() {
    
//     inquirer.prompt([
//         {
      
//             type: 'input',
//             message: 'What is the job title for the role you would like to add?',
//             name: 'roleName'
//         },
//         {
//             type: 'input',
//             message: 'What is the salary for the role?',
//             name: 'salary'
//         },
//         {
//             type: 'input',
//             message: 'Which department is this role is under?',
//             name: 'deptName'
//         }
//     ])
//     .then(function(answer){
    
    
//         connection.query(`INSERT INTO roles (job_title, salary, department) VALUES (?, ?, ?)`, [answer.roleName, answer.salary, answer.deptName], function(err, res) {
//             if (err) throw err;
//             viewRoles()
//             initialPrompt()
//         })
//     })
    
// };

// function updateEmployeeRole() {
//     const sql = `SELECT * FROM employee`;

// };
