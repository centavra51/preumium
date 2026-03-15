"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  "Brand Identity",
  "Web Design",
  "UI/UX Design",
  "Product Design",
  "Creative Development"
];

const process = [
  { num: "01", title: "Discovery", desc: "Understanding your vision, audience, and market landscape." },
  { num: "02", title: "Strategy", desc: "Crafting a roadmap for a digital experience that converts." },
  { num: "03", title: "Design", desc: "Creating visually stunning concepts and refining typography." },
  { num: "04", title: "Development", desc: "Bringing the design to life with modern, performant code." },
  { num: "05", title: "Launch", desc: "Delivering a polished product and ensuring a smooth rollout." }
];

export function ServicesProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="services" className="py-32 md:py-48 px-6 md:px-12 bg-background border-t border-black/10">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Services */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-black/50 mb-12">Expertise</h2>
          <ul className="flex flex-col gap-6 md:gap-8">
            {services.map((service, index) => (
              <li key={index} className="group relative flex items-center justify-between border-b border-black/10 pb-6 overflow-hidden">
                <span className="text-3xl md:text-5xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300">
                  {service}
                </span>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div id="process">
          <h2 className="text-sm font-bold uppercase tracking-widest text-black/50 mb-12">Workflow</h2>
          <div className="relative pl-6 md:pl-10">
            {/* Animated Target Line */}
            <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-black/10">
              <motion.div style={{ height: lineHeight }} className="w-[2px] bg-black origin-top -translate-x-[0.5px]" />
            </div>

            <div className="flex flex-col gap-12">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[30px] md:-left-[46px] top-1 w-3 h-3 rounded-full bg-background border-2 border-black group-hover:bg-black transition-colors" />
                  <span className="text-sm font-mono text-black/40 mb-2 block">{step.num}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-black/60 font-medium max-w-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
