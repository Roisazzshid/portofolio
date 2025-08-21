"use client";

import { Poppins } from "next/font/google";
import Lanyard from "../Lanyard/Lanyard";
import SplitText from "../SplitText/SplitText";
import BlurTextJustify from "../BlurText/BlurTextJustify";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import AOSProvider from "../AOSProvider";

// Import Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AboutSection() {
  return (
    <AOSProvider>
    <section
      id="about"
      className={`${poppins.className} container min-h-screen mx-auto p-4 bg-[#0F0E17] text-white relative z-10 overflow-hidden flex items-center justify-center`}
    >
      <div className="grid grid-cols-12 gap-8">
        {/* Text Section */}
        <div data-aos="fade-up" className="col-span-12 md:col-span-6 flex flex-col justify-center items-start gap-4 pl-15">
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
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Hello I'm</h1>
            </div>
          </AnimatedContent>

          <div className="flex flex-col">
            <SplitText
              text="Rois Azzam Shiddiq"
              className="text-5xl font-extrabold text-center"
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
            <SplitText
              text="Informatics Engineering"
              className="text-3xl font-bold text-center text-[#06B0FF]"
              delay={150}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="start"
            />
          </div>

          <BlurTextJustify
            text="I am an Informatics Engineering student at Nurul Fikri Integrated College of Technology, actively involved in various 
                  fields such as graphic design, web programming, web design, and backend development. My involvement in various 
                  activities has also helped me develop my public speaking skills."
            delay={100}
            animateBy="words"
            direction="top"
            className="mb-8 font-light text-lg text-justify" // rata kiri-kanan
          />

          <div className="flex items-center gap-4 pl-8">
                <a 
                  href="" 
                  className="bg-blue-600 border-2 border-transparent shadow-2xs hover:border-blue-600 hover:bg-transparent hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/70 shadow-blue-400 px-15 py-2 rounded-xl text-lg transition duration-400 ease-in-out transform"
                >
                  Download CV
                </a>

                <a 
                  href="" 
                  className="border-2 border-blue-600 shadow-2xs hover:bg-blue-600 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/70 shadow-blue-400 px-15 py-2 rounded-xl text-lg transition duration-400 ease-in-out transform"
                >
                  My Project
                </a>
              </div>
        </div>

        {/* Lanyard Card Section */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <div className="w-full max-w-md">
            <div
              className="bg-[#1A1A2E] rounded-2xl border border-gray-700 aspect-square flex items-center justify-center overflow-hidden"
              style={{
                boxShadow:
                  "inset 0 10px 25px rgba(0,0,0,0.6), inset 0 -10px 25px rgba(0,0,0,0.3)",
              }}
            >
              <div className="w-[90%] h-[90%] flex items-center justify-center">
                <Lanyard
                  position={[0, 0, 15]}
                  gravity={[0, -40, 0]}
                  scale={[0.9, 0.9, 0.9]} // scale kecil biar pas
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </AOSProvider>
  );
}
