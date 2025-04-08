import Image from "next/image";

export default function TestimonialsCard() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-lg h-full flex flex-col items-center gap-10">
        <p className="text-base font-normal dark:text-custom-gray text-center text-custom-gray">
          &quot;Wow is all i can say! Alifreza did an absolute fenominal job
          from start to finish. He created exactly what I wanted and exceeded my
          expectation. Highly recommend alifreza!&quot;
        </p>
        <div className="flex gap-2">
          <Image
            src="/assets/monalisa.png"
            width={200}
            height={200}
            className="!w-14 !h-14 rounded-full"
            alt="User_image"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-base font-semibold dark:text-white text-custom-gray">
              Monalisa Nona
            </h2>
            <h2 className="text-custom-gray font-bold text-sm">
              <span className="font-normal">Project Manager</span>, Ruber
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
