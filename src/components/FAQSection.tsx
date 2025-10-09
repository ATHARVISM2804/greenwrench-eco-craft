import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What documents do I need to scrap my vehicle?",
    answer: "You typically need your vehicle registration, ID proof, and any other documents as required by local authorities."
  },
  {
    question: "How much will I get for my old vehicle?",
    answer: "The amount depends on the make, model, age, and condition of your vehicle. Contact us for a quote."
  },
  {
    question: "Do you pick up non-running vehicles?",
    answer: "Yes, we offer pick-up services for non-running vehicles."
  },
  {
    question: "How long does the scrapping process take?",
    answer: "The process usually takes 1-2 days after document verification."
  },
  {
    question: "What happens to my vehicle after Scrapping?",
    answer: "Your vehicle is dismantled and recycled in an eco-friendly manner as per government norms."
  },
  {
    question: "Can I scrap a vehicle that's not in my name?",
    answer: "You may need an authorization letter from the owner and supporting documents."
  },
  {
    question: "Why should I choose an authorized RVSF like yours?",
    answer: "Authorized RVSFs follow all legal and environmental guidelines, ensuring safe and compliant scrapping."
  }
];

const FAQSection = () => (
  <section className="py-10 sm:py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 flex flex-col items-center">
    {/* Gradient overlays for background, similar to HowItWorks */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
    <div className="absolute -bottom-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
    <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl"></div>
    <div className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6">
      {/* Badge */}
      <div className="mb-3 sm:mb-4">
        <span className="inline-flex items-center px-3 sm:px-4 py-1 rounded-full border border-green-100 bg-green-50 text-green-600 font-medium text-sm sm:text-lg">
          <span role="img" aria-label="trophy" className="mr-1 sm:mr-2">🏆</span>
          FAQ
        </span>
      </div>
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center">
        FAQ <span className="text-green-600 font-bold">Section</span>
      </h2>
      <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-600 text-center max-w-2xl px-2">Everything you need to know about Vehicle Scrapping</p>
      <div className="w-full max-w-3xl">
        <Accordion type="single" collapsible className="px-1 sm:px-0">
          {FAQS.map((faq, idx) => (
            <AccordionItem value={faq.question} key={idx}>
              <AccordionTrigger className="text-sm sm:text-base font-medium py-4 sm:py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600 pb-4 sm:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
