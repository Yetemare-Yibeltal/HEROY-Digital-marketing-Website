"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

type FAQCategory =
  | "Company"
  | "Services"
  | "Pricing"
  | "Process"
  | "Technical"
  | "Support"
  | "Digital Marketing"
  | "International Growth";

type FAQ = {
  id: number;
  category: FAQCategory;
  question: string;
  answer: string;
};

const categories: Array<"All" | FAQCategory> = [
  "All",
  "Company",
  "Services",
  "Digital Marketing",
  "International Growth",
  "Pricing",
  "Process",
  "Technical",
  "Support",
];

const faqs: FAQ[] = [
  {
    id: 1,
    category: "Services",
    question: "What services does HEROY offer?",
    answer:
      "HEROY offers a complete range of digital services including digital marketing, SEO, web development, mobile app development, UI/UX design, graphics design, video editing, AI solutions, branding, e-commerce development, SaaS development, cloud solutions, cybersecurity, ERP and CRM systems, 3D interactive experiences, and IT consulting. We bring strategy, creative work, technology, and growth services together so clients can work with one coordinated team.",
  },
  {
    id: 2,
    category: "Services",
    question: "Do you work with clients outside Ethiopia?",
    answer:
      "Yes. HEROY works remotely with clients in Ethiopia and internationally. We communicate in English and can coordinate projects across different time zones using email, WhatsApp, Telegram, video meetings, project-management tools, and shared documents.",
  },
  {
    id: 3,
    category: "Services",
    question: "Can you handle both design and development for my project?",
    answer:
      "Yes. Design and development can be handled within the same project team. This allows UI/UX, branding, frontend, backend, and product requirements to be discussed together instead of being passed between unrelated vendors.",
  },
  {
    id: 4,
    category: "Services",
    question: "Do you offer ongoing maintenance and support after launch?",
    answer:
      "Yes. We can provide post-launch support, maintenance, content updates, performance monitoring, security updates, bug fixes, and feature development. The exact support period and response expectations depend on the project scope and selected maintenance arrangement.",
  },
  {
    id: 5,
    category: "Services",
    question: "Can you help if I already have a website but it needs improvement?",
    answer:
      "Yes. We can review an existing website or application and recommend whether it needs a redesign, technical improvements, performance optimization, SEO work, accessibility improvements, new features, or a complete rebuild. We prefer to assess the existing system before recommending a rebuild.",
  },
  {
    id: 6,
    category: "Pricing",
    question: "How much does a website cost?",
    answer:
      "Website pricing depends on the number of pages, design requirements, content, integrations, CMS requirements, e-commerce functionality, SEO scope, and custom development. HEROY's published packages start from $499 for selected starter projects. Larger business websites, e-commerce platforms, web applications, and SaaS products are quoted according to their requirements.",
  },
  {
    id: 7,
    category: "Pricing",
    question: "Do you require payment upfront?",
    answer:
      "Most projects use a 50% deposit and 50% payment at delivery. Larger projects may use milestone-based payments tied to agreed project phases. The exact payment schedule is included in the written proposal before work begins.",
  },
  {
    id: 8,
    category: "Pricing",
    question: "Are there any hidden fees?",
    answer:
      "Project costs are outlined in the proposal before work begins. If you request additional work outside the agreed scope, we discuss the change and its cost before implementing it. Third-party expenses such as hosting, paid software, advertising spend, domains, premium plugins, or licensed assets are identified separately when applicable.",
  },
  {
    id: 9,
    category: "Pricing",
    question: "Do you offer discounts for startups or nonprofits?",
    answer:
      "We can consider startup, nonprofit, and organization-specific project structures depending on the scope and available budget. The appropriate pricing or payment arrangement is discussed during the consultation rather than being automatically applied to every project.",
  },
  {
    id: 10,
    category: "Pricing",
    question: "What payment methods do you accept?",
    answer:
      "Depending on the client's location and project arrangement, HEROY can work with bank transfer, Telebirr, PayPal, and Stripe. The available payment method and invoicing currency are confirmed before the project begins.",
  },
  {
    id: 11,
    category: "Process",
    question: "What does your project process look like?",
    answer:
      "Our general process is Discover, Strategy, Design, Build, Test and Refine, Launch, and Support. The exact stages vary according to the project. Marketing engagements also include research, audience definition, channel planning, campaign setup, measurement, reporting, and continuous optimization.",
  },
  {
    id: 12,
    category: "Process",
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. A simple business website may take a few weeks, while a custom web application, SaaS platform, mobile application, or larger digital transformation project can take several months. Marketing engagements are normally structured around monthly or campaign-based cycles. A detailed timeline is provided after requirements are understood.",
  },
  {
    id: 13,
    category: "Process",
    question: "How many revisions are included?",
    answer:
      "The number of included revision rounds depends on the selected package and project scope. We encourage clients to provide consolidated feedback during review stages because this reduces unnecessary back-and-forth and keeps delivery predictable.",
  },
  {
    id: 14,
    category: "Process",
    question: "How do you handle project communication?",
    answer:
      "Clients communicate directly with the project team through agreed channels such as email, WhatsApp, Telegram, and scheduled video calls. We use written scopes, milestone updates, review points, and documented decisions to keep international projects clear and organized.",
  },
  {
    id: 15,
    category: "Process",
    question: "What do you need from me to get started?",
    answer:
      "Depending on the project, we may need your business information, goals, target audience, existing brand assets, website or platform access, content, analytics access, advertising-account access, competitors, previous campaign information, and any technical requirements. We provide a project-specific checklist so you know what is required.",
  },
  {
    id: 16,
    category: "Technical",
    question: "What technology stack do you use for websites?",
    answer:
      "Our web projects commonly use technologies such as Next.js, React, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, PostgreSQL, and modern deployment platforms. We also work with CMS platforms and third-party services where they are appropriate. Technology decisions are made according to the project's requirements rather than forcing every client into one stack.",
  },
  {
    id: 17,
    category: "Technical",
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Responsive behavior is considered from the beginning of the design and development process. We build interfaces for mobile, tablet, and desktop layouts and test important pages and interactions across common browser and device configurations.",
  },
  {
    id: 18,
    category: "Technical",
    question: "Do you build SEO into the website from the start?",
    answer:
      "Yes. Technical SEO can be incorporated during development through semantic HTML, appropriate heading structures, metadata, canonical URLs, structured data where appropriate, crawlable pages, responsive layouts, performance optimization, sitemap configuration, and other technical foundations. Ongoing SEO strategy is available as a separate service.",
  },
  {
    id: 19,
    category: "Technical",
    question: "Who hosts the website after you build it?",
    answer:
      "Hosting depends on the project's architecture and requirements. Next.js projects may use platforms such as Vercel, while backend systems may use appropriate cloud or application-hosting providers. We can deploy to infrastructure we recommend or help configure infrastructure that your organization already owns.",
  },
  {
    id: 20,
    category: "Technical",
    question: "Will I own the code and design after the project?",
    answer:
      "Ownership and licensing are defined in the project agreement. For custom work, the agreement can specify transfer of the project source code and project-specific design assets after the agreed payments are completed. Third-party software, fonts, stock media, plugins, and other licensed assets remain subject to their original licenses.",
  },
  {
    id: 21,
    category: "Support",
    question: "What happens if something breaks after launch?",
    answer:
      "Projects normally include an agreed post-launch support or warranty period for issues caused by the delivered work. Problems caused by third-party services, hosting changes, unauthorized modifications, or new requirements may require additional work. Ongoing maintenance plans can provide continued technical support.",
  },
  {
    id: 22,
    category: "Support",
    question: "Can I update the website content myself after launch?",
    answer:
      "Yes. If the project includes a CMS, we can provide a content-management interface that allows authorized team members to update supported content without changing the source code. We can also provide documentation or a walkthrough after launch.",
  },
  {
    id: 23,
    category: "Support",
    question: "How do I get in touch if I have an urgent issue?",
    answer:
      "Active clients can use the agreed project communication channel for urgent issues. For general inquiries, you can contact HEROY through the contact page or the published company email. Response times depend on the support arrangement, time of day, and severity of the issue.",
  },
  {
    id: 24,
    category: "Company",
    question: "Is HEROY a registered company or a freelance collective?",
    answer:
      "HEROY is a growing digital solutions studio based in Ethiopia. Our projects use defined scopes, written agreements, documented deliverables, and a structured team workflow. Any formal legal or registration information should be confirmed through the company's official documentation.",
  },
  {
    id: 25,
    category: "Company",
    question: "What makes HEROY different from hiring a freelancer?",
    answer:
      "HEROY is structured around multiple digital disciplines, including engineering, design, marketing, and creative production. This allows projects that require several specialties to be coordinated within one team while maintaining direct communication with the people involved in the work.",
  },
  {
    id: 26,
    category: "Company",
    question: "How big is the HEROY team?",
    answer:
      "HEROY currently operates with a lean core team and can bring in specialized professionals for specific project requirements. This model allows the project team to be matched to the work instead of maintaining a large fixed structure for every service.",
  },
  {
    id: 27,
    category: "Company",
    question: "Can I visit your office or meet in person?",
    answer:
      "The HEROY team is based in Ethiopia and works with clients remotely. When practical, in-person meetings can be discussed for clients in the local area. International clients can work with the team through video meetings and digital collaboration tools.",
  },

  // ---------------------------------------------------------------------------
  // INTERNATIONAL DIGITAL MARKETING
  // ---------------------------------------------------------------------------

  {
    id: 28,
    category: "Digital Marketing",
    question: "What does digital marketing include at HEROY?",
    answer:
      "Our digital marketing work can include strategy, audience research, SEO, content marketing, social media, paid advertising, email marketing, creative production, landing pages, conversion optimization, analytics, reporting, lead generation, remarketing, and marketing automation. The mix depends on your objectives, audience, market, and available budget.",
  },
  {
    id: 29,
    category: "Digital Marketing",
    question: "Can HEROY create a complete digital marketing strategy?",
    answer:
      "Yes. We can develop a strategy around your business objectives, target audiences, positioning, customer journey, competitors, channels, content requirements, conversion goals, measurement framework, and budget. The strategy can then be translated into an execution roadmap with priorities and measurable objectives.",
  },
  {
    id: 30,
    category: "Digital Marketing",
    question: "Do you offer international SEO?",
    answer:
      "Yes. International SEO can include country and language targeting, international keyword research, localized content strategy, technical international SEO, appropriate URL structures, hreflang implementation where required, international landing pages, local search considerations, and performance measurement by market.",
  },
  {
    id: 31,
    category: "International Growth",
    question: "Can you help a business enter a new international market?",
    answer:
      "Yes. We can support the digital side of market expansion through audience research, competitor research, localization planning, international SEO, localized landing pages, content strategy, paid-media testing, analytics, and conversion optimization. Market-entry decisions should also consider legal, regulatory, operational, cultural, and commercial requirements outside the scope of digital marketing.",
  },
  {
    id: 32,
    category: "International Growth",
    question: "How do you approach marketing in different countries?",
    answer:
      "We start by identifying differences in audience behavior, search demand, language, culture, competition, purchasing processes, available channels, and business objectives. We then adapt messaging, creative assets, landing pages, campaigns, and measurement to the relevant market instead of simply translating one campaign word-for-word.",
  },
  {
    id: 33,
    category: "International Growth",
    question: "Do you provide multilingual marketing?",
    answer:
      "We can support multilingual digital campaigns and localized content workflows. Depending on the language and market, we may work with qualified translators, native-language specialists, or client-provided reviewers to ensure that localization is appropriate for the intended audience.",
  },
  {
    id: 34,
    category: "International Growth",
    question: "What is the difference between translation and localization?",
    answer:
      "Translation focuses primarily on converting language from one language to another. Localization goes further by adapting terminology, messaging, examples, offers, calls to action, imagery, formats, and user experience to the cultural and commercial context of the target market.",
  },
  {
    id: 35,
    category: "Digital Marketing",
    question: "Do you provide keyword research?",
    answer:
      "Yes. Keyword research can identify relevant search demand, user intent, competition, commercial opportunities, geographic variations, and content opportunities. For international campaigns, keyword research should normally be performed for each relevant market and language rather than simply translating keywords from another country.",
  },
  {
    id: 36,
    category: "Digital Marketing",
    question: "Do you provide content marketing?",
    answer:
      "Yes. Content marketing can include strategic blog content, landing pages, educational resources, case studies, social content, email content, video concepts, and other assets designed around audience needs and business objectives. Content plans can be connected to SEO and conversion goals.",
  },
  {
    id: 37,
    category: "Digital Marketing",
    question: "Do you manage social media marketing?",
    answer:
      "Social media support can include strategy, content planning, creative direction, copywriting, campaign concepts, publishing workflows, community-oriented content, paid social campaigns, and performance reporting. The exact platforms depend on where your target audience actually spends time.",
  },
  {
    id: 38,
    category: "Digital Marketing",
    question: "Which social media platforms do you work with?",
    answer:
      "The appropriate platforms depend on your audience and objectives. Depending on the project, campaigns may involve platforms such as Facebook, Instagram, LinkedIn, TikTok, YouTube, X, and other relevant channels. We recommend selecting platforms based on audience fit rather than trying to maintain every platform simultaneously.",
  },
  {
    id: 39,
    category: "Digital Marketing",
    question: "Do you manage Google Ads and paid advertising?",
    answer:
      "Yes. Paid advertising services can include campaign planning, account and campaign structure, audience targeting, keyword selection, ad creative, landing-page recommendations, conversion tracking, budget management, testing, and performance analysis. Advertising spend is normally separate from agency service fees.",
  },
  {
    id: 40,
    category: "Digital Marketing",
    question: "Can you manage Meta advertising campaigns?",
    answer:
      "Yes. Depending on the campaign, we can support Meta advertising across relevant placements and objectives, including audience research, creative direction, campaign structure, conversion tracking, testing, remarketing, and performance reporting. Results depend on the market, offer, creative, landing page, audience, budget, and other factors.",
  },
  {
    id: 41,
    category: "Digital Marketing",
    question: "Do you offer email marketing?",
    answer:
      "Yes. Email marketing can include strategy, list segmentation, campaign planning, newsletter design, automated sequences, lead nurturing, promotional campaigns, copywriting, analytics, and optimization. We can work with the email platform that best fits the client's requirements.",
  },
  {
    id: 42,
    category: "Digital Marketing",
    question: "Do you provide lead-generation campaigns?",
    answer:
      "Yes. Lead-generation work can combine advertising, landing pages, content, forms, calls to action, CRM integration, email follow-up, remarketing, and conversion optimization. The campaign should be designed around the quality of leads required rather than simply maximizing the number of form submissions.",
  },
  {
    id: 43,
    category: "Digital Marketing",
    question: "Do you build landing pages for marketing campaigns?",
    answer:
      "Yes. Campaign landing pages can be designed specifically around the target audience, offer, traffic source, message, and conversion goal. We can also integrate forms, analytics, CRM systems, tracking tools, and other required marketing technology.",
  },
  {
    id: 44,
    category: "Digital Marketing",
    question: "What is conversion rate optimization?",
    answer:
      "Conversion rate optimization, or CRO, is the process of improving a digital experience so that a larger proportion of qualified visitors complete a desired action. This can involve analyzing user behavior, improving messaging, simplifying forms, strengthening calls to action, improving page speed, testing layouts, and measuring the results.",
  },
  {
    id: 45,
    category: "Digital Marketing",
    question: "Do you provide marketing analytics and reporting?",
    answer:
      "Yes. Reporting can cover traffic, acquisition channels, search visibility, campaign performance, leads, conversions, engagement, landing-page behavior, and other agreed KPIs. We aim to connect marketing activity to measurable business objectives rather than reporting only surface-level metrics.",
  },
  {
    id: 46,
    category: "Digital Marketing",
    question: "Can you set up Google Analytics and conversion tracking?",
    answer:
      "Yes. Depending on the project, we can help configure analytics, conversion events, campaign tracking, dashboards, and related measurement infrastructure. Access requirements and privacy responsibilities are agreed with the client before implementation.",
  },
  {
    id: 47,
    category: "Digital Marketing",
    question: "How do you measure whether a marketing campaign is successful?",
    answer:
      "Success should be defined using the campaign objective. Depending on the business, useful measures can include qualified leads, sales, conversion rate, customer acquisition cost, return on advertising spend, organic visibility, qualified traffic, engagement, email performance, or other agreed business KPIs. No single metric is appropriate for every campaign.",
  },
  {
    id: 48,
    category: "Digital Marketing",
    question: "Do you provide monthly marketing reports?",
    answer:
      "Yes. For ongoing marketing engagements, reporting frequency is agreed as part of the engagement. Monthly reporting can summarize activity, performance, key observations, completed work, opportunities, and recommended next steps.",
  },
  {
    id: 49,
    category: "Digital Marketing",
    question: "How quickly can SEO produce results?",
    answer:
      "SEO timelines vary significantly by website authority, technical condition, competition, search demand, content quality, industry, market, and starting position. Some technical improvements can have relatively quick effects, while competitive search terms and new domains can require sustained work over a longer period. We do not guarantee specific rankings or fixed timelines.",
  },
  {
    id: 50,
    category: "Digital Marketing",
    question: "Do you guarantee first-page or number-one Google rankings?",
    answer:
      "No. Ethical SEO work cannot guarantee a specific Google ranking because search results depend on many external and changing factors. We can establish a clear strategy, improve technical and content foundations, measure progress, and optimize based on evidence.",
  },
  {
    id: 51,
    category: "Digital Marketing",
    question: "Do you offer technical SEO audits?",
    answer:
      "Yes. A technical SEO audit can examine crawlability, indexation, site architecture, metadata, canonicalization, structured data, internal linking, redirects, page performance, mobile usability, sitemap configuration, and other technical factors relevant to organic search.",
  },
  {
    id: 52,
    category: "International Growth",
    question: "How do you handle international domains and URL structures?",
    answer:
      "The appropriate structure depends on the business and technical requirements. Options can include country-code domains, subdomains, subdirectories, or other architectures. We consider market targeting, brand strategy, technical complexity, content management, SEO requirements, and long-term scalability before recommending an approach.",
  },
  {
    id: 53,
    category: "International Growth",
    question: "What is hreflang and when is it useful?",
    answer:
      "Hreflang is a technical SEO mechanism that helps search engines understand relationships between localized versions of pages for different languages or regional audiences. It can be useful for websites with substantially equivalent content targeted to different languages or regions. Correct implementation requires careful URL and language-region mapping.",
  },
  {
    id: 54,
    category: "International Growth",
    question: "Can you optimize a website for both local and international audiences?",
    answer:
      "Yes. A website can be structured around multiple audience groups when the information architecture, content, technical SEO, analytics, and conversion paths are designed appropriately. We can separate local and international requirements while maintaining a consistent overall brand experience.",
  },
  {
    id: 55,
    category: "Digital Marketing",
    question: "Do you use AI in digital marketing?",
    answer:
      "AI can be used as part of marketing workflows for research, ideation, content assistance, data analysis, automation, personalization, customer-support workflows, and other appropriate tasks. Human review remains important for brand accuracy, factual quality, originality, privacy, and strategic decisions.",
  },
  {
    id: 56,
    category: "Digital Marketing",
    question: "Can AI-generated content be used for SEO?",
    answer:
      "AI can assist with research, outlines, drafts, and content workflows, but publishing should focus on useful, accurate, original content that genuinely serves the audience. Content should be reviewed and improved by people who understand the subject, brand, and target market.",
  },
  {
    id: 57,
    category: "Digital Marketing",
    question: "Do you help with marketing automation?",
    answer:
      "Yes. Depending on the business, automation can connect forms, CRM systems, email campaigns, lead qualification, notifications, analytics, customer support, and other workflows. The goal is to reduce repetitive manual work while maintaining an appropriate customer experience.",
  },
  {
    id: 58,
    category: "Digital Marketing",
    question: "Can you integrate marketing with a CRM?",
    answer:
      "Yes. Marketing systems can be connected to CRM platforms where the required APIs and permissions are available. This can help connect campaign sources, leads, follow-up workflows, customer information, and reporting.",
  },
  {
    id: 59,
    category: "Digital Marketing",
    question: "Do you create marketing graphics and video content?",
    answer:
      "Yes. Depending on the engagement, we can support social graphics, advertising creatives, branded visual assets, short-form video, promotional content, motion graphics, and other creative materials. Creative production is planned around the campaign's audience, platform, brand, and objective.",
  },
  {
    id: 60,
    category: "International Growth",
    question: "Can you work with an international marketing team we already have?",
    answer:
      "Yes. HEROY can work as an external specialist team alongside an existing internal marketing department, development team, agency, or consultant. Responsibilities, ownership, communication channels, access, and deliverables are defined before the engagement begins.",
  },
  {
    id: 61,
    category: "International Growth",
    question: "Can you work with international clients remotely?",
    answer:
      "Yes. Remote delivery is a core part of our workflow. International projects can use video meetings, email, messaging platforms, shared documents, project-management tools, and version-controlled development workflows. Meeting schedules can be coordinated across time zones.",
  },
  {
    id: 62,
    category: "International Growth",
    question: "How do you protect client marketing and business information?",
    answer:
      "Access should be limited to the systems and information required for the project. Where appropriate, clients can use role-based access, shared business accounts, password managers, secure credentials, signed agreements, and other access controls. Specific security and confidentiality requirements should be documented before sensitive systems are accessed.",
  },
  {
    id: 63,
    category: "Digital Marketing",
    question: "Do you work with existing marketing data?",
    answer:
      "Yes. Existing analytics, advertising data, CRM information, search data, previous campaign results, and customer research can provide useful context. We review available data before making recommendations where the data is sufficiently reliable and relevant to the project.",
  },
  {
    id: 64,
    category: "Digital Marketing",
    question: "Can you audit an existing digital marketing campaign?",
    answer:
      "Yes. A campaign audit can review targeting, messaging, creative, landing pages, tracking, conversion events, budget allocation, search terms, audience performance, funnel behavior, and other relevant campaign factors. Recommendations depend on the platforms and data available.",
  },
  {
    id: 65,
    category: "Digital Marketing",
    question: "Do you manage advertising budgets directly?",
    answer:
      "Advertising spend and agency fees are normally treated separately. Depending on the engagement, the client may pay advertising platforms directly or use another agreed payment arrangement. Budget ownership, approval requirements, and spending limits should always be documented before campaigns launch.",
  },
  {
    id: 66,
    category: "Digital Marketing",
    question: "Can you help improve an existing brand's online presence?",
    answer:
      "Yes. We can review the current website, search visibility, social profiles, content, visual identity, customer journey, conversion paths, and marketing channels to identify opportunities for improvement. The resulting roadmap can combine brand, design, development, SEO, content, and marketing work.",
  },
  {
    id: 67,
    category: "International Growth",
    question: "Can you help an Ethiopian business market internationally?",
    answer:
      "Yes. We can support the digital side of international expansion through positioning, website improvements, international SEO, content, social media, paid advertising, landing pages, analytics, and conversion optimization. The appropriate strategy depends on the business, target countries, product or service, competition, and available resources.",
  },
  {
    id: 68,
    category: "International Growth",
    question: "Can you help international companies reach customers in Ethiopia?",
    answer:
      "Yes. We can support market-specific digital work for organizations interested in reaching audiences in Ethiopia, subject to the project's industry, target audience, regulatory requirements, available channels, and commercial objectives. Local market research and audience understanding are important parts of the planning process.",
  },
];

const typewriterWords = [
  "Services",
  "Digital Marketing",
  "International Growth",
  "Pricing",
  "Process",
  "Technical",
  "Support",
];

const relatedLinks = [
  {
    label: "Services",
    href: "/services",
    text: "Explore HEROY's digital services, technology capabilities, and engagement options.",
  },
  {
    label: "Pricing",
    href: "/pricing",
    text: "Review our available packages and understand how project pricing is structured.",
  },
  {
    label: "Careers",
    href: "/careers",
    text: "Learn about our hiring process, open roles, and opportunities to work with HEROY.",
  },
];

export default function FAQPageClient() {
  const [active, setActive] = useState<"All" | FAQCategory>("All");
  const [openId, setOpenId] = useState<number | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list =
      active === "All"
        ? faqs
        : faqs.filter((faq) => faq.category === active);

    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery) {
      list = list.filter(
        (faq) =>
          faq.question.toLowerCase().includes(normalizedQuery) ||
          faq.answer.toLowerCase().includes(normalizedQuery) ||
          faq.category.toLowerCase().includes(normalizedQuery)
      );
    }

    return list;
  }, [active, query]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 -right-20" />
      <div
        className="glow-orb w-80 h-80 bg-accent/10 top-1/2 -left-20"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="glow-orb w-64 h-64 bg-accent-pink/10 bottom-20 right-1/4"
        style={{ animationDelay: "6s" }}
      />

      <section className="section pt-36 pb-10 relative">
        <div className="container-px mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">
              <Sparkles size={14} />
              FAQ
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white"
          >
            Questions about our{" "}
            <TypewriterText
              words={typewriterWords}
              className="text-gradient"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed mb-8"
          >
            Clear answers about HEROY's services, digital marketing,
            international growth, technology, pricing, process, and support.
            If you do not find what you are looking for, contact us directly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-md mx-auto"
          >
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search questions..."
              aria-label="Search frequently asked questions"
              className="w-full rounded-full bg-white/5 border border-border pl-11 pr-10 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-primary transition-colors"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      <section className="section pt-0 relative">
        <div className="container-px mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActive(category);
                  setOpenId(null);
                }}
                aria-pressed={active === category}
                className={`text-sm font-medium px-5 py-2 rounded-full border transition-all ${
                  active === category
                    ? "bg-grad-primary text-background border-transparent"
                    : "border-border text-muted hover:text-white hover:border-primary/40"
                }`}
                style={
                  active === category
                    ? {
                        boxShadow:
                          "0 8px 24px rgba(124,92,255,0.4)",
                      }
                    : undefined
                }
              >
                {category}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${active}-${query}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 mb-16"
            >
              {filtered.map((faq, index) => {
                const isOpen = openId === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: Math.min(index * 0.025, 0.25),
                    }}
                    className="glass rounded-2xl overflow-hidden border border-transparent"
                    onMouseEnter={(event) => {
                      if (!isOpen) {
                        event.currentTarget.style.borderColor =
                          "rgba(124,92,255,0.4)";
                      }
                    }}
                    onMouseLeave={(event) => {
                      if (!isOpen) {
                        event.currentTarget.style.borderColor = "";
                      }
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenId(isOpen ? null : faq.id)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-full shrink-0">
                          {faq.category}
                        </span>

                        <span className="font-display font-semibold text-sm sm:text-base text-white">
                          {faq.question}
                        </span>
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronDown
                          size={18}
                          className="text-muted"
                        />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-sm text-muted leading-relaxed border-t border-border pt-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted mb-4">
                    No questions match &quot;{query}&quot;.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setActive("All");
                    }}
                    className="text-sm text-accent hover:text-white transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass rounded-xl p-5 hover:border-primary/40 transition-colors group"
              >
                <p className="text-sm font-semibold text-white mb-1 flex items-center justify-between">
                  {link.label}

                  <ArrowRight
                    size={14}
                    className="text-accent group-hover:translate-x-1 transition-transform"
                  />
                </p>

                <p className="text-xs text-muted leading-relaxed">
                  {link.text}
                </p>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-10 text-center relative overflow-hidden"
          >
            <div className="glow-orb w-48 h-48 bg-primary/25 -top-10 -left-10" />

            <div
              className="glow-orb w-40 h-40 bg-accent/20 -bottom-10 -right-10"
              style={{ animationDelay: "2s" }}
            />

            <div className="relative">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                Still have questions?{" "}
                <span className="text-gradient">
                  Talk to our team
                </span>
              </h2>

              <p className="text-muted text-sm max-w-md mx-auto mb-6">
                Tell us about your business, audience, project, or
                growth goal. We can help identify the appropriate next
                steps and scope.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Send Us a Message
                  <ArrowRight size={16} />
                </Link>

                <Link href="/consultation" className="btn-outline">
                  Book a Free Call
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}