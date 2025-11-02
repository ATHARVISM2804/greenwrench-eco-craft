import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Star, Shield, Clock, Car, Bike, Truck, Bus, User, Phone, CreditCard, X } from "lucide-react";

// Image slideshow array with Cloudinary links
const HERO_IMAGES = [
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760015353/WhatsApp_Image_2025-10-05_at_16.53.36_04fe8349_hiakow.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760015353/WhatsApp_Image_2025-10-05_at_16.53.36_79edcc40_pxp5bf.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760358290/What_To_Look_For_When_Hiring_Auto_Wreckers_In_Brisbane_Steemit_edvdbq.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760358290/Japan_Metal_Recycling_Market_Forecast_xxlu7z.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760358290/What_To_Look_For_When_Hiring_Auto_Wreckers_In_Brisbane_Steemit_edvdbq.jpg",
   "https://res.cloudinary.com/dmhabztbf/image/upload/v1760015864/Scrapping-A-Car-Vancouver-e1684021029702_b9wlb1.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760015864/shutterstock_769028497-1000x600_ihbww2.jpg"
];

const VEHICLE_TYPES = [
  { label: "Car", icon: Car },
  { label: "Bike", icon: Bike },
  { label: "Truck", icon: Truck },
  { label: "Other", icon: Bus },
];

const CAR_MAKES = [
  "Maruti Suzuki",
  "Hyundai", 
  "Tata",
  "Honda",
  "Toyota",
  "Mahindra",
  "Kia",
  "Volkswagen",
  "Skoda",
  "Renault",
  "Nissan",
  "MG",
  "Ford",
  "Jeep",
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Jaguar",
  "Land Rover",
  "Volvo",
  "Rolls Royce",
  "Mitsubishi",
  "Chevrolet",
  "Fiat",
  "Daewoo"
];

const BIKE_MAKES = [
  "Hero",
  "Honda",
  "TVS",
  "Bajaj",
  "Royal Enfield",
  "Yamaha",
  "Suzuki",
  "KTM",
  "Kawasaki",
  "BMW",
  "Harley Davidson",
  "Jawa",
  "Yezdi",
  "Triumph",
  "Ducati",
  "Ather",
  "Ola",
  "TVS Electric",
  "Other"
];

const TRUCK_MAKES = [
  "Tata",
  "Ashok Leyland", 
  "Mahindra",
  "Eicher",
  "BharatBenz",
  "Force Motors",
  "Isuzu",
  "Volvo",
  "Scania",
  "MAN",
  "AMW",
  "SML Isuzu",
  "Piaggio",
  "Others"
];

const NISSAN_MODELS = [
  "Micra",
  "Sunny",
  "Terrano",
  "Teana",
  "X-Trail",
  "Kicks",
  "Magnite",
  "Other"
];

const MG_MODELS = [
  "Hector",
  "Hector Plus",
  "Astor",
  "Gloster",
  "Comet",
  "ZS EV",
  "Other"
];

const FORD_MODELS = [
  "Ikon",
  "Fusion",
  "Fiesta",
  "Figo",
  "Aspire",
  "EcoSport",
  "Endeavour",
  "Freestyle",
  "Other"
];

const JEEP_MODELS = [
  "Compass",
  "Meridian",
  "Wrangler",
  "Grand Cherokee",
  "Other"
];

const MERCEDES_BENZ_MODELS = [
  "A-Class",
  "B-Class",
  "C-Class",
  "E-Class",
  "S-Class",
  "CLA",
  "GLA",
  "GLC",
  "GLE",
  "GLS",
  "EQB",
  "EQS",
  "Other"
];

const BMW_MODELS = [
  "1 Series",
  "2 Series",
  "3 Series",
  "5 Series",
  "7 Series",
  "X1",
  "X3",
  "X5",
  "X7",
  "i4",
  "iX",
  "Other"
];

const AUDI_MODELS = [
  "A3",
  "A4",
  "A6",
  "A8",
  "Q3",
  "Q5",
  "Q7",
  "Q8",
  "e-tron",
  "Other"
];

const JAGUAR_MODELS = [
  "XE",
  "XF",
  "XJ",
  "F-Type",
  "F-Pace",
  "I-Pace",
  "Other"
];

const LAND_ROVER_MODELS = [
  "Freelander",
  "Discovery",
  "Discovery Sport",
  "Range Rover Evoque",
  "Velar",
  "Defender",
  "Other"
];

const VOLVO_MODELS = [
  "S40",
  "S60",
  "S80",
  "S90",
  "XC40",
  "XC60",
  "XC90",
  "C40 Recharge",
  "Other"
];

const ROLLS_ROYCE_MODELS = [
  "Ghost",
  "Phantom",
  "Wraith",
  "Dawn",
  "Cullinan",
  "Other"
];

const MITSUBISHI_MODELS = [
  "Lancer",
  "Cedia",
  "Pajero",
  "Montero",
  "Outlander",
  "Other"
];

const RENAULT_MODELS = [
  "Logan",
  "Fluence",
  "Pulse",
  "Scala",
  "Duster",
  "Lodgy",
  "Kwid",
  "Triber",
  "Kiger",
  "Other"
];

const SKODA_MODELS = [
  "Octavia",
  "Fabia",
  "Rapid",
  "Laura",
  "Yeti",
  "Kushaq",
  "Slavia",
  "Superb",
  "Kodiaq",
  "Other"
];

const VOLKSWAGEN_MODELS = [
  "Polo",
  "Vento",
  "Jetta",
  "Passat",
  "Touareg",
  "Taigun",
  "Virtus",
  "Tiguan",
  "Other"
];

const KIA_MODELS = [
  "Seltos",
  "Sonet",
  "Carnival",
  "Carens",
  "EV6",
  "Other"
];

const MAHINDRA_MODELS = [
  "Marshal",
  "Armada",
  "Scorpio",
  "Bolero",
  "Xylo",
  "Quanto",
  "Verito",
  "Thar",
  "KUV100",
  "TUV300",
  "XUV300",
  "XUV500",
  "XUV700",
  "Scorpio N",
  "Marazzo",
  "Other"
];

const MAHINDRA_TRUCK_MODELS = [
  "Jeeto",
  "Jeeto Plus",
  "Supro Cargo",
  "Supro Mini Truck",
  "Jayo",
  "Bolero Pickup",
  "Bolero Maxi Truck",
  "Furio 7",
  "Furio 11",
  "Furio 14",
  "Blazo X",
  "Cruzio",
  "Other"
];

const TOYOTA_MODELS = [
  "Qualis",
  "Corolla",
  "Corolla Altis",
  "Camry",
  "Innova",
  "Innova Crysta",
  "Fortuner",
  "Etios",
  "Liva",
  "Yaris",
  "Urban Cruiser",
  "Glanza",
  "Hilux",
  "Rumion",
  "Vellfire",
  "Land Cruiser",
  "Other"
];

const HONDA_MODELS = [
  "City",
  "Accord",
  "Civic",
  "Jazz",
  "Brio",
  "Amaze",
  "Mobilio",
  "WR-V",
  "CR-V",
  "Elevate",
  "Other"
];

const TATA_MODELS = [
  "Indica",
  "Indigo",
  "Nano",
  "Vista",
  "Zest",
  "Bolt",
  "Tiago",
  "Tigor",
  "Altroz",
  "Punch",
  "Nexon",
  "Harrier",
  "Safari",
  "Aria",
  "Hexa",
  "Other"
];

const HYUNDAI_MODELS = [
  "Santro",
  "Accent",
  "Getz",
  "i10",
  "i20",
  "Eon",
  "Xcent",
  "Aura",
  "Verna",
  "Creta",
  "Venue",
  "Elantra",
  "Tucson",
  "Exter",
  "Sonata",
  "Terracan",
  "Other"
];

const MARUTI_SUZUKI_MODELS = [
  "800",
  "Zen",
  "Esteem", 
  "Omni",
  "Gypsy",
  "Baleno",
  "Alto",
  "Alto K10",
  "WagonR",
  "Swift",
  "Dzire",
  "SX4",
  "Ritz",
  "Celerio",
  "Ignis",
  "Ertiga",
  "S-Cross",
  "Vitara Brezza",
  "XL6",
  "Swift Dzire",
  "Grand Vitara",
  "Fronx"
];

const CHEVROLET_MODELS = [
  "Spark",
  "Beat",
  "Aveo",
  "Cruze",
  "Optra",
  "Sail",
  "Enjoy",
  "Tavera",
  "Captiva",
  "Trailblazer",
  "Other"
];

const FIAT_MODELS = [
  "Punto",
  "Linea",
  "Palio",
  "Siena",
  "Avventura",
  "Urban Cross",
  "Other"
];

const DAEWOO_MODELS = [
  "Matiz",
  "Cielo",
  "Nexia",
  "Other"
];

const HERO_BIKE_MODELS = [
  "Splendor Plus",
  "HF Deluxe",
  "Passion Pro",
  "Glamour",
  "Xpulse 200",
  "Destini 125",
  "Maestro Edge",
  "CD 100",
  "CBZ",
  "Ambition",
  "Other"
];

const HONDA_BIKE_MODELS = [
  "Activa 6G",
  "Activa 125",
  "Dio",
  "Shine",
  "SP 125",
  "Unicorn",
  "Hornet 2.0",
  "CB200X",
  "CB350 H'ness",
  "CBR 650R",
  "Eterno",
  "CB Trigger",
  "Other"
];

const TVS_BIKE_MODELS = [
  "Apache RTR 160",
  "Apache RTR 200",
  "Apache RR 310",
  "Jupiter",
  "NTorq 125",
  "Star City Plus",
  "Victor",
  "Scooty Pep+",
  "Radeon",
  "Sport",
  "iQube Electric",
  "Ronin",
  "Raider",
  "XL100",
  "Other"
];

const BAJAJ_BIKE_MODELS = [
  "Pulsar 125",
  "Pulsar NS160",
  "Pulsar NS200",
  "Pulsar 220F",
  "Avenger Cruise 220",
  "Dominar 250",
  "Dominar 400",
  "CT 100",
  "Platina 110",
  "Chetak Electric",
  "Chetak (Petrol)",
  "Discover 125",
  "Discover 150",
  "Boxer",
  "Other"
];

const ROYAL_ENFIELD_MODELS = [
  "Classic 350",
  "Bullet 350",
  "Hunter 350",
  "Meteor 350",
  "Scram 411",
  "Interceptor 650",
  "Continental GT 650",
  "Shotgun 650",
  "Thunderbird 350",
  "Himalayan",
  "Other"
];

const YAMAHA_BIKE_MODELS = [
  "MT 15",
  "R15 V4",
  "FZ-X",
  "FZ S FI",
  "FZ FI",
  "Fazer",
  "RayZR 125",
  "Aerox 155",
  "RX 100",
  "RX135",
  "Crux",
  "Gladiator",
  "Other"
];

const SUZUKI_BIKE_MODELS = [
  "Access 125",
  "Burgman Street",
  "Gixxer",
  "Gixxer SF",
  "V-Strom SX",
  "Hayabusa",
  "Samurai",
  "Shogun",
  "Fiero",
  "Other"
];

const KTM_BIKE_MODELS = [
  "Duke 125",
  "Duke 200",
  "Duke 250",
  "Duke 390",
  "RC 125",
  "RC 200",
  "RC 390",
  "Adventure 250",
  "Adventure 390",
  "Other"
];

const KAWASAKI_BIKE_MODELS = [
  "Ninja 300",
  "Ninja 400",
  "Ninja ZX-4R",
  "Ninja 650",
  "Ninja 1000SX",
  "Z650",
  "Z900",
  "Versys 650",
  "Versys 1000",
  "W175",
  "Other"
];

const BMW_BIKE_MODELS = [
  "G 310 R",
  "G 310 GS",
  "F 900 R",
  "F 850 GS",
  "S 1000 RR",
  "R 1250 GS",
  "Other"
];

const HARLEY_DAVIDSON_MODELS = [
  "Iron 883",
  "Forty-Eight",
  "Street Bob",
  "Fat Bob",
  "Pan America 1250",
  "Other"
];

const JAWA_BIKE_MODELS = [
  "42",
  "Perak",
  "42 Bobber",
  "Jawa Classic",
  "Other"
];

const YEZDI_BIKE_MODELS = [
  "Roadster",
  "Scrambler",
  "Adventure",
  "Other"
];

const TRIUMPH_BIKE_MODELS = [
  "Speed 400",
  "Scrambler 400 X",
  "Trident 660",
  "Tiger 660",
  "Tiger 900",
  "Bonneville T100",
  "Other"
];

const DUCATI_BIKE_MODELS = [
  "Monster",
  "Panigale V2",
  "Panigale V4",
  "Multistrada",
  "Streetfighter V2",
  "Scrambler Icon",
  "Other"
];

const ATHER_BIKE_MODELS = [
  "450X",
  "450S",
  "450 Plus",
  "450",
  "Other"
];

const OLA_BIKE_MODELS = [
  "S1 Air",
  "S1 Pro",
  "Other"
];

const TVS_ELECTRIC_BIKE_MODELS = [
  "iQube Standard",
  "iQube S",
  "iQube ST",
  "Other"
];

const TATA_TRUCK_MODELS = [
  "Prima LX 3123.T",
  "Prima 4038.S",
  "Prima 5530.S",
  "Signa 1923.K",
  "Signa 4018.S",
  "Signa 4825.T",
  "Signa 5530.S",
  "SE1613",
  "SE1615",
  "Other"
];

const ASHOK_LEYLAND_TRUCK_MODELS = [
  "Dost",
  "Dost Plus",
  "Partner 4 Tyre",
  "Partner 6 Tyre",
  "Boss 1115 HB",
  "Boss 1315 HB",
  "Boss 1615 HB",
  "Captain 2523",
  "Captain 3123",
  "Ecomet 1015 HE",
  "Ecomet 1215",
  "U Truck 3118",
  "1112 IL",
  "1616 IL",
  "Hino",
  "Falcon",
  "Stallion",
  "Other"
];

const EICHER_TRUCK_MODELS = [
  "Pro 1049",
  "Pro 1059",
  "Pro 1110",
  "Pro 1112",
  "Pro 3015",
  "Pro 3019",
  "Pro 6025",
  "Pro 6031",
  "Pro 8049",
  "Pro 8035XM",
  "Pro 2055",
  "Pro 2110 XP",
  "Skyline Pro",
  "Other"
];

const BHARATBENZ_TRUCK_MODELS = [
  "1015R",
  "1215R",
  "1415R",
  "1617R",
  "1923C",
  "2523R",
  "2823C",
  "2828CH",
  "2828C",
  "3528CM",
  "4023T",
  "4228R",
  "4828R",
  "Others",
  "Other"
];

const FORCE_MOTORS_TRUCK_MODELS = [
  "Trump",
  "Trump 40",
  "Traveller Pickup",
  "Traveller Delivery Van",
  "Shaktiman",
  "Kargo King",
  "Kargo King Grand",
  "Others",
  "Other"
];

const ISUZU_TRUCK_MODELS = [
  "D-Max",
  "D-Max S-Cab",
  "S-Cab Z",
  "V-Cross",
  "N-Series",
  "FRR 90",
  "FVR 34",
  "FVZ 34",
  "GIGA Series",
  "ELF",
  "Others",
  "Other"
];

const VOLVO_TRUCK_MODELS = [
  "FM 420",
  "FM 400",
  "FM 370",
  "FMX 440",
  "FMX 460",
  "FH 520",
  "FH 540",
  "FM 480",
  "FMX 520",
  "VM Series",
  "Others",
  "Other"
];

const SCANIA_TRUCK_MODELS = [
  "P230",
  "P280",
  "P360",
  "P410",
  "R500",
  "R580",
  "G310",
  "G410",
  "G460",
  "Others",
  "Other"
];

const MAN_TRUCK_MODELS = [
  "CLA 25.300",
  "CLA 31.300",
  "CLA 49.300",
  "TGS 40.440",
  "TGS 33.360",
  "TGM",
  "TGA",
  "Others",
  "Other"
];

const AMW_TRUCK_MODELS = [
  "2518 TP",
  "3118",
  "4018",
  "4923",
  "1618 TP",
  "2523",
  "2528 TP",
  "Others",
  "Other"
];

const SML_ISUZU_TRUCK_MODELS = [
  "Prestige GS",
  "Super GS",
  "Samrat GS",
  "Sartaj HG 72",
  "Hiroi",
  "S7",
  "Tippers",
  "Others",
  "Other"
];

const PIAGGIO_TRUCK_MODELS = [
  "Ape Xtra LDX",
  "Ape HT",
  "Ape Auto DX",
  "Porter",
  "Porter 1000",
  "Ape Xtra Cargo",
  "Ape Xtra FX",
  "Ape E-City",
  "Others",
  "Other"
];

const MODELS = ["Model 1", "Model 2", "Model 3"];

const Hero = () => {
  const [vehicleType, setVehicleType] = useState("Car");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Automatically advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % HERO_IMAGES.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I want to get a quote for scrapping my vehicle.

🚗 Vehicle Details:
- Type: ${vehicleType}
- Make: ${make}
- Model: ${model}
- Vehicle Number: ${vehicleNo}

👤 Contact Information:
- Name: ${name}
- Phone: ${phone}

Please provide me with the best quote for my vehicle. Thank you!`;
    
    const whatsappUrl = `https://wa.me/919311068290?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Function to scroll to ContactUs section
  const scrollToContactUs = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Get makes based on selected vehicle type
  const getMakesByVehicleType = (type: string) => {
    switch (type) {
      case "Car":
        return CAR_MAKES;
      case "Bike":
        return BIKE_MAKES;
      case "Truck":
        return TRUCK_MAKES;
      default:
        return ["Other"];
    }
  };

  // Get models based on selected make
  const getModelsByMake = (selectedMake: string) => {
    if (selectedMake === "Maruti Suzuki") {
      return MARUTI_SUZUKI_MODELS;
    }
    if (selectedMake === "Hyundai") {
      return HYUNDAI_MODELS;
    }
    if (selectedMake === "Tata" && vehicleType === "Car") {
      return TATA_MODELS;
    }
    if (selectedMake === "Tata" && vehicleType === "Truck") {
      return TATA_TRUCK_MODELS;
    }
    if (selectedMake === "Honda" && vehicleType === "Bike") {
      return HONDA_BIKE_MODELS;
    }
    if (selectedMake === "Honda") {
      return HONDA_MODELS; // For Honda cars
    }
    if (selectedMake === "Toyota") {
      return TOYOTA_MODELS;
    }
    if (selectedMake === "Mahindra" && vehicleType === "Car") {
      return MAHINDRA_MODELS;
    }
    if (selectedMake === "Mahindra" && vehicleType === "Truck") {
      return MAHINDRA_TRUCK_MODELS;
    }
    if (selectedMake === "Kia") {
      return KIA_MODELS;
    }
    if (selectedMake === "Volkswagen") {
      return VOLKSWAGEN_MODELS;
    }
    if (selectedMake === "Skoda") {
      return SKODA_MODELS;
    }
    if (selectedMake === "Renault") {
      return RENAULT_MODELS;
    }
    if (selectedMake === "Nissan") {
      return NISSAN_MODELS;
    }
    if (selectedMake === "MG") {
      return MG_MODELS;
    }
    if (selectedMake === "Ford") {
      return FORD_MODELS;
    }
    if (selectedMake === "Jeep") {
      return JEEP_MODELS;
    }
    if (selectedMake === "Mercedes-Benz") {
      return MERCEDES_BENZ_MODELS;
    }
    if (selectedMake === "BMW") {
      return BMW_MODELS;
    }
    if (selectedMake === "Audi") {
      return AUDI_MODELS;
    }
    if (selectedMake === "Jaguar") {
      return JAGUAR_MODELS;
    }
    if (selectedMake === "Land Rover") {
      return LAND_ROVER_MODELS;
    }
    if (selectedMake === "Volvo" && vehicleType === "Car") {
      return VOLVO_MODELS;
    }
    if (selectedMake === "Volvo" && vehicleType === "Truck") {
      return VOLVO_TRUCK_MODELS;
    }
    if (selectedMake === "Rolls Royce") {
      return ROLLS_ROYCE_MODELS;
    }
    if (selectedMake === "Mitsubishi") {
      return MITSUBISHI_MODELS;
    }
    if (selectedMake === "Chevrolet") {
      return CHEVROLET_MODELS;
    }
    if (selectedMake === "Fiat") {
      return FIAT_MODELS;
    }
    if (selectedMake === "Daewoo") {
      return DAEWOO_MODELS;
    }
    if (selectedMake === "Hero") {
      return HERO_BIKE_MODELS;
    }
    if (selectedMake === "TVS") {
      return TVS_BIKE_MODELS;
    }
    if (selectedMake === "Bajaj") {
      return BAJAJ_BIKE_MODELS;
    }
    if (selectedMake === "Royal Enfield") {
      return ROYAL_ENFIELD_MODELS;
    }
    if (selectedMake === "Yamaha") {
      return YAMAHA_BIKE_MODELS;
    }
    if (selectedMake === "Suzuki" && vehicleType === "Bike") {
      return SUZUKI_BIKE_MODELS;
    }
    if (selectedMake === "KTM") {
      return KTM_BIKE_MODELS;
    }
    if (selectedMake === "Kawasaki") {
      return KAWASAKI_BIKE_MODELS;
    }
    if (selectedMake === "BMW" && vehicleType === "Bike") {
      return BMW_BIKE_MODELS;
    }
    if (selectedMake === "Harley Davidson") {
      return HARLEY_DAVIDSON_MODELS;
    }
    if (selectedMake === "Jawa") {
      return JAWA_BIKE_MODELS;
    }
    if (selectedMake === "Yezdi") {
      return YEZDI_BIKE_MODELS;
    }
    if (selectedMake === "Triumph") {
      return TRIUMPH_BIKE_MODELS;
    }
    if (selectedMake === "Ducati") {
      return DUCATI_BIKE_MODELS;
    }
    if (selectedMake === "Ather") {
      return ATHER_BIKE_MODELS;
    }
    if (selectedMake === "Ola") {
      return OLA_BIKE_MODELS;
    }
    if (selectedMake === "TVS Electric") {
      return TVS_ELECTRIC_BIKE_MODELS;
    }
    if (selectedMake === "Ashok Leyland") {
      return ASHOK_LEYLAND_TRUCK_MODELS;
    }
    if (selectedMake === "Eicher") {
      return EICHER_TRUCK_MODELS;
    }
    if (selectedMake === "BharatBenz") {
      return BHARATBENZ_TRUCK_MODELS;
    }
    if (selectedMake === "Force Motors") {
      return FORCE_MOTORS_TRUCK_MODELS;
    }
    if (selectedMake === "Isuzu") {
      return ISUZU_TRUCK_MODELS;
    }
    if (selectedMake === "Scania") {
      return SCANIA_TRUCK_MODELS;
    }
    if (selectedMake === "MAN") {
      return MAN_TRUCK_MODELS;
    }
    if (selectedMake === "AMW") {
      return AMW_TRUCK_MODELS;
    }
    if (selectedMake === "SML Isuzu") {
      return SML_ISUZU_TRUCK_MODELS;
    }
    if (selectedMake === "Piaggio") {
      return PIAGGIO_TRUCK_MODELS;
    }
    
    return MODELS;
  };

  const currentMakes = getMakesByVehicleType(vehicleType);
  const currentModels = getModelsByMake(make);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 px-4 sm:px-6">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 bg-green-50">
        {HERO_IMAGES.map((image, index) => (
          <div 
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* Darker overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Add green tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-green-800/30 to-green-700/30"></div>
          </div>
        ))}
      </div>

      {/* Enhanced text background gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent pointer-events-none"></div>

      {/* Image Slide Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20 space-x-1 sm:space-x-2 hidden">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-6 sm:w-8 bg-primary-glow' : 'w-1.5 sm:w-2 bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Enhanced text visibility */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-premium-green/30 border border-primary-glow/40 rounded-full text-white text-xs sm:text-sm font-medium backdrop-blur-sm shadow-sm">
                  🌱 Eco-Friendly Car Recycling
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-md">
                Scrap Your Old Car{" "}
                <span className="bg-gradient-premium bg-clip-text text-transparent drop-shadow-md">Now</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl drop-shadow-sm font-medium">
                Transform your old vehicle into cash while protecting the environment. We buy cars in any condition - non-runners, write-offs, damaged, or flood-damaged vehicles.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-gradient-premium text-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base md:text-lg font-semibold shadow-glow hover:shadow-premium transition-all duration-500 transform hover:-translate-y-1"
                onClick={scrollToContactUs}
              >
                <MessageCircle className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">Scrap My Vehicle Now</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-glow/50 text-white hover:bg-primary-glow/20 hover:border-primary-glow px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base md:text-lg font-semibold backdrop-blur-md bg-white/10 transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/919311068290?text=Get the best rate" target="_blank" rel="noopener noreferrer">
                  <span className="whitespace-nowrap">Get the Best Rate</span>
                </a>
              </Button>
            </div>

            {/* Trust Indicators - Enhanced visibility */}
            <div className="flex items-center gap-1 md:gap-8 text-white">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                <span className="text-xs sm:text-sm font-medium drop-shadow-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium drop-shadow-sm">Certified Service</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium drop-shadow-sm">60-Second Quote</span>
              </div>
            </div>
          </div>

          {/* Right Content - Quote Form */}
          <div className="animate-slide-up mt-6 md:mt-8 lg:mt-0">
            <Card className="backdrop-blur-xl bg-white shadow-[0_20px_50px_rgba(8,112,84,0.18)] border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden transform hover:scale-102 transition-all duration-500">
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 relative">
                {/* Feature Row */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-4 sm:mb-6 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-1.5 md:space-x-2 text-green-600 text-xs sm:text-sm md:text-base font-medium">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mb-1 sm:mb-0" />
                    <span>Maximum value</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-1.5 md:space-x-2 text-green-600 text-xs sm:text-sm md:text-base font-medium">
                    <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mb-1 sm:mb-0" />
                    <span>Free Pickup</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-1.5 md:space-x-2 text-green-600 text-xs sm:text-sm md:text-base font-medium">
                    <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mb-1 sm:mb-0" />
                    <span>Road tax rebate</span>
                  </div>
                </div>
                
                {/* Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3 text-gray-900">Get an instant valuation</h2>
                
                {/* Vehicle Type Tabs */}
                <div className="flex justify-center gap-1 xs:gap-2 sm:gap-3 mb-4 sm:mb-6 overflow-x-auto pb-1">
                  {VEHICLE_TYPES.map((type) => (
                    <button
                      key={type.label}
                      type="button"
                      className={`flex flex-col items-center px-2 xs:px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl border transition-all duration-200 font-medium text-xs xs:text-sm sm:text-base
                        ${vehicleType === type.label
                          ? "bg-green-50 border-green-400 text-green-700 shadow"
                          : "bg-white border-gray-200 text-green-600 hover:bg-green-50"}
                      `}
                      onClick={() => {
                        setVehicleType(type.label);
                        setMake(""); // Reset make when vehicle type changes
                        setModel(""); // Reset model when vehicle type changes
                      }}
                    >
                      <type.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mb-1" />
                      {type.label}
                    </button>
                  ))}
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      {vehicleType === "Other" ? (
                        <Input
                          className="w-full h-10 sm:h-12 px-2 sm:px-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-white text-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-200"
                          placeholder="Enter Make (e.g Toyota)"
                          value={make}
                          onChange={e => setMake(e.target.value)}
                          required
                        />
                      ) : (
                        <select
                          className="w-full h-10 sm:h-12 px-2 sm:px-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-white text-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-200"
                          value={make}
                          onChange={e => setMake(e.target.value)}
                          required
                        >
                          <option value="">Select Maker</option>
                          {currentMakes.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      )}
                    </div>
                    <div>
                      {vehicleType === "Other" ? (
                        <Input
                          className="w-full h-10 sm:h-12 px-2 sm:px-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-white text-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-200"
                          placeholder="Enter Model (e.g Glanza)"
                          value={model}
                          onChange={e => setModel(e.target.value)}
                          required
                        />
                      ) : (
                        <select
                          className="w-full h-10 sm:h-12 px-2 sm:px-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-white text-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-200"
                          value={model}
                          onChange={e => setModel(e.target.value)}
                          required
                        >
                          <option value="">Select Model</option>
                          {currentModels.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      )}
                    </div>
                  </div>
                  
                  {/* Vehicle No. */}
                  <div className="relative">
                    <span className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-green-600">
                      <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <Input
                      className="pl-8 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-200 rounded-lg text-gray-800"
                      placeholder="Vehicle No: AB12CD3456"
                      value={vehicleNo}
                      onChange={e => setVehicleNo(e.target.value)}
                      required
                    />
                  </div>
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="relative">
                      <span className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-green-600">
                        <User className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <Input
                        className="pl-8 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-200 rounded-lg text-gray-800"
                        placeholder="Your Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-green-600">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <Input
                        className="pl-8 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-200 rounded-lg text-gray-800"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Terms */}
                  <div className="flex items-center space-x-2">
                    <input
                      id="agree"
                      type="checkbox"
                      checked={agree}
                      onChange={e => setAgree(e.target.checked)}
                      className="accent-green-600 w-3 h-3 sm:w-4 sm:h-4"
                      required
                    />
                    <label htmlFor="agree" className="text-xs sm:text-sm text-gray-700">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => setShowTermsModal(true)}
                        className="text-green-700 underline hover:text-green-800 transition-colors"
                      >
                        Terms & Conditions
                      </button>
                    </label>
                  </div>
                  
                  {/* Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-10 sm:h-12 bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg flex items-center justify-center gap-2"
                    disabled={!agree}
                  >
                    <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
                    Get My Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Certificate of Deposit CTA - Enhanced visibility */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <Button 
          variant="outline" 
          className="bg-white/30 sm:bg-white/20 border-primary-glow/80 sm:border-primary-glow/60 text-white hover:bg-primary-glow/40 sm:hover:bg-primary-glow/30 hover:border-primary-glow backdrop-blur-md animate-float shadow-glow text-sm sm:text-sm md:text-base px-4 py-2 sm:px-4 sm:py-2 h-auto font-medium"
          asChild
        >
          <a href="/by-cd">
            Buy Certificate of Deposit
          </a>
        </Button>
      </div>

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Terms & Conditions</h2>
              <button
                onClick={() => setShowTermsModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Service Agreement</h3>
                <p>By using our vehicle scrapping service, you agree to these terms and conditions. We provide eco-friendly car recycling services with free pickup and competitive pricing.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Vehicle Evaluation</h3>
                <p>Vehicle valuations are based on current market conditions, vehicle condition, and scrap metal prices. Final quotes may vary after physical inspection of the vehicle.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Required Documentation</h3>
                <p>Valid ownership documents, ID proof, and pollution certificate (if applicable) must be provided. We ensure proper legal disposal and provide necessary certificates.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Payment Terms</h3>
                <p>Payment is made upon vehicle pickup and completion of documentation. We offer secure payment methods and immediate transfer of funds.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Environmental Compliance</h3>
                <p>All vehicles are recycled in accordance with environmental regulations. We ensure proper disposal of hazardous materials and maximum recycling of usable components.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Privacy Policy</h3>
                <p>Your personal information is kept confidential and used only for service delivery. We do not share customer data with third parties without consent.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">7. Cancellation Policy</h3>
                <p>Services can be cancelled up to 24 hours before scheduled pickup without any charges. Last-minute cancellations may incur nominal fees.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">8. Liability</h3>
                <p>We maintain comprehensive insurance coverage. Our liability is limited to the agreed vehicle value. Customers are responsible for removing personal belongings before pickup.</p>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 sm:p-6 rounded-b-2xl">
              <Button
                onClick={() => setShowTermsModal(false)}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                I Understand
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;