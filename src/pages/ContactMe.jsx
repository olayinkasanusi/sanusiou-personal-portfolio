import React, { useState } from "react";
import NavBar from "../ui/NavBar";
import SocialLinks from "../ui/SocialLinks";
import { useMailer } from "../utils/useMailer";
import MiniSpinner from "../ui/MiniSpinner";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { sendMail: mailing, isLoading: isMailing } = useMailer();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      mailing(formData);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const inputClasses =
    "w-full p-3 rounded-lg border-2 border-blue-400 bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition-all font-raleway outline-blue-500 disabled:bg-gray-400";

  const labelClasses =
    "block text-white text-base font-semibold mb-2 font-raleway";

  return (
    <>
      <Helmet>
        <title>
          Contact Sanusi O.U. | Frontend Developer for Hire (React/Next.js)
        </title>
        <meta
          name="description"
          content="Ready to start a project? Contact Sanusi O.U. for freelance frontend development, React, Next.js, and web application collaborations. Get in touch for a quote or consultation."
        />
        <link rel="canonical" href="https://www.yourdomain.com/contact" />

        {/* JSON-LD ContactPage Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "ContactPage",
              "name": "Contact Sanusi O.U. - Frontend Developer",
              "url": "https://www.yourdomain.com/contact",
              "description": "Form to contact Sanusi O.U. for hiring, project proposals, or collaboration.",
              "potentialAction": {
                "@type": "CommunicateAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "mailto:[email protected]"
                },
                "resultContentType": "text/plain"
              }
            }
          `}
        </script>
      </Helmet>

      <motion.div
        className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4"
        style={{ fontFamily: "Inter, sans-serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <NavBar />

        <motion.div
          className="w-full max-w-lg mx-auto p-8 bg-[#0f172a] rounded-xl shadow-2xl mt-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* H1 Tag for main page heading */}
            <h1 className="md:text-4xl text-3xl font-extrabold text-white mb-2 font-montserrat">
              Let's Connect and Build
            </h1>

            <p className="text-gray-400 text-base max-w-sm mx-auto font-raleway">
              Have a project in mind or just want to say hi? Fill out the form
              below to contact me directly about frontend development
              opportunities.
            </p>
          </motion.div>

          <div
            id="message-box"
            className="hidden mb-4 p-3 bg-green-600 text-white rounded-lg text-center transition-opacity duration-300"
          ></div>

          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <label htmlFor="name" className={labelClasses}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={inputClasses}
                  required
                  disabled={isMailing}
                />
              </motion.div>

              {/* Email */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={inputClasses}
                  required
                  disabled={isMailing}
                />
              </motion.div>
            </div>

            {/* Message */}
            <motion.div
              className="mb-8"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your message here..."
                className={inputClasses}
                required
                disabled={isMailing}
              ></textarea>
            </motion.div>

            {/* Button animation */}
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg font-raleway hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 disabled:bg-gray-200"
              disabled={isMailing}
              whileHover={{ scale: !isMailing ? 1.03 : 1 }}
              whileTap={{ scale: !isMailing ? 0.97 : 1 }}
            >
              {isMailing ? (
                <MiniSpinner
                  size={40}
                  color="#00BFA6"
                  strokeWidth={4}
                  speed={1}
                />
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>

          <SocialLinks />
        </motion.div>
      </motion.div>
    </>
  );
}

export default ContactMe;
