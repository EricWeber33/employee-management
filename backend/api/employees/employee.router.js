const { createEmployee } = require("./employee.controller");
const router = require("express").Router();

router.post("/employees", createEmployee);

module.exports = router;
