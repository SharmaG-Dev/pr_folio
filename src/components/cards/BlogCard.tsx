"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../global";

export default function BlogCard() {
  const navigate = useRouter();
  return (
    <div className=" flex flex-col gap-3 max-w-lg">
      <div className="relative">
        <Image
          src="/assets/blog.webp"
          width={400}
          className="!w-full"
          height={300}
          alt="blog"
        />
        <span className="absolute left-2 top-2 bg-yellow-500 text-white text-xs px-5 py-1.5 rounded-md">UI & UX</span>
      </div>

      <h3 className="text-base font-semibold text-dark dark:text-white">
        This is the Blog Title You Know
      </h3>
      <p className="text-custom-gray text-xs">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quasi
        accusamus, numquam esse aut labore blanditiis at autem laborum
        necessitatibus est. Neque ducimus blanditiis similique molestias,
        nesciunt nobis fugiat labore quia id earum? Adipisci doloremque hic,
        voluptates alias harum quia excepturi vero voluptatem commodi illo
        minima dolore totam nam esse! Incidunt necessitatibus aliquid at?
      </p>

      <div>
        <Button
          onClick={() => navigate.push("/blog/1")}
          className="text-sm dark:text-primary text-red-500"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
