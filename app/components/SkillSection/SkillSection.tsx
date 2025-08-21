"use client";

import { Poppins } from "next/font/google";
import TiltedCard from "../TiltedCard/TiltedCard";
import MagicBento from "../MagicBento/MagicBento";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SkillSection() {
  const cards = [
    { imageSrc: "images/skills/html.png", captionText: "HTML" },
    { imageSrc: "images/skills/css.png", captionText: "CSS" },
    { imageSrc: "images/skills/js.png", captionText: "JavaScript" },
    { imageSrc: "images/skills/python.png", captionText: "Python" },
    { imageSrc: "images/skills/php.png", captionText: "PHP" },
    { imageSrc: "images/skills/laravel.png", captionText: "Laravel" },
    { imageSrc: "images/skills/django.png", captionText: "Django" },
    { imageSrc: "images/skills/mysql.png", captionText: "MySQL" },
    { imageSrc: "images/skills/figma.png", captionText: "Figma" },
    { imageSrc: "images/skills/git.png", captionText: "Git" },
  ];

  return (
    <section
      id="skills"
      className={`${poppins.className} container min-h-screen mx-auto p-4 bg-[#0F0E17] text-white flex flex-col items-center justify-center`}
    >
      <h2 data-aos="fade-down" className="text-4xl font-bold mb-6 text-center">My Skills</h2>
      <p data-aos="fade-down" className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
        Skill yang saya pelajari untuk mengembangkan solusi digital secara kreatif dan efisien
      </p>

      <div data-aos="zoom-out-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-neutral-700 bg-[#1A1A2E] hover:border-[#06B0FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] duration-400 ease-in-out transform"
            style={{
                boxShadow:
                  "inset 0 10px 25px rgba(0,0,0,0.6), inset 0 -10px 25px rgba(0,0,0,0.3)",
              }}
          >
            <TiltedCard
              imageSrc={card.imageSrc}
              altText={card.captionText}
              captionText={card.captionText}
              containerHeight="130px"
              containerWidth="130px"
              imageHeight="110px"
              imageWidth="110px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />

            {/* Nama skill */}
            <p className="text-sm font-medium text-neutral-300">{card.captionText}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
