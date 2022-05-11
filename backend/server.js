const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

const app = require("./app");

mongoose
    .connect(process.env.LOCAL_DB, {})
    .then(() => {
        console.log("DB connection successful...");
    })
    .catch((err) => {
        console.log("Error while connecting to the database..");
    });

app.listen(3000, () => {
    console.log("Server is running at port 3000...");
});
