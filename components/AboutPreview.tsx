import Image from "next/image";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#081b2d] via-[#0d2340] to-[#123d63] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#abd5ff]">
              About
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              I build digital experiences that make businesses look professional
              online.
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-200">
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
