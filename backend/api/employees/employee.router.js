const { createEmployee, readEmployees, deleteEmployee, updateEmployee } = require("./employee.controller");
const router = require("express").Router();

router.get("/employees", readEmployees);
router.post("/employees", createEmployee);
router.delete("/employees", deleteEmployee);
router.patch("/employees", updateEmployee);

module.exports = router;
