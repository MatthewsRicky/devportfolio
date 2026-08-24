const technologies = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Mobile: ["React Native", "Expo"],
  "Backend & Data": ["APIs", "Databases", "Authentication"],
  Tools: ["Git", "GitHub", "Figma"],
};

export default function TechStack() {
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Modern tools. Practical results.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                {category}
              </h3>

              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item} className="text-lg text-neutral-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
