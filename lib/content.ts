// All copy and facts for the home page. Sourced from universalrelocations.com
// unless marked otherwise; nothing here is invented as a commercial claim.

export const company = {
  name: "Universal Relocations",
  legalName: "Universal Relocations Inc.",
  founded: 1998,
  email: "contact@universalrelocations.com",
};

export const phones = [
  { hub: "USA", label: "USA", number: "1-888-323-7356", tel: "+18883237356" },
  { hub: "IND", label: "India", number: "1-800-103-7356", tel: "18001037356" },
  { hub: "UAE", label: "UAE", number: "800-13-7356", tel: "800137356" },
] as const;

export const licences = [
  { name: "FMC OTI", value: "NF025083" },
  { name: "US DOT", value: "2428388" },
  { name: "MC", value: "836909-C" },
  { name: "New Jersey", value: "39PC00115200" },
  { name: "TxDMV", value: "007065281C" },
  { name: "California", value: "662949" },
];

export const fmcStatement =
  "U.S. federal law (the Shipping Act of 1984) requires Ocean Transportation Intermediaries (OTIs) to be licensed and bonded, which protects consumers. Universal Relocations Inc., a New Jersey corporation, is licensed by the US Federal Maritime Commission under FMC-OTI No. NF025083. Under this licence we operate NVOCC services for international household goods shipped to and from the USA.";

export const nav = [
  { label: "Services", href: "#goods" },
  { label: "How it works", href: "#stages" },
  { label: "Hubs", href: "#hubs" },
  { label: "Reviews", href: "#endorsements" },
  { label: "Resources", href: "#start" },
];

export const homeSizes = ["Studio / 1 bed", "2 bed", "3 bed", "4+ bed", "Office"] as const;

export const places = [
  "New Jersey, USA",
  "New York, USA",
  "Maryland, USA",
  "Georgia, USA",
  "Texas, USA",
  "California, USA",
  "Chennai, India",
  "Bangalore, India",
  "Hyderabad, India",
  "Mumbai, India",
  "New Delhi, India",
  "Dubai, UAE",
  "Abu Dhabi, UAE",
  "London, UK",
  "Singapore",
  "Toronto, Canada",
  "Sydney, Australia",
];

// Stage vocabulary shared by the quote stamp and the process table.
export const stages = [
  {
    word: "Received",
    title: "Your request is logged",
    body: "A move manager is assigned and becomes your single point of contact from here to delivery.",
  },
  {
    word: "Surveyed",
    title: "We see what's moving",
    body: "An in-home or video pre-move survey, then an itemised, complimentary estimate.",
  },
  {
    word: "Packed",
    title: "Packed for export",
    body: "Export-grade packing and crating, with every item inventoried before it leaves.",
  },
  {
    word: "Cleared",
    title: "Customs at origin",
    body: "We prepare the documentation and clear your shipment for export.",
  },
  {
    word: "Shipped",
    title: "Freight, tracked",
    body: "Ocean, air or groupage, covered by transit insurance and tracked in real time.",
  },
  {
    word: "Delivered",
    title: "Customs, then your door",
    body: "Import clearance, delivery and unpacking at your new home.",
  },
];

export const services = [
  { code: "INT", name: "International relocation", body: "Door-to-door household moves between countries." },
  { code: "CRP", name: "Corporate relocation", body: "Employee and expatriate moves for companies." },
  { code: "OFC", name: "Office relocation", body: "Workplace moves planned around your downtime." },
  { code: "DOM", name: "Intra & interstate moves", body: "Licensed moves within and between US states." },
  { code: "GRP", name: "Groupage solution", body: "Share container space and pay for the volume you use." },
  { code: "STO", name: "Storage & warehousing", body: "Secure storage at origin or destination." },
  { code: "PET", name: "Pet relocation", body: "Paperwork, crates and travel for your pets." },
  { code: "AUT", name: "Auto shipping", body: "Ship your vehicle alongside your household goods." },
  { code: "BAG", name: "Baggage shipping", body: "Excess luggage sent ahead, without airline fees." },
  { code: "ART", name: "Fine art relocation", body: "Custom crating and careful handling for valuable pieces." },
  { code: "INS", name: "Transit insurance", body: "Cover for your goods from pickup to delivery." },
  { code: "HSP", name: "Hospitality logistics", body: "Logistics for hotels and hospitality projects." },
];

export const hubs = [
  {
    code: "USA",
    name: "United States",
    tz: "America/New_York",
    tzLabel: "New Jersey",
    blurb: "Moving and relocation for homes, families and businesses across the United States.",
    cities: ["New Jersey", "Maryland", "Georgia", "Texas", "California"],
    phone: phones[0],
  },
  {
    code: "IND",
    name: "India",
    tz: "Asia/Kolkata",
    tzLabel: "Chennai",
    blurb: "Moving and relocation across India, so you can move with confidence.",
    cities: ["Chennai", "Bangalore", "Hyderabad", "Mumbai", "New Delhi"],
    phone: phones[1],
  },
  {
    code: "UAE",
    name: "United Arab Emirates",
    tz: "Asia/Dubai",
    tzLabel: "Dubai",
    blurb: "Moving and relocation for individuals, families and businesses across the UAE.",
    cities: ["Dubai"],
    phone: phones[2],
  },
];

export const ratings = [
  { source: "Trustpilot", score: "4.5", detail: "Based on 2,000+ reviews" },
  { source: "Google", score: "4.4", detail: "Google reviews" },
];

// Verbatim Google reviews shown on universalrelocations.com.
export const reviews = [
  {
    name: "Rohan Arora",
    quote:
      "We had a great experience with the Universal Relocation. They were professional, helpful and transparent in every step of our move.",
  },
  {
    name: "Phanisree Marella",
    quote:
      "The service and the delivery are definitely one of the best. I recommend universal for anyone moving from overseas to India.",
  },
  {
    name: "Hanuma Challa",
    quote: "Well trained staff in every country, Excellent door2door delivery service.",
  },
];

export const press = [
  { name: "Forbes", src: "/press/Forbes.png", w: 329, h: 88 },
  { name: "Fox News", src: "/press/Fox-News.png", w: 349, h: 72 },
  { name: "Associated Press", src: "/press/Associated-Press.png", w: 318, h: 57 },
  { name: "Business Insider", src: "/press/Business-Insider.png", w: 353, h: 124 },
  { name: "MSN", src: "/press/MSN.png", w: 339, h: 148 },
  { name: "Khaleej Times", src: "/press/Khaleej-Times.png", w: 332, h: 54 },
  { name: "Gulf News", src: "/press/Gulf-News.png", w: 345, h: 53 },
  { name: "DNA India", src: "/press/DNA-India.png", w: 333, h: 152 },
];

export const startOptions = [
  {
    icon: "calculator",
    title: "Moving calculator",
    body: "Add your rooms and items to estimate the volume of your move.",
    action: "Open the calculator",
    href: "https://www.universalrelocations.com/moving-calculator/",
  },
  {
    icon: "video",
    title: "Video pre-move survey",
    body: "Pick a day and time. A surveyor walks through your home with you on a video call and sends a complimentary estimate.",
    action: "Schedule a survey",
    href: "https://www.universalrelocations.com/contact-us/",
  },
  {
    icon: "phone",
    title: "Talk to a move manager",
    body: "Call the hub nearest you. All three numbers are toll free.",
    action: "Call 1-888-323-7356",
    href: "tel:+18883237356",
  },
] as const;

export const footerColumns = [
  {
    title: "Company",
    links: ["About us", "Corporate social responsibility", "Careers", "Company news", "Contact us"],
  },
  {
    title: "Destinations",
    links: ["Africa", "Asia", "Europe", "North America", "Oceania", "South America"],
  },
  {
    title: "Resources",
    links: ["Moving checklist", "Packing tips", "Moving terms", "Shipping terms", "Knowledge base", "File a claim"],
  },
  {
    title: "Ocean shipping",
    links: ["Bill of lading", "FMC rules & tariff", "Historic FMC rules & tariff", "Credit application", "Supplier registration"],
  },
];

export const legalLinks = [
  "Privacy policy",
  "Terms & conditions",
  "SMS terms of service",
  "Cookies policy",
  "Cancellation & refund policy",
  "Anti-bribery & code of conduct",
];
