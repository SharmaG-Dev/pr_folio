import { ProjectCard } from "../cards";
import { Button, Container, SectionTag } from "../global";


export default function Projects() {
  return (
    <section id="projects" className=" bg-light-dark">
      <Container>
        <div className="flex flex-col justify-start gap-2 w-full py-20">
          <SectionTag name="Recent Works" />
          <div className="flex flex-col-reverse gap-3 md:flex-row md:items-center justify-between w-full py-5">
            <h1 className="max-w-lg text-2xl md:text-5xl text-center md:text-left  font-bold dark:text-white text-white">
              Some of my favorite projects.
            </h1>
            <Button className=" p-1.5 px-4" varients="Outline">
              View All Project
            </Button>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-20">
          <ProjectCard
            image="/assets/alana.png"
            name="Alana - live data app"
            projectLink="https://www.hoteliorooms.com"
          />
          <ProjectCard
            image="/assets/alana.png"
            name="Alana - live data app"
            projectLink="https://www.hoteliorooms.com"
          />
          <ProjectCard
            image="/assets/alana.png"
            name="Alana - live data app"
            projectLink="https://www.hoteliorooms.com"
          />
          <ProjectCard
            image="/assets/alana.png"
            name="Alana - live data app"
            projectLink="https://www.hoteliorooms.com"
          />
        </div>
      </Container>
    </section>
  );
}
