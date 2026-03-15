"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Fintech Reimagined",
    category: "Product Design",
    slug: "fintech-reimagined",
    image: "/portfolio_fintech.png",
  },
  {
    id: 2,
    title: "Aura Skincare",
    category: "E-Commerce",
    slug: "aura-skincare",
    image: "/portfolio_skincare.png",
  },
  {
    id: 3,
    title: "Velocity OS",
    category: "Brand Identity",
    slug: "velocity-os",
    image: "/portfolio_os.png",
  },
  {
    id: 4,
    title: "Lumina Workspace",
    category: "Web App",
    slug: "lumina-workspace",
    image: "/portfolio_workspace.png",
  }
];

export function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} id="work" className="py-24 md:py-40 px-6 md:px-12 bg-background">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Featured <br /><span className="text-foreground/30">Work</span>
          </h2>
          <Link 
            href="/work" 
            className="mt-6 md:mt-0 text-sm font-bold uppercase tracking-widest border-b border-foreground/50 pb-1 hover:text-accent hover:border-accent transition-colors"
            data-cursor="Explore"
          >
            View all projects
          </Link>
        </div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-24">
          {projects.map((project, index) => (
            <Link 
              href={`/work/${project.slug}`} 
              key={project.id}
              className={`group flex flex-col ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              data-cursor="View Project"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#1B1B1B] rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-foreground/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                
                {/* Hover overlay exact match */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className="mt-8 flex justify-between items-center px-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
                <span className="text-xs font-bold tracking-widest text-foreground/50 uppercase">{project.category}</span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
