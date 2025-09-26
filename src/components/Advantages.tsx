import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, DollarSign, Shield, Truck, MessageCircle } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Check Vehicle RC Expiry",
      description: "Enter your vehicle number to instantly confirm owner details and expiry date. Complete verification in seconds.",
      action: "Check Now",
      whatsappText: "I want to check my vehicle RC expiry",
    },
    {
      icon: DollarSign,
      title: "Get the Best Rate",
      description: "Chat on WhatsApp and receive the best market rate for your vehicle within 60 seconds. No hidden charges.",
      action: "Get Rate",
      whatsappText: "Get the best rate for my car",
    },
    {
      icon: Clock,
      title: "Fix Time for Pickup",
      description: "Book your convenient pickup slot via WhatsApp chat. Flexible timing to suit your schedule.",
      action: "Book Slot",
      whatsappText: "I want to book a pickup slot",
    },
    {
      icon: Shield,
      title: "Instant Payment",
      description: "Receive immediate payment via Cash or UPI once the scrap is collected. Safe and secure transactions.",
      action: "Learn More",
      whatsappText: "Tell me about payment process",
    },
  ];

  const features = [
    "✅ Free Vehicle Inspection",
    "✅ Best Market Rates Guaranteed",
    "✅ Complete Legal Documentation",
    "✅ Eco-Friendly Recycling Process",
    "✅ Insurance Claim Support",
    "✅ 24/7 Customer Support",
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white/90 via-premium-green/20 to-premium-green/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-premium-green/10 border border-primary-glow/30 rounded-full text-primary text-lg font-semibold">
              🏆 Our Advantages
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Why Choose <span className="bg-gradient-premium bg-clip-text text-transparent">GreenWrench?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience the most professional and rewarding car scrapping service with guaranteed best rates and complete transparency
          </p>
        </div>

        {/* Two-Card Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* The Old Way */}
          <Card className="bg-red-50 border border-red-100 shadow-none rounded-3xl">
            <CardContent className="p-10 md:p-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">The Old Way</h3>
                <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">✗ Not Recommended</span>
              </div>
              <div className="mb-6">
                <div className="font-semibold text-gray-700 mb-2">Indirect Route (via third-party agents)</div>
                <div className="flex items-center justify-between mb-4">
                  {/* Car icon */}
                  <span className="flex flex-col items-center">
                    <span className="text-3xl">🚗</span>
                  </span>
                  {/* SVG Diagram */}
                  <div className="flex-1 flex items-center justify-center">
                    <svg width="320" height="80" viewBox="0 0 320 80" fill="none">
                      {/* Wavy red path */}
                      <path d="M20 40 Q80 10 140 40 Q200 70 260 40 Q290 25 300 40" stroke="#f87171" strokeWidth="5" fill="none"/>
                      {/* Dealer/Third-party websites */}
                      <rect x="60" y="5" width="60" height="36" rx="8" fill="#fff" stroke="#fca5a5" strokeWidth="2"/>
                      <text x="90" y="22" fontSize="11" fill="#b91c1c" textAnchor="middle" fontWeight="bold">Dealer/</text>
                      <text x="90" y="34" fontSize="11" fill="#b91c1c" textAnchor="middle">Third-party</text>
                      <text x="90" y="46" fontSize="11" fill="#b91c1c" textAnchor="middle">websites</text>
                      {/* Agents */}
                      <rect x="140" y="40" width="60" height="36" rx="8" fill="#fff" stroke="#fca5a5" strokeWidth="2"/>
                      <text x="170" y="62" fontSize="13" fill="#b91c1c" textAnchor="middle" fontWeight="bold">Agents</text>
                      {/* Unknown Yard */}
                      <rect x="260" y="20" width="60" height="36" rx="8" fill="#fff" stroke="#fca5a5" strokeWidth="2"/>
                      <text x="290" y="42" fontSize="13" fill="#b91c1c" textAnchor="middle" fontWeight="bold">Unknown</text>
                      <text x="290" y="56" fontSize="13" fill="#b91c1c" textAnchor="middle" fontWeight="bold">Yard</text>
                      {/* Red circles with exclamation marks */}
                      <circle cx="120" cy="22" r="13" fill="#fee2e2" stroke="#f87171" strokeWidth="3"/>
                      <text x="120" y="28" fontSize="18" fill="#f87171" textAnchor="middle" fontWeight="bold">!</text>
                      <circle cx="200" cy="58" r="13" fill="#fee2e2" stroke="#f87171" strokeWidth="3"/>
                      <text x="200" y="64" fontSize="18" fill="#f87171" textAnchor="middle" fontWeight="bold">!</text>
                    </svg>
                  </div>
                  {/* Exclamation icon */}
                  <span className="flex flex-col items-center">
                    <span className="text-2xl text-red-500">❗</span>
                  </span>
                </div>
              </div>
              <ul className="space-y-2 text-red-700 text-sm mb-2">
                <li>✗ Your vehicle passes through multiple hands (dealer/third party website → agent → unknown yard)</li>
                <li>✗ Not all platforms that collect old vehicles are government-licensed to issue CoD or CVS</li>
                <li>✗ Reduced value due to multiple middlemen taking their cut</li>
                <li>✗ Risk of improper disposal and environmental damage</li>
                <li>✗ Delays in processing and documentation</li>
              </ul>
              <div className="text-xs text-red-500 mt-2">
                *Unlicensed aggregators and dealer-based bidding routes may not provide
                legal safety or proper documentation.
              </div>
            </CardContent>
          </Card>
          {/* The Smart Way */}
          <Card className="bg-green-50 border border-green-100 shadow-none rounded-3xl">
            <CardContent className="p-10 md:p-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">The Smart Way</h3>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">✓ Recommended</span>
              </div>
              <div className="mb-6">
                <div className="font-semibold text-gray-700 mb-2">Direct Legal Scrapping (with GreenWrench)</div>
                <div className="flex items-center justify-between mb-4">
                  {/* Car icon */}
                  <span className="flex flex-col items-center">
                    <span className="text-3xl">🚗</span>
                  </span>
                  {/* SVG Diagram */}
                  <div className="flex-1 flex items-center justify-center">
                    <svg width="320" height="80" viewBox="0 0 320 80" fill="none">
                      {/* Green straight path */}
                      <rect x="40" y="36" width="240" height="8" rx="4" fill="#bbf7d0"/>
                      <rect x="40" y="36" width="240" height="8" rx="4" fill="#34d399" fillOpacity="0.2"/>
                      {/* Car to GreenWrench */}
                      <rect x="90" y="20" width="70" height="40" rx="10" fill="#fff" stroke="#34d399" strokeWidth="2"/>
                      <text x="125" y="40" fontSize="14" fill="#059669" textAnchor="middle" fontWeight="bold">GreenWrench</text>
                      <text x="125" y="56" fontSize="10" fill="#059669" textAnchor="middle">Authorized RVSF</text>
                      {/* Certificate */}
                      <rect x="220" y="20" width="60" height="40" rx="10" fill="#fff" stroke="#34d399" strokeWidth="2"/>
                      <text x="250" y="40" fontSize="14" fill="#059669" textAnchor="middle" fontWeight="bold">Certificate</text>
                      {/* Green checkmarks */}
                      <g>
                        <circle cx="80" cy="40" r="14" fill="#bbf7d0" stroke="#34d399" strokeWidth="2"/>
                        <text x="80" y="46" fontSize="18" fill="#22c55e" textAnchor="middle" fontWeight="bold">✓</text>
                      </g>
                      <g>
                        <circle cx="210" cy="40" r="14" fill="#bbf7d0" stroke="#34d399" strokeWidth="2"/>
                        <text x="210" y="46" fontSize="18" fill="#22c55e" textAnchor="middle" fontWeight="bold">✓</text>
                      </g>
                      <g>
                        <circle cx="280" cy="40" r="14" fill="#bbf7d0" stroke="#34d399" strokeWidth="2"/>
                        <text x="280" y="46" fontSize="18" fill="#22c55e" textAnchor="middle" fontWeight="bold">✓</text>
                      </g>
                    </svg>
                  </div>
                  {/* Checkmark icon */}
                  <span className="flex flex-col items-center">
                    <span className="text-2xl text-green-600">✅</span>
                  </span>
                </div>
              </div>
              <ul className="space-y-2 text-green-800 text-sm mb-2">
                <li>✓ Direct path from customer to authorized RVSF (GreenWrench)</li>
                <li>✓ Legally valid Certificate of Deposit (CoD) and Certificate of Vehicle Scrapping (CVS)</li>
                <li>✓ Maximum value with no middlemen taking cuts</li>
                <li>✓ Environmentally responsible disposal with 90% recycling rate</li>
                <li>✓ Quick processing and immediate certificate issuance</li>
              </ul>
              <div className="text-xs text-green-700 mt-2">
                *Avoid unnecessary middlemen. Go direct for maximum value and legal safety with GreenWrench, a government-authorized RVSF.
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Features List */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Complete Car Scrapping Solution
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-foreground animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-button transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://wa.me/919999999999?text=I want to know more about your services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat with Expert
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-card">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-muted-foreground">Cars Recycled</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-card">
                  <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                  <div className="text-muted-foreground">Customer Rating</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-card">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-card">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Eco-Friendly</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h4 className="text-xl font-bold text-foreground mb-4">Quick Contact</h4>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span>WhatsApp: +91 99999 99999</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-primary" />
                    <span>Free Pickup Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;