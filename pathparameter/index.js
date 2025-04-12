const express = require("express");
const app = express();
//console.dir(app);
let port = 10000;
app.listen(port, () => {
    console.log(`app is listing on port  ${port}`);
});
app.get("/", (req, res) => {
    res.send("hello i am root");
});
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    htmlStr = `<h1>welcome to the page of  @${username}!</h1>`
    res.send(htmlStr);
    //res.send(`welcome to the page of @${username}.`);
});
app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q){
        res.send("<h1>nothing search</h1>");
    }
    res.send( `<h1>search results for query :${q}</h1>` );
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

