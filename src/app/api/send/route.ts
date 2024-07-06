import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import EmailTemplate from '@/components/UI/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const senderEmail = 'onboarding@resend.dev';
const recipientEmail = 'brennanjdouglas@gmail.com';

const contactFormSchema = z.object({
	businessName: z.string().optional(),
	name: z.string().min(1, { message: 'Name is required' }),
	email: z.string().email({ message: 'Invalid email address' }),
	message: z
		.string()
		.min(10, { message: 'Message must be at least 10 characters long' }),
});

// In-memory store for rate limiting
const rateLimitStore = new Map<string, number>();

// Rate limit: 1 request per minute
const RATE_LIMIT_WINDOW = 60 * 10000; // 10 minute in milliseconds

export async function POST(request: Request) {
	// Get the IP address from the request
	const ip = request.headers.get('x-forwarded-for') || 'unknown';

	// Check rate limit
	const now = Date.now();
	const lastRequestTime = rateLimitStore.get(ip) || 0;
	if (now - lastRequestTime < RATE_LIMIT_WINDOW) {
		return NextResponse.json(
			{ error: 'Rate limit exceeded. Please try again later.' },
			{ status: 429 }
		);
	}

	// Update last request time
	rateLimitStore.set(ip, now);

	const formData = await request.formData();
	const result = contactFormSchema.safeParse({
		businessName: formData.get('businessName'),
		name: formData.get('name'),
		email: formData.get('email'),
		message: formData.get('message'),
	});

	if (!result.success) {
		return NextResponse.json(
			{ errors: result.error.flatten().fieldErrors },
			{ status: 400 }
		);
	}

	try {
		const { data, error } = await resend.emails.send({
			from: senderEmail,
			to: recipientEmail,
			subject: 'New Contact Form Submission',
			react: EmailTemplate(result.data),
			text: `New message from ${result.data.name} (${result.data.email}): ${result.data.message}`,
		});

		if (error) {
			console.error('Error sending email:', error);
			return NextResponse.json({ error: error.message }, { status: 400 });
		}

		console.log('Email sent successfully:', data);

		return NextResponse.json(
			{ message: 'Email sent successfully' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json(
			{ error: 'An unknown error occurred' },
			{ status: 500 }
		);
	}
}
