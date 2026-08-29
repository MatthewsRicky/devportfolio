import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  type: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  type,
}: ProjectCardProps) {
  return (
    <article className="group shadow-sm shadow-blue-400/30 hover:scale-105 transition rounded-lg">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="overflow-hidden rounded-2xl bg-slate-800">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={700}
            className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-6 p-3">
          <span className="inline-flex rounded-full border border-[#abd5ff]/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#abd5ff]">
            {type}
          </span>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-3 max-w-lg leading-7 text-slate-300">
            {description}
          </p>

          <span className="mt-5 inline-block text-sm font-medium text-[#abd5ff]">
            View Project ↗
          </span>
        </div>
      </a>
    </article>
  );
}
