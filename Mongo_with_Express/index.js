const express = require("express");
const app = express();
const mongoose = require('mongoose');// getting-started.js
const path = require("path");
const chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended: true}));

main()
    .then(() => {
    console.log("connection successfully ")
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//index route 
app.get("/chats", async (req,res) => {
    let chats = await chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

//new route
app.get("/chats/new",(req,res) =>{
    res.render("new.ejs");
});

//create route
app.post("/chats",(req,res) =>{
    let {from,to,msg} = req.body;
    let newChat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat.save().then(res =>{
        console.log("chat saved")
    }).catch(err =>{
        console.log(err);
    });
    res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit",async (req,res) =>{
    let {id} = req.params;
    let Chat= await chat.findById(id);
    res.render("edit.ejs",{Chat});
});

app.get("/",(req,res) =>{
    res.send("root is working");
});

app.listen(8080,() =>{
    console.log("server is listening on port 8080")
});