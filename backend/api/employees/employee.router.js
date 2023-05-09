const { createEmployee, readEmployees, deleteEmployee } = require("./employee.controller");
const router = require("express").Router();

router.get("/employees", readEmployees);
router.post("/employees", createEmployee);
router.delete("/employees", deleteEmployee);
module.exports = router;
