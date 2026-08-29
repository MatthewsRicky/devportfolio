import Image from "next/image";
import Link from "next/link";

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Responsive Design",
];

export default function FeaturedClientProject() {
  return (
    <section
      id="work"
      className="bg-gradient-to-br from-[#071827] via-[#0d2740] to-[#123d63]  px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Featured Client Work
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Real Client Project
            </span>

            <span className="rounded-full border border-neutral-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Live Website
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Funzi Beach Restaurant
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            A real-world hospitality and tourism website designed for a
            restaurant and island-experience business on Kenya&apos;s south
            coast.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
            <Image
              src="/Screenshotfunzi.png"
              alt="Funzi Beach Restaurant website"
              width={1600}
              height={1000}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="text-base leading-8 text-neutral-200">
              The website brings together the restaurant, Funzi Island
              experiences, excursions, seafood, private bookings and customer
              enquiries into one professional digital experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://funzibeachrestaurant-32v2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                View Live Website ↗
              </Link>

              <Link
                href="#contact"
                className="inline-flex rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Discuss a Similar Project
              </Link>
            </div>

            <p className="mt-8 text-sm leading-6 text-neutral-300">
              Designed and built as a real client website rather than a
              portfolio concept or template.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
