import clsx from "clsx";
import Image from "next/image";

interface ImageCustom {
    height?: number
    width?: number
    className?: string
    alt?: string
}

interface SkillCardProps {
    className?: string
    image: string,
    imageCustom?: ImageCustom
}


export default function SkillCard({ image, imageCustom, className }: SkillCardProps) {
    return <div
        className={clsx(className, " dark:bg-light-dark flex-col   dark:text-white  text-dark font-bold flex items-center gap-4 p-7 rounded-md w-fit")}
    >
        <Image src={image} className={imageCustom?.className} width={imageCustom?.width || 400} height={imageCustom?.height || 400} alt={imageCustom?.alt || "skill"} />
        React
    </div>
}