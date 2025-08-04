import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <Experience />
      <Testimonials />
    </div>
  );
};

export default Index;
