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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Aura Skincare",
    category: "E-Commerce",
    slug: "aura-skincare",
    image: "https://images.unsplash.com/photo-1615397323602-0c9f1c841bb7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Velocity OS",
    category: "Brand Identity",
    slug: "velocity-os",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Lumina Workspace",
    category: "Web App",
    slug: "lumina-workspace",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
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
            Featured <br /><span className="text-black/30">Work</span>
          </h2>
          <Link 
            href="/work" 
            className="mt-6 md:mt-0 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-accent hover:border-accent transition-colors"
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
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover overlay exact match */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                <span className="text-sm font-semibold tracking-wide text-black/50 uppercase">{project.category}</span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
