import { Features } from "@/components/Features/Features";
import { Footer } from "@/components/Footer/Footer";
import HomePage from "@/components/HomePage/HomePage";
import { Integrations } from "@/components/Integration/Integration";
import { TeamSection } from "@/components/Teams/Teams";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Features />
      <Integrations />
      <TeamSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
