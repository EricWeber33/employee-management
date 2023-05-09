const { create, read } = require("./employee.service");


const errJson = {
    success: 0,
    message: "Error connecting to database"
}

module.exports = {
    createEmployee: (req, res) => {
        const body = req.body;
        create(body, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json(errJson);
            }
            return res.status(201).json({
                success: 1,
                data: results
            });
        });
    },
    readEmployees: (req, res) => {
        read((error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json(errJson);
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    }
}