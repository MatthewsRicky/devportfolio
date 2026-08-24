import Image from "next/image";
import Link from "next/link";

export default function MobileAppShowcase() {
  return (
    <section className="bg-neutral-100 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Technical Depth
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              Beyond websites.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              I also build full-featured mobile applications. This React Native
              application demonstrates offline data handling, persistent
              storage, navigation, application state management and a structured
              component architecture.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["React Native", "Expo", "TypeScript", "AsyncStorage"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            <Link
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Discuss an Application
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/projects/mobile-app.jpg"
              alt="React Native mobile application"
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
