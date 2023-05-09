const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        console.log("POST DATA: ", data);
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
        )
    }
};