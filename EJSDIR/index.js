const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.set("view  engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");

});
app.get("/ig/:username", (req, res) => {
    const instaData= require("./data.json");
    res.render("instagram.ejs");
});





app.get("/hello", (req, res) => {
    res.send("hello");
});
app.get("/rolldice", (req, res) => {
    res.render("rolldice.ejs");
});
app.listen(port, () => {
    console.log(`listing on the port${port}`);
});