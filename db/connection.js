const { builtinModules } = require('module');
const mysql = require('mysql2');

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
});

module.exports = connection