export const SITE = {
  name: "Farral Sourcing Pakistan",
  tagline: "Your sourcing solution! We are team of talented",
  address: "Office # 46 Humara town Malir Karachi",
  phones: [
    { label: "0092 3003507205", href: "tel:+923003507205" },
    { label: "0092 3052159822", href: "tel:+923052159822" },
  ],
  email: "info@farralsourcingpak.com",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=923003507205&text&type=phone_number&app_absent=0",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products/bedding", children: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const HERO_SLIDES = [
  "/img/pexels-bed.jpg",
  "/img/hotel-room.jpg",
  "/img/rack.jpg",
];

export const BENEFITS = [
  {
    title: "Operating costs",
    text: "In a recent survey it shows that the operation costs of a company are reduced to nine per cent by outsourcing its project to other companies. This is the most compelling benefit for a company to outsource. its project to other companies. This is the most compelling benefit for a company to outsource.",
  },
  {
    title: "Capital funding",
    text: "Farral Sourcing Pakistan helps the company to increase the capital funding available for the core areas. And it also reduces the investment of capital funds into no core business areas. The need to show the equity on capital investment in non-core areas is also reduced by outsourcing.",
  },
  {
    title: "Resource needs",
    text: "In the textile industry, technological progress demands state-of-the-art machinery and automation tools. Essential equipment such as modern looms, advanced dyeing machines, and rigorous quality control systems are indispensable for optimizing productivity and maintaining superior product quality.",
  },
];

export const WHAT_WE_DO = {
  kicker: "What We Do!",
  title: "We Bring Your Ideas Into Reality",
  text: "Farral Sourcing Pakistan company, we pride ourselves on delivering high-quality fabrics and garments that blend innovation with tradition. Our commitment to excellence is evident in every thread, woven with precision to create textiles that meet the highest industry standards. With a focus on sustainable practices, we strive to minimize our environmental footprint while offering a diverse range of fabrics that cater to the evolving needs of our clients. Our skilled artisans and cutting-edge technology work in harmony to produce textiles that not only meet but exceed customer expectations. At the heart of our operations lies a passion for weaving dreams into reality, making us your trusted partner for all textile solutions.",
};

export const SERVICES = [
  {
    title: "Negotiation",
    text: "Negotiate and finalize the terms of the contract with rationality on behalf of Buyer and Seller.",
  },
  {
    title: "Creative Design lead",
    text: "We have an in-house CAD-CAM design studio to create custom designs with our customer's inspiration.",
  },
  {
    title: "Product Development",
    text: "Innovative and cost-effective product development and monitoring products to ensure quality.",
  },
  {
    title: "Inspection",
    text: "Random in-line and final inspection of goods by various sources before shipments.",
  },
  {
    title: "Shipment Coordination",
    text: "Customers are constantly updated on the progress of their shipments and documentation is monitored.",
  },
  {
    title: "Suppliers Performance Evaluation",
    text: "We analyze the performance of partner mills against key performance indicators.",
  },
  {
    title: "Weekly market bulletin and price trend chart",
    text: "We keep our customers updated with the market trends by sending them weekly price trend chart and market bulletin",
  },
  {
    title: "Quality Control",
    text: "Farral Sourcing Pakistan doing Sourcing & Quality Control have its own quality control team in Lahore, Faisalabad and Karachi. They are highly skilled qualified and experience people.",
  },
];

export const VALUES = [
  "Integrity",
  "Transparency",
  "Passionate pursuit of excellence",
  "Responsibility",
  "Collaboration",
  "Respect and Dignity",
  "Dynamic Leadership",
  "Creativity and Innovation",
  "Meet Timelines",
];

export const ABOUT = [
  "Farral Sourcing Pak is a distinguished name in the textile industry, committed to delivering excellence in every thread. With a rich heritage spanning years, we have established ourselves as a trusted partner in the global textile market. Our passion for quality and innovation drives us to source and supply premium fabrics that meet the diverse needs of our clients.",
  "At Farral Sourcing Pak, we prioritize sustainability, ensuring our products are not only of the highest quality but also environmentally responsible. Our comprehensive range includes a variety of textiles, from traditional to contemporary, reflecting our dedication to meeting evolving market demands. We take pride in our transparent and ethical business practices, fostering lasting relationships with both suppliers and clients. Choose Farral Sourcing Pak for a seamless blend of tradition, quality, and sustainability in every textile solution.",
];

export const CONTACT = {
  title: "Need custom Designs? Let’s start with a free quote!",
  points: [
    "We’re ready to sign NDA agreement",
    "RFP analysis is absolutely free",
    "We will respond to you within 24 hours",
  ],
  intro: "Kindly get in touch with us if you have any queries.",
};

export type Category = {
  slug: string;
  title: string;
  cover: string;
  images: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "bedding",
    title: "Bedding",
    cover: "/img/bedroom-1.jpg",
    images: [
      "/img/bedroom-1.jpg",
      "/img/pexels-bed.jpg",
      "/img/bedroom-2.jpg",
      "/img/cozy-bed.jpg",
      "/img/b-room.jpg",
      "/img/hotel-room.jpg",
    ],
  },
  {
    slug: "towel",
    title: "Towel",
    cover: "/img/towel-old.jpg",
    images: ["/img/towel-old.jpg", "/img/pexels-2.jpg", "/img/hotel-room.jpg"],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    cover: "/img/hotel-room.jpg",
    images: [
      "/img/hotel-room.jpg",
      "/img/hotel-bed.jpg",
      "/img/towel-old.jpg",
      "/img/bedroom-1.jpg",
      "/img/b-room.jpg",
      "/img/bedroom-2.jpg",
    ],
  },
  {
    slug: "apparel",
    title: "Apparel",
    cover: "/img/rack.jpg",
    images: [
      "/img/rack.jpg",
      "/img/g-pampas.jpg",
      "/img/g-hoodie.jpg",
      "/img/g-flatlay.jpg",
      "/img/g-pants.jpg",
      "/img/bed-side.jpg",
    ],
  },
  {
    slug: "garments",
    title: "Garment",
    cover: "/img/tees.jpg",
    images: [
      "/img/tees.jpg",
      "/img/hangers.jpg",
      "/img/g-whitetee.jpg",
      "/img/g-polos.jpg",
      "/img/g-jeans.jpg",
      "/img/g-suit.jpg",
    ],
  },
];
