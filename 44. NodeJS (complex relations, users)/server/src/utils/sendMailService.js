const transporter = require("../config/transporter");
const { EMAIL_USERNAME } = require("../config/config");

const sendContactConfirmationMail = async ({ fullName, clientEmail }) => {
  try {
    const mailOptions = {
      from: `"Bazaar" <${EMAIL_USERNAME}>`,
      to: clientEmail,
      subject: "Thanks for contacting us!",
      text: `
        Hi ${fullName},

        Thanks for reaching out to us. We received your message and will get back to you shortly.

        Best regards,
        Bazaar
      `,
      html: `  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e7ff; border-radius: 8px; overflow: hidden; background: #f9fbff;">
    <div style="background-color: #3b82f6; padding: 20px; text-align: center; color: white;">
      <h1 style="margin: 0; font-size: 24px;">Bazaar</h1>
    </div>
    <div style="padding: 30px; color: #1e293b; font-size: 16px; line-height: 1.5;">
      <p>Hi <strong>${fullName}</strong>,</p>
      <p>Thanks for reaching out to us. We received your message and will get back to you shortly.</p>
      <p>Meanwhile, feel free to explore our latest products and offers!</p>
      <a target="_blank" href="https://your-bazaar-site.com" 
         style="display: inline-block; padding: 10px 20px; margin-top: 20px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">
        Visit Bazaar
      </a>
      <p style="margin-top: 40px;">Best regards,<br><strong>The Bazaar Team</strong></p>
    </div>
    <div style="background-color: #e0e7ff; text-align: center; padding: 15px; color: #64748b; font-size: 14px;">
      &copy; ${new Date().getFullYear()} Bazaar. All rights reserved.
    </div>
  </div>`,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw error;
  }
};

const sendContactMailToApp = async ({
  fullName,
  clientEmail,
  subject,
  message,
}) => {
  try {
    const mailOptions = {
      from: `"Bazaar Contact" <${EMAIL_USERNAME}>`,
      to: EMAIL_USERNAME, // mail goes to the app owner
      subject: `New Contact Message from ${fullName}`,
      text: `
        You have a new message from your contact form.

        Name: ${fullName}
        Email: ${clientEmail}
        Subject: ${subject}
        Message:
        ${message}
      `,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e7ff; border-radius: 8px; background: #f9fbff; overflow: hidden;">
        <div style="background-color: #3b82f6; padding: 20px; text-align: center; color: white;">
          <h2 style="margin: 0;">New Contact Message</h2>
          <p style="margin: 0; font-size: 14px;">From your Bazaar app contact form</p>
        </div>
        <div style="padding: 30px; color: #1e293b; font-size: 16px; line-height: 1.5;">
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${clientEmail}" style="color: #2563eb;">${clientEmail}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #e0e7ff; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
        </div>
        <div style="background-color: #e0e7ff; text-align: center; padding: 15px; color: #64748b; font-size: 14px;">
          &copy; ${new Date().getFullYear()} Bazaar. All rights reserved.
        </div>
      </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending contact email to app:", error);
    throw error;
  }
};

const sendVerifyEmail = async ({ fullName, email, verifyLink }) => {
  try {
    const mailOptions = {
      from: `"Bazaar" <${EMAIL_USERNAME}>`,
      to: email,
      subject: "Please Verify Your Email for Bazaar",
      text: `
        Hi ${fullName},

        Thanks for registering at Bazaar.

        Please verify your email by clicking the link below:

        ${verifyLink}

        If you did not create an account, please ignore this email.

        Best regards,
        Bazaar Team
      `,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e7ff; border-radius: 8px; background: #f9fbff; overflow: hidden;">
        <div style="background-color: #3b82f6; padding: 20px; text-align: center; color: white;">
          <h2 style="margin: 0;">Verify Your Email</h2>
          <p style="margin: 0; font-size: 14px;">Welcome to Bazaar! Let's confirm your email.</p>
        </div>
        <div style="padding: 30px; color: #1e293b; font-size: 16px; line-height: 1.5;">
          <p>Hi <strong>${fullName}</strong>,</p>
          <p>Thank you for signing up at Bazaar.</p>
          <p>To complete your registration, please verify your email address by clicking the button below:</p>
          <p style="text-align: center;">
            <a href="${verifyLink}" style="display: inline-block; padding: 12px 25px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">Verify Email</a>
          </p>
          <p>If the button above does not work, copy and paste this link into your browser:</p>
          <p style="word-break: break-all; color: #2563eb;">${verifyLink}</p>
          <p>If you did not create an account, you can safely ignore this email.</p>
          <p>Best regards,<br />The Bazaar Team</p>
        </div>
        <div style="background-color: #e0e7ff; text-align: center; padding: 15px; color: #64748b; font-size: 14px;">
          &copy; ${new Date().getFullYear()} Bazaar. All rights reserved.
        </div>
      </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
};

module.exports = { sendContactConfirmationMail, sendContactMailToApp, sendVerifyEmail };
