import Button from "../ui/Button";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import Icons from "../ui/Icons";
import CareerPath from "../ui/CareerPath";
import useNavigation from "../utils/useNavigation";
import TypeOnce from "../ui/TypeOnce";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const technologies = [
  { icon: "/html.svg", tech: "HTML" },
  { icon: "/javascript.svg", tech: "Javascript" },
  { icon: "/css.svg", tech: "CSS" },
  { icon: `/react.svg`, tech: "React.js" },
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
  const headerStyling =
    "text-left text-2xl text-white font-montserrat font-semibold mb-4";

  const paragraphStyle = "text-[#a3a3a3] leading-8 font-raleway font-light";

  const containerStyle =
    "max-w-3xl pb-8 w-full flex flex-col justify-between items-start border-b border-gray-500";

  return (
    <>
      {/* SEO Optimization: Page-Specific Metadata (Assuming react-helmet-async is installed and configured) */}
      <Helmet>
        <title>
          About Sanusi O.U. | Frontend Developer Skills & Certifications
        </title>
        <meta
          name="description"
          content="Meet Sanusi O.U., a freelance Frontend Developer specializing in high-performance web applications using React, Next.js, and modern CSS frameworks. Explore core tech stack and certifications."
        />
        <link rel="canonical" href="https://www.yourdomain.com/about" />

        {/* JSON-LD Schema for the freeCodeCamp Certification */}
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
                "name": "Sanusi O.U."
              }
            }
          `}
        </script>
      </Helmet>

      <motion.div
        className="bg-[#0A192F] w-full flex items-center flex-col justify-between gap-10 px-5 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <NavBar />

        {/* PROFILE SECTION */}
        <motion.div
          className="max-w-3xl flex items-center md:flex-row flex-col justify-between gap-12 border-b border-gray-500 pb-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src="/profile_picture.jpg"
            alt="Sanusi Olayinka professional profile picture as a frontend developer"
            className="rounded-full w-50 float-left border-white border"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="text-left flex flex-col gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {/* SEO Optimization: Use h1 for the main page topic. */}
            <motion.h1
              className="font-montserrat text-3xl text-white font-bold"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <TypeOnce text=" Hello, I am Sanusi Olayinka" initDelay={500} />
            </motion.h1>

            <motion.p
              className={paragraphStyle}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <TypeOnce
                text={`
              I am a freelance Frontend web developer,
              constantly honing my skills and bringing digital ideas to life
              through coding, I specialize in creating modern Web Applications
              that are both performant and delightful to use. I focus on React, Next.js, and building user-centric interfaces.`}
                initDelay={2500}
                typingSpeed={50}
              />
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button onClick={() => handleClick("/projects")}>
                View My Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* TECHNOLOGIES */}
        <motion.div
          className={containerStyle}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* SEO Optimization: Use h2 for a major section. */}
          <h2 className={headerStyling}>Core Technologies</h2>

          <motion.div
            className="px-2 py-3 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-10 m-auto sm:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.tech}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Icons icon={tech.icon} tech={tech.tech} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ROADMAP */}
        <motion.div
          className={containerStyle}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* SEO Optimization: Use h2 for a major section. */}
          <h2 className={headerStyling}>My Learning RoadMap</h2>
          <CareerPath />
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div
          className={`${containerStyle} border-b-0 mb-30`}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* SEO Optimization: Use h2 for a major section. */}
          <h2 className={headerStyling}>Certifications</h2>

          <motion.div
            className="flex justify-between items-center gap-4 flex-col md:flex-row-reverse"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              className="w-80"
              src="/freecodecamp-certificate.png"
              alt="FreeCodeCamp Responsive Web Design Certification awarded to Sanusi O.U."
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <motion.p
              className={`${paragraphStyle} text-gray-400`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Completed the freeCodeCamp Responsive Web Design course in late
              2023. Built hands-on projects with **HTML5**, **CSS3**, Flexbox
              and Grid and focused on mobile-first, accessible layouts. I enjoy
              turning designs into usable experiences, iterating from feedback
              and solving layout challenges. Ready to apply these front-end
              skills on real projects and in collaborative teams.{" "}
              <a
                target="_blank"
                href="https://www.freecodecamp.org/certification/sanusi-olayinka7/responsive-web-design"
                className="underline font-bold text-white"
              >
                Check Out the Certification
              </a>
            </motion.p>
          </motion.div>
        </motion.div>

        <Footer position="fixed" />
      </motion.div>
    </>
  );
}

export default AboutMe;
