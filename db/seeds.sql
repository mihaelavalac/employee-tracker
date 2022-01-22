INSERT INTO department (name)
VALUES
('Accounting and Finance'),
('Production'),
('Research and Development'),
('Purchasing'),
('Marketing'),
('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES 
('Web Developer', 65.000 , 3 ),
('Accountent', 65.000 , 1),
('Sales Person', 45.000 , 4),
('Project Manager', 75.000 , 3),
('Hiring Manager', 75.000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Mihaela', 'Valac', 1, 4),
('Anny', 'Minchen', 2, 5),
('Gaby', 'Jingry', 4, NULL),
('Inn', 'Vincen', 3, 5),
('Michael', 'Jell', 5, NULL);