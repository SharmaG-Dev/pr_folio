import { Download } from "lucide-react";
import { Button, Container } from "../global";


export default function Main() {
  return (
    <Container>
      <section id="#" className="w-full h-main">
        <div className="w-full grid grid-cols-1  md:grid-cols-6 h-sub-main ">
          <div className="col-span-6 flex flex-col max-sm:items-center gap-8 self-end">
            <h1 className="text-lg md:text-4xl font-semibold text-primary ">
              Hello, I&apos;m Abhishek Sharma
            </h1>
            <h1 className="dark:text-white text-dark text-3xl md:text-6xl xl:text-7xl font-bold">
              Full Stack Developer{" "}
            </h1>
            <p className="text-custom-gray text-center md:text-left text-sm md:text-base font-normal w-10/12 md:w-3/5">
              I&apos;m from Singapore and I have been working as a Product
              Designer for more than 7 years. I&apos;ve worked for a Hanziree
              company Pabloo as a Product Designer and Front-end Developer for 3
              years.
            </p>
            <div className="flex items-center gap-7">
              <Button className="py-2 px-5" varients="filled">
                Email Me
              </Button>
              <Button className="flex items-center text-custom-gray gap-3 font-semibold text-sm">
                <Download /> Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
