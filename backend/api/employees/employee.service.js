const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO employees(firstName, lastName, salary)
                VALUES(?, ?, ?)`,
            [
                data.firstName,
                data.lastName,
                data.salary
            ],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results);
            }
        );
    },
    read: (callback) => {
        pool.query(
            `SELECT * FROM employees`,
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results);
            }
        );
    }
};