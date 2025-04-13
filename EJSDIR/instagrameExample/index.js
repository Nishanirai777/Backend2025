const express = require("express");
const app = express();
const path = require("path");
const port = 3030;
//for html we use views folder now for the static file like css and java we use public folders
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.set("view  engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");

});
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data) {
        res.render("instagram.ejs", { data });



    } else {
        res.render("error.ejs");
    }


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