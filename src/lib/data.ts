// ============================================================
// Artsy Stories — dummy/mock data shared across pages.
// Swap this out for real API calls when the backend exists.
// ============================================================

export type ServiceCategory = "business" | "digital-art";

export interface Service {
  id: string;
  slug: string;
  category: ServiceCategory;
  name: string;
  description: string;
  startingPrice: number;
  timeline: string;
  icon: string; // lucide-react icon name
  tags: string[];
}

export const services: Service[] = [
  {
    id: "svc-logo",
    slug: "logo-design",
    category: "business",
    name: "Logo Design",
    description:
      "A distinctive mark built to work on a business card and a billboard alike — concepts, refinement, and final files.",
    startingPrice: 45,
    timeline: "3–5 days",
    icon: "PenTool",
    tags: ["Branding", "Vector"],
  },
  {
    id: "svc-branding",
    slug: "brand-identity",
    category: "business",
    name: "Brand Identity Kit",
    description:
      "Logo, color system, type pairing, and a one-page style sheet so your brand stays consistent everywhere it shows up.",
    startingPrice: 120,
    timeline: "7–10 days",
    icon: "Sparkles",
    tags: ["Branding", "Guidelines"],
  },
  {
    id: "svc-social",
    slug: "social-media-design",
    category: "business",
    name: "Social Media Design Pack",
    description:
      "A set of on-brand templates for posts, stories, and covers, ready to drop your content into week after week.",
    startingPrice: 35,
    timeline: "2–4 days",
    icon: "Camera",
    tags: ["Social", "Templates"],
  },
  {
    id: "svc-poster",
    slug: "posters-flyers",
    category: "business",
    name: "Posters & Flyers",
    description:
      "Eye-catching print or digital flyers for events, launches, and promotions, sized for wherever they'll be seen.",
    startingPrice: 25,
    timeline: "2–3 days",
    icon: "FileImage",
    tags: ["Print", "Events"],
  },
  {
    id: "svc-packaging",
    slug: "packaging-design",
    category: "business",
    name: "Packaging Design",
    description:
      "Label and box artwork that holds up at shelf distance and on a phone screen, print-ready with dielines on request.",
    startingPrice: 90,
    timeline: "6–9 days",
    icon: "Package",
    tags: ["Print", "Packaging"],
  },
  {
    id: "svc-thumbnail",
    slug: "youtube-thumbnails",
    category: "business",
    name: "YouTube Thumbnails",
    description:
      "High-contrast, click-worthy thumbnails matched to your channel's style, delivered in the sizes YouTube actually wants.",
    startingPrice: 15,
    timeline: "24–48 hrs",
    icon: "PlaySquare",
    tags: ["Content", "Streaming"],
  },
  {
    id: "svc-twitch",
    slug: "twitch-assets",
    category: "business",
    name: "Twitch Asset Pack",
    description:
      "Overlays, panels, emotes, and alerts that give your stream a look viewers recognize the second it loads.",
    startingPrice: 60,
    timeline: "4–6 days",
    icon: "Gamepad2",
    tags: ["Streaming", "Overlays"],
  },
  {
    id: "svc-bizcard",
    slug: "business-cards",
    category: "business",
    name: "Business Cards",
    description:
      "Two-sided card design that matches your brand kit, print-ready with bleed and crop marks included.",
    startingPrice: 20,
    timeline: "1–2 days",
    icon: "CreditCard",
    tags: ["Print", "Branding"],
  },
  {
    id: "svc-marketing",
    slug: "digital-marketing-assets",
    category: "business",
    name: "Digital Marketing Assets",
    description:
      "Ad creatives, email headers, and banner sets built to a consistent brand look across every placement.",
    startingPrice: 40,
    timeline: "3–5 days",
    icon: "Megaphone",
    tags: ["Marketing", "Ads"],
  },
  {
    id: "svc-ui",
    slug: "ui-graphics",
    category: "business",
    name: "UI Graphics",
    description:
      "Icon sets, illustrations, and UI flourishes that designers and developers can drop straight into a product.",
    startingPrice: 50,
    timeline: "4–6 days",
    icon: "LayoutGrid",
    tags: ["UI", "Product"],
  },
  {
    id: "svc-webgfx",
    slug: "website-graphics",
    category: "business",
    name: "Website Graphics",
    description:
      "Hero illustrations, icon sets, and section graphics that give a site visual personality instead of stock art.",
    startingPrice: 55,
    timeline: "4–7 days",
    icon: "Globe",
    tags: ["Web", "Illustration"],
  },
  {
    id: "svc-photoedit",
    slug: "photo-editing",
    category: "business",
    name: "Photo Editing & Retouching",
    description:
      "Background removal, color correction, and composite edits that make a photo look intentional, not edited.",
    startingPrice: 12,
    timeline: "24–72 hrs",
    icon: "ImagePlus",
    tags: ["Photo", "Retouch"],
  },
  {
    id: "svc-mockup",
    slug: "product-mockups",
    category: "business",
    name: "Product Mockups",
    description:
      "Realistic mockups that present your packaging, apparel, or product shots like a real catalog shoot.",
    startingPrice: 18,
    timeline: "1–3 days",
    icon: "Box",
    tags: ["Mockup", "Product"],
  },
  {
    id: "svc-character",
    slug: "character-art",
    category: "digital-art",
    name: "Character Art",
    description:
      "Original character designs built from your description or reference, with clean linework and full color.",
    startingPrice: 55,
    timeline: "5–8 days",
    icon: "UserRound",
    tags: ["Character", "Original"],
  },
  {
    id: "svc-anime",
    slug: "anime-art",
    category: "digital-art",
    name: "Anime-Style Art",
    description:
      "Expressive anime-inspired illustration for OCs, fan art, or avatars, with crisp lineart and clean cel shading.",
    startingPrice: 50,
    timeline: "5–8 days",
    icon: "Wand2",
    tags: ["Anime", "Illustration"],
  },
  {
    id: "svc-semireal",
    slug: "semi-realistic-portraits",
    category: "digital-art",
    name: "Semi-Realistic Portraits",
    description:
      "A stylized portrait that keeps a real likeness while softening it into painterly, semi-realistic shading.",
    startingPrice: 65,
    timeline: "5–9 days",
    icon: "Palette",
    tags: ["Portrait", "Stylized"],
  },
  {
    id: "svc-realistic",
    slug: "realistic-portraits",
    category: "digital-art",
    name: "Realistic Portraits",
    description:
      "A fully rendered, photo-grade digital portrait with careful attention to likeness, light, and texture.",
    startingPrice: 85,
    timeline: "7–12 days",
    icon: "Aperture",
    tags: ["Portrait", "Realism"],
  },
  {
    id: "svc-fantasy",
    slug: "fantasy-art",
    category: "digital-art",
    name: "Fantasy Art",
    description:
      "Original fantasy scenes and characters — armor, magic, creatures — built around the world you describe.",
    startingPrice: 70,
    timeline: "6–10 days",
    icon: "Flame",
    tags: ["Fantasy", "Worldbuilding"],
  },
  {
    id: "svc-gaming",
    slug: "gaming-art",
    category: "digital-art",
    name: "Gaming Art",
    description:
      "Key art, splash screens, and character sheets for indie titles and tabletop games alike.",
    startingPrice: 75,
    timeline: "7–10 days",
    icon: "Joystick",
    tags: ["Gaming", "Key Art"],
  },
  {
    id: "svc-couples",
    slug: "couples-portraits",
    category: "digital-art",
    name: "Couples Portraits",
    description:
      "A keepsake illustration of two people, drawn from your favorite photo in the style you pick.",
    startingPrice: 60,
    timeline: "5–8 days",
    icon: "Heart",
    tags: ["Portrait", "Keepsake"],
  },
  {
    id: "svc-family",
    slug: "family-portraits",
    category: "digital-art",
    name: "Family Portraits",
    description:
      "A warm group portrait that fits the whole family into one consistent, story-book style scene.",
    startingPrice: 80,
    timeline: "6–10 days",
    icon: "Users",
    tags: ["Portrait", "Family"],
  },
  {
    id: "svc-pet",
    slug: "pet-portraits",
    category: "digital-art",
    name: "Pet Portraits",
    description:
      "Your pet's personality captured in a portrait, from playful cartoon to fully rendered realism.",
    startingPrice: 40,
    timeline: "4–7 days",
    icon: "PawPrint",
    tags: ["Pet", "Portrait"],
  },
  {
    id: "svc-wallpaper",
    slug: "wallpapers",
    category: "digital-art",
    name: "Custom Wallpapers",
    description:
      "Desktop and phone wallpapers built around a character, scene, or palette you choose, sized for your devices.",
    startingPrice: 25,
    timeline: "3–5 days",
    icon: "MonitorSmartphone",
    tags: ["Wallpaper", "Custom"],
  },
  {
    id: "svc-comic",
    slug: "comic-covers",
    category: "digital-art",
    name: "Comic Covers",
    description:
      "A dynamic, full-color cover illustration built to anchor a single issue or an entire series.",
    startingPrice: 95,
    timeline: "8–12 days",
    icon: "BookOpen",
    tags: ["Comic", "Cover Art"],
  },
  {
    id: "svc-concept",
    slug: "concept-art",
    category: "digital-art",
    name: "Concept Art",
    description:
      "Exploratory character, prop, or environment concepts to help pin down a look before full production.",
    startingPrice: 65,
    timeline: "5–9 days",
    icon: "Lightbulb",
    tags: ["Concept", "Exploration"],
  },
  {
    id: "svc-stylized",
    slug: "stylized-art",
    category: "digital-art",
    name: "Stylized Art",
    description:
      "Any subject reimagined in a distinct stylized look — painterly, flat, retro, or something we build together.",
    startingPrice: 55,
    timeline: "5–8 days",
    icon: "Brush",
    tags: ["Stylized", "Custom"],
  },
];

// ------------------------------------------------------------
export type PortfolioCategory =
  | "Graphic Design"
  | "Digital Art"
  | "Branding"
  | "Illustration"
  | "Social Media"
  | "Print"
  | "Gaming"
  | "Character Art"
  | "Portraits"
  | "Fantasy"
  | "Comics"
  | "Packaging";

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  categories: PortfolioCategory[];
  tags: string[];
  blurb: string;
  palette: [string, string]; // gradient placeholder colors
  icon: string;
}

const PALETTES: [string, string][] = [
  ["#FF3D78", "#FFCF3F"],
  ["#29C5EE", "#7C5CFC"],
  ["#FFCF3F", "#2BD99A"],
  ["#7C5CFC", "#FF3D78"],
  ["#2BD99A", "#29C5EE"],
  ["#FF3D78", "#7C5CFC"],
];

function palette(i: number): [string, string] {
  return PALETTES[i % PALETTES.length];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "pf-01",
    title: "Comet & Co. Wordmark",
    client: "Comet & Co.",
    categories: ["Branding", "Graphic Design"],
    tags: ["Logo", "Wordmark"],
    blurb: "A bouncy custom wordmark and mark system for a kids' snack brand.",
    palette: palette(0),
    icon: "PenTool",
  },
  {
    id: "pf-02",
    title: "Lunar Drift OC",
    client: "Personal Commission",
    categories: ["Digital Art", "Character Art", "Fantasy"],
    tags: ["Character", "OC"],
    blurb: "A moon-themed original character built for a fantasy webnovel.",
    palette: palette(1),
    icon: "Wand2",
  },
  {
    id: "pf-03",
    title: "Riverside Roast Packaging",
    client: "Riverside Roast Co.",
    categories: ["Packaging", "Branding"],
    tags: ["Packaging", "Label"],
    blurb: "Coffee bag labels with a hand-illustrated riverside scene.",
    palette: palette(2),
    icon: "Package",
  },
  {
    id: "pf-04",
    title: "Pixel Raiders Key Art",
    client: "Pixel Raiders Studio",
    categories: ["Gaming", "Digital Art"],
    tags: ["Key Art", "Indie Game"],
    blurb: "Splash-screen key art for an indie roguelike's Steam page.",
    palette: palette(3),
    icon: "Joystick",
  },
  {
    id: "pf-05",
    title: "Issue #4: Nightwatch",
    client: "Nightwatch Comics",
    categories: ["Comics", "Illustration"],
    tags: ["Cover Art", "Comic"],
    blurb: "Dynamic cover illustration for an indie comic's fourth issue.",
    palette: palette(4),
    icon: "BookOpen",
  },
  {
    id: "pf-06",
    title: "Maren & Theo Portrait",
    client: "Personal Commission",
    categories: ["Portraits", "Digital Art"],
    tags: ["Couples", "Portrait"],
    blurb: "A semi-realistic couples portrait commissioned as an anniversary gift.",
    palette: palette(5),
    icon: "Heart",
  },
  {
    id: "pf-07",
    title: "Glow Studio Stories Pack",
    client: "Glow Studio",
    categories: ["Social Media", "Graphic Design"],
    tags: ["Templates", "Instagram"],
    blurb: "A 12-piece Instagram story template set for a beauty studio.",
    palette: palette(0),
    icon: "Camera",
  },
  {
    id: "pf-08",
    title: "Sable the Familiar",
    client: "Personal Commission",
    categories: ["Character Art", "Fantasy", "Digital Art"],
    tags: ["Creature", "Fantasy"],
    blurb: "A spectral fox familiar designed for a tabletop campaign.",
    palette: palette(1),
    icon: "Flame",
  },
  {
    id: "pf-09",
    title: "Northfield Market Poster",
    client: "Northfield Farmers Market",
    categories: ["Print", "Graphic Design"],
    tags: ["Poster", "Event"],
    blurb: "A seasonal poster series for a weekly farmers market.",
    palette: palette(2),
    icon: "FileImage",
  },
  {
    id: "pf-10",
    title: "Echo Visuals Brand Kit",
    client: "Echo Visuals",
    categories: ["Branding", "Graphic Design"],
    tags: ["Brand Kit", "Guidelines"],
    blurb: "Full identity system for a video production studio's rebrand.",
    palette: palette(3),
    icon: "Sparkles",
  },
  {
    id: "pf-11",
    title: "Mochi the Corgi",
    client: "Personal Commission",
    categories: ["Portraits", "Illustration"],
    tags: ["Pet Portrait", "Cartoon"],
    blurb: "A playful cartoon pet portrait turned into a desk print.",
    palette: palette(4),
    icon: "PawPrint",
  },
  {
    id: "pf-12",
    title: "Holloway Hearth Wallpaper",
    client: "Personal Commission",
    categories: ["Digital Art", "Fantasy"],
    tags: ["Wallpaper", "Environment"],
    blurb: "A cozy fantasy cottage scene built as a desktop wallpaper set.",
    palette: palette(5),
    icon: "MonitorSmartphone",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "Graphic Design",
  "Digital Art",
  "Branding",
  "Illustration",
  "Social Media",
  "Print",
  "Gaming",
  "Character Art",
  "Portraits",
  "Fantasy",
  "Comics",
  "Packaging",
];

// ------------------------------------------------------------
export interface PricingPlan {
  id: string;
  name: string;
  price: number | null;
  period: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 25,
    period: "per piece",
    tagline: "For a single, simple graphic done right.",
    features: [
      "1 concept direction",
      "2 revision rounds",
      "Standard delivery (3–5 days)",
      "Print or web-ready files",
      "Personal use license",
    ],
    cta: "Start Small",
  },
  {
    id: "professional",
    name: "Professional",
    price: 85,
    period: "per project",
    tagline: "Our most-booked tier for branding and art pieces.",
    features: [
      "2 concept directions",
      "4 revision rounds",
      "Priority delivery (2–4 days)",
      "Source files included",
      "Commercial use license",
      "1 free add-on of your choice",
    ],
    cta: "Go Professional",
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 220,
    period: "per project",
    tagline: "Full brand kits and multi-piece art commissions.",
    features: [
      "Unlimited concept directions",
      "Unlimited revisions",
      "Rush delivery available",
      "Full source + layered files",
      "Extended commercial license",
      "Dedicated artist check-ins",
    ],
    cta: "Go Premium",
  },
  {
    id: "custom",
    name: "Custom Quote",
    price: null,
    period: "tailored",
    tagline: "Bulk orders, ongoing retainers, or something unusual.",
    features: [
      "Scoped to your exact project",
      "Volume pricing available",
      "Flexible licensing terms",
      "Dedicated point of contact",
      "Custom contract on request",
    ],
    cta: "Request a Quote",
  },
];

// ------------------------------------------------------------
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
  accent: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Hana Lindqvist",
    role: "Founder, Comet & Co.",
    quote:
      "Artsy Stories turned a rough idea into a logo that fit our brand better than anything we sketched ourselves.",
    rating: 5,
    initials: "HL",
    accent: "#FF3D78",
  },
  {
    id: "t2",
    name: "Devon Okafor",
    role: "Streamer, @devonplays",
    quote:
      "My new Twitch overlay got more comments in one stream than my old setup got in a month. Worth every dollar.",
    rating: 5,
    initials: "DO",
    accent: "#29C5EE",
  },
  {
    id: "t3",
    name: "Priya Chandran",
    role: "Personal commission",
    quote:
      "The portrait of my dog made my mom cry happy tears. The artist nailed his expression perfectly.",
    rating: 5,
    initials: "PC",
    accent: "#FFCF3F",
  },
  {
    id: "t4",
    name: "Marcus Bell",
    role: "Indie dev, Pixel Raiders",
    quote:
      "Communication was clear from brief to delivery, and the key art genuinely lifted our store page's conversion.",
    rating: 5,
    initials: "MB",
    accent: "#7C5CFC",
  },
  {
    id: "t5",
    name: "Sofia Ramirez",
    role: "Owner, Riverside Roast Co.",
    quote:
      "Our packaging finally looks like the brand we always imagined. Customers ask about the art constantly.",
    rating: 5,
    initials: "SR",
    accent: "#2BD99A",
  },
];

// ------------------------------------------------------------
export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    title: "Tell us your story",
    description:
      "Fill out a short brief: what you need, any references, and your deadline. No project is too small or too strange.",
    icon: "MessageCircleMore",
  },
  {
    id: "step-2",
    title: "Get a concept",
    description:
      "An artist matched to your style sends an initial direction within days, with a clear price and timeline confirmed.",
    icon: "PenTool",
  },
  {
    id: "step-3",
    title: "Refine together",
    description:
      "Leave feedback right on the dashboard. We revise until the piece actually feels like yours.",
    icon: "RefreshCcw",
  },
  {
    id: "step-4",
    title: "Receive final files",
    description:
      "Download print-ready and web-ready files the moment it's approved, with your license terms attached.",
    icon: "Download",
  },
];

// ------------------------------------------------------------
export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    category: "Revisions",
    question: "How many revisions do I get?",
    answer:
      "It depends on your plan: Starter includes 2 rounds, Professional includes 4, and Premium is unlimited. Extra rounds beyond your plan can be added for a small fee.",
  },
  {
    id: "faq-2",
    category: "Delivery",
    question: "How long does delivery usually take?",
    answer:
      "Most single graphics ship in 2–5 days and full brand kits or detailed art pieces take 6–12 days. Your exact timeline is confirmed before you pay anything.",
  },
  {
    id: "faq-3",
    category: "Payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept major cards and Payoneer for international clients. Payment is split 50% upfront and 50% on final delivery for projects over $100.",
  },
  {
    id: "faq-4",
    category: "Files",
    question: "What file formats will I receive?",
    answer:
      "Standard delivery includes PNG and PDF. Source files (PSD, AI, or Procreate) are included on Professional and Premium plans, or available as an add-on.",
  },
  {
    id: "faq-5",
    category: "Licensing",
    question: "Can I use the artwork commercially?",
    answer:
      "Starter includes personal use only. Professional and Premium include a commercial license covering merchandise, marketing, and product packaging — see your order's terms for specifics.",
  },
  {
    id: "faq-6",
    category: "AI Usage",
    question: "Do you use AI to make the art?",
    answer:
      "AI tools are sometimes used early on for layout sketches or reference exploration, but every final piece is hand-finished and approved by a professional human artist before delivery.",
  },
  {
    id: "faq-7",
    category: "Refunds",
    question: "What's your refund policy?",
    answer:
      "If work hasn't started, you're fully refunded. Once an artist begins, refunds are prorated to the work completed. We'll always try revisions first to get the piece right.",
  },
  {
    id: "faq-8",
    category: "Custom Orders",
    question: "Can I request something that's not listed?",
    answer:
      "Yes — the order form has an 'other' option, and the Custom Quote tier exists exactly for unusual, bulk, or ongoing projects. Tell us what you need and we'll scope it.",
  },
];

// ------------------------------------------------------------
// Client / Admin dashboard mock data
// ------------------------------------------------------------
export type OrderStatus =
  | "Awaiting Brief"
  | "In Progress"
  | "In Review"
  | "Revisions"
  | "Completed";

export interface ClientOrder {
  id: string;
  title: string;
  service: string;
  status: OrderStatus;
  artist: string;
  dueDate: string;
  progress: number;
  price: number;
}

export const clientOrders: ClientOrder[] = [
  {
    id: "ORD-1042",
    title: "Brand Identity Kit — Comet & Co.",
    service: "Brand Identity Kit",
    status: "In Progress",
    artist: "Lior K.",
    dueDate: "2026-06-26",
    progress: 60,
    price: 220,
  },
  {
    id: "ORD-1041",
    title: "Pet Portrait — Mochi the Corgi",
    service: "Pet Portraits",
    status: "In Review",
    artist: "Anya P.",
    dueDate: "2026-06-23",
    progress: 90,
    price: 40,
  },
  {
    id: "ORD-1038",
    title: "Twitch Overlay Pack",
    service: "Twitch Asset Pack",
    status: "Revisions",
    artist: "Marcus T.",
    dueDate: "2026-06-22",
    progress: 75,
    price: 60,
  },
  {
    id: "ORD-1030",
    title: "Comic Cover — Issue #4",
    service: "Comic Covers",
    status: "Completed",
    artist: "Sofia R.",
    dueDate: "2026-06-10",
    progress: 100,
    price: 95,
  },
];

export interface Invoice {
  id: string;
  orderId: string;
  amount: number;
  status: "Paid" | "Due" | "Overdue";
  date: string;
}

export const invoices: Invoice[] = [
  { id: "INV-3051", orderId: "ORD-1042", amount: 110, status: "Paid", date: "2026-06-12" },
  { id: "INV-3052", orderId: "ORD-1042", amount: 110, status: "Due", date: "2026-06-26" },
  { id: "INV-3041", orderId: "ORD-1041", amount: 40, status: "Paid", date: "2026-06-15" },
  { id: "INV-3030", orderId: "ORD-1030", amount: 95, status: "Paid", date: "2026-06-05" },
];

export interface DashboardMessage {
  id: string;
  from: string;
  preview: string;
  time: string;
  unread: boolean;
}

export const clientMessages: DashboardMessage[] = [
  {
    id: "m1",
    from: "Lior K. (Artist)",
    preview: "Here's the second concept for your logo — let me know what you think!",
    time: "2h ago",
    unread: true,
  },
  {
    id: "m2",
    from: "Artsy Stories Support",
    preview: "Your invoice INV-3052 is ready for review.",
    time: "1d ago",
    unread: true,
  },
  {
    id: "m3",
    from: "Anya P. (Artist)",
    preview: "Final files for Mochi's portrait are uploaded for your approval.",
    time: "2d ago",
    unread: false,
  },
];

// ------------------------------------------------------------
// Admin dashboard mock data
// ------------------------------------------------------------
export interface AdminClient {
  id: string;
  name: string;
  email: string;
  activeOrders: number;
  totalSpent: number;
  joined: string;
}

export const adminClients: AdminClient[] = [
  { id: "c1", name: "Hana Lindqvist", email: "hana@cometandco.com", activeOrders: 1, totalSpent: 540, joined: "2025-11-02" },
  { id: "c2", name: "Devon Okafor", email: "devon@devonplays.tv", activeOrders: 1, totalSpent: 180, joined: "2026-01-14" },
  { id: "c3", name: "Priya Chandran", email: "priya.c@mail.com", activeOrders: 1, totalSpent: 40, joined: "2026-04-20" },
  { id: "c4", name: "Marcus Bell", email: "marcus@pixelraiders.dev", activeOrders: 0, totalSpent: 320, joined: "2025-09-30" },
  { id: "c5", name: "Sofia Ramirez", email: "sofia@riversideroast.co", activeOrders: 0, totalSpent: 95, joined: "2026-02-08" },
];

export interface AdminProject {
  id: string;
  client: string;
  title: string;
  status: OrderStatus;
  artist: string;
  dueDate: string;
}

export const adminProjects: AdminProject[] = [
  { id: "ORD-1042", client: "Hana Lindqvist", title: "Brand Identity Kit", status: "In Progress", artist: "Lior K.", dueDate: "2026-06-26" },
  { id: "ORD-1041", client: "Priya Chandran", title: "Pet Portrait", status: "In Review", artist: "Anya P.", dueDate: "2026-06-23" },
  { id: "ORD-1038", client: "Devon Okafor", title: "Twitch Overlay Pack", status: "Revisions", artist: "Marcus T.", dueDate: "2026-06-22" },
  { id: "ORD-1044", client: "Marcus Bell", title: "Key Art Refresh", status: "Awaiting Brief", artist: "Unassigned", dueDate: "2026-07-02" },
  { id: "ORD-1030", client: "Sofia Ramirez", title: "Comic Cover Issue #4", status: "Completed", artist: "Sofia R.", dueDate: "2026-06-10" },
];

export interface AnalyticsStat {
  id: string;
  label: string;
  value: string;
  delta: string;
  icon: string;
}

export const analyticsStats: AnalyticsStat[] = [
  { id: "a1", label: "Active Projects", value: "12", delta: "+3 this week", icon: "FolderKanban" },
  { id: "a2", label: "Revenue (MTD)", value: "$3,420", delta: "+18% vs last month", icon: "TrendingUp" },
  { id: "a3", label: "Avg. Turnaround", value: "4.6 days", delta: "-0.4 days", icon: "Timer" },
  { id: "a4", label: "Client Satisfaction", value: "4.9 / 5", delta: "128 reviews", icon: "Star" },
];

// ------------------------------------------------------------
export interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const addOns: AddOn[] = [
  { id: "addon-rush", name: "Rush Delivery", price: 35, description: "Move to the front of the queue, ~50% faster turnaround." },
  { id: "addon-source", name: "Source Files", price: 15, description: "Receive layered PSD / AI / Procreate source files." },
  { id: "addon-revision", name: "Extra Revision Round", price: 10, description: "One additional round of revisions beyond your plan." },
  { id: "addon-commercial", name: "Extended Commercial License", price: 25, description: "Use the artwork across merchandise and paid ads." },
  { id: "addon-print", name: "Print-Ready Export", price: 8, description: "CMYK, bleed, and crop marks prepared for a print shop." },
];

export const deadlineOptions = [
  { id: "standard", label: "Standard", detail: "Default timeline for the service", multiplier: 1 },
  { id: "priority", label: "Priority", detail: "About 30% faster", multiplier: 1.2 },
  { id: "rush", label: "Rush", detail: "About 50% faster", multiplier: 1.4 },
];
