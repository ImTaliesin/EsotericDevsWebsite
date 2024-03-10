// 'use server';
// import { z } from 'zod';
// import { NextApiRequest, NextApiResponse } from 'next';
// import twilio from 'twilio';

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
// const yourPhoneNumber = process.env.YOUR_PHONE_NUMBER;

// const client = twilio(accountSid, authToken);

// const contactFormSchema = z.object({
//   businessName: z.string().optional(),
//   name: z.string().min(1, { message: 'Name is required' }),
//   email: z.string().email({ message: 'Invalid email address' }),
//   message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
// });

// interface ContactFormState {
//   errors: {
//     businessName?: string[];
//     name?: string[];
//     email?: string[];
//     message?: string[];
//     _form?: string[];
//   };
// }

// export async function contactAction(
//   formState: ContactFormState,
//   formData: FormData
// ): Promise<ContactFormState> {
//   const result = contactFormSchema.safeParse({
//     businessName: formData.get('businessName') as string,
//     name: formData.get('name') as string,
//     email: formData.get('email') as string,
//     message: formData.get('message') as string,
//   });

//   if (!result.success) {
//     console.log(result.error.flatten().fieldErrors);
//     return { errors: result.error.flatten().fieldErrors };
//   }

//   try {
//     // Send text message using Twilio
//     await client.messages.create({
//       body: `New contact form submission:\nBusiness Name: ${result.data.businessName || 'N/A'}\nName: ${result.data.name}\nEmail: ${result.data.email}\nMessage: ${result.data.message}`,
//       from: twilioPhoneNumber,
//       to: yourPhoneNumber,
//     });

//     return { errors: {} };
//   } catch (error: unknown) {
//     console.error('Error sending text message:', error);
//     if (error instanceof Error) {
//       return { errors: { _form: [error.message] } };
//     } else {
//       return { errors: { _form: ['An unknown error occurred'] } };
//     }
//   }
// }