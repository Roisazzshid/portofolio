'use client';

import React, { FC, ReactNode } from 'react';

interface StarBorderProps {
  children: ReactNode;
}

const StarBorder: FC<StarBorderProps> = ({ children }) => {
  return (
    <button className="star-button">
      {children}

      <style jsx global>{`
        @keyframes star-movement-bottom {
          0% { transform: translate(0%, 0%); opacity: 1; }
          100% { transform: translate(-100%, 0%); opacity: 0; }
        }
        @keyframes star-movement-top {
          0% { transform: translate(0%, 0%); opacity: 1; }
          100% { transform: translate(100%, 0%); opacity: 0; }
        }
        .star-button {
          position: relative;
          display: inline-block;
          overflow: hidden;
          border-radius: 20px;
          padding: 12px 20px;
          background: transparent; /* Transparan */
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          font-size: 14px;
          font-weight: 500;
          backdrop-filter: blur(2px); /* Opsional, biar ada efek kaca */
        }
        .star-button::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 20%;
          bottom: -5px;
          right: -150%;
          background: radial-gradient(circle, rgba(255,255,255,0.3), transparent 60%);
          border-radius: 50%;
          animation: star-movement-bottom 6s linear infinite alternate;
        }
        .star-button::after {
          content: '';
          position: absolute;
          width: 200%;
          height: 20%;
          top: -5px;
          left: -150%;
          background: radial-gradient(circle, rgba(255,255,255,0.3), transparent 60%);
          border-radius: 50%;
          animation: star-movement-top 6s linear infinite alternate;
        }
      `}</style>
    </button>
  );
};

export default StarBorder;
