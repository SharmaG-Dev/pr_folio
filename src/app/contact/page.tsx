import ContactForm from "@/components/contact/contactForm";
import { PageBanner, SocialMedia } from "@/components/global";


export default function ContactMe() {
  return (
    <div>
      <PageBanner
        description="Have a project in mind or need assistance with web and app development? I'm here to help! Reach out to discuss how we can turn your ideas into reality."
        title="Let's Build Something Great Together"
      />

      <SocialMedia />
      <ContactForm />
    </div>
  );
}
