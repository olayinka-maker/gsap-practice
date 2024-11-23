'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GradientBoxes = () => {
  const boxRefs = useRef<HTMLDivElement[]>([]);

  // Add box elements to the refs array
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      boxRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-around min-h-screen">
      <div
        ref={addToRefs}
        className="w-24 h-24 rounded-lg bg-gradient-to-r from-green-400 to-green-600"
      ></div>
      <div
        ref={addToRefs}
        className="w-24 h-24 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600"
      ></div>
      <div
        ref={addToRefs}
        className="w-24 h-24 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600"
      ></div>
    </div>
  );
};

export default GradientBoxes;
