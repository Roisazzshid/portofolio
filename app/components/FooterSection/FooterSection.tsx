"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AboutSection() {
  return (
    <section
      id="footer"
      className={`${poppins.className} bg-[#0F0E17] text-white relative z-10 overflow-hidden`}
    >
      <footer className="bg-[#1A1A2E] dark:bg-gray-800 rounded-none shadow-sm">
        <div className="w-full mx-auto max-w-screen-xl px-4 py-3 md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="" className="hover:underline">
              IssaComp.
            </a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm dark:text-gray-400 sm:mt-0 gap-2">
            <li>
              <a href="#" className="hover:text-[#06B0FF] me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#06B0FF] me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#06B0FF] me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#06B0FF] me-4 md:me-6">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
