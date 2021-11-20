USE employeeTracker

INSERT INTO department (id, dept_name)
VALUES 
(1, 'Human Resources'),
(2, 'Accounting'),
(3, 'Web Development'),
(4, 'Management');

INSERT INTO roles (id, job_title, salary, department)
VALUES 
(1, 'HR Specialist', 75000, 'Human Resources'),
(2, 'Accountant', 80000, 'Accounting'),
(3, 'Engineer', 75000, 'Web Development'),
(4, 'Management', 110000, 'Management');

INSERT INTO employee (first_name, last_name, job_titles, dept_name, salaries, manager)
VALUES 
('Jesse', 'Koon', 'Engineer', 'Web Development', 75000, 'Jeff Thomas '),
('Jeff', 'Thomas', 'Manager', 'Management', 110000, NULL),
('Tom', 'Arnold', 'Accountant', 'Accounting', 83000, 'Mark Greenberg'),
('April', 'Stevens', 'Engineer', 'Web Development', 98000, 'Jeff Thomas'),
('Ken', 'Pollock', 'Accountant', 'Accounting', 88000, 'Mark Greenberg'),
('Sharise', 'Montgomery', 'HR Specialist', 'Human Resources', 75000, 'Jeff Thomas'),
('Claire', 'Johnson', 'Engineer', 'Web Development', 62000, 'Jeff Thomas');

