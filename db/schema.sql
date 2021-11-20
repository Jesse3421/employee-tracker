DROP DATABASE IF EXISTS employeeTracker; 
CREATE DATABASE employeeTracker;
USE employeeTracker;


CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(40) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    salary INTEGER,
    department VARCHAR(40) NOT NULL
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_titles VARCHAR(30) NOT NULL,
    dept_name VARCHAR(30) NOT NULL,
    salaries INTEGER,
    manager VARCHAR(30) NULL
);

