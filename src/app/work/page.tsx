import PortfolioCard from "@/components/cards/PortfolioCard";
import { Container, PageBanner } from "@/components/global";
import {  Search } from "lucide-react";

export default function Work() {
  return (
    <div>
      <PageBanner title="My Work Portfolio" description="“This portfolio showcases a range of applications I’ve built as a full-stack developer. Each project demonstrates my ability to craft efficient, scalable, and secure solutions that prioritize user experience and business goals.”" />
      <Container>
        <div className="py-7">
          <div className="flex justify-between items-center">
            <div className="p-2 flex items-center gap-3 border dark:border-gray-600 rounded-md max-w-sm">
              <Search />
              <input
                type="text"
                placeholder="Search"
                className="outline-none "
              />
            </div>
            {/* list view grid view */}
            {/* <div className="flex items-center  border  rounded dark:border-gray-600">
              <Button className="flex gap-2 items-center text-xs p-2 hover:dark:bg-slate-700 hover:bg-primary-light">
                <Grid /> Grid
              </Button>
              <Button className="flex gap-2 items-center text-xs p-2 hover:dark:bg-slate-700 hover:bg-primary-light">
                <List /> List
              </Button>
            </div> */}
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
        </div>
      </Container>
    </div>
  );
}
