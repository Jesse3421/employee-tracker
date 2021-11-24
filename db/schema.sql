DROP DATABASE IF EXISTS employeeTracker; 
CREATE DATABASE employeeTracker;
USE employeeTracker;


CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(40) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INTEGER NOT NULL,
    department_id INTEGER,
    --CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NULL, 
    manager_id INTEGER NULL FOREIGN KEY,
    -- CONSTRAINT fk_roles FOREIGN KEY (role_id) 
    -- REFERENCES roles (id) 

);

CREATE TABLE managers (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,

)

-- SELECT * FROM employee
-- LEFT JOIN roles ON employee.role_id = roles.id;
-- SELECT * FROM roles
-- LEFT JOIN department ON roles.department_id = department.id;

