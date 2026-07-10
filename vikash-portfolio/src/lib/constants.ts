// ============================================================
// VIKASH PORTFOLIO — All Site Data
// Hi there! You're clearly a developer. Here's a cookie: 🍪
// ============================================================

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "", label: "Countries Reached" },
];

export const SERVICES = [
  {
    id: "graphic-design",
    icon: "🎨",
    accentColor: "#FF5C00",
    title: "Graphic Design",
    tagline: "I help brands build memorable identities customers remember.",
    description:
      "Bold visuals that make your brand impossible to ignore. From logos to full brand systems, every pixel has a purpose.",
    features: [
      { icon: "✦", text: "Logo Design", outcome: "A mark that makes you unforgettable" },
      { icon: "✦", text: "Brand Identity", outcome: "Consistent look that builds trust" },
      { icon: "✦", text: "Social Media Design", outcome: "Content that stops the scroll" },
      { icon: "✦", text: "Posters & Flyers", outcome: "Print that gets picked up" },
      { icon: "✦", text: "Business Cards", outcome: "First impression that lasts" },
      { icon: "✦", text: "Presentations", outcome: "Decks that close deals" },
    ],
  },
  {
    id: "video-editing",
    icon: "🎬",
    accentColor: "#FF2D87",
    title: "Video Editing",
    tagline: "I create videos that keep audiences watching and increase engagement.",
    description:
      "Stories told through motion. From reels that go viral to promos that convert — your message, amplified.",
    features: [
      { icon: "✦", text: "YouTube Videos", outcome: "Keep viewers watching till the end" },
      { icon: "✦", text: "Instagram Reels", outcome: "15 seconds that go viral" },
      { icon: "✦", text: "Promotional Videos", outcome: "Turn viewers into customers" },
      { icon: "✦", text: "Motion Graphics", outcome: "Animate your message" },
      { icon: "✦", text: "Color Grading", outcome: "Cinematic look that stands out" },
      { icon: "✦", text: "Subtitles & Captions", outcome: "Reach audiences everywhere" },
    ],
  },
  {
    id: "web-development",
    icon: "💻",
    accentColor: "#00F0FF",
    title: "Web Development",
    tagline: "I build fast, modern websites that turn visitors into customers.",
    description:
      "More than code — digital experiences. AI-assisted development means faster delivery without compromising quality.",
    features: [
      { icon: "✦", text: "Landing Pages", outcome: "Pages that convert visitors into clients" },
      { icon: "✦", text: "Business Websites", outcome: "Your 24/7 salesperson online" },
      { icon: "✦", text: "Portfolio Websites", outcome: "Showcase that wins clients" },
      { icon: "✦", text: "Responsive Design", outcome: "Perfect on every device" },
      { icon: "✦", text: "Interactive Experiences", outcome: "Sites visitors remember" },
      { icon: "✦", text: "AI-Assisted Dev", outcome: "Modern sites built smarter & faster" },
    ],
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "brand-spark",
    title: "Brand Spark",
    category: "Graphic Design",
    tags: ["Logo", "Brand Identity", "Print"],
    accentColor: "#FF5C00",
    size: "large",
    year: "2024",
    client: "StartupX India",
    challenge:
      "StartupX needed a brand identity that would appeal to both enterprise clients and Gen-Z users — a rare combination requiring careful balance between authority and approachability.",
    process:
      "Conducted 2 weeks of competitor research across 50+ tech startups. Explored 12 logo directions before landing on the final concept. Iterated through 4 rounds of refinement based on stakeholder feedback.",
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
    result:
      "Complete brand system including logo, color palette, typography, business cards, letterheads, and social media templates.",
    impact: "Brand launch received 2,400+ impressions on LinkedIn within 48 hours of launch.",
    outcome: "Client secured first enterprise client within 3 weeks of brand launch.",
  },
  {
    id: "viral-reel",
    title: "Viral Reel Campaign",
    category: "Video Editing",
    tags: ["Reels", "Motion Graphics", "Color Grading"],
    accentColor: "#FF2D87",
    size: "medium",
    year: "2024",
    client: "FoodieHub",
    challenge:
      "Restaurant chain needed Instagram content that would differentiate them from hundreds of local food accounts and drive actual footfall.",
    process:
      "Analyzed top-performing food content patterns. Created a signature editing style with dynamic transitions and branded color grading. Produced 8 reels over 4 weeks.",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    result: "Series of 8 branded reels with custom motion graphics and consistent visual language.",
    impact: "Average reel reached 45,000+ views. Engagement rate jumped from 1.2% to 8.7%.",
    outcome: "Direct increase in weekend bookings. Client extended contract for 3 more months.",
  },
  {
    id: "agency-site",
    title: "Agency Landing Page",
    category: "Web Development",
    tags: ["Next.js", "Animation", "Responsive"],
    accentColor: "#00F0FF",
    size: "large",
    year: "2025",
    client: "CreativeForge Agency",
    challenge:
      "Design agency had an outdated WordPress site that was losing clients to competitors with more modern digital presence.",
    process:
      "Audited existing site and identified 14 conversion bottlenecks. Designed new architecture focused on lead generation. Built with Next.js for performance and Framer Motion for interactions.",
    tools: ["Next.js", "Framer Motion", "Tailwind CSS", "Figma"],
    result: "Fully responsive, animated landing page with contact form integration. Loads in under 1.5 seconds.",
    impact: "Page speed improved from 42 to 96 on Lighthouse. Bounce rate dropped 34%.",
    outcome: "3 new client inquiries in the first week after launch.",
  },
  {
    id: "neon-brand",
    title: "Neon Street Collective",
    category: "Graphic Design",
    tags: ["Brand Identity", "Social Media", "Merchandise"],
    accentColor: "#BFFF00",
    size: "medium",
    year: "2024",
    client: "Neon Street Co.",
    challenge:
      "Streetwear brand needed a bold visual identity that would resonate with the underground fashion community while remaining commercially viable.",
    process:
      "Deep dive into streetwear culture, typography trends, and underground art movements. Created mood boards, style tiles, and 3 distinct creative directions.",
    tools: ["Illustrator", "Photoshop", "Procreate"],
    result: "Full brand identity: logo system, color palette, typography, merchandise mockups, and social media templates.",
    impact: "Brand merchandise pre-orders sold out within 72 hours of reveal.",
    outcome: "Featured in 2 local fashion blogs. Instagram grew from 0 to 3,200 followers in 60 days.",
  },
  {
    id: "youtube-doc",
    title: "Documentary Short",
    category: "Video Editing",
    tags: ["Documentary", "Color Grading", "Sound Design"],
    accentColor: "#FFE600",
    size: "small",
    year: "2025",
    client: "TechTalks YouTube",
    challenge:
      "Creator needed to transform 4 hours of raw interview footage into a compelling 12-minute documentary that would retain viewers till the end.",
    process:
      "Transcribed and story-mapped all footage. Identified key emotional moments. Built narrative arc with custom motion graphics chapter titles and cinematic color grade.",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    result: "12-minute documentary short with full color grade, custom lower thirds, and ambient sound design.",
    impact: "Video achieved 89% watch-through rate (industry average: 52%). 1,200+ comments.",
    outcome: "Channel grew 4,200 subscribers in 2 weeks after upload.",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard UI",
    category: "Web Development",
    tags: ["UI/UX", "React", "Design System"],
    accentColor: "#FF2D87",
    size: "small",
    year: "2025",
    client: "DataFlow SaaS",
    challenge:
      "Early-stage SaaS startup had a functional but visually dated dashboard that was causing user churn during trial periods.",
    process:
      "Conducted UX audit across 50 user sessions. Identified 8 key friction points. Redesigned information architecture and visual hierarchy.",
    tools: ["Figma", "React", "Tailwind CSS", "Recharts"],
    result: "Modern, responsive dashboard UI with improved data visualization, dark mode, and onboarding flow.",
    impact: "Trial-to-paid conversion improved from 8% to 23% after redesign launch.",
    outcome: "Startup raised seed funding 6 weeks after dashboard relaunch — new design featured in pitch deck.",
  },
];

export const SKILLS = [
  {
    category: "Design",
    color: "#FF5C00",
    tools: [
      { name: "Photoshop", icon: "🎨" },
      { name: "Illustrator", icon: "✏️" },
      { name: "Figma", icon: "🖼️" },
      { name: "InDesign", icon: "📄" },
      { name: "Canva Pro", icon: "🎭" },
      { name: "Procreate", icon: "🍎" },
    ],
  },
  {
    category: "Video",
    color: "#FF2D87",
    tools: [
      { name: "Premiere Pro", icon: "🎬" },
      { name: "After Effects", icon: "✨" },
      { name: "DaVinci Resolve", icon: "🎞️" },
      { name: "Audition", icon: "🎧" },
      { name: "CapCut Pro", icon: "📱" },
    ],
  },
  {
    category: "Development",
    color: "#00F0FF",
    tools: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Framer Motion", icon: "🔴" },
      { name: "GSAP", icon: "🟢" },
    ],
  },
  {
    category: "AI Tools",
    color: "#BFFF00",
    tools: [
      { name: "ChatGPT", icon: "🤖" },
      { name: "Midjourney", icon: "🖼️" },
      { name: "Claude", icon: "💬" },
      { name: "Runway ML", icon: "🎥" },
      { name: "ElevenLabs", icon: "🔊" },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    id: "discovery",
    label: "Discovery",
    icon: "🔍",
    color: "#FF5C00",
    description: "Deep dive into your goals, audience, and competition. I ask the questions that uncover the real brief.",
  },
  {
    id: "research",
    label: "Research",
    icon: "📚",
    color: "#FF2D87",
    description: "Market research, trend analysis, and competitor benchmarking. Strategy built on data, not guesses.",
  },
  {
    id: "planning",
    label: "Planning",
    icon: "🗺️",
    color: "#FFE600",
    description: "Clear project roadmap, timelines, and milestones. No surprises — just a clear path from start to finish.",
  },
  {
    id: "design",
    label: "Design",
    icon: "✏️",
    color: "#BFFF00",
    description: "Concepts, iterations, and refinements. You're involved at every step — this is a collaboration, not a transaction.",
  },
  {
    id: "development",
    label: "Build",
    icon: "⚡",
    color: "#00F0FF",
    description: "Bringing designs to life with clean, optimized code or production-ready files. Quality at every level.",
  },
  {
    id: "feedback",
    label: "Feedback",
    icon: "💬",
    color: "#FF5C00",
    description: "Structured revision rounds. Your feedback shapes the final result. Revisions until you're 100% happy.",
  },
  {
    id: "delivery",
    label: "Delivery",
    icon: "🚀",
    color: "#FF2D87",
    description: "Final files, handoff documentation, and deployment. Everything you need to hit the ground running.",
  },
  {
    id: "support",
    label: "Support",
    icon: "🤝",
    color: "#BFFF00",
    description: "I don't disappear after delivery. Post-project support to make sure everything works perfectly.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Aryan Kapoor",
    role: "Founder, StartupX India",
    avatar: "AK",
    avatarColor: "#FF5C00",
    text: "Vikash didn't just design a logo — he built our entire brand identity from scratch. The quality was miles ahead of what we expected. Three weeks after launch, we landed our first enterprise client. The brand played a huge role.",
    service: "Brand Identity",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Content Creator, FoodieHub",
    avatar: "PS",
    avatarColor: "#FF2D87",
    text: "I've worked with other editors before, but Vikash understands content like a creator. He knew exactly what would perform on Instagram. Our reels went from 2k views to 45k average. The engagement jump was unreal.",
    service: "Video Editing",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "CEO, CreativeForge Agency",
    avatar: "RM",
    avatarColor: "#00F0FF",
    text: "Our old site was embarrassing for a design agency. Vikash rebuilt it in 2 weeks — and it now converts better than anything we've had. Fast, beautiful, and exactly on-brief. Already referred him to 3 other clients.",
    service: "Web Development",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "Head of Marketing, DataFlow SaaS",
    avatar: "SP",
    avatarColor: "#BFFF00",
    text: "The dashboard redesign literally changed our business metrics. Trial conversions went from 8% to 23%. Vikash understood our users better than some of our full-time team. Absolutely worth every rupee.",
    service: "UI/UX Design",
    rating: 5,
  },
];

export const PRICING = {
  design: [
    {
      name: "Starter",
      price: "₹1,499",
      popular: false,
      description: "Perfect for solopreneurs getting started",
      features: [
        "Logo Design (3 concepts)",
        "2 Revision Rounds",
        "PNG, SVG, PDF delivery",
        "3-5 day turnaround",
        "WhatsApp support",
      ],
    },
    {
      name: "Professional",
      price: "₹3,999",
      popular: true,
      description: "For brands that mean business",
      features: [
        "Full Brand Kit (Logo + Colors + Typography)",
        "Social Media Template Pack (5 designs)",
        "Business Card Design",
        "5 Revision Rounds",
        "Source files included",
        "5-7 day turnaround",
        "Priority support",
      ],
    },
    {
      name: "Premium",
      price: "₹7,999",
      popular: false,
      description: "Complete brand identity system",
      features: [
        "Everything in Professional",
        "Brand Guidelines PDF",
        "Letterhead + Envelope",
        "Presentation Template",
        "Merchandise Mockups",
        "Unlimited revisions",
        "7-10 day turnaround",
        "Dedicated project manager",
      ],
    },
  ],
  video: [
    {
      name: "Starter",
      price: "₹999",
      popular: false,
      description: "Quick, punchy content",
      features: [
        "Short-form reel (up to 60s)",
        "Basic color grading",
        "Music + sound design",
        "2 Revision Rounds",
        "2-3 day turnaround",
      ],
    },
    {
      name: "Professional",
      price: "₹2,499",
      popular: true,
      description: "Long-form content that converts",
      features: [
        "Full YouTube video (up to 20 min)",
        "Cinema-grade color grade",
        "Custom motion graphics",
        "Subtitles & captions",
        "Thumbnail design",
        "4 Revision Rounds",
        "4-6 day turnaround",
      ],
    },
    {
      name: "Premium",
      price: "₹5,999",
      popular: false,
      description: "Series & campaign packages",
      features: [
        "Monthly content series (8 reels OR 4 videos)",
        "Full post-production pipeline",
        "Custom intro/outro animation",
        "Sound design from scratch",
        "Unlimited revisions",
        "Ongoing priority support",
      ],
    },
  ],
  web: [
    {
      name: "Starter",
      price: "₹4,999",
      popular: false,
      description: "Get online fast",
      features: [
        "Single landing page",
        "Mobile responsive",
        "Contact form",
        "Basic SEO setup",
        "5-7 day delivery",
        "1 month support",
      ],
    },
    {
      name: "Professional",
      price: "₹12,999",
      popular: true,
      description: "Full business website",
      features: [
        "Up to 6 pages",
        "Custom animations",
        "CMS integration",
        "Advanced SEO",
        "Analytics setup",
        "Performance optimized",
        "10-14 day delivery",
        "3 months support",
      ],
    },
    {
      name: "Premium",
      price: "₹24,999",
      popular: false,
      description: "Custom digital experience",
      features: [
        "Unlimited pages",
        "Custom interactions & animations",
        "AI-enhanced development",
        "E-commerce capability",
        "Full brand integration",
        "Priority performance optimization",
        "14-21 day delivery",
        "6 months support",
      ],
    },
  ],
};

export const WHY_HIRE_ME = [
  {
    icon: "⚡",
    color: "#FFE600",
    title: "Fast Turnaround",
    stat: "3–7 days",
    description: "Most projects delivered faster than the industry standard. Speed without sacrificing quality.",
  },
  {
    icon: "📱",
    color: "#00F0FF",
    title: "Mobile-First Always",
    stat: "< 2s load time",
    description: "Every website I build loads in under 2 seconds on mobile. Performance is non-negotiable.",
  },
  {
    icon: "💬",
    color: "#FF2D87",
    title: "Instant Response",
    stat: "2 hr reply",
    description: "Response within 2 hours during working hours. You'll never be left wondering what's happening.",
  },
  {
    icon: "🎯",
    color: "#FF5C00",
    title: "Conversion-Focused",
    stat: "Results over pretty",
    description: "Every design decision is made to generate leads, increase engagement, or drive sales.",
  },
  {
    icon: "🔁",
    color: "#BFFF00",
    title: "Until You're Happy",
    stat: "Unlimited revisions",
    description: "Multiple revision rounds on every project. We're done when you're 100% satisfied.",
  },
  {
    icon: "🤖",
    color: "#00F0FF",
    title: "AI-Enhanced Work",
    stat: "2x faster delivery",
    description: "AI-assisted workflow means faster delivery and smarter solutions — same premium quality.",
  },
];

export const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope, but here's a rough guide: Logo design (3–5 days), Brand identity (7–10 days), Video editing (2–6 days), Landing page (5–7 days), Full website (10–21 days). Rush delivery is available for most project types.",
  },
  {
    q: "How many revisions do I get?",
    a: "Every package includes multiple revision rounds — Starter (2 rounds), Professional (4–5 rounds), Premium (unlimited). In practice, most clients are happy by round 2. I'd rather get it right than get it done.",
  },
  {
    q: "What's your payment process?",
    a: "50% upfront to start, 50% on delivery. For larger projects, we can split into 3 milestones. I accept UPI, bank transfer, and PayPal for international clients.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. I've worked with clients across 5 countries. Communication is fully remote via WhatsApp, email, and video calls. Time zones haven't been a barrier yet.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "It's never happened that we couldn't resolve it through revisions. But if after all revision rounds you're still not satisfied, I'll refund based on work completed. Your satisfaction is the whole point.",
  },
  {
    q: "Can you handle urgent deadlines?",
    a: "Yes — rush delivery is available for most projects. It does come with a priority fee (usually 20–30% extra), but I'll always be upfront about whether I can realistically meet your timeline before accepting.",
  },
  {
    q: "Do you offer custom packages?",
    a: "Yes! If none of my listed packages fit your needs perfectly, let's talk. I do custom quotes for bundled services (e.g., brand identity + website + video content), ongoing retainers, and large-scale projects.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just a brief — tell me about your business, what you need, your deadline, and your budget. I'll come back with a proposal within 24 hours. The more detail you provide, the faster we can begin.",
  },
];

export const PHILOSOPHY_CARDS = [
  {
    icon: "🎯",
    color: "#FF5C00",
    title: "Design is problem solving in disguise",
    description:
      "Every beautiful thing I make exists to solve a real problem. Aesthetic is the vehicle. Results are the destination.",
    annotation: "← this one changed everything for me",
  },
  {
    icon: "✨",
    color: "#BFFF00",
    title: "Every pixel has a purpose",
    description:
      "I don't add elements because they look cool. I add them because they serve the design, guide the eye, or communicate something.",
    annotation: "learned this the hard way →",
  },
  {
    icon: "🚀",
    color: "#00F0FF",
    title: "Speed doesn't mean rushed",
    description:
      "Fast delivery is about clear process, not cutting corners. A good system produces great work quickly.",
    annotation: "↑ hire me",
  },
  {
    icon: "🤝",
    color: "#FF2D87",
    title: "Clients buy outcomes, not deliverables",
    description:
      "You're not paying for a logo. You're paying for brand recognition. You're not paying for a video. You're paying for engagement.",
    annotation: "the mindset shift",
  },
];

export const DESK_ITEMS = [
  {
    id: "monitor",
    icon: "🖥️",
    label: "The Workstation",
    x: 30,
    y: 25,
    info: "Where the magic happens. Dual monitor setup running 24/7.",
    detail: "Spec: 27\" 4K + 24\" secondary. Adobe suite, VS Code, Figma — always open.",
  },
  {
    id: "camera",
    icon: "📷",
    label: "Creative Eye",
    x: 65,
    y: 20,
    info: "Photography & video capture when clients need raw content.",
    detail: "Canon EOS + DJI Mic 2. For when clients need the full production package.",
  },
  {
    id: "notebook",
    icon: "📓",
    label: "Idea Journal",
    x: 15,
    y: 60,
    info: "Every project starts with pen on paper. Always.",
    detail: "200+ pages of sketches, wireframes, and shower thoughts. Low-fi ideation is underrated.",
  },
  {
    id: "headphones",
    icon: "🎧",
    label: "Focus Mode",
    x: 70,
    y: 65,
    info: "Lofi hip-hop + ambient house. The creative fuel.",
    detail: "Sony WH-1000XM5. When these go on, the world goes quiet and the work gets done.",
  },
  {
    id: "coffee",
    icon: "☕",
    label: "Fuel Source",
    x: 80,
    y: 30,
    info: "Click me. I dare you.",
    detail: "3 cups minimum. Black coffee, no sugar. Don't talk to me before cup 1.",
  },
  {
    id: "sticky",
    icon: "📌",
    label: "Client Reminders",
    x: 45,
    y: 70,
    info: "Today's reminder: The client is always the hero.",
    detail: "Full board of reminders: respond fast, deliver faster, always overdeliver. Simple rules.",
  },
];
