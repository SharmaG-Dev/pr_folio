import Link from "next/link";
import Logo from "../logo";
import { Container } from "../global";

export default function Footer() {
  return (
    <div className="bg-deep-dark">
      <Container>
        <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 py-12 pb-16">
          <Logo className=" text-center md:text-left !text-2xl dark:text-dark text-white" />
          <div className="grid grid-cols-1 md:grid-cols-2 place-content-start max-sm:gap-5 md:place-items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-white">Information</h1>
              <Link href="/" className="text-base font-normal text-custom-gray ">
                +91 8039482738
              </Link>
              <Link href="/" className="text-base font-normal text-custom-gray ">
                abhishek.devloper@yahoo.com
              </Link>
              <Link href="/" className="text-base font-normal text-custom-gray ">
                Lucknow , India
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-white">Social Media</h1>
              <Link href="/" className="text-base font-normal text-custom-gray ">
                Dribble
              </Link>
              <Link href="/" className="text-base font-normal text-custom-gray ">
                Youtube
              </Link>
              <Link href="/" className="text-base font-normal text-custom-gray ">
                Linkedin
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
