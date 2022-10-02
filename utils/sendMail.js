const nodemailer = require("nodemailer") 
const nodemailerConfig = require('./nodemailerconfig')

const sendMail = async ({from, subject, html}) => {
    let transporter = nodemailer.createTransport(nodemailerConfig);
    let mailOptions = {
        from,
        to:  "gbemilekeogundipe@gmail.com",
        subject,
        html
    };
    return transporter.sendMail(mailOptions);
}

module.exports = sendMail;