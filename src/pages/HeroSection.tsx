import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, Server, Layers, ShieldCheck } from "lucide-react";
import useNavigation from "../utils/useNavigation";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";

const metrics = [
  { value: "4+", label: "Years Full Stack Experience" },
  { value: "5+", label: "Production Full-Stack Apps" },
  { value: "100%", label: "End-to-End System Ownership" },
  { value: "Global", label: "Client Collaborations" },
];

const pillars = [
  {
    icon: Server,
    title: "Node.js Backend & API Systems",
    description:
      "Specialized in architecting performant Node.js server runtimes, Express.js microservices, and RESTful API endpoints. I design robust backend data layers, authentication middleware, rate-limiting, and asynchronous event pipelines that power high-concurrency systems.",
  },
  {
    icon: Layers,
    title: "Frontend Architecture & State",
    description:
      "Deep focus on React, Next.js, and TypeScript. I build modular component lifecycles with deterministic client-side state handling using Zustand and Context API to eliminate UI rendering lag and ensure seamless data flow across complex view hierarchies.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End System Delivery",
    description:
      "Product-minded full stack engineering: modeling relational database schemas with PostgreSQL/Supabase, orchestrating serverless functions, translating Figma designs into code, and optimizing Core Web Vitals and Lighthouse metrics for production.",
  },
];

const selectedWorks = [
  {
    name: "Anchor Yield",
    tag: "FinTech Platform",
    description:
      "Full-stack institutional investment platform with a Node.js API data aggregation layer, fast-polling state sync, and secure Supabase/PostgreSQL ledger mutations.",
    live: "https://anchor-yield.vercel.app/",
    github: "https://github.com/olayinkasanusi/anchor-yield",
    route: 0,
  },
  {
    name: "Goal Mania",
    tag: "E-Commerce & Analytics Hub",
    description:
      "Full-stack international platform powered by Node.js server streams for live sports polling, custom merchandise configuration algorithms, and Next.js SSR.",
    live: "https://goal-mania.it",
    github: "https://github.com/olayinkasanusi/goal-mania",
    route: 1,
  },
  {
    name: "dGold Luxury Boutique",
    tag: "Luxury E-Commerce Suite",
    description:
      "Full-stack luxury retail system featuring dynamic server-side pricing engines for gold spot rates, role-restricted admin inventory mutations, and real-time state sync.",
    live: "https://dgold.shop",
    github: "https://github.com/olayinkasanusi/dgold",
    route: 2,
  },
  {
    name: "Opulent Pages",
    tag: "Publishing Platform",
    description:
      "Full-stack publishing system engineered with optimized server asset pipelines, strict typography layouts, and full WCAG 2.1 AA accessibility compliance.",
    live: "https://opulentpages.ca",
    github: "https://github.com/olayinkasanusi/td-hilderley",
    route: 3,
  },
];

const techStack = {
  "Backend & Server": [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "JWT Authentication",
    "Asynchronous I/O",
    "Middleware Design",
  ],
  "Frontend Architecture": [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5 / CSS3",
    "TailwindCSS",
  ],
  "Databases & Cloud": [
    "PostgreSQL",
    "Supabase",
    "MongoDB",
    "Vercel / Serverless",
    "Redis Caching",
    "Zustand / Redux",
  ],
  "Tooling & DevOps": [
    "Git / GitHub",
    "Vite Bundler",
    "Postman",
    "Figma Translation",
    "WCAG Accessibility",
    "Jest / Testing",
  ],
};

const fadeInUpBlur = {
  hidden: { opacity: 0, y: 35, filter: "blur(8px)", scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14,
      mass: 0.8,
    },
  },
} as const;

const headerVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
    },
  },
} as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const HeroSection = () => {
  const handleClick = useNavigation();

  return (
    <>
      <Helmet>
        <title>Sanusi Olayinka Uthman | Full Stack Software Engineer</title>
        <meta
          name="description"
          content="Personal portfolio of Sanusi Olayinka Uthman, a full stack software engineer specializing in scalable Node.js backend architectures, RESTful APIs, and modern React/Next.js web applications."
        />
        <link rel="canonical" href="https://sanusiou.pro/" />
      </Helmet>

      <div className="relative w-full bg-white engineering-grid overflow-hidden pt-24 md:pt-32">
        <NavBar />

        <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 py-16">
          <div className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.98 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 15,
                duration: 0.8,
              }}
              className="space-y-6 text-left"
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 font-sans">
                Sanusi Olayinka Uthman —
                <span className="block text-blue-600 mt-1">
                  Full Stack Engineer
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-sans font-light max-w-3xl">
                As a full stack engineer, I architect end-to-end web applications — building high-performance Node.js backend services, secure RESTful APIs, and scalable databases alongside responsive, pixel-perfect frontend interfaces with React, Next.js, and TypeScript.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Button
                  onClick={() => handleClick("/projects")}
                  variant="primary-glass"
                  size="large"
                  className="w-auto"
                >
                  View Selected Full-Stack Work
                </Button>
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

        <section className="px-6 py-12 border-t border-slate-100">
          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeInUpBlur}
              >
                <div className="glass-card text-left">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-sans tracking-tight break-words">
                    {metric.value}
                  </p>
                  <p className="text-sm text-slate-500 font-sans font-light mt-1 leading-snug">
                    {metric.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={headerVariant}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                How I Build
              </h2>
              <p className="text-slate-500 font-sans font-light mt-2 max-w-2xl">
                An engineering-first approach to full-stack development — grounded
                in Node.js backend reliability, frontend architecture, and full delivery ownership.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeInUpBlur}
                  className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                    <pillar.icon size={18} className="text-blue-600" />
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={headerVariant}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                Selected Systems
              </h2>
              <p className="text-slate-500 font-sans font-light mt-2 max-w-2xl">
                Full-stack production applications I engineered — spanning Node.js financial data
                pipelines, luxury e-commerce, and editorial publishing
                platforms.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {selectedWorks.map((work) => (
                <motion.div
                  key={work.name}
                  variants={fadeInUpBlur}
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
                    <Button
                      onClick={() => handleClick(`/projects/${work.route}`)}
                      variant="secondary-glass"
                      size="small"
                      className="ml-auto w-auto px-3.5 py-1.5 rounded-lg text-xs"
                    >
                      Case Study
                      <ArrowUpRight size={12} />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={headerVariant}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                Technical Stack Index
              </h2>
              <p className="text-slate-500 font-sans font-light mt-2 max-w-2xl">
                A categorized taxonomy of the backend tools, server frameworks, frontend libraries,
                and workflows I use to ship production-grade full stack systems.
              </p>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {Object.entries(techStack).map(([category, tools]) => (
                <motion.div
                  key={category}
                  variants={fadeInUpBlur}
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
