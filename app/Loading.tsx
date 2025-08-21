"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaGithub } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import GradientText from "./components/GradientText/GradientText";
import AOSProvider from "./components/AOSProvider";
import { ReactTyped } from "react-typed";

export default function LoadingPage({ onFinish }: { onFinish: () => void }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // kasih jeda 600ms biar animasi exit main dulu
      setTimeout(() => onFinish(), 600);
    }, 3000); // tampil 3 detik
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen w-full bg-[#111] overflow-x-hidden">
        <AnimatePresence mode="wait">
        {loading && (
            <motion.div
                className="fixed inset-0 flex items-center justify-center bg-[#111] text-white z-[9999]"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
            <AOSProvider>
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
                <div data-aos="fade-up">
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
                    className="text-7xl !font-extrabold text-center"
                    >
                    Portofolio Web
                    </GradientText>
                </div>
                </div>
            </AOSProvider>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
  );
}
