import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Use explicit host instead of 'service'
  port: 587, // Standard TLS port
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  // Add these timeout settings for serverless environments
  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 10000
});

export const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
};