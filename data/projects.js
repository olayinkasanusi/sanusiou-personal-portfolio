export const projects = [
  {
    name: "The Wild Oasis App",
    shortSummary:
      "A modern, highly scalable internal Administration App for the hotel management, for checking in, out guests bookings, adding available cabins and so on....",
    projectOverview:
      "A full Stack App developed for the convenience of the hotel managements, where the bookings can be edited, the settings can be edited, featuring dark and light mode for user experience..",
    login: {
      gmail: "sanusiolayinka7@gmail.com",
      password: "Olayinka123",
    },
    goals: [
      "Having a dashboard that gives the general overview of the hotel accommoddations",
      "Reducing bereaucacy in the hotel by a large margin",
      "Making sure that the data and uptime of the hotel are updated instantly and immediately",
    ],
    challenges: [
      "I encountered a difficult challange in the filtering/sorting methods of the app",
      "Implementing a secure login, where only the login of the authenticator can add other users",
      "Optimizing image delivery and rendering for Cabin details",
    ],
    technologyStack: [
      { icon: `/react.svg`, tech: "React.js" },
      { icon: "/tailwind.svg", tech: "Tailwindcss" },
      { icon: "/redux.svg", tech: "Redux" },
      { icon: "/nextjs.svg", tech: "Next.js" },
      { icon: "/supabase.svg", tech: "Supabase" },
      { icon: "/vercel.svg", tech: "Vercel" },
    ],
    links: {
      liveDemo: "https://the-wild-oasis-chi-lime.vercel.app/",
      github: "https://github.com/olayinkasanusi/the-wild-oasis",
    },
    slidesData: [
      {
        id: 0,
        title: "Dashboard Page",
        img: "/oasis-5.png",
      },
      {
        id: 1,
        title: "Booking Details",
        img: "/oasis-1.png",
      },
      {
        id: 2,
        title: "Cabin Page",
        img: "/oasis-2.png",
      },
      {
        id: 3,
        title: "Bookings Page",
        img: "/oasis-3.png",
      },
    ],
  },
  {
    name: "Fast React Pizza",
    shortSummary:
      "Fast React Pizza is a single-page application (SPA) designed to simulate the core flow of a modern online food ordering system. It features a dynamic menu display, interactive cart management, and a simplified checkout process where users can place orders for delivery. The project focuses on demonstrating efficient front-end state management and robust client-side routing.",
    projectOverview:
      "This is a front-end focused application that allows users to browse a list of available pizzas (the menu), add items to a persistent cart, adjust quantities, and submit an order via a checkout form. The application utilizes a data source with Supabase to handle menu items and simulates the delivery process. Key features include client-side routing for navigating between the menu and the cart, and optimized state management to handle item addition, quantity updates, and calculating the final order total.",
    goals: [
      "To effectively manage application-wide state (the shopping cart) across multiple components without prop drilling, ensuring instantaneous updates when items are added or quantities are changed using Redux",
      "Implement Robust Client-Side Routing",
      "Simulate E-commerce Logic",
    ],
    challenges: [
      "The main challenge was ensuring the cart state was globally accessible and synchronized immediately when a user added an item from the menu, viewed the cart, or navigated away and returned.",
      "Effectively managing the asynchronous fetching of the menu data from the API and correctly handling loading and error states to prevent a broken user interface during network delays",
    ],
    technologyStack: [
      { icon: `/react.svg`, tech: "React.js" },
      { icon: "/tailwind.svg", tech: "Tailwindcss" },
      { icon: "/redux.svg", tech: "Redux" },
      { icon: "/supabase.svg", tech: "Supabase" },
      { icon: "/vercel.svg", tech: "Vercel" },
    ],
    links: {
      liveDemo: "https://fast-react-pizza-mu-ashen.vercel.app/",
      github: "https://github.com/olayinkasanusi/fast-react-pizza",
    },
    slidesData: [
      {
        id: 0,
        title: "Home Page",
        img: "/fast-1.png",
      },
      {
        id: 1,
        title: "Menu Page",
        img: "/fast-2.png",
      },
      {
        id: 2,
        title: "Cart Page",
        img: "/fast-3.png",
      },
      {
        id: 3,
        title: "Order Form",
        img: "/fast-4.png",
      },
      {
        id: 4,
        title: "Order page",
        img: "/fast-5.png",
      },
    ],
    color: "#011831",
  },
  {
    name: "The WorldWise App",
    shortSummary:
      "A DEMO traveller app for noting the cities visited and writing a summary about those cities",
    projectOverview:
      "WorldWise is a single-page application (SPA) designed to serve as a digital travel journal and interactive world map. The core functionality allows users to visually track the cities they have visited by marking them on a global map. For each city recorded, the user can create a corresponding journal entry, documenting their experiences, memories, and insights. This project uses a simulated authentication environment (fake login) to demonstrate user session management and ensure a personalized experience where users can privately manage their global travel history",
    goals: [
      "Enable Intuitive Geospatial Tracking.",
      "Facilitate Seamless Journaling Integration.",
      "Achieve a Fluid User Experience (UX).",
    ],
    challenges: [
      "Integrating and Managing Map State.",
      "Handling Asynchronous Data and Loading States",
      "Designing the Data Structure.",
    ],
    technologyStack: [
      { icon: `/react.svg`, tech: "React.js" },
      { icon: "/redux.svg", tech: "Redux" },
      { icon: "/supabase.svg", tech: "Supabase" },
      { icon: "/vercel.svg", tech: "Vercel" },
    ],
    links: {
      liveDemo: "https://worldwise-cyan-eta.vercel.app/",
      github: "https://github.com/olayinkasanusi/worldwise",
    },
    disabled: "disabled",
    slidesData: [
      {
        id: 0,
        title: "Home Page",
        img: "/worldwise-1.png",
      },
      {
        id: 1,
        title: "Fake Login Page",
        img: "/worldwise-2.png",
      },
      {
        id: 2,
        title: "Map View",
        img: "/worldwise-3.png",
      },
      {
        id: 3,
        title: "About Page",
        img: "/worldwise-4.png",
      },
    ],
  },
  {
    name: "AutoForce",
    shortSummary:
      "autoForce is a high-performance single-page application (SPA) designed as a premium digital storefront for a modern auto mechanic shop. It features a sophisticated dark/light mode engine, smooth scroll-triggered animations, and a responsive layout built to convert visitors into appointment bookings.",
    projectOverview:
      "This project modernizes the traditional mechanic shop website by prioritizing user experience and visual impact. The application is built as a cohesive single-page experience that guides the user through a narrative: from an immersive hero section to detailed service offerings, social proof via testimonials, and a final call to action. It leverages a component-based architecture to handle complex UI states, including a custom mobile navigation system and a theme toggle that persists across the session. The design focuses heavily on visual hierarchy and accessibility, ensuring critical information is legible in both high-contrast light and immersive dark themes.",
    goals: [
      "To implement a robust, system-aware Dark Mode toggle using Tailwind CSS classes that dynamically adjusts the entire color palette (backgrounds, text, borders) without page reloads.",
      "To create a custom 'Reveal' animation system using the Intersection Observer API, allowing content to fade and slide in gracefully as the user scrolls.",
      "To build a fully responsive navigation system that transitions from a transparent floating header to a solid, sticky navbar upon scrolling for better usability.",
    ],
    challenges: [
      "Designing the Hero section to be visually striking with full-width background imagery while maintaining strict accessibility standards and text readability across both light and dark variants.",
      "Managing the state and synchronization of the custom scroll animations to ensure they trigger smoothly on different device viewports without causing layout shifts or performance bottlenecks.",
    ],
    technologyStack: [
      { icon: "/react.svg", tech: "React.js" },
      { icon: "/tailwind.svg", tech: "Tailwindcss" },
      { icon: "/vite.svg", tech: "Vite" },
      { icon: "/vercel.svg", tech: "Vercel" },
    ],
    links: {
      liveDemo: "https://auto-force.vercel.app/",
      github: "https://github.com/olayinkasanusi/autoForce",
    },
    slidesData: [
      {
        id: 0,
        title: "Home Page",
        img: "/autoforce-1.png",
      },
      {
        id: 1,
        title: "Sales Page",
        img: "/autoforce-2.png",
      },
      {
        id: 2,
        title: "Contact us",
        img: "/autoforce-3.png",
      },
      {
        id: 3,
        title: "Testimonials",
        img: "/autoforce-4.png",
      },
    ],
  },
];
