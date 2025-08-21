"use client";

import { Poppins } from "next/font/google";
import AOSProvider from "../../AOSProvider";
import TiltedCard from "../../TiltedCard/TiltedCard";


// Import Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SertiCase() {
    const cards = [
        { imageSrc: "images/certificate/CL GD.jpg", captionText: "Creative Lab's Graphic Design" },
        { imageSrc: "images/certificate/CL UIUX.jpg", captionText: "Creative Lab's UI/UX" },
        { imageSrc: "images/certificate/IYSC ing.jpg", captionText: "IYSC English Language" },
        { imageSrc: "images/certificate/IYSC mat.jpg", captionText: "IYSC Matematics" },
        { imageSrc: "images/certificate/OSN.jpg", captionText: "OSN Indonesian History" },
    ];

    return (
        <AOSProvider>
        <section
        id="Certificate"
        className={`${poppins.className} container mx-auto p-4 text-white relative z-10 overflow-visible`}
        >
        <div
            data-aos="zoom-out-up"
            className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-8"
        >
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
                imageHeight="130px"
                imageWidth="130px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                />
                <p className="text-sm font-medium text-neutral-300">
                 {card.captionText}
                </p>
            </div>
            ))}
        </div>
        </section>
        </AOSProvider>
    );
};
