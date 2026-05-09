import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ArtistsSection } from "@/components/ArtistsSection";
import { FaqSection } from "@/components/FaqSection";
import { RecommendationsSection } from "@/components/RecommendationsSection";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturesSection />
      <ArtistsSection />
      <FaqSection />
      <RecommendationsSection />
      <AppointmentForm />
      <Footer />
    </main>
  );
}
