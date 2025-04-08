import { ContactMeBanner, Main, Projects, Services, Skills, Testimonials } from "@/components/main";



export default function Home() {
  return (
    <div className="w-full dark:text-blue-600 text-green-600">
      <Main />
      <Skills/>
      <Services />
      <Projects />
      <Testimonials />
      <ContactMeBanner />
    </div>
  );
}
