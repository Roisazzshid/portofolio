"use client";

import { Poppins } from "next/font/google";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import FooterSection from "../FooterSection/FooterSection";
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// Import Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactSection() {
  return (
    <section
      id="contact"
      className={`${poppins.className} container min-h-screen mx-auto py-32 px-32 bg-[#0F0E17] text-white relative z-10 overflow-hidden`}
    >
      <div className="grid grid-cols-12 gap-8">
        {/* Left: Contact Form */}
        <div data-aos="fade-right" className="col-span-12 md:col-span-4 flex flex-col gap-6">
          <SpotlightCard
            className="custom-spotlight-card w-full h-full p-6 rounded-2xl"
            spotlightColor="rgba(0, 229, 255, 0.3)"
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="border-t border-neutral-700 my-4"></div>
            <form className="w-full flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nama"
                className="p-3 rounded-xl bg-black/40 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="text"
                placeholder="Nomor"
                className="p-3 rounded-xl bg-black/40 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <textarea
                placeholder="Pesan"
                rows={4}
                className="p-3 rounded-xl bg-black/40 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition"
              >
                Kirim
              </button>
            </form>
            <div className="border-t border-neutral-700 my-4"></div>

            {/* Connect with me */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-3">Connect With Me</h2>
                <div className="flex flex-wrap gap-3">
                    <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-black/40 text-neutral-300 hover:text-cyan-400 hover:border-cyan-400 transition"
                    >
                    <FaInstagram size={18} />
                    </a>

                    <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-black/40 text-neutral-300 hover:text-cyan-400 hover:border-cyan-400 transition"
                    >
                    <FaLinkedin size={18} />
                    </a>

                    <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-black/40 text-neutral-300 hover:text-cyan-400 hover:border-cyan-400 transition"
                    >
                    <FaYoutube size={18} />
                    </a>

                    <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-black/40 text-neutral-300 hover:text-cyan-400 hover:border-cyan-400 transition"
                    >
                    <FaGithub size={18} />
                    </a>
                </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Right: Comment Section */}
        <div data-aos="fade-left" className="col-span-12 md:col-span-8 flex flex-col gap-10">
          <SpotlightCard
            className="custom-spotlight-card w-full h-full p-6 rounded-2xl"
            spotlightColor="rgba(0, 229, 255, 0.3)"
          >
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <div className="border-t border-neutral-700 my-4"></div>
            <form className="w-full flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-xl bg-black/40 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <textarea
                placeholder="Write your message here..."
                rows={3}
                className="p-3 rounded-xl bg-black/40 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="file"
                className="p-2 rounded-xl bg-black/40 border border-neutral-700 text-sm text-neutral-300"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition"
              >
                Post Comment
              </button>
            </form>

            <div className="border-t border-neutral-700 my-4"></div>
            <h3 className="text-xl font-semibold mb-3">Recent Comments</h3>

            {/* Comment List */}
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-black/30 rounded-xl border border-neutral-700">
                <p className="font-semibold">Ali</p>
                <p className="text-neutral-300">Tampilannya bagus banget!</p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
