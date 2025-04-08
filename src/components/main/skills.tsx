"use client";

import { useTabs } from "@/_hooks/useTab";
import clsx from "clsx";
import { Button, Container, SectionTag } from "../global";
import { SkillCard } from "../cards";


export default function Skills() {
  const tabList = ["Designing", "Frontend", "Backend", "DevOps"];
  const { currentTab, handleChange } = useTabs({ totalTabs: tabList.length });
  const image = [
    "html.png",
    "css.png",
    "javascript.png",
    "mongodb.png",
    "redis.png",
    "socket.png",
  ];

  return (
    <div className="relative dark:bg-dark ">
      <Container>
        <div className="py-20">
          <div className="flex flex-col items-center gap-2">
            <SectionTag name="Skills" />
            <h1 className="text-5xl font-bold text-deep-gray dark:text-white">
              <span className="text-custom-gray">What</span> I do
            </h1>
            <p className="max-w-3xl text-center py-16 text-custom-gray">
              I&apos;m from Singapore and I have been working as a Product
              Designer for more than 7 years. I&apos;ve worked for a Hanziree
              company Pabloo as a Product Designer and Front-end Developer for 3
              years.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {image.map((item, index) => (
              <SkillCard
                image={`/assets/${item}`}
                key={index}
                imageCustom={{
                  width: 100,
                  height: 100,
                  className: "!h-28 object-contain",
                }}
              />
            ))}
          </div>

          <div className="flex items-center justify-center flex-wrap gap-5 pt-24">
            {tabList.map((item, index) => (
              <Button
                key={index}
                activeClassName="!border-primary !dark:text-primary  !text-primary"
                onClick={() => handleChange(index)}
                isActive={currentTab === index}
                className={clsx(
                  "border-t p-4  transition-all duration-300 border-gray dark:text-white text-dark"
                )}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
