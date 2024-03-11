'use server';
import { z } from 'zod';
import sendgrid from '@sendgrid/mail';
import { cookies } from 'next/headers';

const sendgridApiKey = process.env.SENDGRID_API_KEY as string;
const senderEmail = 'Taliesin@esotericdevs.com';
const recipientEmail = 'brennanjdouglas@gmail.com';

sendgrid.setApiKey(sendgridApiKey);

const contactFormSchema = z.object({
  businessName: z.string().optional(),
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
});

interface ContactFormState {
  errors: {
    businessName?: string[];
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
}

export async function contactAction(
  formState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const cookieStore = cookies();
  const hasSentMessage = cookieStore.get('hasSentMessage');

  if (hasSentMessage) {
    return {
      errors: {
        _form: ['You have already sent a message. Only one message per user is allowed.'],
      },
    };
  }

  const result = contactFormSchema.safeParse({
    businessName: formData.get('businessName') as string,
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  });

  if (!result.success) {
    console.error('Form validation failed:', result.error.flatten().fieldErrors);
    return { errors: result.error.flatten().fieldErrors };
  }

  try {
    // Send email using SendGrid
    const emailData = {
      to: recipientEmail,
      from: senderEmail,
      subject: 'New Contact Form Submission',
      text: `New contact form submission:
      Business Name: ${result.data.businessName || 'N/A'}
      Name: ${result.data.name}
      Email: ${result.data.email}
      Message: ${result.data.message}`,
    };

    await sendgrid.send(emailData);
    console.log('Email sent successfully:', emailData);

    cookieStore.set('hasSentMessage', 'true', { maxAge: 60 * 60 * 24 * 365 });

    return { errors: {} };
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      return { errors: { _form: [error.message] } };
    } else {
      console.error('Unknown error occurred');
      return { errors: { _form: ['An unknown error occurred'] } };
    }
  }
}