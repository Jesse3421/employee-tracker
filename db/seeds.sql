USE employeeTracker;

INSERT INTO department (id, dept_name)
VALUES 
(1, 'Human Resources'),
(2, 'Accounting'),
(3, 'Web Development'),
(4, 'Management'),
(5, 'Front Line Staff');

INSERT INTO roles (id, title, salary, department_id)
VALUES 
(1, 'HR Specialist', 75000, 1),
(2, 'Accountant', 80000, 2),
(3, 'Engineer', 75000, 3),
(4, 'Management', 110000, 4),
(5, 'Administrative Assistant', 45000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Jesse', 'Koon', 3, 1),
('Jeff', 'Thomas', 4, NULL),
('Tom', 'Arnold', 2, 2),
('April', 'Stevens', 3, 1),
('Ken', 'Pollock', 2, 2),
('Sharise', 'Montgomery', 1, 1),
('Claire', 'Johnson', 3, 1),
('Kelly', 'Greer', 4, NULL);

