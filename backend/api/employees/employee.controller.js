const  {create, read, update, del}  = require("./employee.service");


const errJson = {
    success: 0,
    message: "Database Error"
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
            });
        });
    },
    updateEmployee: (req, res) => {
        const body = req.body;
        update(body, req.params.id, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json(errJson);
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    deleteEmployee: (req, res) => {
        del(req.params.id, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json(errJson);
            }
            return res.status(204).json({
                success: 1,
            });
        });
    }
}