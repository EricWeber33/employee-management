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
                    return callback(error);
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
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    update: (data, id, callback) => {
        pool.query(
            `UPDATE employees SET firstName = ?, lastName = ?, salary = ? WHERE id = ?`,
            [
                data.firstName,
                data.lastName,
                data.salary,
                id
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    del: (id, callback) => {
        pool.query(
            `DELETE FROM employees WHERE id=?`,
            [
               id 
            ],
            (error, results) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    }
};