"use client";

import { useRef, use } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Generate title from slug
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Project Hero */}
      <section ref={containerRef} className="relative h-screen overflow-hidden bg-dark-surface w-full flex items-end pb-24 px-6 md:px-12">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img 
            src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop`} 
            alt={title} 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        
        <div className="relative z-10 text-white max-w-[1320px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-accent uppercase tracking-widest font-bold text-sm mb-6 block">Case Study</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
              {title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8 mt-12 w-full">
              <div>
                <span className="text-white/50 text-sm block mb-1">Client</span>
                <span className="font-medium">{title} Inc.</span>
              </div>
              <div>
                <span className="text-white/50 text-sm block mb-1">Role</span>
                <span className="font-medium">Design & Dev</span>
              </div>
              <div>
                <span className="text-white/50 text-sm block mb-1">Year</span>
                <span className="font-medium">2026</span>
              </div>
              <div>
                <span className="text-white/50 text-sm block mb-1">Live Site</span>
                <a href="#" className="font-medium hover:text-accent underline underline-offset-4">Visit Project</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background relative z-20 py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-32">
          
          {/* Overview */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
            <h2 className="text-2xl font-bold">The Challenge</h2>
            <div className="text-lg md:text-xl text-black/70 leading-relaxed font-medium">
              <p>{title} approached us with a clear goal: to redefine their digital presence in an increasingly crowded market. They needed a platform that wasn&apos;t just functional, but emotionally resonant—a digital flagship that captured their innovative spirit while delivering a seamless user experience across all touchpoints.</p>
            </div>
          </div>

          {/* Full-width Image */}
          <div className="w-full aspect-[16/9] bg-gray-200" data-cursor="Drag">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Process" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Solution */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
            <h2 className="text-2xl font-bold">The Solution</h2>
            <div className="text-lg md:text-xl text-black/70 leading-relaxed font-medium">
              <p>We developed a comprehensive design system rooted in fluid motion and striking maximalist typography. By utilizing WebGL for immersive product explorations and React for seamless page transitions, we elevated the entire user journey. The result is a platform that feels less like a website and more like a high-end digital product.</p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="https://images.unsplash.com/photo-1615397323602-0c9f1c841bb7?q=80&w=2070&auto=format&fit=crop" alt="UI details" className="w-full aspect-square object-cover" data-cursor="View" />
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Design system" className="w-full aspect-square object-cover" data-cursor="View" />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
