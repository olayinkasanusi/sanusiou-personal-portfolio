export const projects = [
  {
    name: "The Wild Oasis App",
    shortSummary:
      "A modern, highly scalable internal Administration App for the hotel management, for checking in, out guests bookings, adding available cabins and so on....",
    projectOverview:
      "A full Stack App developed for the convenience of the hotel managements, where the bookings can be edited, the settings can be edited, featuring dark and light mode for user experience..",
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
      github: "",
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
    disabled: "disabled",
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
];
