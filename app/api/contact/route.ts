// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate input
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+\$/.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // In production, send email via your preferred service
    // Example: SendGrid, Resend, Nodemailer, etc.
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate successful submission
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
