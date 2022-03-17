const nodemailer = require("nodemailer") 
const nodemailerConfig = require('./nodemailerconfig')

const sendMail = () => {
const output = 
`
<p>You have a new contact request </p>
<h3> Contact details </h3>
<ul>
    <li>Name: ${req.body.fname}</li>
    <li>Email: ${req.body.email}</li>
</ul>
<h3>Message</h3>
<p>${req.body.message}</p>
`
let transport = nodemailer.createTransport(nodemailerConfig);

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
}

module.exports = sendMail;