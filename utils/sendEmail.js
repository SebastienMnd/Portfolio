"use server";
import nodemailer from "nodemailer";

const MAIL_ACCOUNT = process.env.MY_MAIL;
const PASSWORD_ACCOUNT = process.env.MY_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_ACCOUNT,
    pass: PASSWORD_ACCOUNT,
  },
});

export const SendEmail = async (formData) => {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    message: formData.get("message"),
  };

  await transporter
    .sendMail({
      from: MAIL_ACCOUNT,
      to: 'sebastien.mande@outlook.fr',
      subject: `Message de ${data.username}`,
      text: `Email : ${data.email}.\n${data.message}`,
    })
    .catch((err) => {
      console.log(err);
    }).then(() => {
        console.log("Mail envoyé !")
    });
};
