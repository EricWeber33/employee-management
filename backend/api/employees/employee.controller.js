const { create } = require("./employee.service");

module.exports = {
    createEmployee: (req, res) => {
        const body = req.body;
        create(body, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "Error connecting to database"
                });
            }
            return res.status(201).json({
                success: 1,
                data: results
            });
        });
    }
}