import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Server, Layers, ShieldCheck, Award, ExternalLink, Terminal } from "lucide-react";
import Button from "../ui/Button";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import CareerPath from "../ui/CareerPath";
import useNavigation from "../utils/useNavigation";

// Highly technical grouped technologies stack representing a senior full-stack stack
const techCategories = [
  {
    title: "Backend & Server Runtime",
    items: [
      { tech: "Node.js Engine", level: "Expert / Core Event Loop" },
      { tech: "Express.js", level: "Expert / RESTful APIs" },
      { tech: "JWT / Auth Middlewares", level: "Advanced / Security" },
      { tech: "Asynchronous I/O", level: "Expert / Worker Streams" },
      { tech: "Microservice Routes", level: "Advanced / Scalability" },
      { tech: "Rate-Limiting & Caching", level: "Advanced / Redis" }
    ]
  },
  {
    title: "Frontend Architecture & Logic",
    items: [
      { tech: "TypeScript", level: "Expert / Strict Type" },
      { tech: "React.js", level: "Expert / 4+ Years" },
      { tech: "Next.js", level: "Advanced / SSR / App Router" },
      { tech: "JavaScript (ES6+)", level: "Expert / Core DOM" },
      { tech: "Zustand & Context API", level: "Expert / State Sync" },
      { tech: "HTML5 & TailwindCSS", level: "Expert / WCAG AA" }
    ]
  },
  {
    title: "Databases, Cloud & Tooling",
    items: [
      { tech: "PostgreSQL / Supabase", level: "Advanced / Real-time Sync" },
      { tech: "MongoDB / NoSQL", level: "Experienced / Schemas" },
      { tech: "Vite Bundler", level: "Expert / Speed HMR" },
      { tech: "Vercel / Node Serverless", level: "Production / Edge Deploy" },
      { tech: "Git / CI/CD Pipelines", level: "Expert / Version Control" },
      { tech: "Postman & API Testing", level: "Advanced / Endpoints" }
    ]
  }
];

// Interactive mock Unix terminal simulator
function TerminalConsole() {
  const [lines, setLines] = useState<string[]>([]);
  const fullText = [
    "$ whoami",
    "sanusiou",
    "$ cat profile.json",
    `{`,
    `  "role": "Full Stack Software Engineer",`,
    `  "experience": "4+ Years",`,
    `  "backend": ["Node.js", "Express", "REST APIs"],`,
    `  "frontend": ["React", "Next.js", "TypeScript"],`,
    `  "databases": ["PostgreSQL", "Supabase", "MongoDB"],`,
    `  "delivery": "100% End-to-End Ownership",`,
    `  "lighthouseScore": 100,`,
    `  "accessibility": "WCAG 2.1 AA"`,
    `}`
  ];

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let currentLine = "";
    
    const interval = setInterval(() => {
      if (lineIdx >= fullText.length) {
        clearInterval(interval);
        return;
      }
      
      const lineToType = fullText[lineIdx];
      
      if (lineToType.startsWith("$")) {
        // Character by character simulation
        if (charIdx < lineToType.length) {
          currentLine += lineToType[charIdx];
          setLines(prev => {
            const updated = [...prev];
            if (updated.length <= lineIdx) {
              updated.push(currentLine);
            } else {
              updated[lineIdx] = currentLine;
            }
            return updated;
          });
          charIdx++;
        } else {
          lineIdx++;
          charIdx = 0;
          currentLine = "";
        }
      } else {
        // Outputs display instantaneously
        setLines(prev => [...prev, lineToType]);
        lineIdx++;
        charIdx = 0;
        currentLine = "";
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Custom inline syntax highlighter
  const renderLine = (line: string, index: number) => {
    if (line.startsWith("$")) {
      return (
        <div key={index} className="text-emerald-400 font-mono text-xs sm:text-sm">
          <span className="text-slate-500 select-none mr-2">guest@sanusiou:~#</span>
          {line}
        </div>
      );
    }
    
    if (line.trim().startsWith('"') || line.trim() === "{" || line.trim() === "}" || line.trim().startsWith("[")) {
      return (
        <div key={index} className="text-slate-300 font-mono text-[11px] sm:text-xs pl-4 leading-relaxed whitespace-pre font-light">
          {line.split(/(:\s*)/).map((part, pIdx) => {
            if (part === ": ") {
              return <span key={pIdx} className="text-slate-400">: </span>;
            }
            if (part.startsWith('"') && (part.endsWith('",') || part.endsWith('"'))) {
              return <span key={pIdx} className="text-emerald-400">{part}</span>;
            }
            if (part.startsWith('"')) {
              return <span key={pIdx} className="text-pink-400 font-semibold">{part}</span>;
            }
            if (!isNaN(Number(part.replace(/,/g, '').trim()))) {
              return <span key={pIdx} className="text-amber-400 font-bold">{part}</span>;
            }
            return <span key={pIdx}>{part}</span>;
          })}
        </div>
      );
    }

    return (
      <div key={index} className="text-slate-400 font-mono text-xs sm:text-sm pl-4 leading-relaxed">
        {line}
      </div>
    );
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden text-left flex flex-col h-64 md:h-72">
      {/* OS Top Control Bar */}
      <div className="bg-slate-800/80 px-4 py-2 border-b border-slate-700/40 flex items-center justify-between shrink-0 select-none">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
          <Terminal size={10} /> bash - diagnostics.sh
        </span>
        <div className="w-10" />
      </div>
      {/* Code viewport */}
      <div className="p-5 overflow-y-auto flex-1 space-y-1 bg-slate-950/95 scrollbar-thin">
        {lines.map((line, idx) => renderLine(line, idx))}
        <span className="inline-block w-1.5 h-3.5 bg-emerald-400 animate-pulse ml-0.5" />
      </div>
    </div>
  );
}

// Stagger entry configurations
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function AboutMe() {
  const handleClick = useNavigation();
  const [activeTechTab, setActiveTechTab] = useState(0);

  return (
    <>
      <Helmet>
        <title>About Sanusi Olayinka Uthman | Full Stack Engineering Mindset</title>
        <meta
          name="description"
          content="Deep dive into Sanusi Olayinka Uthman's full stack architectural principles, Node.js backend services, frontend state, and end-to-end system ownership."
        />
        <link rel="canonical" href="https://sanusiou.pro/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "EducationalOccupationalCredential",
              "name": "Responsive Web Design Certification",
              "credentialCategory": "Certificate",
              "url": "https://www.freecodecamp.org/certification/sanusi-olayinka7/responsive-web-design",
              "recognizedBy": {
                "@type": "EducationalOrganization",
                "name": "freeCodeCamp"
              },
              "awardedTo": {
                "@type": "Person",
                "name": "Sanusi Olayinka Uthman"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="bg-white w-full flex items-center flex-col justify-between px-6 pt-28 pb-12 md:pt-36 gap-16 overflow-hidden engineering-grid min-h-screen">
        <NavBar />

        {/* 1. Asymmetric Intro & Developer Console */}
        <motion.div
          className="max-w-5xl w-full flex flex-col lg:flex-row items-stretch justify-between gap-8 border-b border-slate-200/60 pb-12 text-left"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Avatar and Bio */}
          <motion.div 
            variants={fadeUp}
            className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/45 backdrop-blur-md border border-slate-200/50 p-6 md:p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(15,23,42,0.02)]"
          >
            {/* Glowing avatar ring */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full blur-md opacity-25 group-hover:opacity-40 transition-all duration-500" />
              <img
                src="/profile_picture.jpg"
                alt="Sanusi Olayinka Uthman profile"
                className="relative rounded-full w-36 h-36 md:w-40 md:h-40 object-cover border-4 border-white bg-white shadow-md hover:scale-105 hover:rotate-1 transition-all duration-500"
              />
            </div>
            
            <div className="space-y-4 text-center md:text-left">
              <div>
                <h1 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
                  Sanusi Olayinka Uthman
                </h1>
                <span className="text-xs font-extrabold text-blue-600 bg-blue-100/50 px-2 py-0.5 rounded-full uppercase tracking-wider font-sans mt-1.5 inline-block">
                  Full Stack Software Engineer
                </span>
              </div>
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-light">
                I am a Full Stack Software Engineer specializing in scalable Node.js backend architectures, robust RESTful APIs, and high-performance user interfaces. Blending analytical server-side engineering with modern frontend component architectures, my production deliveries focus heavily on end-to-end data integrity, rendering metrics, and state stability.
              </p>
              <div className="pt-2">
                <Button 
                  onClick={() => handleClick("/projects")}
                  variant="primary-glass"
                  size="medium"
                  className="w-auto px-6"
                >
                  View Selected Work
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Developer console panel */}
          <motion.div 
            variants={fadeUp}
            className="w-full lg:w-96 shrink-0 flex items-center"
          >
            <TerminalConsole />
          </motion.div>
        </motion.div>

        {/* 2. Operational Priorities */}
        <div className="max-w-5xl w-full">
          <h2 className="text-2xl font-bold font-sans text-slate-900 mb-8 text-left flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full" />
            Operational Priorities
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeUp}
              className="bg-white/35 backdrop-blur-md border border-slate-200/50 rounded-2xl p-6 shadow-xs hover:border-blue-500/30 hover:bg-white/55 hover:scale-[1.02] hover:shadow-md transition-all duration-500 relative"
            >
              <div className="p-2 bg-blue-100/60 rounded-xl text-blue-600 w-fit mb-4">
                <Server size={20} />
              </div>
              <h3 className="font-sans font-bold text-base text-slate-900 mb-2">
                Node.js Backend & API Systems
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                Architecting performant server runtimes with Node.js and Express, designing RESTful API endpoints, rate-limiting, and managing async data processing pipelines.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              className="bg-white/35 backdrop-blur-md border border-slate-200/50 rounded-2xl p-6 shadow-xs hover:border-blue-500/30 hover:bg-white/55 hover:scale-[1.02] hover:shadow-md transition-all duration-500 relative"
            >
              <div className="p-2 bg-emerald-100/60 rounded-xl text-emerald-600 w-fit mb-4">
                <Layers size={20} />
              </div>
              <h3 className="font-sans font-bold text-base text-slate-900 mb-2">
                Frontend Architecture & State
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                Building decoupled, responsive client interfaces with React and Next.js, 
                relying on Zustand to ensure zero-lag synchronization across complex view hierarchies.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              className="bg-white/35 backdrop-blur-md border border-slate-200/50 rounded-2xl p-6 shadow-xs hover:border-blue-500/30 hover:bg-white/55 hover:scale-[1.02] hover:shadow-md transition-all duration-500 relative"
            >
              <div className="p-2 bg-amber-100/60 rounded-xl text-amber-600 w-fit mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-sans font-bold text-base text-slate-900 mb-2">
                End-to-End System Ownership
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                Delivering complete applications from database schema modeling (PostgreSQL/Supabase) to server deployment, security authentication, and WCAG AA accessibility.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* 3. Core Technologies (Highly Refined Developer Stack Grid) */}
        <div className="max-w-5xl w-full border-t border-slate-200/60 pt-12 text-left">
          <h2 className="text-2xl font-bold font-sans text-slate-900 mb-8 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full" />
            Core Technology Taxonomy
          </h2>

          {/* Desktop & Laptop Wide Viewports */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {techCategories.map((category, catIdx) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest font-mono">
                  {catIdx + 1}. {category.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {category.items.map((item) => (
                    <div 
                      key={item.tech} 
                      className="bg-white/30 backdrop-blur-md border border-slate-200/50 p-4 rounded-xl flex items-center justify-between hover:bg-white/55 hover:border-blue-500/25 hover:shadow-xs transition-all duration-300 hover:scale-[1.02] cursor-default"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span className="text-xs font-bold text-slate-800 font-sans">{item.tech}</span>
                      </div>
                      <span className="text-[9px] font-extrabold text-blue-600 bg-blue-50 border border-blue-500/10 px-2 py-0.5 rounded uppercase tracking-wide font-sans shrink-0">
                        {item.level.split(" / ")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Interactive Viewports */}
          <div className="block lg:hidden w-full space-y-6">
            {/* Sliding glass pill navigation */}
            <div className="flex p-1 bg-slate-100/80 backdrop-blur-md rounded-2xl border border-slate-200/50 relative overflow-hidden">
              {techCategories.map((category, idx) => (
                <button
                  key={category.title}
                  onClick={() => setActiveTechTab(idx)}
                  className={`relative flex-1 py-2.5 text-center text-xs font-bold tracking-wide font-sans rounded-xl transition-colors duration-300 focus:outline-hidden ${
                    activeTechTab === idx ? "text-blue-600" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {activeTechTab === idx && (
                    <motion.div
                      layoutId="activeTechTabBg"
                      className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 block truncate px-1">
                    {idx === 0 ? "Backend & Server" : idx === 1 ? "Frontend & Logic" : "DB & Cloud"}
                  </span>
                </button>
              ))}
            </div>

            {/* Dynamic category grids */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTechTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {techCategories[activeTechTab].items.map((item) => (
                  <div
                    key={item.tech}
                    className="bg-white/30 backdrop-blur-md border border-slate-200/50 p-4 rounded-xl flex items-center justify-between hover:bg-white/55 hover:border-blue-500/25 hover:shadow-xs transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-xs font-bold text-slate-800 font-sans">{item.tech}</span>
                    </div>
                    <span className="text-[9px] font-extrabold text-blue-600 bg-blue-50 border border-blue-500/10 px-2 py-0.5 rounded uppercase tracking-wide font-sans shrink-0">
                      {item.level.split(" / ")[0]}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 4. Learning Roadmap */}
        <div className="max-w-5xl w-full border-t border-slate-200/60 pt-12 text-left">
          <h2 className="text-2xl font-bold font-sans text-slate-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full" />
            Milestone Timeline
          </h2>
          <CareerPath />
        </div>

        {/* 5. Certifications */}
        <div className="max-w-5xl w-full border-t border-slate-200/60 pt-12 pb-16 text-left">
          <h2 className="text-2xl font-bold font-sans text-slate-900 mb-8 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full" />
            Certifications & Accreditation
          </h2>
          <div className="flex flex-col md:flex-row items-stretch gap-8 bg-white/35 backdrop-blur-md border border-slate-200/50 p-6 md:p-8 rounded-2xl hover:border-blue-500/20 hover:shadow-lg transition-all duration-500">
            <div className="w-full md:w-80 shrink-0 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 relative group">
              <img
                src="/freecodecamp-certificate.png"
                alt="FreeCodeCamp Responsive Web Design Certification"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-all duration-500" />
            </div>
            <div className="flex flex-col justify-between items-start space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <Award size={20} />
                  <span className="text-xs font-extrabold uppercase tracking-widest font-mono">Verified Credential</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-sans">
                  Responsive Web Design Accreditation
                </h3>
                <p className="font-sans text-xs text-slate-500 leading-relaxed font-light max-w-xl">
                  Completed the comprehensive freeCodeCamp Responsive Web Design syllabus. 
                  Demonstrated command over fluid layouts, responsive grid scaling, accessible semantic markup, 
                  and strict conformances to modern viewport styling parameters. Verified under certification code: 
                  <code className="bg-slate-100 text-slate-600 font-mono text-[10px] px-1.5 py-0.5 rounded ml-1 font-bold">sanusi-olayinka7/responsive-web-design</code>.
                </p>
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.freecodecamp.org/certification/sanusi-olayinka7/responsive-web-design"
                className="inline-block"
              >
                <Button
                  variant="primary-glass"
                  size="small"
                  className="w-auto px-4 text-xs font-semibold gap-1.5"
                >
                  Verify Certificate
                  <ExternalLink size={12} />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AboutMe;
