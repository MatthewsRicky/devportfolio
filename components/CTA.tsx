import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-neutral-950 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Start a Project
          </p>

          <h2 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            Have a project in mind?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Whether you need a new business website, a professional online
            presence or a custom web application, let's talk about your project.
          </p>

          <Link
            href="mailto:your@email.com"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

