const Connection = require("mysql2")

function appFunctions() {


function viewEmployees() {
    connection.query(`SELECT * FROM employee;`, (err, res) => {
    if (err) throw err;
    console.log('function ran')
    initialPrompt() 
    })
};

function viewDepartments() {
    const sql = `SELECT * FROM department`;
    return sql

};

function viewRoles() { 
    const sql = `SELECT * FROM roles`;
    
};




function addEmployee() {
    const sql = `SELECT * FROM employee`;
    
};

function addDepartment() {
    const sql = `SELECT * FROM employee`;
    
};

function addRole() {
    const sql = `SELECT * FROM employee`;
    
};

function updateEmployeeRole() {
    const sql = `SELECT * FROM employee`;

};
}
module.exports = appFunctions