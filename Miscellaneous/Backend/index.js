const express = require("express");
const app = express();
const port = 9090;

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`standard Get response. Welcome ${user}!`);

});
app.post("/register", (req, res) => {
    res.send("standard POST Response");
});
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});