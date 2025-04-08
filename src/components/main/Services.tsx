import { Box, Code2, FolderCode } from "lucide-react";
import { Container, SectionTag } from "../global";
import { ServicesCard } from "../cards";


export default function Services() {
  return (
    <Container>
      <section
        id="services"
        className="h-fit min-h-screen md:h-screen flex items-center justify-center md:py-0 py-10"
      >
        <div className="h-fit md:h-[60vh] w-full flex flex-col justify-between gap-8">
          <div className="flex w-full flex-col gap-5  md:flex-row justify-between  items-start">
            <h1 className="text-3xl text-center md:text-left md:text-5xl font-semibold md:max-w-lg text-dark dark:text-white ">
              7+ years experience working
            </h1>
            <div className="max-w-md flex flex-col gap-2">
              <SectionTag name="Services" className="flex items-center justify-center md:justify-start gap-4 text-lg font-semibold text-primary" />
              <p className="text-custom-gray text-center md:text-left">
                Discover the best services I offer, designed to ensure the
                success of your project.
              </p>
            </div>
          </div>

          {/* cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3">
            <ServicesCard
              Icon={<Box size={50} />}
              title="Project Manager"
              description="I offer innovative and attention-grabbing product design services. From initial ideation to implementation."
            />
            <ServicesCard
              Icon={<Code2 size={50} />}
              title="Mern Stack Developer"
              description="I offer innovative and attention-grabbing product design services. From initial ideation to implementation."
            />
            <ServicesCard
              Icon={<FolderCode size={50} />}
              title="Devops Engineer"
              description="A DevOps engineer automates software development, manages infrastructure, ensures CI/CD, enhances collaboration, and improves deployment efficiency."
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
