import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  href = "#contact",
}: ProjectCardProps) {
  return (
    <article className="group">
      <Link href={href}>
        <div className="overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={700}
            className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
            {title}
          </h3>

          <p className="mt-3 max-w-lg leading-7 text-neutral-600">
            {description}
          </p>

          <span className="mt-5 inline-block text-sm font-medium text-neutral-950">
            View Project →
          </span>
        </div>
      </Link>
    </article>
  );
}
