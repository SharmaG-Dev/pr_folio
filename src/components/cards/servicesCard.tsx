import { ServiceCardProps } from "@/types/services";

export default function ServicesCard({
  Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="">
      <div className=" aspect-square relative dark:text-white text-dark after:absolute  after:w-full after:bg-primary after:h-[4px] after:bottom-0 after:left-0 dark:bg-light-dark bg-primary-light  shadow-md p-5 dark:shadow-none  flex flex-col justify-evenly">
        <div className="relative">
          <div className="relative z-10">{Icon}</div>
          <div className="absolute left-5 top-14 max-w-fit inset-0 flex items-end justify-center">
            <div className="bg-primary w-9 h-9 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className=" text-lg font-semibold dark:text-white text-dark">
            {title}
          </h1>
          <p className="text-sm font-normal line-clamp-3 text-custom-gray text-ellipsis">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
