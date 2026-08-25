"use client";

import { sendContactForm } from "@/app/actions/contact";
import { getErrorMessage, isValidEmail, validateString } from "@/lib/utils";
import { useState } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceArea, setServiceArea] = useState("Landing Page Development");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setSubmitError("");

    if (
      !validateString(fullName, 120) ||
      !validateString(serviceArea, 120) ||
      !validateString(message, 2000) ||
      !isValidEmail(email)
    ) {
      setSubmitStatus("error");
      setSubmitError(
        "Please check that your name, email, and message are valid.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendContactForm({
        fullName: fullName.trim(),
        email: email.trim(),
        serviceArea: serviceArea.trim(),
        message: message.trim(),
      });

      if (result.success) {
        setSubmitStatus("success");
        setSubmitError("");
        setFullName("");
        setEmail("");
        setServiceArea("Landing Page Development");
        setMessage("");
      } else {
        console.error("Send error:", result.error);
        setSubmitStatus("error");
        setSubmitError(
          getErrorMessage(result.error) || "Error submitting form.",
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitError(getErrorMessage(error) || "Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-[#041827]/90] bg-slate-200 p-6 text-[#163a2e] shadow-[0_24px_50px_rgba(0,0,0,0.12)] dark:border-[#2d564b] dark:bg-[#041827]/90 dark:text-[#dfe8e5]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-[#163a2e] dark:text-[#dfe8e5]">
          Full name
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Amina Yusuf"
            required
            className="mt-2 w-full rounded-xl border border-[#d8d9d3] bg-[#f8f7f5] px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#d8ba60] focus:ring-offset-0 dark:border-[#3d6a5e] dark:bg-[#0d1117] dark:text-[#dfe8e5] dark:placeholder-[#5a7068]"
          />
        </label>
        <label className="text-sm font-medium text-[#163a2e] dark:text-[#dfe8e5]">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.co.ke"
            required
            className="mt-2 w-full rounded-xl border border-[#d8d9d3] bg-[#f8f7f5] px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#d8ba60] focus:ring-offset-0 dark:border-[#3d6a5e] dark:bg-[#0d1117] dark:text-[#dfe8e5] dark:placeholder-[#5a7068]"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-[#163a2e] dark:text-[#dfe8e5]">
        Service area
        <select
          value={serviceArea}
          onChange={(e) => setServiceArea(e.target.value)}
          className="mt-2 w-full rounded-xl border border-[#d8d9d3] bg-[#f8f7f5] px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#d8ba60] focus:ring-offset-0 dark:border-[#3d6a5e] dark:bg-[#0d1117] dark:text-[#dfe8e5]"
        >
          <option>Landing Page Development</option>
          <option>Web Application Development</option>
          <option>Mobile App Development</option>
          <option>Technical Support</option>
          <option>Simple website Development</option>
          <option>Logo Design</option>
        </select>
      </label>

      <label className="mt-5 block text-sm font-medium text-[#163a2e] dark:text-[#dfe8e5]">
        How can we help?
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your legal matter in Nairobi, Mombasa, or elsewhere in Kenya"
          required
          className="mt-2 w-full rounded-xl border border-[#d8d9d3] bg-[#f8f7f5] px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#d8ba60] focus:ring-offset-0 dark:border-[#3d6a5e] dark:bg-[#0d1117] dark:text-[#dfe8e5] dark:placeholder-[#5a7068]"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex items-center justify-center rounded-md bg-[#d8ba60] px-5 py-3 text-sm font-semibold text-[#163a2e] transition hover:bg-[#e4c975] disabled:opacity-50 dark:bg-[#d8ba60] dark:text-[#163a2e] dark:hover:bg-[#e6cd76]"
      >
        {isSubmitting ? "Sending..." : "Send inquiry"}
      </button>

      {submitStatus === "success" && (
        <p className="mt-4 text-sm text-green-600 dark:text-green-400">
          Your inquiry has been sent successfully. We&apos;ll get back to you
          soon.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400">
          {submitError || "Error submitting form. Please try again."}
        </p>
      )}
    </form>
  );
}
