"use client";

import { motion } from "framer-motion";
import { WebGLBackground } from "./WebGLBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* 3D WebGL Background Layer */}
      <div className="absolute inset-0 z-0">
        <WebGLBackground />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground leading-[1.1]"
        >
          We design <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
            digital products
          </span><br />
          that shape the future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl md:max-w-2xl text-foreground/70 font-medium"
        >
          Brand identity, product design and digital experiences for modern companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-accent hover:text-black hover:scale-105 transition-all w-full sm:w-auto"
            data-cursor="explore"
          >
            View Work
          </a>
          <a
            href="/contact"
            className="px-8 py-4 border border-foreground/20 text-foreground font-semibold rounded-full hover:border-foreground hover:scale-105 transition-all w-full sm:w-auto"
            data-cursor="open"
          >
            Start a Project
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-foreground to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
}
