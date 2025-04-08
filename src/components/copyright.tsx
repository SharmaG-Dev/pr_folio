import Container from "./global/container";

export default function Copyright() {
  return (
    <div className="bg-deep-dark">
      <Container>
        <div className="py-6 border-t dark:border-light-gray border-gray flex items-center justify-between">
          <h1 className="text-sm font-normal dark:text-white text-white">
            Design and develop by <span className="text-primary">Pragya Tripathi</span>
          </h1>
          <h1 className="text-sm dark:text-white text-white">Copyright ©2024</h1>
        </div>
      </Container>
    </div>
  );
}
