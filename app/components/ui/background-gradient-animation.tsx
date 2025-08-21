"use client";

import React from "react";

export const BackgroundGradientAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      {/* Gradient Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(64,255,170,0.3) 0%, rgba(64,121,255,0.3) 50%, transparent 100%)",
          animation: "moveGradient 8s ease-in-out infinite alternate",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

      {/* Animasi Keyframes */}
      <style>
        {`
          @keyframes moveGradient {
            0% {
              transform: translate(-10%, -10%) scale(1);
            }
            100% {
              transform: translate(10%, 10%) scale(1.2);
            }
          }
        `}
      </style>
    </div>
  );
};
