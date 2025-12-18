"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

const EmailSection = () => {
  const [formData, setFormData] = useState({ email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mojaqlvw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully!");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        toast.dismiss(loadingToast);
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="absolute top-3/4 -left-4 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.6),transparent_70%)] blur-2xl -translate-x-2 -translate-y-1/2 z-0"></div>

      <div className="z-10">
        <h5 className="text-4xl font-bold mt-4 my-2 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Let's Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/DhimanMajumdar">
            <div className="bg-white rounded-full mr-4">
              <Image src="/github-icon.svg" width={24} height={24} alt="Github Icon" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/dhiman-majumdar-09a3a423a/">
            <div className="bg-white rounded-sm">
              <Image src="/linkedin-icon.svg" width={24} height={24} alt="Linkedin Icon" />
            </div>
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-md font-medium">Your email</label>
            <input
              name="email"
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="you@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="text-white block text-md mb-2 font-medium">Subject</label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-md mb-2 font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="px-6 py-4 w-full rounded-full text-white bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
