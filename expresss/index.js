const express = require("express");
const app = express();
//console.dir(app);
let port = 10000;
app.listen(port, () => {
    console.log(`app is listing on port  ${port}`);
});
app.get("/", (req, res) => {
    res.send("this is root here") ;
});
app.get("/search", (req, res) => {
    res.send("you are in the serach path");

});
app.get("/gallery", (req, res) => {
    res.send("you are in gallery right now");
});
app.get("/apple", (req, res) => {
    res.send("this is the path for apple");
});


//app.get("*", (req, res) => {
// res.send("this path doesnot exits");
//});

//app.use((req , res) => {
//console.log("request received");
//res.send({
//name: "maite Rai",
//phoneNumber: 9860602831,
//);
//let code = "<h1>Fruits</h1><ul><li>apple</li><li>banana</li></ul>"
// res.send(code);
//});

