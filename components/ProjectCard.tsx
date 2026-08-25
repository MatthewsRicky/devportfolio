import Image from "next/image";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link = "#contact",
}: ProjectCardProps) {
  const isExternal = link?.startsWith("http");

  return (
    <article className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#123d63] to-[#0a1d2e] p-4 shadow-[0_24px_50px_rgba(2,14,25,0.4)]">
      <a
        href={link}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="block"
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d2339]">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={700}
            className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-3 max-w-lg leading-7 text-slate-200">
            {description}
          </p>

          <span className="mt-5 inline-block text-sm font-medium text-[#dff4ff]">
            View Project →
          </span>
        </div>
      </a>
    </article>
  );
}
