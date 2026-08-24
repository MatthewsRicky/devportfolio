import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Corporate Website",
    description:
      "A modern corporate website designed to communicate services, expertise and value proposition.",
    image: "/projects/corporate.jpg",
  },
  {
    title: "Safari Tourism Website",
    description:
      "A visually driven tourism website designed to showcase destinations, experiences and travel services.",
    image: "/projects/safari.jpg",
  },
  {
    title: "Technology Services Website",
    description:
      "A professional technology-services website focused on communicating technical expertise and generating enquiries.",
    image: "/projects/tech-services.jpg",
  },
];

export default function ProjectGrid() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Different businesses. The same attention to detail.
          </h2>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
