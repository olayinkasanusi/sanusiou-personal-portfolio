import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Button from "../ui/Button";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import Icons from "../ui/Icons";
import CareerPath from "../ui/CareerPath";
import useNavigation from "../utils/useNavigation";

const technologies = [
  { icon: "/html.svg", tech: "HTML" },
  { icon: "/javascript.svg", tech: "Javascript" },
  { icon: "/css.svg", tech: "CSS" },
  { icon: "/react.svg", tech: "React.js" },
  { icon: "/tailwind.svg", tech: "Tailwindcss" },
  { icon: "/redux.svg", tech: "Redux" },
  { icon: "/nextjs.svg", tech: "Next.js" },
  { icon: "/supabase.svg", tech: "Supabase" },
  { icon: "/vercel.svg", tech: "Vercel" },
  { icon: "/netlify.svg", tech: "Netlify" },
  { icon: "/figma.svg", tech: "Figma" },
  { icon: "/bootstrap.svg", tech: "Bootstrap" },
];

function AboutMe() {
  const handleClick = useNavigation();

  return (
    <>
      <Helmet>
        <title>About Sanusi Olayinka Uthman | Engineering Mindset</title>
        <meta
          name="description"
          content="Deep dive into Sanusi Olayinka Uthman's architectural principles, frontend state handle strategy, integrations, and lifecycle ownership."
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

      <motion.div
        className="bg-white w-full flex items-center flex-col justify-between px-6 py-12 gap-16 overflow-hidden engineering-grid min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <NavBar position="relative" />

        <motion.div
          className="max-w-4xl w-full flex items-center md:flex-row flex-col justify-between gap-12 border-b border-slate-200 pb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src="/profile_picture.jpg"
            alt="Sanusi Olayinka Uthman profile"
            className="rounded-full w-48 h-48 object-cover border-2 border-slate-200 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          <div className="text-left flex flex-col gap-4 max-w-xl">
            <h1 className="font-sans text-3xl font-extrabold text-slate-900">
              Sanusi Olayinka Uthman
            </h1>
            <p className="font-sans text-base text-slate-600 leading-relaxed font-light">
              I am a Frontend Engineer dedicated to translating complex technical
              challenges into clean, responsive user interfaces. Blending an
              engineering education with frontend architecture, I focus on
              performance, structured state flow, and seamless API integrations.
            </p>
            <div>
              <Button onClick={() => handleClick("/projects")}>
                View Engineering Work
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl w-full">
          <h2 className="text-2xl font-bold font-sans text-slate-900 mb-8 text-left">
            Operational Priorities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-6 shadow-xs hover:border-blue-500 hover:shadow-md transition-all duration-300">
              <h3 className="font-sans font-bold text-lg text-slate-900 mb-3">
                Frontend Architecture & State
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-light">
                Deep focus on React, Next.js, and TypeScript, utilizing modular
                component architectures and robust custom state handling (like
                Zustand) to handle dynamic data.
              </p>
            </div>
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-6 shadow-xs hover:border-blue-500 hover:shadow-md transition-all duration-300">
              <h3 className="font-sans font-bold text-lg text-slate-900 mb-3">
                Complex System Integrations
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-light">
                Proven experience consuming RESTful financial and administrative
                data streams, dealing with fast-polling API data synchronization,
                and managing relational databases via Supabase.
              </p>
            </div>
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-6 shadow-xs hover:border-blue-500 hover:shadow-md transition-all duration-300">
              <h3 className="font-sans font-bold text-lg text-slate-900 mb-3">
                Ownership Lifecycle
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-light">
                Managing feature delivery end-to-end—from initial high-fidelity
                Figma design reviews and UX accessibility audits down to
                production deployment and speed optimization.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full border-t border-slate-200 pt-12 text-left">
          <h2 className="text-2xl font-bold font-sans text-slate-900 mb-6">
            Core Technologies
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {technologies.map((tech) => (
              <Icons key={tech.tech} icon={tech.icon} tech={tech.tech} />
            ))}
          </div>
        </div>

        <div className="max-w-4xl w-full border-t border-slate-200 pt-12 text-left">
          <h2 className="text-2xl font-bold font-sans text-slate-900 mb-6">
            Learning Roadmap
          </h2>
          <CareerPath />
        </div>

        <div className="max-w-4xl w-full border-t border-slate-200 pt-12 pb-16 text-left">
          <h2 className="text-2xl font-bold font-sans text-slate-900 mb-8">
            Certifications
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50/50 border border-slate-200/80 p-6 rounded-xl">
            <img
              src="/freecodecamp-certificate.png"
              alt="FreeCodeCamp Responsive Web Design Certification"
              className="w-full md:w-72 rounded-lg border border-slate-200 shadow-xs"
            />
            <div className="space-y-4">
              <p className="font-sans text-slate-600 text-sm leading-relaxed font-light">
                Completed the freeCodeCamp Responsive Web Design course in late
                2023. Built hands-on projects with HTML5, CSS3, Flexbox, and Grid,
                focusing on mobile-first, accessible layouts. Ready to apply these
                front-end skills on real projects and in collaborative teams.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.freecodecamp.org/certification/sanusi-olayinka7/responsive-web-design"
                className="inline-block text-blue-600 hover:text-blue-700 font-bold font-sans text-sm underline"
              >
                Check Out the Certification
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </motion.div>
    </>
  );
}

export default AboutMe;
