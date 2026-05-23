import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";
import { useMailer } from "../utils/useMailer";
import MiniSpinner from "../ui/MiniSpinner";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { sendMail: mailing, isLoading: isMailing } = useMailer();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      mailing(formData);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const inputClasses =
    "w-full p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans outline-none disabled:bg-slate-100 disabled:text-slate-400";

  const labelClasses =
    "block text-slate-700 text-sm font-semibold mb-1.5 font-sans";

  return (
    <>
      <Helmet>
        <title>Contact Sanusi Olayinka Uthman | Get In Touch</title>
        <meta
          name="description"
          content="Get in touch with Sanusi Olayinka Uthman regarding senior frontend development collaborations, project consultations, and architecture designs."
        />
        <link rel="canonical" href="https://sanusiou.pro/contact" />
      </Helmet>

      <div className="bg-white min-h-screen engineering-grid w-full flex flex-col justify-between items-center px-6 pt-28 pb-12 md:pt-36 gap-16 overflow-hidden">
        <NavBar position="relative" />

        <div className="w-full max-w-lg mx-auto bg-white border border-slate-200/80 rounded-xl p-8 shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 font-sans">
              Connect and Build
            </h1>
            <p className="text-slate-600 text-sm font-sans font-light">
              Have a system architecture or frontend project in mind? Contact me to discuss
              how we can build performant digital products.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <div>
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your implementation goals..."
                className={inputClasses}
                required
                disabled={isMailing}
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="primary-glass"
              size="large"
              className="w-full"
              disabled={isMailing}
            >
              {isMailing ? (
                <div className="flex justify-center items-center">
                  <MiniSpinner size={20} color="#2563eb" strokeWidth={3} speed={1} />
                </div>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ContactMe;
