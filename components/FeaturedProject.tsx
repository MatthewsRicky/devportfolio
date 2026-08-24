import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section id="work" className="bg-neutral-950 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Featured Project
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Law Firm Website
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl bg-neutral-900">
            <Image
              src="/projects/law-firm.jpg"
              alt="Law firm website project"
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-300">
              A professional website concept designed for a modern legal
              practice, with an emphasis on credibility, clear communication and
              easy access to legal services.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              Discuss a Similar Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
