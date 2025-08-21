"use client";

import { Poppins } from "next/font/google";
import { Tabs } from "../ui/tabs";
import AOSProvider from "../AOSProvider";
import SkillCase from "./Case/SkillCase";
import SertiCase from "./Case/CertiCase";


// Import Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function CaseSection() {

  const tabs = [
    {
      title: "Skills",
      value: "Skills",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-white/50 backdrop-blur-lg">
          <p>Skills</p>
          <SkillCase />
        </div>
      ),
    },
    {
      title: "Sertificate",
      value: "Sertificate",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-white/30 backdrop-blur-lg">
          <p>Sertificate</p>
          <SertiCase />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-white/50 backdrop-blur-lg">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <AOSProvider>
    <section
      id="showcase"
      className={`${poppins.className} container min-h-screen mx-auto p-4 bg-[#0F0E17] text-white relative z-10 overflow-hidden flex items-center justify-center`}
    >

      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-center justify-center my-40">
        <Tabs tabs={tabs} />
      </div>
    </section>
    </AOSProvider>
  );
};

const DummyContent = () => {
  return (
    <img
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
