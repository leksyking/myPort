module.eports = {
    host:"smtp.ethereal.email" ,
    port: 587,
    secure: false, // true for 465, false for other ports
    security: 	STARTTLS,
    auth: {
      user: process.env.SMIP_USERNAME,
      pass: process.env.SMIP_PASSWORD
    }
}