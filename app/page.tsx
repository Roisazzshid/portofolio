"use client";

import Image from "next/image";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import GradientText from "./components/GradientText/GradientText";
import StarBorder from "./components/StarBorder/StarBorder";
import NavbarSection from "./components/NavbarSection/NavbarSection";
import CaseSection from "./components/CaseSection/CaseSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FooterSection from "./components/FooterSection/FooterSection";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaGithub } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { ReactTyped } from "react-typed";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // tampil 3 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        // 🔹 Loading Screen
        <motion.div
          key="loading-screen"
          className="fixed inset-0 flex items-center justify-center bg-[#111] text-white z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Icon Border */}
            <div className="flex flex-wrap gap-3">
              <a className="flex items-center gap-2 px-4 py-2 rounded-full border text-neutral-300 border-[#06B0FF]">
                <FaCode size={18} />
              </a>
              <a className="flex items-center gap-2 px-4 py-2 rounded-full border text-neutral-300 border-[#06B0FF]">
                <GoPerson size={18} />
              </a>
              <a className="flex items-center gap-2 px-4 py-2 rounded-full border text-neutral-300 border-[#06B0FF]">
                <FaGithub size={18} />
              </a>
            </div>

            {/* Text typed */}
            <h1 className="text-6xl font-light text-center">
              <ReactTyped
                strings={["Welcome to My"]}
                typeSpeed={80}
                backSpeed={50}
                showCursor
              />
            </h1>

            {/* Gradient Title */}
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-7xl !font-extrabold text-center"
            >
              Portofolio Web
            </GradientText>
          </div>
        </motion.div>
      ) : (
        // 🔹 Konten Utama
        <div
          key="main-content"
          className="min-h-screen overflow-x-hidden w-full"
        >
          {/* Navbar */}
          <NavbarSection />

          {/* Home Section */}
          <section className="relative min-h-screen bg-[#191825] text-white overflow-hidden flex items-center justify-center">
            <div className="container relative z-10 mx-auto p-4">
              <div className="grid grid-cols-12">
                <div className="col-span-6 flex flex-col justify-center items-start gap-4 pl-10">
                  <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    duration={1.2}
                    ease="bounce.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                  >
                    <div className="flex items-center gap-2 pl-9">
                      <StarBorder>Ready to Innovate</StarBorder>
                    </div>
                  </AnimatedContent>

                  <div className="flex flex-col gap-2">
                    <SplitText
                      text="Fullstack"
                      className="text-7xl font-extrabold text-center"
                      delay={50}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                    />

                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={3}
                      showBorder={false}
                      className="text-7xl !font-extrabold text-center pl-9"
                    >
                      Developer
                    </GradientText>
                  </div>

                  <BlurText
                    text="Menciptakan website yang inovatif dan menarik perhatian"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="mb-8 font-thin text-xl text-align-justify pl-10"
                  />

                  <div className="flex items-center gap-4 pl-10">
                    <a
                      href=""
                      className="bg-blue-600 border-2 border-transparent shadow-2xs hover:border-blue-600 hover:bg-transparent hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/70 shadow-blue-400 px-15 py-2 rounded-xl text-lg transition duration-400 ease-in-out transform"
                    >
                      About Me
                    </a>

                    <a
                      href=""
                      className="border-2 border-blue-600 shadow-2xs hover:bg-blue-600 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/70 shadow-blue-400 px-15 py-2 rounded-xl text-lg transition duration-400 ease-in-out transform"
                    >
                      My Skill
                    </a>
                  </div>
                </div>

                <div className="col-span-6 flex justify-center items-center">
                  <div className="w-full max-w-[707px] aspect-[707/582]">
                    <Spline scene="https://prod.spline.design/548T-MtVmfm5Prdl/scene.splinecode" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About (dengan AOS aktif) */}
          <AboutSection />

          {/* Case Section */}
          <CaseSection />

          {/* Contact */}
          <ContactSection />

          {/* Footer */}
          <FooterSection />
        </div>
      )}
    </AnimatePresence>
  );
}
