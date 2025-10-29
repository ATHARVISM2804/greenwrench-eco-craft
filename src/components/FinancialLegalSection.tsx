import React from "react";
import { Link } from "react-router-dom";
import scarp from "@/assets/sracped.png"

const benefits = [
	{
		title: "Monetary Benefits",
		icon: (
			<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
					className="text-green-600"
				>
					<path d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V6m0 12v-2m-4-4H6m12 0h-2" />
				</svg>
			</span>
		),
		points: [
			{ bold: "Get upto 4% of vehicle value", text: " for your vehicle's scrap value" },
			{ bold: "Certificate of Deposit (CoD)", text: " for discounts on new vehicle purchases" },
			{ bold: "3-4% discount", text: " through Road tax rebate" },
			{ bold: "Up to 25% off", text: " on Road tax rebates" },
		],
		note: (
			<div className="mt-4 p-3 rounded bg-yellow-50 text-yellow-900 text-sm flex items-start gap-2">
				<span className="mt-1">
					<svg
						width="20"
						height="20"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
						className="text-yellow-500"
					>
						<path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</span>
				<span>
					You can <b>trade your CoD</b> with any vehicle manufacturer for additional discounts!<br />
					<span className="text-xs">*Scrap value is based on condition, weight & metal rates.</span>
				</span>
			</div>
		),
	},
	{
		title: "Legal Protection",
		icon: (
			<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
					className="text-green-600"
				>
					<path d="M12 20s8-4 8-10V5l-8-3-8 3v5c0 6 8 10 8 10z" />
				</svg>
			</span>
		),
		points: [
			{ bold: "Complete liability discharge", text: " once your vehicle is handed over" },
			{ bold: "Protection from illegal scrapping penalties", text: " which can reach ₹50,000" },
			{ bold: "Avoid future legal complications", text: " if your vehicle is misused" },
			{ bold: "Official Certificate", text: " of Vehicle Scrapping and deregistration from RTO records" },
			{ bold: "Digitally regulated process", text: " via Vahan and government portals" },
		],
		note: (
			<div className="mt-4 p-3 rounded bg-red-50 text-red-900 text-sm flex items-start gap-2">
				<span className="mt-1">
					<svg
						width="20"
						height="20"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
						className="text-red-500"
					>
						<path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</span>
				<span>
					<b>Beware:</b> Illegal scrappers and aggregators don't have proper licenses to scrap vehicles!
				</span>
			</div>
		),
	},
	{
		title: "Environmental Benefits",
		icon: (
			<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
					className="text-green-600"
				>
					<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10l6 3" />
				</svg>
			</span>
		),
		points: [
			{ bold: "Eco-friendly disposal", text: " of hazardous materials and fluids" },
			{ bold: "Recycling of up to 90%", text: " of your vehicle's materials" },
			{ bold: "Reduction in carbon footprint", text: " by removing polluting vehicles" },
			{ bold: "Contribution to circular economy", text: " through material recovery" },
		],
		note: (
			<div className="mt-4 p-3 rounded bg-green-50 text-green-900 text-sm flex items-start gap-2">
				<span className="mt-1">
					<svg
						width="20"
						height="20"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
						className="text-green-500"
					>
						<path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</span>
				<span>
					Our facility follows <b>all environmental guidelines</b> for sustainable scrapping!
				</span>
			</div>
		),
	},
];

const FinancialLegalSection = () => (
	<section className="py-8 sm:py-12 md:py-16 bg-white">
		<div className="max-w-6xl mx-auto px-4 sm:px-6">
			{/* Heading styled similar to the provided image */}
			<div className="flex flex-col items-center mb-2">
				<span className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-2 rounded-full border border-green-200 bg-green-50 text-green-700 font-semibold text-base sm:text-lg mb-4 sm:mb-6">
					<span className="mr-2">🏆</span> Finance
				</span>
				<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 px-2">
					Finance and{" "}
					<span className="text-green-600 font-extrabold">Legal </span>
					<span className="text-green-600 font-extrabold">Benefits</span>
				</h2>
				<p className="text-center text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl px-2">
					Scrapping your vehicle with a Government-Authorized Facility offers significant advantages
				</p>
			</div>
			{/* Cards grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10">
				{benefits.map((benefit, idx) => (
					<div
						key={benefit.title}
						className="bg-white rounded-xl sm:rounded-2xl shadow p-4 sm:p-6 md:p-7 flex flex-col h-full transition-all duration-300 border border-transparent hover:shadow-xl hover:-translate-y-2 hover:border-green-300"
					>
						<div className="mb-3 sm:mb-4">{benefit.icon}</div>
						<h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{benefit.title}</h3>
						<ul className="space-y-2 sm:space-y-3 mb-2">
							{benefit.points.map((point, i) => (
								<li key={i} className="flex items-start gap-2">
									<span className="mt-1 text-green-600 flex-shrink-0">
										<svg
											width="16"
											height="16"
											className="sm:w-5 sm:h-5"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24"
										>
											<path d="M5 13l4 4L19 7" />
										</svg>
									</span>
									<span className="text-sm sm:text-base">
										<b>{point.bold}</b>
										{point.text}
									</span>
								</li>
							))}
						</ul>
						{benefit.note}
					</div>
				))}
			</div>

			{/* Enforcement Alert Section */}
			<div className="mt-12 sm:mt-16 md:mt-20 w-full bg-white">
				<div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
					{/* Left: Text */}
					<div className="flex-1 min-w-0 text-center md:text-left">
						<span className="inline-block bg-red-600 text-white font-semibold rounded-full px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm mb-4 sm:mb-6">
							URGENT ENFORCEMENT ALERT
						</span>
						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
							Don't Let Your Vehicle<br className="hidden sm:block" />
							<span className="sm:hidden"> </span>Get <span className="text-green-600">Seized.</span> Act Now.
						</h2>
						<p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 max-w-xl mx-auto md:mx-0 px-2">
							Government agencies are actively seizing end-of-life vehicles across Delhi-NCR without prior notice. Protect your investment before it's too late{" "}
							<a href="#" className="text-red-600 font-medium underline hover:text-red-700 transition">Learn more.</a>
						</p>
						
					</div>
					{/* Right: Illustration */}
					<div className="flex-1 flex justify-center items-center min-w-0 mt-6 md:mt-0 px-4">
						<img
							src={scarp}
							alt="Vehicle being seized illustration"
							className="max-w-full h-auto w-full max-w-sm md:max-w-none"
							style={{ maxHeight: '200px', objectFit: 'contain' }}
						/>
					</div>
				</div>
			</div>
			{/* End Enforcement Alert Section */}

		</div>
	</section>
);

export default FinancialLegalSection;
