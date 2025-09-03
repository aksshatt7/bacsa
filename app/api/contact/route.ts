import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create mailto URL with form data
    const mailtoUrl = `mailto:bacsa.uoft@gmail.com?subject=${encodeURIComponent(
      `[BACSA Website] ${subject}`,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from BACSA website contact form`,
    )}`

    // In a real implementation, you would use an email service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Resend
    // - EmailJS

    // For now, we'll simulate a successful response
    // The frontend will handle the mailto functionality

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully",
        mailtoUrl, // Send the mailto URL back to the frontend
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
