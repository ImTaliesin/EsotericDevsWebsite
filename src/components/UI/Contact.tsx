'use client';
import React, { useState } from 'react';
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
  <Reveal delay={delay} width='100%'>
    {type === 'textarea' ? (
      <Textarea
        name={name}
        label={label}
        placeholder={placeholder}
        required={required}
        minRows={4}
        classNames={{
          label: 'text-white',
          input: ['bg-transparent', 'text-white', 'placeholder:text-gray-400'],
          inputWrapper: ['bg-neutral-800', 'w-full', 'border-gray-600'],
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
          label: 'text-white',
          input: ['bg-transparent', 'text-white', 'placeholder:text-gray-400'],
          inputWrapper: ['bg-neutral-800', 'w-full', 'border-gray-600'],
        }}
      />
    )}
  </Reveal>
);

export default function Contact() {
  const [alertState, setAlertState] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        showAlert('Message sent successfully!', 'success');
      } else {
        showAlert(result.error || 'Failed to send message. Please try again.', 'error');
      }
    } catch (error) {
      showAlert('An error occurred. Please try again later.', 'error');
    }
  };

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlertState({ show: true, message, type });
    setTimeout(
      () => setAlertState({ show: false, message: '', type: 'success' }),
      3000
    );
  };

  return (
    <BlurSection>
      <div id='Contact' className='flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8'>
        <Reveal>
          <h1 className='font-sans text-4xl font-bold text-center mb-2'>Contact Me</h1>
          <div className='relative mt-2 mb-4 h-1 w-24 mx-auto bg-violet-600 rounded-full'></div>
        </Reveal>
        <Reveal delay={0.2} width='100%'>
          <div className='w-full max-w-[550px] mx-auto'>
            <form onSubmit={handleSubmit} className='w-full space-y-6 bg-neutral-900 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl'>
              <FormField name='businessName' label='Business Name' placeholder='Business Name (if applicable)' delay={0.3} />
              <FormField name='name' label='Name' placeholder='Your Name' required delay={0.4} />
              <FormField name='email' label='Email' placeholder='Your Email' required delay={0.5} type='email' />
              <FormField name='message' label='Message' placeholder='Your Message' type='textarea' required delay={0.6} />
              <Reveal delay={0.7} width='100%'>
                <Button type='submit' className='w-full py-6 text-lg font-semibold bg-violet-600 text-white'>
                  Send Message
                </Button>
              </Reveal>
            </form>
          </div>
        </Reveal>
        {alertState.show && (
          <div className={`fixed bottom-0 left-0 right-0 p-4 text-white text-center ${
            alertState.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}>
            {alertState.message}
          </div>
        )}
      </div>
    </BlurSection>
  );
}