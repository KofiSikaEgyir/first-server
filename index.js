const express = require("express")

const app = express();

app.get("/", (req,res) => {
    res.status(200).send("welcome to my server");
});

app.post("/",(req, res) => {
    res.status(201).send("Your data has been save.");
});

app.put("/", (req, res) => {
    res.status(200).send("Your data has been replaced.");
});

app.patch("/", (req, res) => {
    res.status(200).send("Your data has been updated.");
});

app.delete("/", (req, res) => {
    res.status(200).send("Your data has been deleted.");
});

app.listen(4000,(err) => {
    console.log("🚀Server is listening on http://localhost:4000");
});