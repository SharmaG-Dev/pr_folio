"use client"
import { useRouter } from "next/navigation";
import { Button, Container } from "../global";


export default function ContactMeBanner() {
  const navigate = useRouter();
  return (
    <div className="relative bg-deep-gray after:absolute  after:h-full after:bg-primary after:w-[10px] after:top-0 after:left-0">
      <Container>
        <div className="py-16">
          <div className="flex flex-col md:flex-row gap-3 items-center md:items-center justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Have any project in mind ?
              </h1>
              <h5 className="text-base font-normal text-custom-gray">
                Feel free to contact me or just say friendly hello!
              </h5>
            </div>
            <Button varients="filled" className="px-7 py-4" onClick={() =>  navigate.push("/contact")}>
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
