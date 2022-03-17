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
        //review this
        from: '"" <process.env.EMAIL>',
        to: req.body.email,
        subject: req.body.subject,
        html: output,
    };

    return transport.sendMail(mailOptions); 
}

module.exports = sendMail;