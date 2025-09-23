import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Advantages from "@/components/Advantages";
import ContactUs from "@/components/ContactUs";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Advantages />
      <ContactUs />
    </div>
  );
};

export default Home;