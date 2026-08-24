export default function AboutPreview() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              About
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
              I build digital experiences that make businesses look professional
              online.
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-neutral-600">
              <p>
                My work spans professional websites, web applications and mobile
                applications, with a focus on clean interfaces, responsive
                design and maintainable code.
              </p>

              <p>
                I work primarily with React, Next.js, TypeScript and React
                Native, while integrating APIs, databases and other services
                when a project requires them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
