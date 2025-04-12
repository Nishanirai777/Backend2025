const express = require("express");
const app = express();
//console.dir(app);
let port =1000;
app.listen(port, () => {
    console.log(`app is listing on port  ${port}`);
});
app.use((req , res) => {
    console.log("request received");
    //res.send({
        //name: "maite Rai",
        //phoneNumber: 9860602831,
    //);
    let code = "<h1>Fruits</h1><ul><li>apple</li><li>banana</li></ul>"
    res.send(code);
});

