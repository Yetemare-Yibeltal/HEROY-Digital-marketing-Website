import {
  Megaphone,
  Search,
  Code2,
  Smartphone,
  Palette,
  Image as ImageIcon,
  Video,
  Bot,
  PenTool,
  Share2,
  Camera,
  ShoppingCart,
  Cloud,
  Shield,
  Database,
  Layers,
  Box,
  Users,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: typeof Megaphone;
  shortDescription: string;
  gradient: string;

  // Extended professional service information
  category?: string;
  description?: string;
  outcomes?: string[];
  capabilities?: string[];
  technologies?: string[];
  suitableFor?: string[];
  delivery?: string[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    shortDescription:
      "Full-funnel marketing strategies that turn audiences into customers.",
    gradient: "from-pink-500 to-purple-600",

    category: "Growth & Marketing",
    description:
      "Data-informed digital marketing strategies designed to build awareness, attract qualified audiences, strengthen brand presence, and support measurable business growth across relevant digital channels.",
    outcomes: [
      "Stronger digital brand visibility",
      "More qualified audience engagement",
      "Consistent marketing campaigns",
      "Clearer customer journeys",
    ],
    capabilities: [
      "Campaign strategy",
      "Audience research",
      "Content strategy",
      "Performance marketing",
      "Conversion optimization",
      "Marketing analytics",
    ],
    technologies: [
      "Google Analytics",
      "Search platforms",
      "Social platforms",
      "Marketing automation",
    ],
    suitableFor: [
      "Startups",
      "Growing businesses",
      "Organizations",
      "Established brands",
    ],
    delivery: [
      "Discovery",
      "Strategy",
      "Campaign execution",
      "Measurement",
      "Continuous optimization",
    ],
    featured: true,
  },

  {
    slug: "seo",
    title: "SEO Services",
    icon: Search,
    shortDescription:
      "Rank higher, get found, and grow organic traffic sustainably.",
    gradient: "from-violet-500 to-purple-700",

    category: "Growth & Marketing",
    description:
      "Technical and content-focused SEO designed to improve search visibility, strengthen website foundations, and help businesses reach people actively searching for their products or services.",
    outcomes: [
      "Improved search visibility",
      "Stronger technical foundations",
      "Better content discoverability",
      "More relevant organic traffic",
    ],
    capabilities: [
      "Technical SEO",
      "On-page optimization",
      "Keyword research",
      "Content optimization",
      "Site structure",
      "SEO performance analysis",
    ],
    technologies: [
      "Google Search Console",
      "Analytics platforms",
      "Structured data",
      "Modern web frameworks",
    ],
    suitableFor: [
      "Business websites",
      "E-commerce stores",
      "Service companies",
      "Content platforms",
    ],
    delivery: [
      "SEO audit",
      "Opportunity research",
      "Implementation",
      "Monitoring",
      "Optimization",
    ],
    featured: true,
  },

  {
    slug: "web-development",
    title: "Web Development",
    icon: Code2,
    shortDescription: "High-performance websites built with modern frameworks.",
    gradient: "from-cyan-500 to-blue-600",

    category: "Software Engineering",
    description:
      "Modern, responsive websites and web applications engineered around performance, accessibility, maintainability, scalability, and real business requirements.",
    outcomes: [
      "Fast and responsive experiences",
      "Scalable application foundations",
      "Maintainable codebases",
      "Responsive cross-device interfaces",
    ],
    capabilities: [
      "Business websites",
      "Web applications",
      "Landing pages",
      "Custom dashboards",
      "API integration",
      "Full-stack development",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
    ],
    suitableFor: ["Startups", "Companies", "Organizations", "Digital products"],
    delivery: [
      "Requirements",
      "Architecture",
      "UI implementation",
      "Backend integration",
      "Testing",
      "Deployment",
    ],
    featured: true,
  },

  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    shortDescription: "Native and cross-platform apps for Android and iOS.",
    gradient: "from-green-500 to-emerald-600",

    category: "Software Engineering",
    description:
      "Mobile applications designed around real user workflows, intuitive interfaces, reliable functionality, and scalable application architecture.",
    outcomes: [
      "Mobile-first product experiences",
      "Consistent application workflows",
      "Scalable application architecture",
      "User-focused interfaces",
    ],
    capabilities: [
      "Mobile UI development",
      "API integration",
      "Authentication",
      "Push notifications",
      "Offline-aware experiences",
      "Application maintenance",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "REST APIs",
      "Node.js",
      "Firebase",
    ],
    suitableFor: [
      "Startups",
      "Businesses",
      "Service platforms",
      "Digital products",
    ],
    delivery: [
      "Product discovery",
      "UX planning",
      "Development",
      "Testing",
      "Release preparation",
      "Maintenance",
    ],
    featured: true,
  },

  {
    slug: "android-development",
    title: "Android Development",
    icon: Smartphone,
    shortDescription:
      "Dedicated native Android applications built for performance.",
    gradient: "from-emerald-500 to-green-700",

    category: "Mobile Engineering",
    description:
      "Dedicated Android applications focused on reliable performance, intuitive navigation, device compatibility, and maintainable application architecture.",
    outcomes: [
      "Purpose-built Android experiences",
      "Reliable application performance",
      "Responsive mobile interfaces",
      "Maintainable application structure",
    ],
    capabilities: [
      "Android application development",
      "API integration",
      "Authentication flows",
      "Local data handling",
      "Notifications",
      "App optimization",
    ],
    technologies: ["Android", "Kotlin", "REST APIs", "Firebase"],
    suitableFor: [
      "Businesses",
      "Startups",
      "Internal applications",
      "Consumer applications",
    ],
    delivery: [
      "Planning",
      "UI implementation",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance",
    ],
  },

  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: Palette,
    shortDescription:
      "User-centered design that drives engagement and retention.",
    gradient: "from-orange-500 to-pink-600",

    category: "Design & Experience",
    description:
      "User-centered digital product design that combines visual clarity, usability, responsive layouts, interaction patterns, and strong brand consistency.",
    outcomes: [
      "Clearer user journeys",
      "More intuitive interfaces",
      "Consistent visual systems",
      "Responsive product experiences",
    ],
    capabilities: [
      "UX research",
      "Wireframing",
      "Interface design",
      "Design systems",
      "Responsive design",
      "Prototype development",
    ],
    technologies: [
      "Figma",
      "Design systems",
      "Prototyping tools",
      "Responsive UI frameworks",
    ],
    suitableFor: [
      "Websites",
      "Mobile applications",
      "SaaS products",
      "Business platforms",
    ],
    delivery: [
      "Research",
      "Information architecture",
      "Wireframes",
      "Visual design",
      "Prototype",
      "Developer handoff",
    ],
    featured: true,
  },

  {
    slug: "graphics-design",
    title: "Graphics Design",
    icon: ImageIcon,
    shortDescription: "Eye-catching visuals for every platform and purpose.",
    gradient: "from-yellow-500 to-orange-500",

    category: "Creative & Brand",
    description:
      "Professional visual design for brands, campaigns, digital products, social media, marketing materials, and other communication needs.",
    outcomes: [
      "Consistent brand presentation",
      "Professional marketing visuals",
      "Stronger visual communication",
      "Reusable creative assets",
    ],
    capabilities: [
      "Brand graphics",
      "Marketing materials",
      "Social media graphics",
      "Presentation design",
      "Digital advertising creatives",
      "Visual assets",
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
    suitableFor: ["Brands", "Marketing teams", "Startups", "Organizations"],
    delivery: [
      "Creative brief",
      "Concept development",
      "Design",
      "Review",
      "Final asset preparation",
    ],
  },

  {
    slug: "video-editing",
    title: "Video Editing & Motion",
    icon: Video,
    shortDescription:
      "Professional video editing and motion graphics for any platform.",
    gradient: "from-red-500 to-orange-600",

    category: "Creative & Media",
    description:
      "Engaging video editing and motion design for marketing campaigns, social media, product presentations, brand communication, and digital experiences.",
    outcomes: [
      "Polished video content",
      "Stronger visual storytelling",
      "Platform-ready media",
      "Consistent brand presentation",
    ],
    capabilities: [
      "Video editing",
      "Motion graphics",
      "Transitions",
      "Visual effects",
      "Short-form content",
      "Brand video production",
    ],
    technologies: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Motion design tools",
    ],
    suitableFor: ["Brands", "Creators", "Marketing teams", "Organizations"],
    delivery: [
      "Creative direction",
      "Editing",
      "Motion design",
      "Review",
      "Final export",
    ],
  },

  {
    slug: "photography",
    title: "Photography",
    icon: Camera,
    shortDescription:
      "Professional photography for brands, products, and events.",
    gradient: "from-slate-500 to-gray-700",

    category: "Creative & Media",
    description:
      "Purpose-driven photography for brands, products, people, campaigns, events, and digital content where strong imagery supports communication and positioning.",
    outcomes: [
      "Professional visual assets",
      "Stronger brand presentation",
      "Reusable content library",
      "High-quality campaign imagery",
    ],
    capabilities: [
      "Brand photography",
      "Product photography",
      "Event photography",
      "Portrait photography",
      "Creative direction",
      "Photo editing",
    ],
    suitableFor: ["Businesses", "Brands", "Events", "Marketing campaigns"],
    delivery: [
      "Creative planning",
      "Photography",
      "Selection",
      "Editing",
      "Asset delivery",
    ],
  },

  {
    slug: "content-creation",
    title: "Content Creation",
    icon: PenTool,
    shortDescription: "Strategic content that informs, engages, and converts.",
    gradient: "from-indigo-500 to-blue-700",

    category: "Content & Marketing",
    description:
      "Strategic digital content created around audience needs, brand positioning, search visibility, and consistent communication across relevant channels.",
    outcomes: [
      "Consistent brand communication",
      "Useful audience-focused content",
      "Stronger digital presence",
      "Reusable content assets",
    ],
    capabilities: [
      "Content strategy",
      "Website copy",
      "Social content",
      "Campaign content",
      "Educational content",
      "Content planning",
    ],
    technologies: [
      "CMS platforms",
      "Analytics tools",
      "SEO tools",
      "Design platforms",
    ],
    suitableFor: ["Businesses", "Startups", "Organizations", "Marketing teams"],
    delivery: [
      "Content planning",
      "Research",
      "Creation",
      "Review",
      "Publishing support",
    ],
  },

  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: Share2,
    shortDescription:
      "Build communities and grow your brand on every platform.",
    gradient: "from-pink-500 to-rose-600",

    category: "Growth & Marketing",
    description:
      "Social media strategy and content designed to build meaningful brand presence, engage relevant audiences, and create consistent communication across selected platforms.",
    outcomes: [
      "Consistent social presence",
      "Relevant audience engagement",
      "Stronger brand awareness",
      "Structured content planning",
    ],
    capabilities: [
      "Social strategy",
      "Content calendars",
      "Creative campaigns",
      "Community engagement",
      "Performance analysis",
      "Platform optimization",
    ],
    suitableFor: ["Brands", "Startups", "Organizations", "Creators"],
    delivery: [
      "Strategy",
      "Content planning",
      "Creative production",
      "Publishing",
      "Performance review",
    ],
  },

  {
    slug: "ecommerce",
    title: "E-commerce Solutions",
    icon: ShoppingCart,
    shortDescription: "Custom online stores engineered to sell.",
    gradient: "from-amber-500 to-yellow-600",

    category: "Digital Commerce",
    description:
      "Modern e-commerce experiences that connect product discovery, customer journeys, catalog management, checkout workflows, and business operations.",
    outcomes: [
      "Streamlined shopping experiences",
      "Responsive storefronts",
      "Flexible product management",
      "Integrated digital commerce workflows",
    ],
    capabilities: [
      "Online stores",
      "Product catalogs",
      "Shopping carts",
      "Checkout integration",
      "Order workflows",
      "Payment integration",
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Payment APIs"],
    suitableFor: [
      "Retail businesses",
      "Product brands",
      "Growing stores",
      "Digital commerce startups",
    ],
    delivery: [
      "Commerce planning",
      "UX design",
      "Development",
      "Integration",
      "Testing",
      "Deployment",
    ],
    featured: true,
  },

  {
    slug: "saas-development",
    title: "SaaS Development",
    icon: Layers,
    shortDescription: "Scalable SaaS products from concept to launch.",
    gradient: "from-purple-500 to-indigo-700",

    category: "Software Engineering",
    description:
      "Software-as-a-Service platforms engineered around real business workflows, user accounts, application logic, APIs, data management, and scalable product architecture.",
    outcomes: [
      "Structured SaaS foundations",
      "Scalable product architecture",
      "Role-based application workflows",
      "Maintainable backend systems",
    ],
    capabilities: [
      "Product architecture",
      "Authentication",
      "Role-based access",
      "Dashboards",
      "API development",
      "Database architecture",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
    ],
    suitableFor: [
      "Startups",
      "B2B products",
      "Internal platforms",
      "Digital businesses",
    ],
    delivery: [
      "Product discovery",
      "Architecture",
      "MVP development",
      "Testing",
      "Deployment",
      "Iteration",
    ],
    featured: true,
  },

  {
    slug: "ai-solutions",
    title: "AI Solutions",
    icon: Bot,
    shortDescription: "AI-powered chatbots, automation, and smart features.",
    gradient: "from-violet-500 to-fuchsia-600",

    category: "AI & Automation",
    description:
      "Practical AI integrations that help products and organizations automate repetitive workflows, improve access to information, and introduce intelligent digital experiences.",
    outcomes: [
      "Smarter digital workflows",
      "Reduced repetitive processes",
      "AI-assisted user experiences",
      "Faster access to relevant information",
    ],
    capabilities: [
      "AI assistants",
      "Chatbots",
      "Workflow automation",
      "AI integrations",
      "Knowledge-based experiences",
      "Intelligent product features",
    ],
    technologies: [
      "AI APIs",
      "LLM integrations",
      "Node.js",
      "TypeScript",
      "REST APIs",
    ],
    suitableFor: [
      "Businesses",
      "SaaS products",
      "Customer support teams",
      "Digital platforms",
    ],
    delivery: [
      "Use-case discovery",
      "AI architecture",
      "Integration",
      "Testing",
      "Deployment",
      "Optimization",
    ],
    featured: true,
  },

  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    icon: Cloud,
    shortDescription:
      "Reliable, scalable cloud infrastructure for modern products.",
    gradient: "from-sky-500 to-cyan-600",

    category: "Cloud & Infrastructure",
    description:
      "Cloud-oriented application infrastructure and deployment practices designed to support reliable, maintainable, and scalable digital products.",
    outcomes: [
      "Reliable application deployment",
      "Better infrastructure organization",
      "Scalable application foundations",
      "Improved operational visibility",
    ],
    capabilities: [
      "Cloud deployment",
      "Application hosting",
      "Environment configuration",
      "Database deployment",
      "Monitoring",
      "Infrastructure planning",
    ],
    technologies: [
      "AWS",
      "Cloud hosting",
      "Docker",
      "Node.js",
      "Managed databases",
    ],
    suitableFor: [
      "Web applications",
      "SaaS products",
      "Startups",
      "Growing businesses",
    ],
    delivery: [
      "Infrastructure assessment",
      "Environment setup",
      "Deployment",
      "Configuration",
      "Monitoring",
      "Maintenance",
    ],
  },

  {
    slug: "cybersecurity",
    title: "Cybersecurity Services",
    icon: Shield,
    shortDescription: "Protect your systems, data, and users from threats.",
    gradient: "from-red-600 to-rose-700",

    category: "Security & Reliability",
    description:
      "Security-minded engineering practices focused on reducing common application risks, protecting sensitive workflows, and strengthening the foundations of digital products.",
    outcomes: [
      "Stronger application security practices",
      "Reduced common security risks",
      "Improved access control",
      "Security-aware development workflows",
    ],
    capabilities: [
      "Security reviews",
      "Authentication",
      "Authorization",
      "API security",
      "Input validation",
      "Security best practices",
    ],
    technologies: [
      "JWT",
      "HTTPS",
      "Secure APIs",
      "Validation frameworks",
      "Security middleware",
    ],
    suitableFor: [
      "Web applications",
      "APIs",
      "SaaS products",
      "Business platforms",
    ],
    delivery: [
      "Security assessment",
      "Risk identification",
      "Implementation",
      "Testing",
      "Hardening",
      "Documentation",
    ],
  },

  {
    slug: "erp-crm",
    title: "ERP & CRM Systems",
    icon: Database,
    shortDescription:
      "Custom systems to manage operations and customer relationships.",
    gradient: "from-teal-500 to-emerald-700",

    category: "Business Systems",
    description:
      "Custom business platforms that bring operational workflows, customer information, internal processes, and business data into structured digital systems.",
    outcomes: [
      "Centralized business information",
      "Structured workflows",
      "Improved operational visibility",
      "Better customer data organization",
    ],
    capabilities: [
      "CRM platforms",
      "ERP workflows",
      "Customer management",
      "Employee management",
      "Reporting dashboards",
      "Business automation",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
    ],
    suitableFor: [
      "Growing businesses",
      "Organizations",
      "Service companies",
      "Internal operations teams",
    ],
    delivery: [
      "Workflow discovery",
      "System architecture",
      "Interface design",
      "Development",
      "Testing",
      "Deployment",
    ],
    featured: true,
  },

  {
    slug: "3d-experiences",
    title: "3D Interactive Experiences",
    icon: Box,
    shortDescription: "Immersive 3D and WebGL websites that set brands apart.",
    gradient: "from-blue-600 to-violet-700",

    category: "Interactive Experiences",
    description:
      "Immersive browser-based experiences that combine modern web development, interactive 3D, animation, and visual storytelling to create memorable digital products.",
    outcomes: [
      "Distinctive digital experiences",
      "Interactive brand storytelling",
      "Immersive product presentation",
      "Modern visual interactions",
    ],
    capabilities: [
      "Interactive 3D",
      "WebGL experiences",
      "3D product presentation",
      "Scroll-based interactions",
      "Motion design",
      "Interactive storytelling",
    ],
    technologies: [
      "Three.js",
      "React Three Fiber",
      "WebGL",
      "Next.js",
      "Framer Motion",
    ],
    suitableFor: [
      "Premium brands",
      "Product launches",
      "Creative agencies",
      "Interactive portfolios",
    ],
    delivery: [
      "Creative concept",
      "Experience design",
      "3D development",
      "Performance optimization",
      "Testing",
      "Launch",
    ],
    featured: true,
  },

  {
    slug: "it-consulting",
    title: "IT Consulting & Automation",
    icon: Users,
    shortDescription:
      "Strategic technology guidance and business process automation.",
    gradient: "from-gray-500 to-slate-700",

    category: "Technology Consulting",
    description:
      "Practical technology consulting for organizations evaluating digital products, technical architecture, automation opportunities, development workflows, and long-term technology direction.",
    outcomes: [
      "Clearer technology decisions",
      "Better technical planning",
      "Identified automation opportunities",
      "More structured digital workflows",
    ],
    capabilities: [
      "Technical consulting",
      "Architecture planning",
      "Digital transformation",
      "Process automation",
      "Technology assessment",
      "Development planning",
    ],
    technologies: [
      "Modern web platforms",
      "Cloud services",
      "APIs",
      "Automation tools",
      "AI integrations",
    ],
    suitableFor: [
      "Startups",
      "SMEs",
      "Organizations",
      "Teams modernizing workflows",
    ],
    delivery: [
      "Discovery",
      "Technical assessment",
      "Recommendations",
      "Implementation planning",
      "Automation",
      "Ongoing guidance",
    ],
  },
];
