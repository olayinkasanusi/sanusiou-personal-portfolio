import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import useNavigation from "../utils/useNavigation";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";

const metrics = [
  { value: "4+", label: "Years Frontend Experience" },
  { value: "5+", label: "Production Deployments" },
  { value: "100%", label: "Interface Ownership & Delivery" },
  { value: "International", label: "Client Collaborations" },
];

const pillars = [
  {
    title: "Frontend Architecture & State",
    description:
      "Deep focus on React, Next.js, and TypeScript. I build modular component lifecycles with robust client-side state handling using Zustand and Context API to eliminate UI rendering lag and ensure deterministic data flow across complex view hierarchies.",
  },
  {
    title: "Complex System Integrations",
    description:
      "Hands-on experience consuming RESTful data streams, implementing fast-polling API data synchronization, and managing backend mutations and relational databases via Supabase. I ensure that every data layer transitions smoothly on the client side.",
  },
  {
    title: "End-to-End Feature Ownership",
    description:
      "Product-minded engineering approach: collaborating across cross-functional teams, translating design systems from Figma into reusable code blocks, and optimizing critical web vitals including CLS, LCP, and performance metrics for production readiness.",
  },
];

const selectedWorks = [
  {
    name: "Anchor Yield",
    tag: "FinTech Platform",
    description:
      "Institutional-grade investment dashboard managing real-time financial API integration, multi-step transaction states, and complex data synchronization across portfolio widgets.",
    live: "https://anchor-yield.vercel.app/",
    github: "https://github.com/olayinkasanusi/anchor--yield",
    route: 0,
  },
  {
    name: "Goal Mania",
    tag: "E-Commerce & Analytics Hub",
    description:
      "International collaboration for an Indonesian client handling real-time sports polling data, a jersey merchandise e-commerce engine, and custom state-driven product configuration flows.",
    live: "https://goal-mania.it",
    github: "https://github.com/goalmania/goal-mania",
    route: 1,
  },
  {
    name: "dGold Luxury Boutique",
    tag: "Luxury E-Commerce",
    description:
      "High-end digital storefront processing dynamic multi-attribute product matrices — weights, karats, spot prices — with a secure administration dashboard for real-time inventory mutations.",
    live: "https://dgold.shop",
    github: "https://github.com/olayinkasanusi/dgold",
    route: 2,
  },
  {
    name: "Opulent Pages",
    tag: "Author Platform",
    description:
      "Editorial publishing system built with strict typography layouts, aggressive asset-loading optimization pipelines, and full WCAG 2.1 AA accessibility compliance for global readers.",
    live: "https://opulentpages.ca",
    github: "https://github.com/olayinkasanusi/td-hilderly/",
    route: 3,
  },
];

const techStack = {
  Architecture: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "SASS",
  ],
  "State & Databases": [
    "Zustand",
    "Redux",
    "Context API",
    "RESTful APIs",
    "Supabase",
  ],
  "Workflow & Build": [
    "Git",
    "Vite",
    "Webpack",
    "Figma Translation",
    "Storybook",
    "WCAG Accessibility",
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const HeroSection = () => {
  const handleClick = useNavigation();

  return (
    <>
      <Helmet>
        <title>Sanusi Olayinka Uthman | Senior Frontend Engineer</title>
        <meta
          name="description"
          content="Personal portfolio of Sanusi Olayinka Uthman, a senior frontend engineer specializing in converting high-end design languages into scalable web apps."
        />
        <link rel="canonical" href="https://sanusiou.pro/" />
      </Helmet>

      <div className="relative w-full bg-white engineering-grid overflow-hidden">
        <div className="sticky top-0 z-50 flex justify-center pt-4">
          <NavBar position="relative" />
        </div>

        <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 py-16">
          <div className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-left"
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 font-sans">
                Sanusi Olayinka Uthman —
                <span className="block text-blue-600 mt-1">
                  Frontend Engineer
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-sans font-light max-w-3xl">
                I approach frontend development through the analytical lens of
                an engineering background. Over the past four years, my focus has
                been on converting high-end design languages into scalable,
                performant web applications. I specialize in building reactive
                interfaces that integrate seamlessly with complex APIs and custom
                state logic, ensuring that critical data layers transition
                smoothly on the client side.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-sm transition-all font-sans text-sm cursor-pointer"
                  onClick={() => handleClick("/projects")}
                >
                  View Selected Engineering Work
                </button>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/olayinkasanusi"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-200 rounded-lg bg-white/50 backdrop-blur-xs transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/sanusiolayinka"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-200 rounded-lg bg-white/50 backdrop-blur-xs transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:sanusiolayinka7@gmail.com"
                    className="p-3 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-200 rounded-lg bg-white/50 backdrop-blur-xs transition-all"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-slate-100">
          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                  {metric.value}
                </p>
                <p className="text-sm text-slate-500 font-sans font-light mt-1 leading-snug">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                How I Build
              </h2>
              <p className="text-slate-500 font-sans font-light mt-2 max-w-2xl">
                An engineering-first approach to frontend development — grounded
                in architecture, integration depth, and full delivery ownership.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-bold font-sans text-sm">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-sans mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                Selected Systems
              </h2>
              <p className="text-slate-500 font-sans font-light mt-2 max-w-2xl">
                Production applications I engineered — spanning financial data
                pipelines, luxury e-commerce, and editorial publishing
                platforms.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {selectedWorks.map((work) => (
                <motion.div
                  key={work.name}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline gap-3 mb-3">
                      <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-blue-600 transition-colors">
                        {work.name}
                      </h3>
                      <span className="text-xs italic text-slate-400 font-sans">
                        {work.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans font-light mb-5">
                      {work.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-5 pt-3 border-t border-slate-100">
                    <a
                      href={work.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 font-sans transition-colors"
                    >
                      Live Deployment
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href={work.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 font-sans transition-colors"
                    >
                      Source Code
                      <Github size={12} />
                    </a>
                    <button
                      onClick={() => handleClick(`/projects/${work.route}`)}
                      className="ml-auto flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-blue-600 font-sans transition-colors cursor-pointer"
                    >
                      Case Study
                      <ArrowUpRight size={12} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                Technical Stack Index
              </h2>
              <p className="text-slate-500 font-sans font-light mt-2 max-w-2xl">
                A categorized taxonomy of the tools, frameworks, and workflows I
                use to ship production-grade frontend systems.
              </p>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {Object.entries(techStack).map(([category, tools]) => (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-sm font-bold text-slate-900 font-sans uppercase tracking-wider mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-medium px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full font-sans hover:border-blue-300 hover:text-blue-600 transition-all cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HeroSection;
