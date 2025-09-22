import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Advantages from "@/components/Advantages";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Advantages />
    </div>
  );
};

export default Home;