const express = require("express");
const app = express();
const port= 8080;
// import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");



app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts= [
    {id:uuidv4() , Username: "Srasti",Content:"I don't know how, but i will"},
    {id:uuidv4(), Username: "Srast2j84",Content:"Consistency>Motivation"},
    {id:uuidv4(), Username: "TerminalThinker",Content:"No filter, no facade,just truth"},
    {id:uuidv4(), Username: "Miss Jain",Content:"Full-stack web developer sharpening my skills and actively practicing DSA."},
    {id:uuidv4() ,Username: "Nova",Content:"Looking for internship opportunities. Open to new experiences and eager to contribute."},
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username , content } = req.body;
    let id = uuidv4();
    posts.push({id, Username: username ,Content: content});
    // console.log(req.body);
    // res.send("post request working");
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let { id} = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    // res.send("request working");
    res.render("show.ejs",{post});
})

app.patch("/posts/:id",(req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id ===p.id);
    post.Content= newContent;
    // console.log(newContent);
    console.log(post);
    // res.send("patch request working");
    res.redirect(`/posts/${id}`);
});

app.get("/posts/:id/edit",(req, res)=> {

    let { id } = req.params;

    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
})

// app.delete("/posts/:id", (req, res) =>{
//     let{id} = req.params;
//      post= posts.filter((p)=> p.id !== id);
//      res.redirect("/posts");
// });
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    posts = posts.filter((p) => p.id !== id); // reassign posts array
    res.redirect("/posts");
});


app.listen(port,()=>{
    console.log("port running");
})
