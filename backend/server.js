require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "test data"
    });
});

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server running")
})