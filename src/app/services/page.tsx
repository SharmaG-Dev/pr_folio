import { ServicesCard } from "@/components/cards";
import { Container, PageBanner } from "@/components/global";
import { Box, Cloud, Code2, Database, Edit3, FolderCode, Layers, Link2, ShoppingCart } from "lucide-react";

export default function ServicePage() {
  return (
    <div>
      <PageBanner
        title="Expert IT Solutions for Digital Growth"
        description="We provide tailored IT services, from web design and development to DevOps and cloud solutions. With full-stack expertise, we help businesses scale efficiently and stay competitive in a fast-paced digital world."
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
          <ServicesCard
            Icon={<Edit3 size={50} />}
            title="Web Design & UI/UX"
            description="Crafting visually engaging, user-friendly interfaces to enhance brand impact and customer experience."
          />

          <ServicesCard
            Icon={<Code2 size={50} />}
            title="Web Development"
            description="Developing high-performance, responsive websites with the latest tech stack for optimal functionality."
          />

          <ServicesCard
            Icon={<Layers size={50} />}
            title="Full Stack Solutions"
            description="Providing end-to-end front-end and back-end solutions, from APIs to databases, for complete digital products."
          />

          <ServicesCard
            Icon={<FolderCode size={50} />}
            title="DevOps & Automation"
            description="Automating deployment and infrastructure management for seamless, agile operations and efficient scaling."
          />

          <ServicesCard
            Icon={<Cloud size={50} />}
            title="Cloud Infrastructure"
            description="Designing and managing scalable, secure cloud environments tailored to business needs."
          />

          <ServicesCard
            Icon={<Link2 size={50} />}
            title="API Development & Integration"
            description="Creating and integrating APIs to enable smooth, reliable data flow across platforms."
          />

          <ServicesCard
            Icon={<ShoppingCart size={50} />}
            title="E-commerce Development"
            description="Building custom e-commerce solutions to enhance sales, streamline user engagement, and boost revenue."
          />

          <ServicesCard
            Icon={<Database size={50} />}
            title="Database Management"
            description="Managing secure and optimized databases for robust data handling and analytics support."
          />
        </div>
      </Container>
    </div>
  );
}
