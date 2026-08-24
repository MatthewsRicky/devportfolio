import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section
      id="work"
      className="bg-gradient-to-br from-[#081b2d] via-[#0d2641] to-[#123d63] px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#abd5ff]">
            Featured Project
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Law Firm Website
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a2238] shadow-[0_30px_60px_rgba(2,17,29,0.45)]">
            <Image
              src="/mainlaw.png"
              alt="Law firm website project"
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-200">
              A professional website concept designed for a modern legal
              practice, with an emphasis on credibility, clear communication and
              easy access to legal services.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-gradient-to-r from-white via-[#eaf6ff] to-[#cfeaff] px-6 py-3 text-sm font-medium text-[#061827] transition hover:brightness-105"
            >
              Discuss a Similar Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
