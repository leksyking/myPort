let nodemailerConfig;
if(process.env.NODE_ENV === 'production'){
  nodemailerConfig = {
    host:"smtp.gmail.com" ,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }
}
}
module.exports = nodemailerConfig