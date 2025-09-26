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
  <section className="py-16 relative overflow-hidden bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 flex flex-col items-center">
    {/* Gradient overlays for background, similar to HowItWorks */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl"></div>
    <div className="relative z-10 flex flex-col items-center w-full">
      {/* Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center px-4 py-1 rounded-full border border-green-100 bg-green-50 text-green-600 font-medium text-lg">
          <span role="img" aria-label="trophy" className="mr-2">🏆</span>
          FAQ
        </span>
      </div>
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-2 text-center">
        FAQ <span className="text-green-600 font-bold">Section</span>
      </h2>
      <p className="mb-8 text-lg text-gray-600 text-center max-w-2xl">Everything you need to know about Vehicle Scrapping</p>
      <div className="w-full max-w-3xl">
        <Accordion type="single" collapsible>
          {FAQS.map((faq, idx) => (
            <AccordionItem value={faq.question} key={idx}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
