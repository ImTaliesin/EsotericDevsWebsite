'use client';
import React, { useState, FormEvent } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';
import BlurSection from '../Small/blurSection';
import Reveal from '@/components/UI/Reveal';

interface FormFieldProps {
	name: string;
	label: string;
	placeholder: string;
	type?: 'input' | 'textarea' | 'email';
	required?: boolean;
	delay: number;
}

const FormField: React.FC<FormFieldProps> = ({
	name,
	label,
	placeholder,
	type = 'input',
	required = false,
	delay,
}) => (
	<Reveal
		delay={delay}
		width='100%'>
		{type === 'textarea' ? (
			<Textarea
				name={name}
				label={label}
				placeholder={placeholder}
				required={required}
				minRows={4}
				classNames={{
					input: 'bg-transparent text-white placeholder:text-gray-400',
					inputWrapper: 'bg-neutral-800 w-full border-gray-600 text-white',
				}}
			/>
		) : (
			<Input
				name={name}
				label={label}
				placeholder={placeholder}
				required={required}
				type={type}
				classNames={{
					input:
						'bg-transparent !text-gray-400 placeholder:text-gray-400 !hover:text-gray-800',
					inputWrapper:
						'bg-neutral-800 w-full border-gray-600 placeholder:text-gray-400 !hover:text-gray-800',
				}}
			/>
		)}
	</Reveal>
);

interface AlertState {
	show: boolean;
	message: string;
	type: 'success' | 'error';
}

export default function Contact() {
	const [alert, setAlert] = useState<AlertState>({
		show: false,
		message: '',
		type: 'success',
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				body: new FormData(e.currentTarget),
			});
			const result = await response.json();
			showAlert(
				response.ok
					? 'Message sent successfully!'
					: result.error || 'Failed to send message. Please try again.',
				response.ok ? 'success' : 'error'
			);
		} catch (error) {
			showAlert('An error occurred. Please try again later.', 'error');
		}
	};

	const showAlert = (message: string, type: 'success' | 'error') => {
		setAlert({ show: true, message, type });
		setTimeout(
			() => setAlert({ show: false, message: '', type: 'success' }),
			3000
		);
	};

	const formFields: FormFieldProps[] = [
		{
			name: 'businessName',
			label: 'Business Name',
			placeholder: 'Business Name (if applicable)',
			delay: 0.3,
		},
		{
			name: 'name',
			label: 'Name',
			placeholder: 'Your Name',
			required: true,
			delay: 0.4,
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'Your Email',
			required: true,
			type: 'email',
			delay: 0.5,
		},
		{
			name: 'message',
			label: 'Message',
			placeholder: 'Your Message',
			type: 'textarea',
			required: true,
			delay: 0.6,
		},
	];

	return (
		<BlurSection>
			<div
				id='Contact'
				className='flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8'>
				<Reveal>
					<h1 className='font-sans text-4xl font-bold text-center mb-2'>
						Contact Me
					</h1>
					<div className='relative mt-2 mb-4 h-1 w-24 mx-auto bg-violet-600 rounded-full'></div>
				</Reveal>
				<Reveal
					delay={0.2}
					width='100%'>
					<div className='w-full max-w-[550px] mx-auto'>
						<form
							onSubmit={handleSubmit}
							className='w-full space-y-6 bg-neutral-900 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl text-gray-400'>
							{formFields.map((field) => (
								<FormField
									key={field.name}
									{...field}
								/>
							))}
							<Reveal
								delay={0.7}
								width='100%'>
								<Button
									type='submit'
									className='w-full py-6 text-lg font-semibold bg-violet-600 text-white'>
									Send Message
								</Button>
							</Reveal>
						</form>
					</div>
				</Reveal>
				{alert.show && (
					<div
						className={`fixed bottom-0 left-0 right-0 p-4 text-white text-center ${
							alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
						}`}>
						{alert.message}
					</div>
				)}
			</div>
		</BlurSection>
	);
}
