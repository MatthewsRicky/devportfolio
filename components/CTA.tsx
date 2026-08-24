import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#071827] via-[#0d253f] to-[#133e63] px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#abd5ff]">
            Start a Project
          </p>

          <h2 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            Have a project in mind?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Whether you need a new business website, a professional online
            presence or a custom web application, let's talk about your project.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
