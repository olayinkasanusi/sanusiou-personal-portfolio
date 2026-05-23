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
      "A high-end FinTech Investment Platform focused on complex dashboard data synchronization, live pricing feeds, and secure transaction states.",
    projectOverview:
      "Anchor Yield provides institutional-grade yield metrics and portfolio statistics. The frontend architecture manages fast-polling client state synchronization to deliver zero-latency rendering of transaction updates and financial yield projections. Built with React and TypeScript, it utilizes custom hooks for polling strategies, secure auth flows, and advanced table sorting and filtering algorithms.",
    goals: [
      "Implement real-time dashboard data synchronization using structured state management and clean polling mechanisms.",
      "Develop secure user transaction state handling with optimistic UI updates.",
      "Build complex relational data visualizations using lightweight, responsive charting components."
    ],
    challenges: [
      "Managing high-frequency data updates without causing unnecessary DOM re-renders or performance lags.",
      "Maintaining state consistency across multi-page client checkouts and asset balance widgets."
    ],
    technologyStack: [
      { icon: "/typescript.svg", tech: "TypeScript" },
      { icon: "/react.svg", tech: "React.js" },
      { icon: "/javascript.svg", tech: "JavaScript" },
      { icon: "/supabase.svg", tech: "Supabase" }
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
      "An international e-commerce and sports analytics hub engineered for a remote Indonesian client, merging rapid live-score polling with a custom apparel configurations engine.",
    projectOverview:
      "Goal Mania handles transactional e-commerce pipelines alongside high-frequency data integrations. Stepping into an ongoing codebase, the frontend architecture was optimized to cleanly handle rapid API data synchronization for real-time sports metrics while orchestrating a heavy multi-step custom shirt configuration panel with robust local cart persistence.",
    goals: [
      "Optimize real-time API data streams to keep dynamic sports scores synchronized with the client view without introducing layout lag.",
      "Build a fluid, highly responsive custom jersey ordering workflow with dynamic pricing calculations based on user-defined configurations.",
      "Refactor existing monolithic components into a clean, decoupled architecture to vastly improve page speed for mobile users globally."
    ],
    challenges: [
      "Managing aggressive polling frequencies and caching configurations to prevent API rate-limiting or view jitter under heavy loads.",
      "Synchronizing international currency matrices and dynamic inventory allocations securely during complex client checkout workflows."
    ],
    technologyStack: [
      { icon: "/nodejs.svg", tech: "Node.js" },
      { icon: "/typescript.svg", tech: "TypeScript" },
      { icon: "/nextjs.svg", tech: "Next.js" },
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
      "A high-fidelity premium digital storefront processing complex multi-attribute inventory matrices (karats/weights) and secure real-time administrative state mutations.",
    projectOverview:
      "dGold Boutique translates an exclusive, high-ticket luxury jewelry retail model into a premium editorial web space. Built from the ground up, the platform features dynamic, client-side pricing calculators tied to real-time weight parameters, an inquiry-based checkout funnel, and a robust administrative control center.",
    goals: [
      "Architect an asynchronous cart mechanism that computes live item pricing dynamically based on karat categories and raw gold weights.",
      "Develop a secure, role-restricted admin management panel to push instant schema mutations, updates, and stock inventory controls.",
      "Create a custom high-touch inquiry pipeline using direct message and automated communication API endpoints for premium checkout transactions."
    ],
    challenges: [
      "Orchestrating nested client-side state hooks across deep product variants without introducing layout shifts or component rendering delays.",
      "Balancing high-resolution catalog media assets with aggressive loading strategies to guarantee immediate visual page responsiveness."
    ],
    technologyStack: [
      { icon: "/react.svg", tech: "React.js" },
      { icon: "/javascript.svg", tech: "JavaScript" },
      { icon: "/supabase.svg", tech: "Supabase" },
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
      "An elegant digital publishing platform prioritizing premium typography layout systems, strict WCAG 2.1 accessibility compliance, and hyper-optimized asset delivery pipelines.",
    projectOverview:
      "Opulent Pages provides an uncompromised, accessible reading interface for showcase portfolios. Built to modern web performance standards, it features strict semantic HTML layouts, advanced screen-reader optimizations, and fluid typography rules that conform natively across any viewport or responsive display ratio.",
    goals: [
      "Construct a highly detailed typographic grid system that automatically scales and preserves layout proportions on any device orientation.",
      "Achieve near-perfect ratings on core Web Vitals and Lighthouse audits by enforcing strict lazy loading and payload optimization.",
      "Implement exhaustive keyboard navigation maps and ARIA attributes to completely conform with WCAG 2.1 AA accessibility guidelines."
    ],
    challenges: [
      "Delivering image-heavy literary portfolio lookbooks without introducing layout instability or rising Cumulative Layout Shift (CLS) metrics.",
      "Enforcing strict compliance for assistive accessibility technologies while animating complex transition timelines between layout pages."
    ],
    technologyStack: [
      { icon: "/react.svg", tech: "React.js" },
      { icon: "/javascript.svg", tech: "JavaScript" },
      { icon: "/framer.svg", tech: "Framer Motion" },
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