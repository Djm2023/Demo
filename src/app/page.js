import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import CardSection from "@/components/CardSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Brands />
      <CardSection />
    </main>
  );
}
