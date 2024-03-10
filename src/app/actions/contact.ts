import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const yourPhoneNumber = process.env.YOUR_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

export default async function contactAction(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { businessName, name, email, message } = req.body;

    try {
      // Send text message using Twilio
      await client.messages.create({
        body: `New contact form submission:\nBusiness Name: ${businessName}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        from: twilioPhoneNumber,
        to: yourPhoneNumber,
      });

      res.status(200).json({ message: 'Text message sent successfully' });
    } catch (error) {
      console.error('Error sending text message:', error);
      res.status(500).json({ message: 'Error sending text message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}