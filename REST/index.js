const express = require("express");
const app = express();
const port = 4040;
const path = require("path");

const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        username: "apnacollege",
        content: "i love coding",


    },
    {
        id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        username: "Nisha Rai",
        content: "hard working is important to achieve the sucess",
    },
    {
        id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        username: "maite rai",
        content: "ione day t will show you my daughter ",
    },
];









app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    //console.log(req.body);
    let { username, content } = req.body;
    let id =uuidv4();
    posts.push({ id, username, content });
    //res.send("post request working");
    res.redirect("/posts");
});
app.path("/posts/:id",(req,res)=>{
    let{id}=req.params;
    console.log(id);
    res.send("path request request working");
});
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
   
});
app.get("/posts/:id/edit",(req,res)=>{
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs");
});

app.listen(port, () => {
    console.log("listening to port :4040");
});