require("dotenv").config()
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const sendContactMail = require('./utils/sendContactMail');


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

let sentMessage = "";

//set Date to footer
let today = new Date();
let options = {
    year: "numeric"
}
let currentDay = today.toLocaleDateString('en-US', options) 


app.get("/", (req, res)=>{
    res.render("home", {year: currentDay})
});

app.get("/about", (req, res)=>{
    res.render("about",  {year: currentDay})
});

app.get("/contact", (req, res)=>{
    res.render("contact",  {year: currentDay, sentMessage})
});

app.post("/contact", async (req, res)=>{
    const {fname, email, subject, message} = req.body;
    await sendContactMail({fname, email, subject, message});
    sentMessage = "Email has been sent!";
    res.redirect("/contact")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});





