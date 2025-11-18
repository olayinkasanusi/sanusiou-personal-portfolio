import React, { useState } from "react";
import NavBar from "../ui/NavBar";
import SocialLinks from "../ui/SocialLinks";
import { useApiMailer } from "../hooks/useApiMailer";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [isMailing, setIsMailing] = useState(false);

  const { mailing, isPending: isMailing } = useApiMailer();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
      mailing(formData);
    }

    setFormData({ name: "", email: "", message: "" });
  };

  const inputClasses =
    "w-full p-3 rounded-lg border-2 border-blue-400 bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition-all font-raleway outline-blue-500 ";
  const labelClasses =
    "block text-white text-base font-semibold mb-2 font-raleway";

  return (
    <div
      className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <NavBar />
      <div className="w-full max-w-lg mx-auto p-8 bg-[#0f172a] rounded-xl shadow-2xl mt-10">
        <div className="text-center mb-10">
          <h1 className="md:text-4xl text-3xl font-extrabold text-white mb-2 font-montserrat">
            Let's Connect
          </h1>
          <p className="text-gray-400 text-base max-w-sm mx-auto font-raleway">
            Have a project in mind or just want to say hi? Fill out the form
            below to contact me.
          </p>
        </div>

        <div
          id="message-box"
          className="hidden mb-4 p-3 bg-green-600 text-white rounded-lg text-center transition-opacity duration-300"
        ></div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
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
            </div>
            <div>
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
            </div>
          </div>

          <div className="mb-8">
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
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg font-roboto hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
            disabled={isMailing}
          >
            Send Message
          </button>
        </form>

        <SocialLinks />
      </div>
    </div>
  );
}

export default ContactMe;
