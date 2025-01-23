import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()

        // Email to visitor
        await transporter.sendMail({
            from: '"Zackery Alline Fajardo" <zafajardo9@gmail.com>',
            to: email,
            subject: "Thank you for your message",
            text: "Thank you for noticing my profile. Rest assured that I will reply as early as possible to your message. Thanks for contacting or messaging.",
            html: `
        <h1>Thank you for your message!</h1>
        <p>Thank you for noticing my profile. Rest assured that I will reply as early as possible to your message. Thanks for contacting or messaging.</p>
      `
        })

        // Email to you
        await transporter.sendMail({
            from: '"Portfolio Contact" <noreply@portfolio.com>',
            to: "zafajardo9@gmail.com",
            subject: `New Contact Form Message from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Sent at: ${new Date().toLocaleString()}
      `,
            html: `
        <h1>New Contact Form Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
      `
        })

        return NextResponse.json({ message: "Emails sent successfully" })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        )
    }
} 