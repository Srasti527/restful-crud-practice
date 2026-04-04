const express = require("express");
const app = express();
const port= 8080;

app.use(express.urlencoded({extended:true}));
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts= [
    {Username: "Srasti",Content:"I don't know how, but i will"},
    {Username: "Srast2j84",Content:"Consistency>Motivation"},
    {Username: "TerminalThinker",Content:"No filter, no facade,just truth"},
    {Username: "Miss Jain",Content:"Full-stack web developer sharpening my skills and actively practicing DSA."},
    {Username: "Nova",Content:"Looking for internship opportunities. Open to new experiences and eager to contribute."},
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username , content } = req.body;
    posts.push({Username: username ,Content: content});
    console.log(req.body);
    res.send("post request working");
});


app.listen(port,()=>{
    console.log("port running");
})
