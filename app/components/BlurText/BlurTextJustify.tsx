import React from "react";
import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const BlurTextJustify: React.FC<BlurTextProps> = ({
  text,
  delay = 100,
  animateBy = "words",
  direction = "top",
  className = "",
}) => {
  const dirMap = {
    top: { y: -10, x: 0 },
    bottom: { y: 10, x: 0 },
    left: { x: -10, y: 0 },
    right: { x: 10, y: 0 },
  };

  const splitText =
    animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <p className={`text-justify ${className}`}>
      {splitText.map((item, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            filter: "blur(4px)",
            ...dirMap[direction],
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            delay: (index * delay) / 1000,
          }}
          className="inline" // penting! jangan inline-block
        >
          {item}
          {animateBy === "words" && " "}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurTextJustify;
