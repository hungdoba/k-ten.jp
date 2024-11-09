'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendMail(
  to: string,
  subject: string,
  text: string,
  html: string
): Promise<true | string> {
  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: to,
      subject: subject,
      text: text,
      html: html,
    });
    console.log(
      'Message sent: %s',
      info.accepted,
      info.response,
      info.envelope
    );

    return true;
  } catch (err) {
    const error = err as Error;
    return error.message;
  }
}
