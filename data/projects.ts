export interface Technology {
  icon: string;
  tech: string;
}

export interface LinkData {
  liveDemo: string;
  github: string;
}

export interface SlideData {
  id: number;
  title: string;
  img: string;
}

export interface Project {
  name: string;
  shortSummary: string;
  projectOverview: string;
  goals: string[];
  challenges: string[];
  technologyStack: Technology[];
  links: LinkData;
  slidesData: SlideData[];
}

export const projects: Project[] = [
  {
    name: "Anchor Yield",
    shortSummary:
      "An institutional FinTech platform featuring a Node.js API data pipeline, fast-polling client synchronization, and secure database mutations for yield metrics.",
    projectOverview:
      "Anchor Yield provides institutional-grade yield metrics and portfolio statistics. Engineered as a full-stack system, the backend uses Node.js and RESTful services to orchestrate fast-polling data synchronization and real-time transaction processing, while Supabase/PostgreSQL manages secure ledger mutations. The React/TypeScript frontend renders zero-latency financial projections with optimistic UI updates and custom polling strategies.",
    goals: [
      "Architect a scalable Node.js API layer with structured polling mechanisms for high-frequency financial data synchronization.",
      "Develop secure user transaction processing with database-level validation and optimistic frontend state updates.",
      "Build complex relational data visualizations and responsive financial analytics dashboards."
    ],
    challenges: [
      "Managing high-frequency data streams and concurrent requests without causing server bottleneck or client rendering lag.",
      "Maintaining end-to-end data integrity across distributed portfolio transactions and multi-step balance calculations."
    ],
    technologyStack: [
      { icon: "/nodejs.svg", tech: "Node.js" },
      { icon: "/typescript.svg", tech: "TypeScript" },
      { icon: "/react.svg", tech: "React.js" },
      { icon: "/supabase.svg", tech: "Supabase" },
      { icon: "/javascript.svg", tech: "JavaScript" }
    ],
    links: {
      liveDemo: "https://anchor-yield.vercel.app/",
      github: "https://github.com/olayinkasanusi/anchor-yield"
    },
    slidesData: [
      { id: 0, title: "Overview Dashboard", img: "/anchor-1.png" },
      { id: 1, title: "Yield Performance Tracker", img: "/anchor-2.png" },
      { id: 2, title: "Transaction Ledger", img: "/anchor-3.png" },
      { id: 3, title: "Security Settings Panel", img: "/anchor-4.png" }
    ]
  },
  {
    name: "Goal Mania",
    shortSummary:
      "An international e-commerce and sports analytics platform powered by a Node.js backend, real-time sports polling streams, and a custom merchandise configuration engine.",
    projectOverview:
      "Goal Mania handles transactional e-commerce pipelines alongside high-frequency sports data feeds. Built with a full-stack architecture, the server leverages Node.js to manage rapid external API data aggregation, rate-limiting, and inventory caching, while Next.js delivers a server-rendered frontend with dynamic jersey customization and robust persistent checkout workflows.",
    goals: [
      "Build a high-performance Node.js data aggregation service to synchronize real-time sports match metrics efficiently.",
      "Develop a fluid, highly responsive custom jersey ordering workflow with server-verified dynamic pricing algorithms.",
      "Refactor monolithic endpoints into clean, decoupled full-stack services to significantly boost global response times."
    ],
    challenges: [
      "Handling aggressive polling frequencies on the server while preventing API rate limits and memory overhead.",
      "Synchronizing multi-currency matrices and dynamic stock allocations securely between the Node.js backend and client cart."
    ],
    technologyStack: [
      { icon: "/nodejs.svg", tech: "Node.js" },
      { icon: "/nextjs.svg", tech: "Next.js" },
      { icon: "/typescript.svg", tech: "TypeScript" },
      { icon: "/framer.svg", tech: "Framer Motion" },
      { icon: "/vercel.svg", tech: "Vercel" }
    ],
    links: {
      liveDemo: "https://goal-mania.it/",
      github: "https://github.com/olayinkasanusi/goal-mania"
    },
    slidesData: [
      { id: 0, title: "E-Commerce Front", img: "/goal-1.png" },
      { id: 1, title: "Jersey Customization Engine", img: "/goal-2.png" },
      { id: 2, title: "Live Matches Hub", img: "/goal-3.png" },
      { id: 3, title: "Localized Order Gateway", img: "/goal-4.png" }
    ]
  },
  {
    name: "dGold Luxury Boutique",
    shortSummary:
      "A luxury e-commerce suite featuring dynamic weight-based pricing engines, role-restricted Node.js/Supabase admin mutations, and real-time inventory management.",
    projectOverview:
      "dGold Boutique translates an exclusive, high-ticket luxury retail model into a full-stack digital flagship. The backend employs Node.js server logic and PostgreSQL/Supabase to process dynamic multi-attribute matrices (karats/weights), validate live spot prices, and execute role-restricted stock mutations, paired with a high-fidelity editorial frontend.",
    goals: [
      "Implement server-validated pricing logic computing live item costs dynamically based on fluctuating gold spot prices and karat weights.",
      "Develop a secure, role-restricted admin control suite to execute instant database mutations and inventory sync.",
      "Create an end-to-end white-glove inquiry and checkout pipeline with automated messaging endpoints."
    ],
    challenges: [
      "Coordinating complex server-side validation rules with instant client-side state feedback during heavy variant selection.",
      "Balancing high-resolution catalog media assets with optimized database query response times for global shoppers."
    ],
    technologyStack: [
      { icon: "/nodejs.svg", tech: "Node.js" },
      { icon: "/react.svg", tech: "React.js" },
      { icon: "/supabase.svg", tech: "Supabase" },
      { icon: "/javascript.svg", tech: "JavaScript" },
      { icon: "/vercel.svg", tech: "Vercel" }
    ],
    links: {
      liveDemo: "https://dgold.shop/",
      github: "https://github.com/olayinkasanusi/dgold"
    },
    slidesData: [
      { id: 0, title: "Boutique Showcase Hero", img: "/dgold-1.png" },
      { id: 1, title: "Curated Jewelry Catalog", img: "/dgold-2.png" },
      { id: 2, title: "Dynamic Product Configurator", img: "/dgold-3.png" },
      { id: 3, title: "White-Glove Inquiry Interface", img: "/dgold-4.png" },
      { id: 4, title: "Secure Inventory Control Room", img: "/dgold-5.png" }
    ]
  },
  {
    name: "Opulent Pages",
    shortSummary:
      "An accessible editorial publishing platform with optimized backend asset pipelines, strict WCAG 2.1 AA compliance, and fluid typography layout systems.",
    projectOverview:
      "Opulent Pages provides an accessible, high-performance publishing interface. Designed with full-stack performance principles, it features optimized server asset distribution, semantic content delivery, screen-reader optimizations, and fluid typography algorithms that scale smoothly across viewports.",
    goals: [
      "Construct a highly detailed typographic grid system that automatically scales and preserves layout proportions on any device orientation.",
      "Achieve near-perfect ratings on core Web Vitals and Lighthouse audits by enforcing strict server caching and payload optimization.",
      "Implement exhaustive keyboard navigation maps and ARIA attributes to completely conform with WCAG 2.1 AA accessibility guidelines."
    ],
    challenges: [
      "Delivering image-heavy literary portfolio lookbooks without introducing layout instability or rising Cumulative Layout Shift (CLS) metrics.",
      "Enforcing strict compliance for assistive accessibility technologies while animating complex transition timelines between layout pages."
    ],
    technologyStack: [
      { icon: "/nodejs.svg", tech: "Node.js" },
      { icon: "/react.svg", tech: "React.js" },
      { icon: "/framer.svg", tech: "Framer Motion" },
      { icon: "/javascript.svg", tech: "JavaScript" },
      { icon: "/vercel.svg", tech: "Vercel" }
    ],
    links: {
      liveDemo: "https://opulentpages.ca/",
      github: "https://github.com/olayinkasanusi/td-hilderley"
    },
    slidesData: [
      { id: 0, title: "Editorial Portfolio Landing", img: "/opulent-1.png" },
      { id: 1, title: "Responsive Article Canvas", img: "/opulent-2.png" },
      { id: 2, title: "Published Works Explorer", img: "/opulent-3.png" },
      { id: 3, title: "Accessible Typography Matrix", img: "/opulent-4.png" }
    ]
  }
];