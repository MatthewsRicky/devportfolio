import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-24 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Web Developer
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl lg:text-8xl">
            Websites & applications for businesses.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
            I build professional websites and web applications for businesses
            and professional services, combining thoughtful design with modern
            web technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#work"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              View My Work
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-950"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-500">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>React Native</span>
          </div>
        </div>
      </div>
    </section>
  );
}
