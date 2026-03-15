"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
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

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32">
      <Navigation />
      
      <section className="px-6 md:px-12 max-w-[1320px] mx-auto pt-20 pb-40">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-24">
          Selected <br />
          <span className="text-foreground/30">Archive</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-32">
          {projects.map((project, index) => (
            <Link 
              href={`/work/${project.slug}`} 
              key={project.id}
              className={`group flex flex-col ${index % 2 !== 0 ? 'md:mt-40' : ''}`}
              data-cursor="View Case"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#1B1B1B] rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-foreground/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className="mt-8 flex justify-between items-center px-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
                <span className="text-xs font-bold tracking-widest text-foreground/50 uppercase">{project.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
