
import { Container, PageBanner } from "@/components/global";
import { stringJs } from "@/dummy/dummytext";

interface BlogDetailsProps {
  params: {
    id: string;
  };
}

export default function BlogDetails({ params }: BlogDetailsProps) {
  return (
    <div>
      <PageBanner title="This is the Blog Title You Know" description="" />

      <Container>
        <div className="py-20 px-20">
        <p dangerouslySetInnerHTML={{ __html: stringJs }}></p>
        </div>
      </Container>
    </div>
  );
}
