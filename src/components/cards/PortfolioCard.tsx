import { Button } from "../global";
import Crousel from "../global/Crousel";

export default function PortfolioCard() {
  const images = [
    "/assets/hoteliorooms.jpg",
    "/assets/hoteliorooms-1.jpg",
    "/assets/hoteliorooms-2.jpg",
    "/assets/hoteliorooms-3.jpg",
    "/assets/hoteliorooms-4.jpg",
    "/assets/hoteliorooms-5.jpg",
    "/assets/hoteliorooms-6.jpg",
    "/assets/hoteliorooms-7.jpg",
  ];
  const technologiesUsed = [
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.io",
    "BullMQ",
    "CCAVENUE",
    "React",
    "Tailwind CSS",
    "Material-UI",
    "AWS EC2",
  ];

  return (
    <div className="border p-6 rounded-xl grid grid-cols-1 md:grid-cols-10 gap-4 dark:border-gray-600 shadow-md">
      <Crousel images={images} className="col-span-1 md:col-span-4 px-10" />
      <div className="h-full w-full flex flex-col justify-center col-span-1 md:col-span-6">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Hoteliorooms | Discover & Book the Perfect Stay
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
          Hoteliorooms is your trusted platform for finding and booking
          top-rated hotels worldwide. From luxurious resorts to budget-friendly
          options, explore a wide range of accommodations tailored to every
          traveler&apos;s needs. With a seamless booking experience and verified
          reviews, securing your next stay has never been easier.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 w-full">
          <h2 className="text-sm md:text-xl font-semibold text-gray-800 dark:text-primary mt-6 col-span-2 md:col-span-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3 w-full col-span-2 md:col-span-4 py-6">
            {technologiesUsed.map((item: string, index: number) => (
              <span className="p-2 max-sm:text-xs border rounded-xl" key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-5 flex gap-3">
        <Button  className="w-full p-2 px-4 text-primary font-bold">Visit</Button>
      </div>
    </div>
  );
}
