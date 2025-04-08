"use client";

import { BlogCard } from "@/components/cards";
import { Button, Container, PageBanner } from "@/components/global";
import { useState } from "react";

export default function Blog() {
  const [active, setActive] = useState<number>(0);
  const BlogSortBy = [
    "Most Recent",
    "UI & UX Design",
    "MERN",
    "Deployement",
    "Coding",
    "Tools",
    "Personal",
  ];
  return (
    <div>
      <PageBanner
        title="Blog"
        description="My Insights and Adventures as a Full-Stack Developer"
      />

      <Container>
        <div className=" flex flex-col items-center justify-center gap-4 py-16 max-sm:p-4">
          <h6 className="text-sm font-semibold opacity-35">Sort By</h6>
          <div className="flex items-center justify-center flex-wrap gap-3">
            {BlogSortBy?.map((item, index) => (
              <Button
                className="opacity-40 transition-all duration-500 text-sm"
                activeClassName="!opacity-100"
                isActive={active === index}
                onClick={() => setActive(index)}
                key={index}
              >
                {item}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-8  w-full place-items-center">
            {Array(30)
              .fill("_")
              .map((item, index) => (
                <BlogCard key={index} />
              ))}
          </div>

          
        </div>
      </Container>
    </div>
  );
}
