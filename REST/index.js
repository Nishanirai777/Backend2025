const express = require("express");
const app = express();
const port = 3030;
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
let posts = [
    {
        id: uuidv4(),
        username: "United College",
        content: "i love coding",

    },
    {
        id: uuidv4(),
        username: "NishaRai",
        content: "Hard working is important to achieve sucess",
    },
    {
        id: uuidv4(),
        username: "SarajDhakal",
        content: "very talented man",

    },
];
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id =uuidv4();
    posts.push({  id, username, content });
    res.redirect("/posts");
    //res.send("post request working")
});
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
    // res.send("request working");
});

app.patch("/posts/:id",(req, res)=>{
    let {id}= req.params;
    let newContent =req.body.content;
    let post =posts.find((p)=> id === p.id)
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});
app.get("/posts/:id/edit",(req, res)=>{
    let {id}= req.params;
    let post =posts.find((p)=> id === p.id)
    res.render("edit.ejs");
});
//app.get("/", (req, res) => {
// res.send("serving working well!");

//});
app.delete("/posts/:id",(req, res)=>{
    let {id}= req.params;
     posts = posts.filter((p)=> id  !== p.id)
     res.redirect("/posts");
});
app.listen(port, () => {
    console.log("listening to port :3030");
});
