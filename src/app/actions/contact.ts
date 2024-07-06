'use server';
import { z } from 'zod';
import { Resend } from 'resend';
import { cookies } from 'next/headers';
import EmailTemplate from '@/components/UI/EmailTemplate'; // Adjust the import path as needed
import { ReactElement } from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const senderEmail = 'onboarding@resend.dev';
const recipientEmail = 'brennanjdouglas@gmail.com';

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
    businessName: formData.get('businessName'),
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!result.success) {
    console.error('Form validation failed:', result.error.flatten().fieldErrors);
    return { errors: result.error.flatten().fieldErrors };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      subject: 'New Contact Form Submission',
      react: EmailTemplate(result.data) as ReactElement,
      text: `New message from ${result.data.name} (${result.data.email}): ${result.data.message}`,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { errors: { _form: [error.message] } };
    }

    console.log('Email sent successfully:', data);

    cookieStore.set('hasSentMessage', 'true', { maxAge: 60 * 60 * 24 * 365 });

    return { errors: {} };
  } catch (error) {
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