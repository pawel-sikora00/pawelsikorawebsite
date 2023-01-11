import type { NextApiRequest, NextApiResponse } from "next";
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
  status: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.emal}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "1sikora.pawel@gmail.com",
    from: "whatever",
    subject: "New web form message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "Ok" });
};
