const { createEmployee, readEmployees } = require("./employee.controller");
const router = require("express").Router();

router.get("/employees", readEmployees);
router.post("/employees", createEmployee);

module.exports = router;
