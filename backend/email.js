import nodemailer from 'nodemailer';


var transporter = Nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'moviedownloadram@gmail.com',
      pass: 'Hostel#Boyz'
    }
  });
  
  var mailOptions = {
    from: 'moviedownloadram@gmail.com',
    to: 'nareshmurugan220@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  
const SendMail = async (message) => {
    const config = {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.APP_EMAIL,
            pass: process.env.APP_PASSWORD,
        }
    }
    const transporter = nodemailer.createTransport(config);
    // Sending Email
    transporter.sendMail(message, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
export default SendMail;

