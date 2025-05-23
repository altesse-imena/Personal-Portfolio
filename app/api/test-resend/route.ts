import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// This is just a test route to verify Resend can be imported
export async function GET() {
  try {
    // Just check if Resend is properly imported
    const resendImported = !!Resend;
    
    return NextResponse.json({ 
      success: true, 
      message: 'Resend package successfully imported',
      resendImported 
    });
  } catch (error) {
    console.error('Error importing Resend:', error);
    return NextResponse.json(
      { error: 'Failed to import Resend package', details: String(error) },
      { status: 500 }
    );
  }
}
