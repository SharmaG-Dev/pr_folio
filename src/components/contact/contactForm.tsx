import { Button, Container, Input } from "../global";


export default function ContactForm() {
  return (
    <Container>
      <form className="p-4 sm:p-6 md:p-8 lg:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            type="text"
            inputClassName="w-full outline-none bg-transparent"
            placeholder="Name"
            outerClasName="w-full p-2 px-4 border-2 rounded dark:border-custom-gray"
          />
          <Input
            type="email"
            inputClassName="w-full outline-none bg-transparent"
            placeholder="Email"
            outerClasName="w-full p-2 px-4 border-2 rounded dark:border-custom-gray"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={8}
            className="w-full p-2 px-4 bg-transparent border-2 dark:border-custom-gray outline-none rounded md:col-span-2"
          ></textarea>
          <div className="md:col-span-2">
            <Button varients="filled" className="w-full md:w-auto p-2 px-6 rounded">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}
