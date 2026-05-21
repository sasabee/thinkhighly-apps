import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabaseAdmin
  .from('contact_leads')
  .insert([
    {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      service: body.service,
      message: body.message,
      status: 'new',
    },
  ]);

    if (error) throw error;

    const transporter =
      nodemailer.createTransport({
        host: 'mail.thinkhighlyapps.co.za',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@thinkhighlyapps.co.za',
      subject:
        ' New ThinkHighly Apps Inquiry',
      html: `
        <h2>New Contact Inquiry</h2>

        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          'Failed to send message',
      },
      { status: 500 }
    );
  }
}