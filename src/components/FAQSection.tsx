import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
	{
		question: "What documents do I need to scrap my vehicle?",
		answer: "You typically need your vehicle registration, ID proof, and any other documents as required by local authorities.",
	},
	{
		question: "How much will I get for my old vehicle?",
		answer: "The amount depends on the make, model, age, and condition of your vehicle. Contact us for a quote.",
	},
	{
		question: "Do you pick up non-running vehicles?",
		answer: "Yes, we offer pick-up services for non-running vehicles.",
	},
	{
		question: "How long does the scrapping process take?",
		answer: "The process usually takes 1-2 days after document verification.",
	},
	{
		question: "What happens to my vehicle after Scrapping?",
		answer: "Your vehicle is dismantled and recycled in an eco-friendly manner as per government norms.",
	},
	{
		question: "Can I scrap a vehicle that's not in my name?",
		answer: "You may need an authorization letter from the owner and supporting documents.",
	},
	{
		question: "Why should I choose an authorized RVSF like yours?",
		answer: "Authorized RVSFs follow all legal and environmental guidelines, ensuring safe and compliant scrapping.",
	},
];

const FAQSection = () => (
	<section className="py-8 sm:py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 flex flex-col items-center">
		{/* Gradient overlays for background, similar to HowItWorks */}
		<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
		<div className="absolute -bottom-32 -left-32 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
		<div className="absolute top-20 right-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl"></div>
		<div className="relative z-10 flex flex-col items-center w-full container mx-auto px-4 sm:px-6">
			{/* Badge */}
			<div className="mb-4 sm:mb-6">
				<span className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-green-100 bg-green-50 text-green-600 font-semibold text-sm sm:text-base md:text-lg">
					<span role="img" aria-label="trophy" className="mr-2">
						🏆
					</span>
					FAQ
				</span>
			</div>
			{/* Heading */}
			<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center px-2">
				FAQ{" "}
				<span className="text-green-600 font-bold">Section</span>
			</h2>
			<p className="mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-2xl px-4">
				Everything you need to know about Vehicle Scrapping
			</p>
			<div className="w-full max-w-4xl">
				<Accordion type="single" collapsible className="space-y-2 sm:space-y-4">
					{FAQS.map((faq, idx) => (
						<AccordionItem
							value={faq.question}
							key={idx}
							className="border border-green-100 rounded-lg sm:rounded-xl bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 px-4 sm:px-6"
						>
							<AccordionTrigger className="text-sm sm:text-base md:text-lg font-medium py-4 sm:py-5 md:py-6 text-left hover:no-underline [&[data-state=open]]:text-green-600">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-sm sm:text-base text-gray-600 pb-4 sm:pb-5 md:pb-6 leading-relaxed">
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
