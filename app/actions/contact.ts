"use server";

import { Resend } from "resend";

import {
  contactConfig,
  getErrorMessage,
  isValidEmail,
  validateString,
} from "@/lib/utils";

export async function sendContactForm(formData: {
  fullName: string;
  email: string;
  serviceArea: string;
  message: string;
}) {
  const sanitizedData = {
    fullName: formData.fullName.trim(),
    email: formData.email.trim(),
    serviceArea: formData.serviceArea.trim(),
    message: formData.message.trim(),
  };

  if (
    !validateString(sanitizedData.fullName, 120) ||
    !validateString(sanitizedData.serviceArea, 120) ||
    !validateString(sanitizedData.message, 2000) ||
    !isValidEmail(sanitizedData.email)
  ) {
    return {
      success: false,
      error: "Please provide a valid name, email, service area, and message.",
    };
  }

  const resendApiKey = contactConfig.resendApiKey;
  const resendFromEmail = contactConfig.resendFromEmail;
  const contactToEmail = contactConfig.contactToEmail;

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return { success: false, error: "Email service not configured." };
  }

  const resend = new Resend(resendApiKey);

  try {
    const data = await resend.emails.send({
      from: resendFromEmail,
      to: contactToEmail,
      subject: `Inquiry - ${sanitizedData.serviceArea}`,
      replyTo: sanitizedData.email,
      text: `Name: ${sanitizedData.fullName}\nEmail: ${sanitizedData.email}\nService Area: ${sanitizedData.serviceArea}\n\nMessage:\n${sanitizedData.message}`,
      html: `<p><strong>Name:</strong> ${sanitizedData.fullName}</p><p><strong>Email:</strong> ${sanitizedData.email}</p><p><strong>Service Area:</strong> ${sanitizedData.serviceArea}</p><p><strong>Message:</strong></p><p>${String(
        sanitizedData.message,
      ).replace(/\n/g, "<br>")}</p>`,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Error sending contact form:", error);
    return {
      success: false,
      error: getErrorMessage(error) || "Failed to send email.",
    };
  }
}
