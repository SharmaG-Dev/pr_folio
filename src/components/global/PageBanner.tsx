interface PageBannerProps {
  title: string;
  description: string;
}

export default function PageBanner({description ,title}:PageBannerProps) {
  return (
    <div className="w-full h-[24vh] md:h-banner dark:bg-deep-gray bg-primary-light flex flex-nowrap items-center justify-center">
      <div className="flex flex-col items-center w-full justify-center gap-3">
        <h1 className="text-xl md:text-4xl font-bold dark:text-primary text-dark">
          {title}
        </h1>
        <h5 className="text-xs md:text-sm font-normal max-w-3xl text-center">
          {description}
        </h5>
      </div>
    </div>
  );
}
