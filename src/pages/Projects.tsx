import { useState } from "react";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  X, 
  Eye, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  SlidersHorizontal 
} from "lucide-react";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";
import useNavigation from "../utils/useNavigation";
import { projects, Project, Technology } from "../../data/projects";

// High-end portfolio performance/metrics statistics mapped by project
const projectPerformanceStats: Record<string, { label: string; value: string }[]> = {
  "Anchor Yield": [
    { label: "Load Speed", value: "<1.1s" },
    { label: "Visual Stability", value: "100%" },
    { label: "Data Sync", value: "Real-time" }
  ],
  "Goal Mania": [
    { label: "API Sync", value: "60fps" },
    { label: "Local Cart", value: "Persistent" },
    { label: "Page Speed", value: "98/100" }
  ],
  "dGold Luxury Boutique": [
    { label: "Calc Engine", value: "Active" },
    { label: "Mutations", value: "Instant" },
    { label: "Asset Load", value: "Optimized" }
  ],
  "Opulent Pages": [
    { label: "Accessibility", value: "100%" },
    { label: "Lighthouse SEO", value: "100/100" },
    { label: "CLS Metric", value: "0.0" }
  ]
};

function Projects() {
  const handleClick = useNavigation();
  const navigate = useNavigate();
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [quickViewProject, setQuickViewProject] = useState<Project | null>(null);
  const [quickViewIndex, setQuickViewIndex] = useState<number | null>(null);

  // Categories list
  const categories = ["All", "FinTech", "E-Commerce", "Editorial"];

  // Mapping indices dynamically so we route to the right item
  const projectsWithIndex = projects.map((proj, idx) => ({ ...proj, originalIndex: idx }));

  const filteredProjects = projectsWithIndex.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      (selectedCategory === "FinTech" && project.name === "Anchor Yield") ||
      (selectedCategory === "E-Commerce" && (project.name === "Goal Mania" || project.name === "dGold Luxury Boutique")) ||
      (selectedCategory === "Editorial" && project.name === "Opulent Pages");

    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologyStack.some((t) => t.tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleQuickView = (project: Project, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProject(project);
    setQuickViewIndex(index);
  };

  return (
    <>
      <Helmet>
        <title>Front-end Projects | Sanusi Olayinka Uthman</title>
        <meta
          name="description"
          content="Explore the engineering showcase of Sanusi Olayinka Uthman, including FinTech platforms, media pipelines, and luxury digital checkouts."
        />
        <link rel="canonical" href="https://sanusiou.pro/projects" />
      </Helmet>
      
      <div className="bg-white w-full flex items-center flex-col justify-between px-6 pt-28 pb-12 md:pt-36 gap-16 overflow-hidden engineering-grid min-h-screen">
        <NavBar position="relative" />

        {/* Hero title */}
        <div className="max-w-5xl w-full text-left space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
            Selected Frontend Work
          </h1>
          <p className="text-lg text-slate-600 font-sans font-light max-w-2xl">
            A selective index of projects demonstrating state synchronization, dynamic
            checkout flows, media optimization pipelines, and strict WCAG compliance.
          </p>
        </div>

        {/* 1. Senior Metrics Dashboard */}
        <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-start gap-3 p-4 bg-slate-900/5 backdrop-blur-md border border-slate-200/50 rounded-2xl text-left"
          >
            <div className="p-2 bg-blue-100/60 rounded-xl text-blue-600 mt-0.5">
              <Cpu size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-sans">Core Stack</p>
              <p className="text-sm font-bold text-slate-800 font-sans mt-0.5">React / Next.js / TS</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-start gap-3 p-4 bg-slate-900/5 backdrop-blur-md border border-slate-200/50 rounded-2xl text-left"
          >
            <div className="p-2 bg-emerald-100/60 rounded-xl text-emerald-600 mt-0.5">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-sans">Delivery Rate</p>
              <p className="text-sm font-bold text-slate-800 font-sans mt-0.5">100% Code Ownership</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-start gap-3 p-4 bg-slate-900/5 backdrop-blur-md border border-slate-200/50 rounded-2xl text-left"
          >
            <div className="p-2 bg-amber-100/60 rounded-xl text-amber-600 mt-0.5">
              <Zap size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-sans">Accessibility</p>
              <p className="text-sm font-bold text-slate-800 font-sans mt-0.5">WCAG 2.1 AA target</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-start gap-3 p-4 bg-slate-900/5 backdrop-blur-md border border-slate-200/50 rounded-2xl text-left"
          >
            <div className="p-2 bg-purple-100/60 rounded-xl text-purple-600 mt-0.5">
              <BarChart3 size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-sans">Integration</p>
              <p className="text-sm font-bold text-slate-800 font-sans mt-0.5">REST & Real-time Poll</p>
            </div>
          </motion.div>
        </div>

        {/* 2. Controls Panel (Search & Interactive Filters) */}
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 py-2 border-b border-slate-100">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/5 backdrop-blur-xs p-1 rounded-xl border border-slate-200/40">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-1.5 rounded-lg text-xs font-semibold font-sans transition-all cursor-pointer ${
                    isActive
                      ? "text-blue-600 bg-white shadow-xs border border-blue-500/10"
                      : "text-slate-500 hover:text-slate-800 hover:bg-white/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full pl-9 pr-4 py-2 bg-slate-900/5 backdrop-blur-xs border border-slate-200/60 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all outline-none font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* 3. Projects Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer backdrop-blur-md bg-white/40 border border-slate-200/50 rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(15,23,42,0.02)] hover:shadow-[0_12px_40px_0_rgba(59,130,246,0.1)] hover:border-blue-500/30 hover:bg-white/60 transition-all duration-500 flex flex-col justify-between min-h-[400px] sm:min-h-[480px]"
                onClick={() => navigate(`/projects/${project.originalIndex}`)}
              >
                {/* Glare sheen overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

                <div>
                  {/* Card Image */}
                  <div className="aspect-video w-full overflow-hidden border-b border-slate-100 bg-slate-50 relative">
                    <img
                      src={project.slidesData[0]?.img || "/dgold-1.png"}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-all duration-500" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md border border-white/40 px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-700 uppercase tracking-wider font-sans">
                      {project.name === "Anchor Yield" ? "FinTech" : 
                       project.name === "Goal Mania" || project.name === "dGold Luxury Boutique" ? "E-Commerce" : 
                       "Editorial"}
                    </div>
                  </div>

                  {/* Card Header & Content */}
                  <div className="p-6 pb-2 space-y-2 text-left">
                    <h2 className="text-xl font-bold text-slate-900 font-sans group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                      {project.name}
                    </h2>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans font-light line-clamp-3">
                      {project.shortSummary}
                    </p>
                  </div>
                </div>

                {/* Card footer details & action buttons */}
                <div className="p-6 pt-0 space-y-4">
                  {/* Performance stats bar */}
                  <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-slate-900/5 backdrop-blur-xs rounded-xl border border-slate-200/10">
                    {projectPerformanceStats[project.name]?.map((stat, i) => (
                      <div key={i} className="text-left">
                        <span className="block text-[8px] font-bold text-slate-400 uppercase font-sans tracking-wide leading-none">{stat.label}</span>
                        <span className="text-[10px] font-extrabold text-blue-600 font-sans">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions & technologies */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    {/* Tech list */}
                    <div className="flex gap-1.5 overflow-hidden">
                      {project.technologyStack.slice(0, 3).map((tech: Technology) => (
                        <span
                          key={tech.tech}
                          className="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200/60 text-slate-600 rounded-md font-sans shrink-0"
                        >
                          {tech.tech}
                        </span>
                      ))}
                    </div>

                    {/* Button row */}
                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        variant="secondary-glass"
                        size="small"
                        className="w-auto px-3.5 py-1.5 h-8 text-[11px] rounded-lg"
                        onClick={(e) => handleQuickView(project, project.originalIndex, e)}
                      >
                        <Eye size={12} />
                        Quick View
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center space-y-2">
              <p className="text-slate-400 text-sm font-sans font-light">No engineering projects found matching your criteria.</p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} 
                className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </motion.div>

        {/* 4. Collaboration CTA */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <Button 
            onClick={() => handleClick("/contactme")}
            variant="primary-glass"
            size="large"
            className="w-auto px-8 py-3.5"
          >
            Contact For Collaborations
          </Button>
        </div>

        <Footer />
      </div>

      {/* 5. Immersive Quick View Modal overlay */}
      <AnimatePresence>
        {quickViewProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs">
            {/* Modal backdrop click closer */}
            <div 
              className="absolute inset-0 cursor-default" 
              onClick={() => { setQuickViewProject(null); setQuickViewIndex(null); }}
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-white/95 backdrop-blur-lg border border-slate-200 shadow-2xl rounded-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[85vh] z-10"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 backdrop-blur-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-sans">Interactive Preview</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-sans mt-0.5">{quickViewProject.name}</h3>
                </div>
                <button
                  onClick={() => { setQuickViewProject(null); setQuickViewIndex(null); }}
                  className="p-1.5 rounded-full hover:bg-slate-200/80 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer outline-none"
                  aria-label="Close preview modal"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-left">
                {/* Hero image preview */}
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-50 border border-slate-100 relative">
                  <img
                    src={quickViewProject.slidesData[0]?.img || "/dgold-1.png"}
                    alt={quickViewProject.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-bold text-white/90 bg-blue-600 px-2 py-0.5 rounded-md font-sans uppercase">
                      {quickViewProject.name === "Anchor Yield" ? "FinTech Platform" : 
                       quickViewProject.name === "Goal Mania" ? "Sports E-Commerce" : 
                       quickViewProject.name === "dGold Luxury Boutique" ? "Luxury Storefront" : 
                       "Editorial Publishing"}
                    </span>
                  </div>
                </div>

                {/* Overviews */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider font-sans">Engineering Overview</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-light">{quickViewProject.projectOverview}</p>
                </div>
                
                {/* Goals and Challenges columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2 text-left">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-sans">Primary Goals</h5>
                    <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1.5 font-light leading-relaxed">
                      {quickViewProject.goals.map((goal, idx) => (
                        <li key={idx}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2 text-left">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-sans">Key Challenges</h5>
                    <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1.5 font-light leading-relaxed">
                      {quickViewProject.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technology list */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider font-sans">Technology Stack Overview</h4>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProject.technologyStack.map((tech) => (
                      <span
                        key={tech.tech}
                        className="text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-md font-sans flex items-center gap-1.5 shadow-xs"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {tech.tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-100 flex items-center justify-end gap-3 bg-slate-50/50 backdrop-blur-xs">
                <Button
                  variant="secondary-glass"
                  size="small"
                  onClick={() => { setQuickViewProject(null); setQuickViewIndex(null); }}
                  className="w-auto px-4"
                >
                  Close
                </Button>
                <Button
                  variant="primary-glass"
                  size="small"
                  onClick={() => {
                    if (quickViewIndex !== null) {
                      navigate(`/projects/${quickViewIndex}`);
                    }
                  }}
                  className="w-auto px-4"
                >
                  Full Case Study
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;
