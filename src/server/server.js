const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Serve static files (PDFs)
app.use('/pdfs', express.static(path.join(__dirname, 'public')));

// Define an endpoint to handle sending emails
app.post('/send-email', (req, res) => {
    // Extract data from the request
    const {to, subject, text} = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Your email configuration here
    });

    // Define email options
    const mailOptions = {
        from: 'your_email@example.com',
        to,
        subject,
        text,
        attachments: [
            {
                path: path.join(__dirname, 'public', 'design.pdf') // Path to the PDF file
            }
        ]
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
