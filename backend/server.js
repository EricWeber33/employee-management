require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const router = require("./api/employees/employee.router")

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.listen(process.env.SERVER_PORT, () => {
    console.log("Server running")
})