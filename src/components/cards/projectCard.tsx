import { ProjectCardProps } from "@/types/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  image,
  name,
  projectLink,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={image}
        alt="website"
        width={500}
        height={500}
        className="aspect-video w-full"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold dark:text-white text-white ">
          {name}
        </h1>
        <Link
          href={projectLink}
          className="text-base text-primary flex items-center gap-2"
        >
          See project <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
