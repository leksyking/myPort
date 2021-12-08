require("dotenv").config()
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
 const nodemailer = require("nodemailer")

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

const message = "Email has been sent!";

app.get("/", (req, res)=>{
    res.render("home")
});

app.get("/about", (req, res)=>{
    res.render("about")
});

app.get("/contact", (req, res)=>{
    res.render("contact")
});

app.post("/contact", (req, res)=>{
    const output = `
        <p>You have a new contact request </p>
        <h3> Contact details </h3>
        <ul>
            <li>Name: ${req.body.fname}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `
    let transport = nodemailer.createTransport({
            host: process.env.SMIP_HOST,
            port: 2525,
            auth: {
              user: process.env.SMIP_USER,
              pass: process.env.SMIP_PASSWORD
            }
          });
    
    let mailOptions = {
      from: '"Nodemailer Contact" <process.env.EMAIL>',
      to: req.body.email,
      subject: req.body.subject,
      text: 'Hey there, it’s our first message sent with Nodemailer ',
      html: output,
        };
    
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    }); 
    res.redirect("/contact")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});





