import React from 'react';

interface EmailTemplateProps {
  businessName?: string;
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  businessName,
  name,
  email,
  message
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    color: '#333333',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px'
  }}>
    <h1 style={{ color: '#0066cc' }}>New Contact Form Submission</h1>
    <p>You have received a new message from your website contact form.</p>
    <div style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
      {businessName && (
        <p><strong>Business Name:</strong> {businessName}</p>
      )}
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong></p>
      <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
    <p style={{ marginTop: '20px', fontSize: '0.8em', color: '#666666' }}>
      This email was sent from your website's contact form.
    </p>
  </div>
);

export default EmailTemplate;