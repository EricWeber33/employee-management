require("dotenv").config();
const json = require("../data.json")
const { response } = require("express");
const mysql = require("mysql");

const con = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB
});

con.connect((error) => {
    if (error) {
        throw error;
    }
    //create employees table in d
    con.query(`CREATE TABLE IF NOT EXISTS employees(
        id INT AUTO_INCREMENT,
        firstName VARCHAR(45) NOT NULL,
        lastName VARCHAR(45) NOT NULL,
        salary DOUBLE NOT NULL,
        PRIMARY KEY (id)
        )`, (err, res) => {
        if (err) {
            throw err;
        }
        console.log(res);
    });
    
    //add data.json data into employees table,
    
    for (let employee of json.employees) {
        con.query(
        `INSERT INTO employees (firstName, lastName, salary)
        VALUES (?, ?, ?)`,
        [
            employee.firstName,
            employee.lastName,
            employee.salary
        ],
        (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log(employee.firstName + " " + employee.lastName + " added");
        });
    }
    con.end();
});


  