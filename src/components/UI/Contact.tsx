'use client';
import BlurSection from '../Small/blurSection';
import { Input, Textarea, Button } from '@nextui-org/react';
import { contactAction } from '@/actions/contact';

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const result = await contactAction({ errors: {} }, formData);

    const alert = document.getElementById('alert');
    if (alert) {
      if (Object.keys(result.errors).length === 0) {
        alert.classList.add('bg-green-500');
        alert.textContent = 'Message sent successfully!';
      } else {
        alert.classList.add('bg-red-500');
        alert.textContent = 'Failed to send message. Please try again.';
      }
      alert.classList.add('show');
      setTimeout(() => {
        alert.classList.remove('show');
        alert.classList.remove('bg-green-500', 'bg-red-500');
      }, 3000);
    }
  };

  return (
    <BlurSection>
      <div id="Contact" className="flex m-14 flex-col justify-top items-center">
        <h1 className="font-sans text-4xl font-bold">Contact Me</h1>
        <div className="relative mt-4 mb-2 h-1 w-12 bg-violet-600 rounded-full"></div>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3 bg-neutral-950 rounded-2xl p-4">
          <Input name="businessName" label="Business Name" placeholder="Business Name (if applicable)" fullWidth />
          <Input name="name" label="Name" placeholder="Your Name" fullWidth required />
          <Input name="email" label="Email" placeholder="Your Email" fullWidth required />
          <Textarea name="message" label="Message" placeholder="Your Message" fullWidth required />
          <Button type="submit" color="primary" className="mt-4">
            Send Message
          </Button>
        </form>
        <div
          id="alert"
          className="fixed bottom-0 left-0 right-0 p-4 text-white text-center opacity-0 transition-opacity duration-300"
        ></div>
      </div>
    </BlurSection>
  );
}