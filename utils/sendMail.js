const nodemailer = require("nodemailer") 
const nodemailerConfig = require('./nodemailerconfig')

const sendMail = async ({from, subject, html}) => {
    let transporter = nodemailer.createTransport(nodemailerConfig);
    let mailOptions = {
        from,
        to:  "foogundipe@student.oauife.edu.ng",
        subject,
        html
    };
    return transporter.sendMail(mailOptions);
}

module.exports = sendMail;