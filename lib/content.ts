import {
  MessageSquareMore,
  PencilRuler,
  BadgeCheck,
  Factory,
  ShieldCheck,
  Truck,
} from "lucide-react";
import applicationImage from '../public/application.svg'
import businessImage from '../public/bussines.svg'
import companyImage from '../public/comapny.svg'
import PackagingStrategy from '../public/Packaging-design-feature-services.jpg'
import Service from '../public/Packaging-strategey.jpg'
import printTBoximage from '../public/print-box-test.png'
import sodaBottleBrandlogo from '../public/soda-image-test.png'
import imogiIcon from '../public/imogi-test.png'
import RatingImage from '../public/rating-icon.svg'
import CardsImage from '../public/p-solutions-cards.jpg'
import BoxsImage from  '../public/p-solutions-boxs.jpg'
import ApparelImage from '../public/p-solutions-apprale.jpg'
import  packaginSolution  from "../public/packagin-solution.svg";
import  PackagingStrategey  from "../public/Packaging-strategey.jpg";
import  Smpling  from "../public/sampling.svg";
import Eccofriendly from '../public/read-our-latest-ecco-friendly.jpg'
import printingEssential from '../public/read-our-latest-printing-essential.jpg'
import colorEveryThing from '../public/read-our-latest-color-everything.jpg'
import customPrinting from '../public/read-our-latest-custom-printing.jpg'
import TheFeatureOfPrinting from '../public/read-our-latest-the-feature-printing.jpg'
import smallBusiness from '../public/read-our-latest-color-small-buisness.jpg'
import colorTheoryPrinting from '../public/read-our-latest-color-theory-in.jpg'
import niceDayImage from '../public/instragram-seciton-nice-day.jpg'
import sdryncacaImage from '../public/instragram-sectionsdrynaca.jpg'
import jomaImage from  '../public/instragram-section-joma-.jpg'


import packagingDesignService from "../public/packaging-design-icon.svg";
import corrugatedBoxes from "../public/packaging-strategy-icon.svg";
import monoCartons from "../public/sampling-icon-print.svg";
import screenPrinting from "../public/screen-printing-icon.svg";
import rigidBoxes from "../public/3d-printing-icon.svg";
import productLabels from "../public/booklet-printing-icon.svg";

import customLabelsStickersIcons from "../public/ServicesImage/icon-01.png"
import packagingDesignIcons from "../public/ServicesImage/icon-06.png"
import monoCartonsIcons from "../public/ServicesImage/icon-03.png"
import corrugatedBoxesIcons from "../public/ServicesImage/icon-04.png"
import rigidBoxesIcons from "../public/ServicesImage/icon-05.png"

import process1 from '../public/processIcons/PROCESS - LINE ART-01.png'
import process2 from '../public/processIcons/PROCESS - LINE ART-02.png'
import process3 from '../public/processIcons/PROCESS - LINE ART-03.png'
import process4 from '../public/processIcons/PROCESS - LINE ART-04.png'
import process5 from '../public/processIcons/PROCESS - LINE ART-05.png'
import process6 from '../public/processIcons/PROCESS - LINE ART-06.png'


export const processIcons = [process1, process2, process3, process4, process5, process6];

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: 'Gallery' },
  { href: "/contact", label: "Contact Us" },
];

export const heroBadges = [
  { icon: applicationImage, label: "500+ packaging project delivered " },
  { icon: businessImage, label: "Premium Printing Solutions " },
  { icon: companyImage, label: "PAN India Service " },
];

export const featuredServices = [
  {
    title: "Product labels ",
    img: PackagingStrategy,
  },
  {
    title: "Mono Cartons ",
    img: Service,
  }
];

export const howItWorksSteps = [
  {
    n: "01",
    title: "Requirement Discussion",
    // desc: "Understand your packaging needs, product details, quantity, and branding goals.",
  },
  {
    n: "02",
    title: "Packaging Design",
    // desc: "Create custom packaging designs with the right size, materials, and branding elements.",
  },
  {
    n: "03",
    title: "Sample Approval",
    // desc: "Share a sample or digital proof for your review and approval before production.",
  },
  {
    n: "04",
    title: "Production",
    // desc: "Begin manufacturing using premium materials and advanced printing technology.",
  },
  {
    n: "05",
    title: "Quality Inspection",
    // desc: "Perform thorough quality checks to ensure every product meets our standards.",
  },
  {
    n: "06",
    title: "Delivery",
    // desc: "Carefully pack and deliver your finished packaging safely and on schedule.",
  },
];
export const testimonials = [
  {
    name: "Lilly Carter",
    role: "Happy meal",
    quote: "Fast, efficient and professional: the best option for our business",
    bg: "bg-brand",
    img: imogiIcon,
    ratingIcon:RatingImage,
  },
  {
    name: "Sophie Moore",
    role: "American Soda",
    quote:
      "Not just a printing service; they're true partners in bringing our visual concepts to life.",
    bg: "bg-red-500",
    img: sodaBottleBrandlogo,
    ratingIcon:RatingImage,
  },
  {
    name: "John Carter",
    role: "Mistery Box",
    quote: "Always impressed with their speed and print quality.",
    bg: "bg-amber-400",
    img: printTBoximage,
    ratingIcon:RatingImage,
  },
   {
    name: "Lilly Carter-1",
    role: "Happy meal",
    quote: "Fast, efficient and professional: the best option for our business",
    bg: "bg-brand",
    img: imogiIcon,
    ratingIcon:RatingImage,
  },
  {
    name: "Sophie Moore-2",
    role: "American Soda",
    quote:
      "Not just a printing service; they're true partners in bringing our visual concepts to life.",
    bg: "bg-red-500",
    img: sodaBottleBrandlogo,
    ratingIcon:RatingImage,
  },
  {
    name: "John Carter-3",
    role: "Mistery Box",
    quote: "Always impressed with their speed and print quality.",
    bg: "bg-amber-400",
    img: printTBoximage,
    ratingIcon:RatingImage,
  },
];
export const packagingSolutions = [
  {
    title: "Cards",
    price: "$2,000 USD",
    img: CardsImage,
    href: "/services/packaging-design",

  },
  {
    title: "Boxes",
    price: "$2,000 USD",
    img: BoxsImage,
    href: "/services/packaging-strategy",

  },
  {
    title: "Apparel",
    price: "$900 USD",
    img: ApparelImage,
    href: "/services/packaging-strategy",

  },
];

export const homeServices = [
  {
    icon: packaginSolution,
    title: "Packaging design",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: PackagingStrategey,
    title: "Packaging strategy",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: Smpling,
    title: "Sampling",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
export const resources = [
  {
    href: "/resources/future-of-printing",
    category: "Resources",
    date: "July 18, 2026",
    title: "The future of printing: innovations and trends",
    img: TheFeatureOfPrinting,
  },
  {
    href: "/resources/printing-essentials",
    category: "News",
    date: "July 15, 2026",
    title: "Printing essentials: choosing the right paper and ink",
    img: printingEssential,
  },
  {
    href: "/resources/color-theory",
    category: "News",
    date: "July 10, 2026",
    title: "Color theory in printing: creating stunning visuals",
    img: colorEveryThing,
  },
  {
    href: "/resources/custom-printing",
    category: "Articles",
    date: "July 05, 2026",
    title: "Custom printing projects: bringing your ideas to life",
    img: customPrinting,
  },
  {
    href: "/resources/eco-friendly-printing",
    category: "Resources",
    date: "June 28, 2026",
    title: "Eco-friendly printing: sustainable practices for a greener world",
    img: Eccofriendly,
  },
  {
    href: "/resources/small-business-printing",
    category: "Resources",
    date: "June 20, 2026",
    title: "Small business printing solutions: tips and tricks",
    img: smallBusiness,
  },
  {
    href: "/resources/color-theory-printing",
    category: "News",
    date: "June 10, 2026",
    title: "Color theory in printing: creating stunning visuals",
    img: colorTheoryPrinting,
  }
];

export const instagramPosts = [
  niceDayImage,
  sdryncacaImage,
  jomaImage
];

export const aboutStats = [
  { value: "5,000", suffix: "+", label: "Happy clients", suffixClass: "text-orange-500" },
  { value: "95", suffix: "%", label: "Customer satisfaction", suffixClass: "text-orange-500" },
  { value: "25", suffix: "Y", label: "Operational years", suffixClass: "text-brand" },
];

export const aboutValues = [
    {
    icon: MessageSquareMore,
    title: "Requirement Discussion",
    desc: "We understand your product, packaging requirements, branding goals, quantity, and delivery timeline to recommend the best packaging solution.",
  },
  {
    icon: PencilRuler,
    title: "Packaging Design",
    desc: "Our creative team develops innovative, functional, and brand-focused packaging designs tailored to your business needs.",
  },
  {
    icon: BadgeCheck,
    title: "Sample Approval",
    desc: "A prototype or sample is prepared and shared for your review to ensure every detail meets your expectations before production.",
  },
  {
    icon: Factory,
    title: "Production",
    desc: "Using advanced printing technology and premium materials, we manufacture your packaging with precision and consistency.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    desc: "Every package undergoes strict quality checks to ensure flawless printing, finishing, durability, and compliance with standards.",
  },
  {
    icon: Truck,
    title: "Delivery",
    desc: "After final approval, your packaging is securely packed and delivered on time, ready to support your business across India.",
  },
];

export const servicesData = [
  {
    slug: "custom-labels-and-stickers",
    icon: customLabelsStickersIcons,
    image: customLabelsStickersIcons,
    gallery: [
      "/images/services/product-labels/gallery-1.webp",
      "/images/services/product-labels/gallery-2.webp",
      "/images/services/product-labels/gallery-3.webp",
      "/images/services/product-labels/gallery-4.webp",
      "/images/services/product-labels/gallery-5.webp",
      "/images/services/product-labels/gallery-6.webp",
    ],
    title: "Custom Labels and Stickers",
    shortDescription:
      "Custom-printed product labels that combine sharp branding, durable materials, and precise finishing — from bottles and jars to boxes and pouches.",
    about: {
      title: "About the Service",
      description: [
        "Your label is often the first thing a customer touches before they touch your product. We design and print custom labels that hold up on the shelf, in the fridge, or through shipping — while keeping your branding sharp and consistent.",
        "From simple roll labels to die-cut shapes with foil accents, we handle material selection, adhesive type, and finish so your labels look premium and perform reliably across your entire product line.",
      ],
    },
    includes: {
      title: "What's Included?",
      items: [
        "Die-Cut & Custom Shape Labels",
        "Roll Labels for Automated Application",
        "Sheet Labels for Small Batches",
        "Waterproof & Oil-Resistant Options",
        "Matte, Gloss & Soft-Touch Laminate",
        "Foil Stamping & Embossing",
        "Barcode & Variable Data Printing",
        "Food-Grade & Freezer-Safe Adhesives",
        "Custom Die-Line Creation",
        "Physical Proofs Before Production",
      ],
    },
    benefits: {
      title: "Why Choose Our Product Labels?",
      items: [
        "Vibrant, Accurate Color Matching",
        "Wide Range of Materials & Finishes",
        "Custom Shapes & Sizes",
        "Waterproof & Durable Options",
        "Fast Turnaround Time",
        "Small Batch to Bulk Order Flexibility",
        "Professional Finishing Options",
        "Free Design File Check",
        "Competitive Bulk Pricing",
        "Consistent Print Quality Across Runs",
      ],
    },
    process: {
      title: "Our Labeling Process",
      steps: [
        {
          title: "Consultation",
          description:
            "Discuss your product, container type, and label requirements.",
        },
        {
          title: "Artwork & Die-Line",
          description:
            "Prepare print-ready artwork and a custom die-line for your shape.",
        },
        {
          title: "Material & Finish Selection",
          description:
            "Choose the right stock, adhesive, and laminate for your use case.",
        },
        {
          title: "Proofing & Approval",
          description:
            "Review a physical proof before we move to full production.",
        },
        {
          title: "Production & Delivery",
          description:
            "Print, inspect, and deliver your labels ready for application.",
        },
      ],
    },
    industries: {
      title: "Industries We Serve",
      items: [
        "Food & Beverage",
        "Cosmetics",
        "Healthcare",
        "Pharmaceuticals",
        "Retail",
        "Electronics",
        "Fashion",
        "Luxury Products",
        "FMCG",
        "E-commerce",
      ],
    },
    faqs: [
      {
        question: "What's the minimum order quantity for labels?",
        answer:
          "We support both small batch and bulk label runs — minimums vary by material and shape, so reach out with your project details.",
      },
      {
        question: "Are your labels waterproof?",
        answer:
          "Yes. We offer waterproof, oil-resistant, and freezer-safe label materials suited for food, beverage, and cosmetic packaging.",
      },
      {
        question: "Can you match my exact custom shape?",
        answer:
          "Yes. We create custom die-lines for any label shape, not just standard rectangles or circles.",
      },
      {
        question: "Do you offer foil or embossed finishes?",
        answer:
          "Yes. Foil stamping, embossing, and spot UV are all available for a premium, tactile finish.",
      },
      {
        question: "How fast is turnaround?",
        answer:
          "Standard turnaround is typically 3–5 business days depending on quantity and finish complexity.",
      },
    ],
    cta: {
      title: "Ready to Label Your Products with Confidence?",
      description:
        "Let's create labels that look great, hold up in real-world conditions, and keep your branding consistent across every product.",
      primaryButton: { text: "Get a Free Quote", link: "/contact" },
      secondaryButton: { text: "View Our Portfolio", link: "/portfolio" },
    },
    seo: {
      title: "Custom Product Label Printing Services | Print X",
      description:
        "Professional product label printing including die-cut labels, waterproof materials, foil stamping, and custom shapes for bottles, jars, and packaging.",
      keywords: [
        "Product Labels",
        "Custom Label Printing",
        "Die-Cut Labels",
        "Waterproof Labels",
        "Roll Labels",
        "Sticker Printing",
        "Bottle Labels",
        "Food Labels",
        "Cosmetic Labels",
        "Barcode Labels",
      ],
    },
  },

  {
    slug: "mono-cartons",
    icon: monoCartonsIcons, // ⚠️ rename this import to match — was `sampling`
    image: monoCartonsIcons,
    gallery: [
      "/images/services/mono-cartons/gallery-1.webp",
      "/images/services/mono-cartons/gallery-2.webp",
      "/images/services/mono-cartons/gallery-3.webp",
      "/images/services/mono-cartons/gallery-4.webp",
      "/images/services/mono-cartons/gallery-5.webp",
      "/images/services/mono-cartons/gallery-6.webp",
    ],
    title: "Mono Cartons",
    shortDescription:
      "Lightweight, retail-ready folding cartons made from premium board — ideal for cosmetics, pharma, food, and small consumer products.",
    about: {
      title: "About the Service",
      description: [
        "Mono cartons are single-ply folding boxes that combine strength with a clean, printable surface — the go-to choice for shelf-ready retail packaging. We design and produce cartons that protect your product while giving your brand a premium first impression.",
        "From structural die-lines to finishing touches like foil stamping and spot UV, we handle every stage so your carton is both production-efficient and visually distinctive on the shelf.",
      ],
    },
    includes: {
      title: "What's Included?",
      items: [
        "Custom Carton Structural Design",
        "Die-Line Creation",
        "Offset & Digital Printing",
        "Matte, Gloss & Soft-Touch Lamination",
        "Foil Stamping & Embossing",
        "Spot UV Coating",
        "Window Cut-Outs",
        "Custom Sizes & Shapes",
        "Eco-Friendly Board Options (SBS, FBB)",
        "Bulk Production Runs",
      ],
    },
    benefits: {
      title: "Why Choose Our Mono Cartons?",
      items: [
        "Lightweight & Cost-Effective",
        "Premium Print Finishes",
        "Custom Structural Designs",
        "Retail-Shelf Ready",
        "Sustainable Material Options",
        "Fast Prototyping",
        "Competitive Bulk Pricing",
        "Consistent Print Quality",
        "Regulatory & Industry Compliance",
        "Dedicated Production Support",
      ],
    },
    process: {
      title: "Our Mono Carton Process",
      steps: [
        {
          title: "Consultation",
          description:
            "Understand your product dimensions, brand, and shelf requirements.",
        },
        {
          title: "Structural Design",
          description:
            "Create a custom die-line suited to your product's shape and size.",
        },
        {
          title: "Printing & Finishing",
          description:
            "Print and apply your chosen lamination, foil, or coating finish.",
        },
        {
          title: "Sample Approval",
          description:
            "Review a physical sample carton before full production begins.",
        },
        {
          title: "Bulk Production",
          description:
            "Produce and deliver your full order with consistent quality checks.",
        },
      ],
    },
    industries: {
      title: "Industries We Serve",
      items: [
        "Food & Beverage",
        "Cosmetics",
        "Healthcare",
        "Pharmaceuticals",
        "Retail",
        "Electronics",
        "Fashion",
        "Luxury Products",
        "FMCG",
        "E-commerce",
      ],
    },
    faqs: [
      {
        question: "What board types do you use for mono cartons?",
        answer:
          "We commonly use SBS (solid bleached sulphate) and FBB (folding box board), with recycled and eco-friendly options also available.",
      },
      {
        question: "What's the minimum order quantity?",
        answer:
          "Minimums vary by size and finish — smaller test runs are available alongside full bulk production.",
      },
      {
        question: "Can you add a window cut-out to show the product?",
        answer:
          "Yes. Window cut-outs with or without a clear film insert are a common option for mono cartons.",
      },
      {
        question: "How long does production take?",
        answer:
          "Standard turnaround is typically 5–7 business days after sample approval, depending on quantity.",
      },
      {
        question: "Can I get a physical sample before bulk production?",
        answer:
          "Yes. We always recommend a sample carton so you can check structure, print, and finish before committing to a full run.",
      },
    ],
    cta: {
      title: "Ready to Package Your Product in Premium Mono Cartons?",
      description:
        "Let's design a lightweight, shelf-ready carton that protects your product and strengthens your brand presence at retail.",
      primaryButton: { text: "Get a Free Quote", link: "/contact" },
      secondaryButton: { text: "View Our Portfolio", link: "/portfolio" },
    },
    seo: {
      title: "Custom Mono Carton Printing & Design | Print X",
      description:
        "Professional mono carton design and printing including custom die-lines, foil stamping, lamination, and retail-ready folding cartons.",
      keywords: [
        "Mono Cartons",
        "Folding Cartons",
        "Custom Carton Printing",
        "Retail Packaging Boxes",
        "SBS Board Cartons",
        "Carton Design",
        "Product Boxes",
        "Cosmetic Cartons",
        "Pharma Cartons",
        "Shelf-Ready Packaging",
      ],
    },
  },

  {
    slug: "corrugated-boxes",
    icon: corrugatedBoxesIcons, 
    image: corrugatedBoxesIcons,
    gallery: [
      "/images/services/corrugated-boxes/gallery-1.webp",
      "/images/services/corrugated-boxes/gallery-2.webp",
      "/images/services/corrugated-boxes/gallery-3.webp",
      "/images/services/corrugated-boxes/gallery-4.webp",
      "/images/services/corrugated-boxes/gallery-5.webp",
      "/images/services/corrugated-boxes/gallery-6.webp",
    ],
    title: "Corrugated Boxes",
    shortDescription:
      "Durable, custom-printed corrugated boxes built for shipping protection, bulk storage, and branded unboxing at scale.",
    about: {
      title: "About the Service",
      description: [
        "Corrugated boxes are the backbone of safe shipping and bulk packaging. We produce boxes engineered for the right strength-to-weight ratio, using the flute and wall configuration that matches your product's weight, fragility, and shipping distance.",
        "Beyond protection, we print directly on the corrugated surface so your shipping boxes reinforce your brand from warehouse to doorstep — without adding unnecessary cost or lead time.",
      ],
    },
    includes: {
      title: "What's Included?",
      items: [
        "Custom Box Sizing",
        "Single, Double & Triple Wall Corrugated",
        "Flexo & Digital Printing",
        "Die-Cut Structural Designs",
        "Retail-Ready Packaging (RRP)",
        "Reinforced & Telescopic Boxes",
        "Eco-Friendly Recyclable Board",
        "Bulk Production Runs",
        "Sample Approval Before Production",
        "Palletizing & Shipping Support",
      ],
    },
    benefits: {
      title: "Why Choose Our Corrugated Boxes?",
      items: [
        "Superior Strength & Protection",
        "Custom Sizes & Structural Designs",
        "Cost-Effective Bulk Pricing",
        "Eco-Friendly Recyclable Materials",
        "Branded Print Options",
        "Fast Turnaround Time",
        "Multiple Flute & Wall Options",
        "Reinforced Structural Designs",
        "Reliable Bulk Supply",
        "Strength & Quality Testing",
      ],
    },
    process: {
      title: "Our Corrugated Box Process",
      steps: [
        {
          title: "Consultation",
          description:
            "Understand your product weight, fragility, and shipping requirements.",
        },
        {
          title: "Flute & Structure Selection",
          description:
            "Recommend the right wall and flute configuration for your needs.",
        },
        {
          title: "Design & Printing",
          description:
            "Apply your branding using flexo or digital print methods.",
        },
        {
          title: "Sample Production",
          description:
            "Produce a sample box for strength and fit testing.",
        },
        {
          title: "Bulk Manufacturing",
          description:
            "Run full production with quality checks throughout.",
        },
      ],
    },
    industries: {
      title: "Industries We Serve",
      items: [
        "E-commerce",
        "FMCG",
        "Electronics",
        "Retail",
        "Food & Beverage",
        "Furniture",
        "Automotive Parts",
        "Industrial Equipment",
        "Logistics & Warehousing",
        "Startups & Small Business",
      ],
    },
    faqs: [
      {
        question: "What's the difference between single, double, and triple wall?",
        answer:
          "Wall count determines strength — single wall suits lighter items, while double and triple wall are used for heavier or fragile products needing extra protection.",
      },
      {
        question: "Can you print my logo directly on the box?",
        answer:
          "Yes. We offer flexo and digital printing directly on corrugated board for branded, professional-looking shipping boxes.",
      },
      {
        question: "What's the minimum order quantity?",
        answer:
          "Minimums depend on box size and complexity — contact us for a quote based on your specific dimensions.",
      },
      {
        question: "Are your corrugated boxes recyclable?",
        answer:
          "Yes. We offer fully recyclable and often recycled-content board options for sustainable shipping.",
      },
      {
        question: "How long does production take?",
        answer:
          "Standard turnaround is typically 5–7 business days after sample approval, depending on order volume.",
      },
    ],
    cta: {
      title: "Ready to Ship with Confidence?",
      description:
        "Let's build corrugated boxes that protect your products in transit while reinforcing your brand at every touchpoint.",
      primaryButton: { text: "Get a Free Quote", link: "/contact" },
      secondaryButton: { text: "View Our Portfolio", link: "/portfolio" },
    },
    seo: {
      title: "Custom Corrugated Box Printing & Design | Print X",
      description:
        "Professional corrugated box design and printing including custom sizing, flute selection, branded shipping boxes, and bulk production.",
      keywords: [
        "Corrugated Boxes",
        "Shipping Boxes",
        "Custom Corrugated Packaging",
        "Bulk Boxes",
        "Retail-Ready Packaging",
        "Flexo Printing",
        "Eco-Friendly Packaging",
        "E-commerce Packaging",
        "Reinforced Boxes",
        "Corrugated Box Printing",
      ],
    },
  },

  {
    slug: "rigid-boxes",
    icon: rigidBoxesIcons, // ⚠️ rename this import to match — was `largeFormatPrinting`
    image: rigidBoxesIcons,
    gallery: [
      "/images/services/rigid-boxes/gallery-1.webp",
      "/images/services/rigid-boxes/gallery-2.webp",
      "/images/services/rigid-boxes/gallery-3.webp",
      "/images/services/rigid-boxes/gallery-4.webp",
      "/images/services/rigid-boxes/gallery-5.webp",
      "/images/services/rigid-boxes/gallery-6.webp",
    ],
    title: "Rigid Boxes",
    shortDescription:
      "Premium, sturdy rigid boxes designed for luxury retail, gifting, and standout unboxing experiences that customers remember.",
    about: {
      title: "About the Service",
      description: [
        "Rigid boxes are built from thick, non-folding paperboard wrapped in premium paper or fabric — the packaging of choice for luxury goods, electronics, and gift sets where the unboxing itself is part of the product experience.",
        "We handle everything from structural engineering to custom inserts, so your rigid box holds its shape, protects your product, and delivers the premium feel your brand deserves the moment it's opened.",
      ],
    },
    includes: {
      title: "What's Included?",
      items: [
        "Custom Rigid Box Design",
        "Magnetic Closure Boxes",
        "Drawer & Sleeve Boxes",
        "Hinged Lid Boxes",
        "Foil Stamping & Embossing",
        "Spot UV & Soft-Touch Lamination",
        "Custom Inserts & Foam Padding",
        "Premium Wrap Materials",
        "Sample Prototyping",
        "Bulk Production",
      ],
    },
    benefits: {
      title: "Why Choose Our Rigid Boxes?",
      items: [
        "Premium Unboxing Experience",
        "Sturdy, Protective Structure",
        "Wide Range of Finishes",
        "Custom Inserts for Product Protection",
        "Strong Brand Differentiation",
        "Luxury Material Options",
        "Precision Craftsmanship",
        "Small & Bulk Order Flexibility",
        "Fast Prototyping",
        "Consistent Quality Standards",
      ],
    },
    process: {
      title: "Our Rigid Box Process",
      steps: [
        {
          title: "Consultation",
          description:
            "Understand your product, brand positioning, and unboxing goals.",
        },
        {
          title: "Structural Design",
          description:
            "Engineer the box style — magnetic, drawer, sleeve, or hinged lid.",
        },
        {
          title: "Material & Finish Selection",
          description:
            "Choose premium wraps, foils, and coatings for the final look.",
        },
        {
          title: "Sample Approval",
          description:
            "Review a physical prototype before moving to full production.",
        },
        {
          title: "Production & Delivery",
          description:
            "Manufacture and deliver your finished rigid boxes on schedule.",
        },
      ],
    },
    industries: {
      title: "Industries We Serve",
      items: [
        "Luxury Goods",
        "Cosmetics",
        "Electronics",
        "Jewelry",
        "Fashion",
        "Gifting & Corporate Gifts",
        "Wine & Spirits",
        "Food & Confectionery",
        "Subscription Boxes",
        "E-commerce",
      ],
    },
    faqs: [
      {
        question: "How is a rigid box different from a mono carton?",
        answer:
          "Rigid boxes use thick, non-folding board for a sturdier, more premium feel, while mono cartons are thinner and fold flat — rigid boxes are typically used for higher-end or gift packaging.",
      },
      {
        question: "Can you add custom inserts for my product?",
        answer:
          "Yes. We design custom foam, cardboard, or fabric inserts to hold your product securely in place.",
      },
      {
        question: "What's the minimum order quantity?",
        answer:
          "Rigid boxes typically have higher minimums than folding cartons due to tooling — contact us for a quote based on your specific box style.",
      },
      {
        question: "How long does production take?",
        answer:
          "Standard turnaround is typically 2–3 weeks depending on box complexity, finishes, and order volume.",
      },
      {
        question: "What finishes are available?",
        answer:
          "We offer foil stamping, embossing, debossing, spot UV, and soft-touch lamination across a range of premium wrap materials.",
      },
    ],
    cta: {
      title: "Ready to Elevate Your Unboxing Experience?",
      description:
        "Let's create a rigid box that protects your product and gives customers a premium experience the moment they open it.",
      primaryButton: { text: "Get a Free Quote", link: "/contact" },
      secondaryButton: { text: "View Our Portfolio", link: "/portfolio" },
    },
    seo: {
      title: "Custom Rigid Box Design & Printing | Print X",
      description:
        "Premium rigid box design and printing including magnetic closures, custom inserts, foil stamping, and luxury packaging for retail and gifting.",
      keywords: [
        "Rigid Boxes",
        "Luxury Packaging",
        "Magnetic Closure Boxes",
        "Gift Boxes",
        "Custom Rigid Box Printing",
        "Premium Packaging",
        "Rigid Box Inserts",
        "Electronics Packaging",
        "Cosmetic Rigid Boxes",
        "Unboxing Experience",
      ],
    },
  },

  {
    slug: "packaging-design",
    icon: packagingDesignIcons,
    image:packagingDesignIcons,
    gallery: [
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f30c1fe090d9e0441a6839_packagin-design-gallery-image-01-print-x-webflow-template.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f30c227b54c1b6d59b3d18_packagin-design-gallery-image-02-print-x-webflow-template.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f30c25edb5064acc1764b7_packagin-design-gallery-image-03-print-x-webflow-template.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f30c28e8a448d9e2921d6f_packagin-design-gallery-image-04-print-x-webflow-template.jpg",
      "/images/services/packaging-design/gallery-5.webp",
      "/images/services/packaging-design/gallery-6.webp",
    ],
    title: "Packaging Design",
    shortDescription:
      "Create eye-catching packaging that protects your products, strengthens your brand identity, and leaves a lasting impression on your customers.",
    about: {
      title: "About the Service",
      description: [
        "Packaging is one of the most important aspects of product branding. It represents your business, communicates product information, and influences purchasing decisions. Our packaging design service combines creativity, functionality, and market research to create packaging that stands out on the shelf while protecting your products.",
        "Whether you need retail packaging, luxury boxes, food packaging, cosmetic packaging, or eCommerce shipping boxes, our team designs solutions tailored to your business goals and target audience.",
      ],
    },
    includes: {
      title: "What's Included?",
      items: [
        "Custom Packaging Design",
        "Retail Box Design",
        "Product Label Design",
        "Bottle & Jar Labels",
        "Flexible Pouch Design",
        "Food Packaging Design",
        "Cosmetic Packaging",
        "Luxury Box Design",
        "Shipping Box Design",
        "Print-Ready Artwork",
        "3D Product Mockups",
        "Die-Line Creation",
        "Brand Color Matching",
        "Material Recommendations",
      ],
    },
    benefits: {
      title: "Why Choose Our Packaging Design?",
      items: [
        "100% Custom Designs",
        "Creative & Experienced Designers",
        "Industry-Specific Packaging",
        "Premium Print Quality",
        "Unlimited Revisions",
        "Fast Turnaround Time",
        "Affordable Pricing",
        "Print-Ready Files",
        "Professional Brand Identity",
        "Support After Delivery",
      ],
    },
    process: {
      title: "Our Design Process",
      steps: [
        {
          title: "Consultation",
          description:
            "Understand your business, products, target audience, and design preferences.",
        },
        {
          title: "Research",
          description:
            "Analyze competitors, industry trends, and customer expectations.",
        },
        {
          title: "Concept Design",
          description:
            "Create unique packaging concepts based on your branding.",
        },
        {
          title: "Revisions",
          description: "Refine the design based on your feedback.",
        },
        {
          title: "Final Delivery",
          description:
            "Deliver print-ready files along with editable source files.",
        },
      ],
    },
    industries: {
      title: "Industries We Serve",
      items: [
        "Food & Beverage",
        "Cosmetics",
        "Healthcare",
        "Pharmaceuticals",
        "Retail",
        "Electronics",
        "Fashion",
        "Luxury Products",
        "FMCG",
        "E-commerce",
      ],
    },
    faqs: [
      {
        question: "How long does packaging design take?",
        answer:
          "Most packaging design projects are completed within 3–7 business days depending on the project complexity.",
      },
      {
        question: "Do you provide print-ready files?",
        answer:
          "Yes. We provide AI, PDF, EPS, SVG, and other print-ready file formats suitable for professional printing.",
      },
      {
        question: "Can you redesign existing packaging?",
        answer:
          "Absolutely. We can modernize your current packaging while maintaining your brand identity.",
      },
      {
        question: "Do you create realistic 3D mockups?",
        answer:
          "Yes. We provide high-quality 3D mockups so you can visualize your packaging before printing.",
      },
      {
        question: "Can you help with printing?",
        answer:
          "Yes. Along with packaging design, we also provide professional printing services.",
      },
    ],
    cta: {
      title: "Ready to Create Premium Packaging?",
      description:
        "Let's design packaging that attracts customers, strengthens your brand, and helps your products stand out in the market.",
      primaryButton: { text: "Get a Free Quote", link: "/contact" },
      secondaryButton: { text: "View Our Portfolio", link: "/portfolio" },
    },
    seo: {
      title: "Custom Packaging Design Services | Print X",
      description:
        "Professional packaging design services including retail boxes, product labels, food packaging, cosmetic packaging, luxury boxes, and print-ready packaging solutions.",
      keywords: [
        "Packaging Design",
        "Custom Packaging",
        "Product Packaging",
        "Retail Packaging",
        "Food Packaging",
        "Luxury Box Design",
        "Box Packaging",
        "Label Design",
        "Packaging Printing",
        "Print Ready Packaging",
      ],
    },
  },

  // ⚠️ Not part of the "Featured Services" list — kept as-is below.
  // Remove this entry if it shouldn't display in the featured section.
  {
    slug: "screen-printing",
    icon: screenPrinting,
    image: "/images/services/screen-printing/hero.webp",
    gallery: [
      "/images/services/screen-printing/gallery-1.webp",
      "/images/services/screen-printing/gallery-2.webp",
      "/images/services/screen-printing/gallery-3.webp",
      "/images/services/screen-printing/gallery-4.webp",
      "/images/services/screen-printing/gallery-5.webp",
      "/images/services/screen-printing/gallery-6.webp",
    ],
    title: "Screen Printing",
    shortDescription:
      "Get durable, vibrant screen printing on apparel, merchandise, and promotional products with rich, long-lasting color.",
    about: {
      title: "About the Service",
      description: [
        "Screen printing remains one of the most reliable methods for producing bold, durable prints on fabric and other surfaces. Our screen printing service is ideal for bulk apparel orders, branded merchandise, and promotional products.",
        "Using premium inks and precise registration, we deliver crisp, vibrant designs that hold up wash after wash, making screen printing a cost-effective choice for large quantity runs.",
      ],
    },
    includes: {
      title: "What's Included?",
      items: [
        "T-Shirt & Apparel Printing",
        "Promotional Merchandise Printing",
        "Multi-Color Screen Printing",
        "Spot Color & Pantone Matching",
        "Screen Setup & Preparation",
        "Bulk Order Production",
        "Fabric & Material Testing",
        "Specialty Inks (Metallic, Puff, Glow)",
        "Print Placement Planning",
        "Quality Control Checks",
      ],
    },
    benefits: {
      title: "Why Choose Our Screen Printing?",
      items: [
        "Vibrant, Long-Lasting Color",
        "Cost-Effective for Bulk Orders",
        "Wide Range of Ink Options",
        "Accurate Pantone Matching",
        "Durable Wash-Resistant Prints",
        "Fast Turnaround Time",
        "Experienced Print Technicians",
        "Consistent Quality Across Runs",
        "Competitive Bulk Pricing",
        "Support for Custom Branding",
      ],
    },
    process: {
      title: "Our Printing Process",
      steps: [
        {
          title: "Consultation",
          description:
            "Discuss your design, garment type, quantity, and color requirements.",
        },
        {
          title: "Art Preparation",
          description:
            "Prepare separations and screens for each color in your design.",
        },
        {
          title: "Test Print",
          description:
            "Print a sample to confirm color accuracy and placement.",
        },
        {
          title: "Production Run",
          description: "Print the full order with consistent quality control.",
        },
        {
          title: "Final Delivery",
          description: "Inspect, package, and deliver your finished order.",
        },
      ],
    },
    industries: {
      title: "Industries We Serve",
      items: [
        "Apparel & Fashion",
        "Sports & Teams",
        "Events & Promotions",
        "Corporate Merchandise",
        "Education",
        "Non-Profit & Fundraising",
        "Hospitality",
        "Retail",
        "Entertainment",
        "Startups & Small Business",
      ],
    },
    faqs: [
      {
        question: "What's the minimum order quantity for screen printing?",
        answer:
          "Screen printing is most cost-effective for bulk orders; minimums vary by design complexity, so contact us for specifics.",
      },
      {
        question: "How many colors can be printed in one design?",
        answer:
          "We support multi-color designs with each color requiring a separate screen, so more colors mean more setup and cost.",
      },
      {
        question: "How durable is screen printing compared to other methods?",
        answer:
          "Screen printing is known for its durability and vibrant color retention, making it ideal for apparel that will be washed frequently.",
      },
      {
        question: "Can you match specific brand colors?",
        answer:
          "Yes. We offer Pantone color matching to ensure your prints align with your brand guidelines.",
      },
      {
        question: "How long does a screen printing order take?",
        answer:
          "Standard turnaround is typically 5–7 business days depending on order size and design complexity.",
      },
    ],
    cta: {
      title: "Ready to Print Your Custom Designs?",
      description:
        "Let's create vibrant, durable screen-printed apparel and merchandise that represents your brand well.",
      primaryButton: { text: "Get a Free Quote", link: "/contact" },
      secondaryButton: { text: "View Our Portfolio", link: "/portfolio" },
    },
    seo: {
      title: "Screen Printing Services | Print X",
      description:
        "Professional screen printing services for apparel, merchandise, and promotional products with vibrant colors, durable prints, and bulk order pricing.",
      keywords: [
        "Screen Printing",
        "T-Shirt Printing",
        "Custom Apparel Printing",
        "Bulk Screen Printing",
        "Promotional Merchandise Printing",
        "Multi-Color Screen Printing",
        "Pantone Color Matching",
        "Apparel Branding",
        "Custom T-Shirts",
        "Merchandise Printing",
      ],
    },
  },
];


export const productsData = [
  {
    id: 1,
    slug: "packaging",
    title: "Packaging",

    price: "₹24,999",
    oldPrice: "₹31,999",

    shortDescription:
      "Premium custom packaging solutions for brands looking to elevate product presentation and customer experience.",

   productImage:
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f721556d9c702c9b3b1ab8_packaging-main-image-print-x-webflow-template-p-800.jpg",

    gallery: [
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f721556d9c702c9b3b1ab8_packaging-main-image-print-x-webflow-template-p-800.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f721556d9c702c9b3b1ab8_packaging-main-image-print-x-webflow-template-p-800.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f721556d9c702c9b3b1ab8_packaging-main-image-print-x-webflow-template-p-800.jpg",
    ],

    about: {
      title: "About the service",
      description:
        "Our packaging solutions are designed to help businesses create memorable unboxing experiences while ensuring product safety during shipping. We combine premium materials, creative design, and sustainable production methods.",
    },

    benefits: {
      title: "What's included?",
      items: [
        "Packaging consultation",
        "Custom structural design",
        "Brand-focused graphics",
        "Premium print quality",
        "Material recommendations",
        "Production-ready files",
      ],
    },

    specifications: {
      duration: "7 Days",
      revisions: "Unlimited",
      delivery: "Pan India",
      minimumOrder: "100 Pieces",
    },
  },

  {
    id: 2,
    slug: "food-packaging",
    title: "Food Packaging",

    price: "₹18,999",
    oldPrice: "₹24,999",

    shortDescription:
      "Food-safe packaging for restaurants, cafés, bakeries, and FMCG brands.",

     productImage:
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f26bf5e1af10be01188c8f_food-main-image-print-x-webflow-template.jpg",

    gallery: [
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f26bf5e1af10be01188c8f_food-main-image-print-x-webflow-template.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f26bf5e1af10be01188c8f_food-main-image-print-x-webflow-template.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f26bf5e1af10be01188c8f_food-main-image-print-x-webflow-template.jpg",
    ],

    about: {
      title: "About the service",
      description:
        "Custom food packaging with food-grade materials that protect freshness while showcasing your brand.",
    },

    benefits: {
      title: "What's included?",
      items: [
        "Food-grade material",
        "Water resistant",
        "Premium printing",
        "Eco-friendly options",
        "Custom sizes",
        "Fast delivery",
      ],
    },

    specifications: {
      duration: "5 Days",
      revisions: "2",
      delivery: "Pan India",
      minimumOrder: "250 Pieces",
    },
  },

  {
    id: 3,
    slug: "boxes",
    title: "Boxes",

    price: "₹32,999",
    oldPrice: "₹39,999",

    shortDescription:
      "Luxury rigid boxes, shipping boxes, mailer boxes and corrugated packaging.",

  productImage:
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f7210db8bd31222e0b9a52_boxes-main-image-print-x-webflow-template.jpg",

    gallery: [
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f7210db8bd31222e0b9a52_boxes-main-image-print-x-webflow-template.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f7210db8bd31222e0b9a52_boxes-main-image-print-x-webflow-template.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f7210db8bd31222e0b9a52_boxes-main-image-print-x-webflow-template.jpg",
    ],

    about: {
      title: "About the service",
      description:
        "Premium custom boxes designed for eCommerce, retail, gifting and industrial products.",
    },

    benefits: {
      title: "What's included?",
      items: [
        "Rigid box design",
        "Corrugated options",
        "Custom printing",
        "Matte/Gloss finish",
        "Foil stamping",
        "Die-cut templates",
      ],
    },

    specifications: {
      duration: "10 Days",
      revisions: "Unlimited",
      delivery: "Pan India",
      minimumOrder: "100 Pieces",
    },
  },

  {
    id: 4,
    slug: "apparel",
    title: "Apparel",

    price: "₹14,999",
    oldPrice: "₹18,999",

    shortDescription:
      "Custom printed T-shirts, hoodies, uniforms and promotional apparel.",

   productImage:
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f720f274f1201337136252_apparel-main-image-print-x-webflow-template-p-800.jpg",

    gallery: [
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f720f274f1201337136252_apparel-main-image-print-x-webflow-template-p-800.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f720f274f1201337136252_apparel-main-image-print-x-webflow-template-p-800.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f720f274f1201337136252_apparel-main-image-print-x-webflow-template-p-800.jpg",
    ],

    about: {
      title: "About the service",
      description:
        "Professional apparel printing using premium fabrics and long-lasting print technology.",
    },

    benefits: {
      title: "What's included?",
      items: [
        "DTF Printing",
        "Screen Printing",
        "Embroidery",
        "Premium Fabric",
        "Bulk Orders",
        "Custom Sizes",
      ],
    },

    specifications: {
      duration: "7 Days",
      revisions: "2",
      delivery: "Pan India",
      minimumOrder: "25 Pieces",
    },
  },

  {
    id: 5,
    slug: "cards",
    title: "Cards",

    price: "₹4,999",
    oldPrice: "₹6,999",

    shortDescription:
      "Business cards, invitation cards, thank you cards and premium stationery.",

     productImage:
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f71f117d0abeb5b120b994_cards-main-image-print-x-webflow-template.jpg",

    gallery: [
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f71f117d0abeb5b120b994_cards-main-image-print-x-webflow-template.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f71f117d0abeb5b120b994_cards-main-image-print-x-webflow-template.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f71f117d0abeb5b120b994_cards-main-image-print-x-webflow-template.jpg",
    ],

    about: {
      title: "About the service",
      description:
        "High-quality business and marketing cards printed on premium paper stocks.",
    },

    benefits: {
      title: "What's included?",
      items: [
        "Premium Paper",
        "Matte Finish",
        "Gloss Finish",
        "Spot UV",
        "Foil Printing",
        "Rounded Corners",
      ],
    },

    specifications: {
      duration: "3 Days",
      revisions: "1",
      delivery: "Pan India",
      minimumOrder: "100 Pieces",
    },
  },

  {
    id: 6,
    slug: "gifts",
    title: "Gifts",

    price: "₹2,499",
    oldPrice: "₹3,499",

    shortDescription:
      "Corporate gifts, promotional merchandise and personalized gift items.",

    productImage:
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f7213d6c1662b7a78636e4_gifts-main-image-print-x-webflow-template-p-800.jpg",

    gallery: [
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f7213d6c1662b7a78636e4_gifts-main-image-print-x-webflow-template-p-800.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f7213d6c1662b7a78636e4_gifts-main-image-print-x-webflow-template-p-800.jpg",
      "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a2b1/65f7213d6c1662b7a78636e4_gifts-main-image-print-x-webflow-template-p-800.jpg",
    ],

    about: {
      title: "About the service",
      description:
        "Create memorable branded gifts for employees, clients and special events.",
    },

    benefits: {
      title: "What's included?",
      items: [
        "Logo Branding",
        "Gift Packaging",
        "Bulk Orders",
        "Premium Quality",
        "Fast Delivery",
        "Customization",
      ],
    },

    specifications: {
      duration: "5 Days",
      revisions: "2",
      delivery: "Pan India",
      minimumOrder: "20 Pieces",
    },
  },
];


export const homeFaqs = [
  {
    question: "Do you provide custom packaging?",
    answer:
      "Yes, every packaging solution is customized according to your product.",
  },
  {
    question: "Can you design packaging too?",
    answer: "Yes, we provide complete packaging design and branding services.",
  },
  {
    question: "What is the minimum order quantity?",
    answer: "MOQ depends on the product type and printing process.",
  },
  {
    question: "Do you deliver across India?",
    answer: "Yes, we serve clients across India.",
  },
];

export const industries = [
  "Food & Beverage",
  "Cosmetics",
  "Pharmaceuticals",
  "Agriculture",
  "FMCG",
  "Personal Care",
  "Electronics",
  "Apparel",
  "Home Care",
  "Gifts & Luxury Products",
];

export const galleryCategories = [
  {
    slug: "packaging-solutions",
    title: "Packaging Solutions",
    description:
      "Boxes, labels, pouches, cartons, sleeves, and custom packaging projects.",
  },
  {
  slug: "trusted-brands",
  title: "Our clients/ Trusted Brands",
  description:
    "We're proud to partner with leading brands across industries, delivering premium packaging and printing solutions they trust.",
},
  {
    slug: "our-work",
    title: "Our Work",
    description:
      "Finished client projects, product mockups, premium finishes, and branding showcases.",
  },
  {
    slug: "events-exhibitions",
    title: "Events & Exhibitions",
    description:
      "Trade shows, packaging expos, client meets, product launches, seminars, and networking events.",
  },
  {
    slug: "behind-the-scenes",
    title: "Behind the Scenes",
    description:
      "Design process, production, quality checks, brainstorming sessions, and day-to-day operations.",
  },
  {
    slug: "innovation-materials",
    title: "Innovation & Materials",
    description:
      "New packaging concepts, sustainable materials, prototypes, structural designs, and special finishes.",
  },
  {
    slug: "life-at-packbeyond",
    title: "Life at PackBeyond",
    description:
      "Team activities, office moments, celebrations, achievements, CSR initiatives, and company culture.",
  },
];

export const locations = [
  {
    city: "Indore, MP",
    image: "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a28a/65f1d314de87d6943dafad34_new-york-location-print-x-webflow-template.jpg",
    description:
      "Visit our Indore office for complete packaging, printing and branding solutions.",

    address:
      "PackBeyond Pvt. Ltd.\n6, B-1, IDA, Scheme No.71\nIndore - 452001 (M.P.)",

    phone: "+91 7970102009",

    email: "packbeyond7@gmail.com",
  },

  {
    city: "Ratlam, MP",
    image: "https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a28a/65faf422b356777aa3346845_san-francisco-location-print-x-webflow-template.jpg",
    description:
      "Our Ratlam branch provides packaging and commercial printing solutions for local businesses.",

    address:
      "Near Ambe Chowk\nSagod Road\nRatlam - 457001 (M.P.)",

    phone: "+91 6269040903",

    email: "packbeyond7@gmail.com",
  },
];