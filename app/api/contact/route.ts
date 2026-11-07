import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const validatedData = contactFormSchema.parse(json);

    const { name, email, subject, message, projectType, budget } = validatedData;

    const resendApiKey = process.env.RESEND_API_KEY;

    // If Resend API key is provided, send real email via Resend
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Sokmeng Hoem Portfolio <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL || "sokmeng@sokmenghoem.dev",
        subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType || "General"}\nBudget: ${budget || "Not specified"}\n\nMessage:\n${message}`,
        replyTo: email,
      });
    } else {
      // In development or when key is not yet set in environment, log message cleanly
      console.log("[Contact Form Submission (Mock Mode)]:", {
        name,
        email,
        subject,
        projectType,
        budget,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[Contact API Error]:", error);

    if (error?.errors) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while transmitting your message. Please try again.",
      },
      { status: 500 }
    );
  }
}
