import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
// Replace 're_xxxxxxxxx' with your actual API key in production
const resend = new Resend(process.env.RESEND_API_KEY || 're_xxxxxxxxx');

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send the email
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update this with your verified domain
      to: ['imenaaltesse@gmail.com'], // Your email address
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
