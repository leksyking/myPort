const sendMail = require('./sendMail')

const sendContactMail = async ({fname, email, subject, message}) => {
    const html = 
    `
    <p>You have a new contact request </p>
    <h3> Contact details </h3>
    <ul>
        <li>Name: ${fname}</li>
        <li>Email: ${email}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
    `
    return sendMail({from: email, subject, html})
}

module.exports = sendContactMail;