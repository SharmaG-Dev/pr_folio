import Image from "next/image";


export default function SkillsTile({ image, title }: { image: string, title: string }) {
    return <div className="flex flex-col shadow-md gap-3 p-4 hover:shadow-lg hover:dark:text-white hover:text-deep-gray cursor-pointer hover:-translate-y-2 transition-all duration-500 px-6 basis-1/6 justify-center items-center flex-1 text-deep-gray font-semibold dark:text-white rounded-md bg-white  dark:bg-deep-gray max-w-fit">
        <Image src={image} width={500} height={500} alt="_skills_img" className="!w-16 !h-16 filter grayscale rounded-md" />
        <h1>{title}</h1>
    </div>
}