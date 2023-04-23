import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import twilio from 'twilio'
import nodemailer from 'nodemailer'



const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));








const accountSid = 'AC7ff98d9c19df00c604c16fd2aa92dc54';
const authToken = '80598621987438dc36dfb7344214bceb';
const client = twilio(accountSid, authToken);
app.post('/send-sms', (req, res)=>{
    const {to, body} = req.body;

    client.messages.create({
        body: body,
        to: to,
        from : '+16813396343'
    }).then(()=>{
        res.send('sms send successfully');
    }).catch(err =>{
        console.log(err);
    }
    )
})


app.post('/send-email', (req, res) => {
    // Get the email information from the request body
    const { to, subject, text } = req.body;
  
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '21103296@mail.jiit.ac.in',
        pass: 'prithvi@009'
      }
    });
  
    // Set up the email message
    const mailOptions = {
      from: '21103296@mail.jiit.ac.in',
      to: to,
      subject: subject,
      text: text
    };
  
    // Send the email
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
      }
    });
  });
  



app.listen(5000, () => {
    console.log('Server started on port 3000');
});
  

