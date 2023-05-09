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
    },
    update: (data, callback) => {
        pool.query(
            `UPDATE employees SET firstName = ?, lastName = ?, salary = ? WHERE id = ?`,
            [
                data.firstName,
                data.lastName,
                data.salary,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results);
            }
        )
    },
    del: (data, callback) => {
        pool.query(
            `DELETE FROM employees WHERE id=?`,
            [
               data.id 
            ],
            (error, results) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results);
            }
        );
    }
};