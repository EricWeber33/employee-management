const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "test data"
    });
});

app.listen(5000, () => {
    console.log("Server running")
})