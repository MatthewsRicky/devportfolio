import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[rgba(4,24,39,1)] via-[rgba(10,33,58,1)] to-[rgba(18,61,98,1)]" />

      <div className="mx-auto max-w-7xl">
        <div className="min-h-[75vh] flex items-center">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#a9d6ff]">
              Web Developer. App Developer. Tech Consultant.
            </p>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Websites and web applications for businesses and teams.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              I build professional websites and web applications for businesses
              and professional services, combining thoughtful design with modern
              web technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#work"
                className="rounded-full bg-gradient-to-r from-white via-[#eef9ff] to-[#cae7ff] px-6 py-3 text-sm font-medium text-[#051a2d] transition hover:brightness-105"
              >
                View My Work
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-10 text-sm text-[#cfe7ff]">
              <ul className="flex flex-wrap gap-4">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
