"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function StudioStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      id="studio" 
      className="py-24 md:py-32 lg:py-48 px-6 md:px-12 bg-dark-surface text-text-light overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto flex flex-col items-center">
        <motion.div style={{ y: y1, opacity }} className="max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.3] md:leading-[1.1]">
            We merge logic with intuition to build <span className="text-accent italic font-medium inline-block">unforgettable</span> digital experiences that challenge the ordinary.
          </h2>
          
          <div className="mt-16 flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center text-left">
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-bold text-accent">10+</span>
              <span className="text-sm uppercase tracking-widest text-white/50 font-semibold">Years of Experience</span>
            </div>
            <div className="w-[1px] h-16 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-bold text-accent">45</span>
              <span className="text-sm uppercase tracking-widest text-white/50 font-semibold">Awards Won</span>
            </div>
            <div className="w-[1px] h-16 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-bold text-accent">200+</span>
              <span className="text-sm uppercase tracking-widest text-white/50 font-semibold">Projects Shipped</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
