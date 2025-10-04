import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Statistics />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
