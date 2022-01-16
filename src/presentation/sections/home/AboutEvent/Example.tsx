import * as React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";

export const Example = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

  return (
    <>
      <div
        style={{
          backgroundColor: "green",
          height: "200px",
          position: "fixed",
          zIndex: 2,
          bottom: 20
        }}
      >
        <svg
          className="progress-icon"
          viewBox="0 0 60 60"
          width={150}
          height={150}
        >
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="white"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1 // Reverse direction of line animation
            }}
          />
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="white"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
      </div>
    </>
  );
};