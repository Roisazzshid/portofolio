"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    return () => {
      // reset ketika keluar dari halaman
      const aosElements = document.querySelectorAll("[data-aos]");
      aosElements.forEach((el) => {
        el.classList.remove("aos-init", "aos-animate");
      });
      (AOS as any).initialized = false;
    };
  }, []);

  return <>{children}</>;
}
