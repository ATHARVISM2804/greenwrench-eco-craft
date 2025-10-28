import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp, X, ExternalLink, ArrowRight, FileText } from "lucide-react";
import React, { useState, useEffect } from "react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Vehicle Scrappage Policy 2024: Government Announces Major Incentives",
      summary: "The Ministry of Road Transport announces enhanced incentives for old vehicle owners, including tax benefits and discounts on new vehicle purchases.",
      category: "Government Policy",
      date: "May 15, 2024",
      urgent: true,
      source: "Ministry of Road Transport & Highways",
      image: "https://images.unsplash.com/photo-1518783211485-10fd3bfb2ce2?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>In a significant move to accelerate vehicle modernization and reduce environmental pollution, the Ministry of Road Transport & Highways has announced enhanced incentives under the Vehicle Scrappage Policy 2024.</p>
        
        <h4>Key Highlights of the New Policy:</h4>
        <ul>
          <li>Up to 15% rebate on road tax for commercial vehicles</li>
          <li>Up to 25% rebate on road tax for private vehicles</li>
          <li>5% discount by automobile manufacturers on purchase of new vehicle</li>
          <li>Zero registration fees for new vehicle purchase against scrapping certificate</li>
          <li>Income tax benefits for individuals and businesses</li>
        </ul>
        
        <p>The policy aims to phase out unfit and polluting vehicles while stimulating demand in the auto sector. Vehicle owners will receive a scrapping certificate upon disposal of their old vehicles, which can be used to avail these benefits.</p>
        
        <p>"This policy will help reduce pollution, improve road and passenger safety, formalize the informal vehicle scrapping industry, and recover low-cost materials for the automotive, steel and electronics industry," said the Transport Minister during the announcement.</p>
      `,
      contactInfo: "For more information, visit www.morth.gov.in or call the helpline: 1800-123-4567",
    },
    {
      id: 2,
      title: "Supreme Court Mandates Stricter End-of-Life Vehicle Regulations",
      summary: "Latest Supreme Court ruling requires all vehicles older than 15 years to undergo mandatory fitness testing and scrapping compliance.",
      category: "Legal Update",
      date: "May 10, 2024",
      urgent: true,
      source: "Supreme Court of India",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>The Supreme Court of India has issued a landmark ruling mandating stricter regulations for end-of-life vehicles. The ruling makes fitness testing mandatory for all vehicles older than 15 years.</p>
        
        <h4>Major Points of the Ruling:</h4>
        <ul>
          <li>All commercial vehicles older than 15 years must undergo fitness testing every 6 months</li>
          <li>Private vehicles older than 15 years require annual fitness certification</li>
          <li>Vehicles failing to meet emission standards must be scrapped at authorized centers</li>
          <li>States must establish automated testing centers within 12 months</li>
          <li>Non-compliance may result in heavy penalties and vehicle impoundment</li>
        </ul>
        
        <p>The court emphasized that the right to clean air is a fundamental right, and this measure aims to combat the rising pollution levels in major Indian cities.</p>
        
        <p>The bench stated, "We cannot compromise public health and environmental concerns for individual convenience. This is a necessary step toward ensuring sustainable urban development."</p>
      `,
      contactInfo: "For detailed information on the ruling, visit the Supreme Court website or consult with a transportation law expert.",
    },
    {
      id: 3,
      title: "Delhi NCR Implements New Air Quality Measures for Old Vehicles",
      summary: "Delhi government introduces new restrictions on vehicles older than 10 years as part of comprehensive air quality improvement initiative.",
      category: "Regional Policy",
      date: "March 14, 2024",
      urgent: false,
      source: "Delhi Transport Department",
      image: "https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>In a move to combat the capital's deteriorating air quality, the Delhi government has announced stringent measures for vehicles older than 10 years operating within the National Capital Region (NCR).</p>
        
        <h4>Key Restrictions Announced:</h4>
        <ul>
          <li>Complete ban on diesel vehicles older than 10 years within city limits</li>
          <li>Petrol vehicles older than 15 years prohibited from operation in NCR</li>
          <li>Implementation of colored stickers for fuel identification and monitoring</li>
          <li>Establishment of Low Emission Zones in congested areas</li>
          <li>Increased frequency of pollution checks for commercial vehicles</li>
        </ul>
        
        <p>The Transport Department has clarified that these measures are being implemented in phases, with the first phase focusing on commercial vehicles. The complete ban on older private vehicles will come into effect from June 1, 2024.</p>
        
        <p>"Delhi's air quality crisis demands immediate and decisive action. These measures, though stringent, are necessary to ensure the health and wellbeing of our citizens," said the Delhi Transport Minister during a press conference.</p>
        
        <p>The government has also announced the expansion of authorized scrapping facilities within the NCR to accommodate the increased demand for vehicle disposal services.</p>
      `,
      contactInfo: "For more details, vehicle owners can contact the Delhi Transport Department helpline at 1800-123-1000 or visit transport.delhi.gov.in",
    },
    {
      id: 4,
      title: "Metal Prices Surge: Impact on Scrap Car Values",
      summary: "Global metal price increases lead to higher scrap vehicle valuations, benefiting car owners looking to dispose of old vehicles.",
      category: "Market Update",
      date: "March 12, 2024",
      urgent: false,
      source: "Metal Market Analysis",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>The global metal market is experiencing significant price surges, particularly in steel, aluminum, and copper—key materials recovered from scrapped vehicles. This price rally has translated into higher valuations for end-of-life vehicles across the country.</p>
        
        <h4>Market Trends Observed:</h4>
        <ul>
          <li>35% increase in steel prices over the past quarter</li>
          <li>Aluminum prices reaching a five-year high</li>
          <li>Copper and precious metals from catalytic converters seeing substantial appreciation</li>
          <li>Average scrap car values up by 22% compared to last year</li>
          <li>Higher demand for specific vehicle components containing rare metals</li>
        </ul>
        
        <p>Market analysts attribute these price increases to several factors including supply chain disruptions, increased manufacturing demand post-pandemic, and stricter environmental regulations limiting mining operations globally.</p>
        
        <p>"Vehicle owners considering scrapping their old cars are in a favorable position right now," explains Dr. Rajat Mehta, Chief Economist at Metal Market Analysis. "The current market conditions offer an optimal window for maximizing returns on end-of-life vehicles, especially those with higher metal content."</p>
        
        <p>Authorized vehicle recyclers across the country have reported a 40% increase in inquiries from vehicle owners looking to capitalize on the higher scrap values. Industry experts anticipate these favorable conditions to continue for at least two more quarters before stabilizing.</p>
      `,
      contactInfo: "For current market rates and metal price forecasts, visit www.metalmarketanalysis.com or consult with authorized recycling centers.",
    },
    {
      id: 5,
      title: "Green Certification Program Launched for Auto Recyclers",
      summary: "New environmental certification program ensures all vehicle recyclers meet stringent eco-friendly standards and processes.",
      category: "Environment",
      date: "March 10, 2024",
      urgent: false,
      source: "Ministry of Environment",
      image: "https://images.unsplash.com/photo-1550399504-8953e1a6ac87?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>The Ministry of Environment, in collaboration with the Automotive Recyclers Association, has launched a comprehensive "Green Certification Program" for vehicle recycling facilities across the country. This initiative aims to standardize environmentally responsible practices in the auto recycling industry.</p>
        
        <h4>Certification Requirements Include:</h4>
        <ul>
          <li>Implementation of zero-waste recycling protocols</li>
          <li>Proper handling and disposal of hazardous materials including oils, refrigerants, and batteries</li>
          <li>Minimum 85% material recovery rate from each processed vehicle</li>
          <li>Regular environmental impact assessments and reporting</li>
          <li>Staff training in sustainable recycling practices</li>
          <li>Carbon footprint reduction measures</li>
        </ul>
        
        <p>The certification will be mandatory for all authorized vehicle scrapping facilities by January 2025. Facilities that achieve certification will receive tax benefits, government contracts, and preferential status in official vehicle disposal programs.</p>
        
        <p>"This program represents a significant step forward in making vehicle recycling truly sustainable," said the Environment Minister. "By ensuring standardized eco-friendly practices, we're minimizing the environmental impact of end-of-life vehicles while maximizing resource recovery."</p>
        
        <p>Consumer advocacy groups have welcomed this development, noting that it will provide vehicle owners with greater confidence when choosing recycling facilities. The certification status of facilities will be publicly available through an online portal launching next month.</p>
      `,
      contactInfo: "Recycling facilities can apply for certification at greenrecycle.gov.in. Consumers can verify a facility's certification status by texting the facility ID to 50505.",
    },
    {
      id: 6,
      title: "Digital Platform Integration for Vehicle Scrapping Documentation",
      summary: "Government launches unified digital platform for streamlined vehicle scrapping documentation and certificate issuance.",
      category: "Technology",
      date: "March 8, 2024",
      urgent: false,
      source: "Digital India Initiative",
      image: "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>The Ministry of Electronics and Information Technology, under the Digital India Initiative, has launched a unified digital platform named "VAHAAN-End" for streamlining all documentation related to vehicle scrapping and recycling.</p>
        
        <h4>Key Features of the Platform:</h4>
        <ul>
          <li>Centralized repository for all vehicle scrapping certificates</li>
          <li>Integration with VAHAN database for automatic vehicle registration cancellation</li>
          <li>Blockchain-based certificate verification system</li>
          <li>Real-time tracking of scrapping process status</li>
          <li>Direct integration with insurance companies and automobile manufacturers for rebate processing</li>
          <li>Mobile app interface for vehicle owners with notification system</li>
        </ul>
        
        <p>This digital platform aims to simplify the currently complex documentation process by creating a single-window system for all stakeholders involved in vehicle scrapping. Vehicle owners can now complete the entire process online, from application to certificate generation.</p>
        
        <p>"The VAHAAN-End platform is designed to eliminate bureaucratic hurdles and paperwork that previously made vehicle scrapping a cumbersome process," explained the IT Minister. "What used to take weeks can now be completed in days, with complete transparency and security."</p>
        
        <p>The platform also features an API system allowing third-party integration for authorized vehicle scrapping facilities, RTOs, and other government departments. A national helpline has been established to assist users with the transition to the digital platform.</p>
      `,
      contactInfo: "Access the platform at vahaanend.gov.in or download the mobile app from Google Play or App Store. For assistance, call the national helpline at 1800-XXX-XXXX.",
    },
    {
      id: 7,
      title: "EV Battery Recycling Initiative Launches Nationwide Collection Centers",
      summary: "Leading EV manufacturers partner with recycling firms to establish nationwide network for responsible battery disposal and material recovery.",
      category: "Sustainability",
      date: "May 8, 2024",
      urgent: false,
      source: "Electric Vehicle Association",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>As electric vehicles become increasingly common on Indian roads, a consortium of major EV manufacturers has partnered with specialized recycling firms to establish a nationwide network of battery collection and recycling centers.</p>
        
        <h4>Key Features of the Initiative:</h4>
        <ul>
          <li>50 collection centers to be established across major cities by end of 2024</li>
          <li>Advanced hydrometallurgical processes to recover up to 95% of critical materials</li>
          <li>Dedicated facilities for handling different battery chemistries (Li-ion, NMC, LFP)</li>
          <li>Consumer incentives for returning end-of-life batteries</li>
          <li>Digital tracking system for battery lifecycle management</li>
        </ul>
        
        <p>The initiative addresses growing concerns about the environmental impact of discarded EV batteries and aims to create a circular economy for critical battery materials. Recycling facilities will extract valuable metals including lithium, cobalt, and nickel, which will be reintroduced into the battery supply chain.</p>
        
        <p>"With EV adoption accelerating, establishing a robust battery recycling infrastructure is crucial for sustainability," said Rajiv Kumar, Director of the Electric Vehicle Association. "This collaborative effort ensures responsible end-of-life management while reducing dependence on imported raw materials."</p>
        
        <p>The first phase of collection centers will be operational in Delhi-NCR, Mumbai, Bangalore, Chennai, and Hyderabad by August 2024, with remaining locations to be added by December.</p>
      `,
      contactInfo: "For battery drop-off locations and collection schedules, visit www.evbatteryrecycle.in or contact the EV Battery Recycling Helpline at 1800-EV-RECYCLE.",
    },
    {
      id: 8,
      title: "New GST Exemptions Announced for Authorized Vehicle Scrapping Services",
      summary: "Finance Ministry introduces GST exemptions for authorized scrapping facilities to encourage formal recycling and boost circular economy.",
      category: "Tax Policy",
      date: "May 3, 2024",
      urgent: true,
      source: "Ministry of Finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>In a significant fiscal incentive aimed at formalizing the vehicle scrapping industry, the Finance Ministry has announced GST exemptions for services provided by authorized vehicle recycling facilities.</p>
        
        <h4>Details of the GST Exemptions:</h4>
        <ul>
          <li>Complete GST exemption on scrapping services provided by registered RVSFs</li>
          <li>Input tax credit benefits for related operational expenses</li>
          <li>Reduced GST rates (5%) on specific recycled material sales</li>
          <li>Zero GST on Certificate of Deposit (CoD) issuance services</li>
          <li>Special GST category created for vehicle recycling ecosystem</li>
        </ul>
        
        <p>The move is expected to significantly reduce operational costs for authorized scrapping facilities, enabling them to offer more competitive rates to vehicle owners and establish formal business operations.</p>
        
        <p>"These tax incentives are designed to encourage formal recycling channels and discourage the unorganized scrapping sector that operates without environmental safeguards," stated the Finance Minister in a press briefing.</p>
        
        <p>Industry analysts project that these measures could increase formal sector vehicle scrapping by approximately 40% over the next fiscal year, contributing to both environmental sustainability and economic growth in the recycling sector.</p>
        
        <p>The exemptions will be effective starting June 1, 2024, with implementation guidelines to be issued by the GST Council within the next two weeks.</p>
      `,
      contactInfo: "For detailed implementation guidelines, registered RVSFs can contact the GST Council helpdesk at gst.vehiclerecycling@gov.in or call the dedicated helpline: 1800-103-7786.",
    },
    {
      id: 9,
      title: "Scrap Vehicle Market Value Hits 5-Year High: Industry Report",
      summary: "Latest market analysis shows record-high valuations for end-of-life vehicles due to rising metal prices and parts demand.",
      category: "Market Analysis",
      date: "May 1, 2024",
      urgent: false,
      source: "Automotive Recyclers Association",
      image: "https://images.unsplash.com/photo-1635341814747-e293e6cb39e0?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>According to the latest quarterly report from the Automotive Recyclers Association, the market value of end-of-life vehicles has reached a 5-year high, with average scrap values increasing by 32% compared to the previous year.</p>
        
        <h4>Key Market Trends:</h4>
        <ul>
          <li>Average scrap value for mid-size passenger vehicles up 32% year-over-year</li>
          <li>Catalytic converter recycling values increased by 65% due to precious metal price surge</li>
          <li>Commercial vehicle scrap values up 28% compared to previous quarter</li>
          <li>Used parts market seeing unprecedented demand due to supply chain disruptions</li>
          <li>Regional variations showing highest values in western and southern states</li>
        </ul>
        
        <p>Multiple factors are driving this value increase, including global metal price inflation, semiconductor shortages affecting new vehicle production, and increasing demand for used auto parts. Additionally, stricter emissions regulations have increased the value of catalytic converters containing precious metals like platinum, palladium, and rhodium.</p>
        
        <p>"We're seeing a perfect storm of market conditions that has dramatically increased the value of end-of-life vehicles," explained Prakash Mehta, Chief Economist at the Automotive Recyclers Association. "Vehicle owners considering scrapping now can expect significantly better returns than in previous years."</p>
        
        <p>The report further indicates that this trend is expected to continue through at least Q3 2024, with potential moderation in Q4 as global supply chains stabilize.</p>
      `,
      contactInfo: "The complete market report is available to industry members at www.autorecyclersassociation.org/market-reports or by contacting the research department at research@ara.org.",
    },
    {
      id: 10,
      title: "National Green Tribunal Orders Accelerated Phase-Out of Pre-2005 Diesel Vehicles",
      summary: "NGT directs immediate action against older diesel vehicles in 14 cities with critical air pollution levels, mandating scrapping within 6 months.",
      category: "Environmental Policy",
      date: "April 28, 2024",
      urgent: true,
      source: "National Green Tribunal",
      image: "https://images.unsplash.com/photo-1573075175660-08fd45ac27a1?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>In a landmark ruling aimed at combating dangerous air pollution levels, the National Green Tribunal (NGT) has ordered an accelerated phase-out of all pre-2005 diesel vehicles in 14 cities with critically poor air quality.</p>
        
        <h4>Key Points of the NGT Order:</h4>
        <ul>
          <li>Immediate ban on pre-2005 diesel vehicles in Delhi-NCR, effective within 30 days</li>
          <li>Phased implementation in 13 other cities with AQI consistently exceeding 300</li>
          <li>Requirement for complete scrapping through authorized RVSFs only</li>
          <li>Mandatory proof of scrapping to be submitted to transport departments</li>
          <li>Special task forces to be established for enforcement in each affected city</li>
        </ul>
        
        <p>The NGT cited comprehensive studies showing that older diesel vehicles contribute disproportionately to particulate matter and NOx emissions in urban areas. The order emphasizes that public health concerns must take precedence over temporary economic considerations.</p>
        
        <p>"The right to breathe clean air is a fundamental aspect of the right to life guaranteed under Article 21 of the Constitution," stated the NGT bench in its ruling. "Immediate and decisive action is necessary to protect public health in these severely polluted urban centers."</p>
        
        <p>Transport departments in affected cities have been directed to issue public notifications within 15 days and establish simplified procedures for vehicle registration cancellation and scrapping certificate issuance. The order also instructs state governments to consider compensation schemes for affected vehicle owners.</p>
      `,
      contactInfo: "Vehicle owners can verify if their vehicles are affected by this ruling by visiting www.parivahan.gov.in or contacting their local Regional Transport Office. For the full NGT order, visit www.ngt.gov.in/recent-orders.",
    },
    {
      id: 11,
      title: "Mobile Scrapping Units Bring Vehicle Recycling to Rural Areas",
      summary: "Innovative mobile scrapping facilities launched to serve remote regions, bringing formal recycling services to underserved communities.",
      category: "Innovation",
      date: "April 22, 2024",
      urgent: false,
      source: "Rural Development Ministry",
      image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>A pioneering initiative to expand vehicle scrapping services to rural areas has been launched with the introduction of mobile scrapping units that can process vehicles in remote locations where fixed facilities are not available.</p>
        
        <h4>Features of the Mobile Scrapping Initiative:</h4>
        <ul>
          <li>20 specially designed mobile units to be deployed across rural districts</li>
          <li>Each unit capable of processing 5-7 vehicles per day</li>
          <li>Equipped with fluid drainage systems, dismantling tools, and material segregation equipment</li>
          <li>Digital documentation systems for on-site certificate issuance</li>
          <li>Pre-scheduled village routes announced 30 days in advance</li>
        </ul>
        
        <p>The initiative addresses a significant gap in the vehicle scrapping ecosystem by bringing formalized recycling services to rural areas, where end-of-life vehicles are often abandoned or improperly dismantled due to lack of access to authorized facilities.</p>
        
        <p>"Rural communities have been largely excluded from the benefits of proper vehicle recycling," explained Dr. Meenakshi Sharma, Joint Secretary at the Rural Development Ministry. "These mobile units democratize access to environmentally responsible disposal options and ensure rural vehicle owners can also benefit from scrapping incentives."</p>
        
        <p>The program will initially focus on 50 districts across six states: Uttar Pradesh, Bihar, Rajasthan, Madhya Pradesh, Odisha, and Maharashtra. Based on first-phase results, expansion to additional districts is planned for 2025.</p>
      `,
      contactInfo: "Village panchayats can request mobile scrapping unit visits by registering at www.mobilescrap.gov.in or by contacting their district rural development office. Schedule information will also be distributed through gram panchayats.",
    },
    {
      id: 12,
      title: "Automotive Manufacturers Launch Exchange Program with Enhanced Scrap Value",
      summary: "Major car manufacturers introduce new vehicle exchange program offering premium value for scrapped vehicles regardless of condition.",
      category: "Industry Initiative",
      date: "April 15, 2024",
      urgent: false,
      source: "Society of Indian Automobile Manufacturers",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>Six major automotive manufacturers have jointly announced an ambitious vehicle exchange program that offers enhanced value for scrapped vehicles, regardless of their condition or operational status.</p>
        
        <h4>Program Highlights:</h4>
        <ul>
          <li>Minimum guaranteed valuation 30% above standard scrap rates</li>
          <li>Additional 5% discount on new vehicle purchases</li>
          <li>Acceptance of vehicles in any condition – running or non-running</li>
          <li>Free towing services from any location</li>
          <li>Simplified paperwork with single-window processing</li>
          <li>Valid for both private and commercial vehicles</li>
        </ul>
        
        <p>The program represents a significant shift in manufacturer approach to vehicle exchange, with participating companies establishing direct partnerships with authorized RVSFs rather than relying on third-party intermediaries.</p>
        
        <p>"This industry-led initiative aims to accelerate the retirement of older vehicles while providing tangible economic benefits to consumers," said Vikram Singh, President of the Society of Indian Automobile Manufacturers. "By offering premium value regardless of vehicle condition, we're removing a major barrier to scrapping decisions."</p>
        
        <p>Participating manufacturers include Maruti Suzuki, Hyundai, Tata Motors, Mahindra, Kia, and Honda. The program will be operational across all authorized dealerships starting May 1, 2024, and is scheduled to run for a minimum of 12 months.</p>
      `,
      contactInfo: "For program details and participating dealerships, consumers can visit www.carexchange-india.com or contact the customer care number of any participating manufacturer.",
    }
  ];

  // Modal state
  const [openModal, setOpenModal] = useState<null | typeof newsItems[0]>(null);
  
  // Quick Links modal state
  const [quickLinkModal, setQuickLinkModal] = useState<string | null>(null);

  // Effect to prevent background scrolling when modal is open
  useEffect(() => {
    if (openModal || quickLinkModal) {
      // Lock scroll on body
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll when modal is closed
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openModal, quickLinkModal]);

  const trendingTopics = [
    "Vehicle Scrappage Policy 2024",
    "Electric Vehicle Incentives",
    "Pollution Control Measures",
    "Auto Recycling Standards",
    "Metal Price Trends",
    "Legal Compliance Updates",
  ];

  // Quick Links content
  const quickLinksContent = {
    "Government Policies": {
      title: "Government Policies",
      content: `
        <h4>Latest Government Policies on Vehicle Scrapping</h4>
        <p>The Vehicle Scrappage Policy offers incentives to vehicle owners for scrapping old and unfit vehicles through registered scrapping centers. The policy aims to phase out unfit and polluting vehicles.</p>
        <ul>
          <li>Certificate of Deposit for scrapped vehicles</li>
          <li>Up to 25% rebate on road tax for personal vehicles</li>
          <li>Up to 15% rebate on road tax for commercial vehicles</li>
          <li>Registration fee waiver for new vehicle purchase</li>
          <li>5% discount from automobile manufacturers</li>
        </ul>
        <p>The policy is applicable to vehicles older than 15 years for private vehicles and 10 years for commercial vehicles.</p>
      `
    },
    "Legal Updates": {
      title: "Legal Updates",
      content: `
        <h4>Recent Legal Developments in Vehicle Recycling</h4>
        <p>Several recent court rulings and legislative updates have impacted the vehicle recycling industry:</p>
        <ul>
          <li><strong>Supreme Court ruling (March 2024):</strong> Mandatory fitness testing for vehicles older than 15 years</li>
          <li><strong>National Green Tribunal order (April 2024):</strong> Accelerated phase-out of pre-2005 diesel vehicles in 14 cities</li>
          <li><strong>Motor Vehicles Act Amendment:</strong> New provisions for end-of-life vehicle management</li>
          <li><strong>Environmental Protection Act updates:</strong> Stricter norms for recycling facilities</li>
          <li><strong>Waste Management Rules 2023:</strong> Special provisions for automotive waste</li>
        </ul>
        <p>Compliance deadlines for most regulations have been set for December 2024.</p>
      `
    },
    "Market Analysis": {
      title: "Market Analysis",
      content: `
        <h4>Vehicle Recycling Market Trends</h4>
        <p>The automotive recycling market is experiencing significant growth, driven by several factors:</p>
        <ul>
          <li><strong>Metal price surge:</strong> 32% increase in scrap vehicle values year-over-year</li>
          <li><strong>Parts demand:</strong> Growing market for refurbished components due to supply chain issues</li>
          <li><strong>Precious metals:</strong> Catalytic converter recycling values up by 65%</li>
          <li><strong>Market forecast:</strong> Projected 18% CAGR through 2028</li>
          <li><strong>Regional variations:</strong> Highest values in western and southern states</li>
        </ul>
        <p>Industry experts predict continued strong performance through at least Q3 2024.</p>
      `
    },
    "Environmental News": {
      title: "Environmental News",
      content: `
        <h4>Environmental Impact of Vehicle Recycling</h4>
        <p>Recent environmental studies highlight the positive impact of proper vehicle recycling:</p>
        <ul>
          <li><strong>Carbon reduction:</strong> Each properly recycled vehicle saves approximately 1.5 tons of CO2</li>
          <li><strong>Resource conservation:</strong> Up to 85% of vehicle materials can be reused or recycled</li>
          <li><strong>Water pollution prevention:</strong> Proper fluid removal prevents contamination of water bodies</li>
          <li><strong>Energy savings:</strong> Recycling metal requires 60% less energy than new production</li>
          <li><strong>Waste reduction:</strong> Prevents 25 million tons of waste from entering landfills annually</li>
        </ul>
        <p>The Green Certification Program launched in March 2024 aims to standardize eco-friendly practices in the auto recycling industry.</p>
      `
    },
    "Technology Updates": {
      title: "Technology Updates",
      content: `
        <h4>Technological Innovations in Vehicle Recycling</h4>
        <p>The vehicle recycling industry is being transformed by technological advancements:</p>
        <ul>
          <li><strong>VAHAAN-End platform:</strong> Blockchain-based digital documentation system</li>
          <li><strong>AI-powered dismantling:</strong> Automated systems for efficient parts separation</li>
          <li><strong>Mobile recycling units:</strong> Bringing formal recycling services to remote areas</li>
          <li><strong>Advanced material recovery:</strong> New processes recovering up to 95% of EV battery materials</li>
          <li><strong>IoT tracking:</strong> Digital monitoring of recycling process efficiency</li>
        </ul>
        <p>These technological solutions are improving efficiency, transparency, and environmental outcomes in vehicle recycling operations across the country.</p>
      `
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#004d25] via-[#00592a] to-[#005628] text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5, // Reduced opacity to show the deep green better
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#004d25]/80 via-[#00592a]/70 to-[#005628]/60 z-10"></div>
        
        {/* Decorative circles */}
        <div className="absolute -left-24 top-1/4 w-64 h-64 bg-[#007c3e]/20 rounded-full blur-3xl z-10"></div>
        <div className="absolute -right-32 bottom-0 w-80 h-80 bg-[#007c3e]/20 rounded-full blur-3xl z-10"></div>
        <div className="absolute right-1/4 top-1/3 w-40 h-40 bg-[#008f47]/20 rounded-full blur-2xl z-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white text-lg font-semibold backdrop-blur-sm">
              📰 Latest Updates
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-extrabold mb-4">
            <span className="text-white">Latest </span>
            <span className="text-[#40c67d]">News</span>
          </h1>
          
          {/* Animated underline similar to the image */}
          <div className="w-40 h-1 bg-[#40c67d] mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay updated with the latest government policies, regulations, and industry developments 
            in automotive recycling and sustainable practices
          </p>
          
          {/* Stats display similar to the image */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
                <div className="text-white/70">Latest Updates</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{newsItems.length}+ Articles</div>
                <div className="text-white/70">Updated Weekly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Green Gradient Background (similar to HowItWorks) */}
      <section className="py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements similar to HowItWorks */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Main News Content */}
            <div className="lg:col-span-3 space-y-8">
              {newsItems.map((news, index) => (
                <Card key={news.id} className="shadow-card hover:shadow-premium transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge variant={news.urgent ? "destructive" : "secondary"}>
                          {news.category}
                        </Badge>
                        {news.urgent && (
                          <Badge variant="destructive" className="animate-pulse">
                            URGENT
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{news.date}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                      {news.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      {news.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Source:</span> {news.source}
                      </div>
                      <button 
                        className="text-primary hover:underline font-medium flex items-center"
                        onClick={() => setOpenModal(news)}
                      >
                        Read Full Article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Breaking News */}
              <Card className="bg-gradient-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Breaking News
                  </h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock className="h-3 w-3" />
                        <span>2 hours ago</span>
                      </div>
                      <p className="text-white/90">
                        Parliament passes new vehicle scrapping bill with enhanced benefits for citizens.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Trending Topics
                  </h3>
                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get the latest news and updates delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="w-full bg-gradient-primary text-white py-2 rounded-lg font-medium hover:shadow-button transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    {Object.keys(quickLinksContent).map((link, index) => (
                      <button
                        key={index}
                        onClick={() => setQuickLinkModal(link)}
                        className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal Popup */}
      {openModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-hidden"
          onClick={() => setOpenModal(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative animate-fade-in max-h-[90vh] flex flex-col my-4 mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 z-20 bg-white/80 rounded-full p-2"
              onClick={() => setOpenModal(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Header with Image */}
            <div className="w-full h-64 relative flex-shrink-0">
              <img
                src={openModal.image}
                alt={openModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <Badge variant={openModal.urgent ? "destructive" : "secondary"} className="mb-2 self-start">
                  {openModal.category}
                </Badge>
                <h2 className="text-3xl font-bold">{openModal.title}</h2>
              </div>
            </div>
            
            {/* Article Content */}
            <div className="p-8 overflow-y-auto flex-grow">
              <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground border-b border-gray-100 pb-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {openModal.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {new Date().toLocaleTimeString()}
                  </span>
                </div>
                <span className="font-medium">Source: {openModal.source}</span>
              </div>
              
              <div className="prose prose-green max-w-none mb-6" dangerouslySetInnerHTML={{ __html: openModal.fullContent }} />
              
              {/* Additional Information */}
              <div className="mt-8 bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-2">Further Information</h4>
                <p className="text-green-700">{openModal.contactInfo}</p>
              </div>
              
              {/* Share & External Link */}
              
            </div>
          </div>
        </div>
      )}

      {/* Quick Links Modal Popup */}
      {quickLinkModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-hidden"
          onClick={() => setQuickLinkModal(null)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full relative animate-fade-in max-h-[80vh] flex flex-col my-4 mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-premium-green to-emerald-600 p-6 text-white flex-shrink-0">
              <h3 className="text-2xl font-bold">{quickLinksContent[quickLinkModal as keyof typeof quickLinksContent].title}</h3>
            </div>
            
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-200 z-20"
              onClick={() => setQuickLinkModal(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto flex-grow">
              <div 
                className="prose prose-green max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: quickLinksContent[quickLinkModal as keyof typeof quickLinksContent].content 
                }}
              />
              
              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center">
                <button
                  onClick={() => setQuickLinkModal(null)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;