import React, { useState } from "react";
import GitHubIcon from "../ui/GithubIcon";
import LinkedInIcon from "../ui/LinkedInIcon";

const SocialLink = ({ icon: Icon, name, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
  >
    <Icon className="w-5 h-5 mr-2" />
    <span className="text-sm font-medium">{name}</span>
  </a>
);

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    const messageBox = document.getElementById("message-box");
    messageBox.classList.remove("hidden");
    messageBox.textContent = `Thank you, ${formData.name}! Your message has been simulated. Check console for data.`;

    setTimeout(() => {
      messageBox.classList.add("hidden");
    }, 5000);

    setFormData({ name: "", email: "", message: "" });
  };

  const inputClasses =
    "w-full p-3 rounded-lg border-2 border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition-all";
  const labelClasses = "block text-white text-base font-semibold mb-2";

  return (
    <div
      className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="w-full max-w-lg mx-auto p-8 md:p-12 bg-[#0f172a] rounded-xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Let's Connect
          </h1>
          <p className="text-gray-400 text-base max-w-sm mx-auto">
            Have a project in mind or just want to say hi? Fill out the form
            below.
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
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 mb-4 text-sm">Or find me on</p>
          <div className="flex justify-center space-x-6">
            <SocialLink
              icon={GitHubIcon}
              name="Github"
              href="https://github.com/olayinkasanusi"
            />
            <SocialLink
              icon={LinkedInIcon}
              name="LinkedIn"
              href="https://linkedin.com/in/sanusiolayinka"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
