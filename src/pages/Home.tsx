import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Advantages from "@/components/Advantages";
import FinancialLegalSection from "@/components/FinancialLegalSection";

import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/FAQSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
  <Advantages />
  <FinancialLegalSection />
  <FAQSection />
  <ContactUs />
    </div>
  );
};

export default Home;