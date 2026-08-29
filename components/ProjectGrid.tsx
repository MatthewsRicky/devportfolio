import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Law Firm Website",
    description:
      "A professional website concept designed for a modern legal practice, with an emphasis on credibility, clear communication and easy access to legal services.",
    image: "/mainlaw.png",
    link: "https://lawtemplate-mu.vercel.app/",
    type: "Concept Project",
  },
  {
    title: "Corporate Website",
    description:
      "A modern corporate website designed to communicate services, expertise and value proposition.",
    image: "/mainbiz.png",
    link: "https://businesstemplate-three.vercel.app/",
    type: "Template Project",
  },
  {
    title: "Safari Tourism Website",
    description:
      "A visually driven tourism website designed to showcase destinations, experiences and travel services.",
    image: "/maintour.png",
    link: "https://toursandsafaritemplate.vercel.app/",
    type: "Template Project",
  },
  {
    title: "Technology Services Website",
    description:
      "A professional technology-services website focused on communicating technical expertise and generating enquiries.",
    image: "/Techland.png",
    link: "https://tecktemplate.vercel.app/",
    type: "Template Project",
  },
];

export default function ProjectGrid() {
  return (
    <section className="bg-[#071827] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#abd5ff]">
            Template Projects
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            More examples of what I can build.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            A selection of reusable website templates created to demonstrate
            different business and industry use cases.
          </p>
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
