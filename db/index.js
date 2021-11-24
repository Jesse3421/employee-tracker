const connection = require("./connection");

class  DB {
    constructor(connection){
        this.connection = connection;
    };

    findAllDept(){
        return this.connection.promise().query(`SELECT * FROM department`);
    };
    findAllEmployees() {
        return this.connection.promise().query(`SELECT employee.id, employee.first_name, 
        employee.last_name, employee.manager_id, roles.title, roles.salary, department.dept_name  
        FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department on 
        roles.department_id = department.id;`); 
    };
    findRoles(){
        return this.connection.promise().query(`SELECT roles.id, roles.title, roles.salary, 
        department.dept_name FROM roles LEFT JOIN department on roles.department_id = department.id`);
    
    };
    assignManager(){
        return this.connection.promise().query(`SELECT employee.first_name, 
        employee.last_name, employee.manager_id FROM employee LEFT JOIN roles on employee.manager_id
        = manager.id`)
    };
    addDepartment(department) { 
    return this.connection.promise().query(`INSERT INTO department SET ?`, department);
    };
    
    
    addEmployee(employee) {
    return this.connection.promise().query(`INSERT INTO employee SET ?`, employee);
    };


// addRole(roles){
//     return this.connection.promise().query(`INSERT INTO roles SET ?`, roles);
    
// };
// updateEmployeeRole(employee){
//     return this.connection.promise().query(``);

// };
};

module.exports = new DB(connection);