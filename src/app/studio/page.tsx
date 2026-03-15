import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-black pt-32">
      <Navigation />
      
      <section className="px-6 md:px-12 max-w-[1320px] mx-auto pt-20 pb-40">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12">
          We are <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
            creators.
          </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          <div className="text-xl leading-relaxed text-foreground/70">
            <p className="mb-6">
              Founded on the principle that digital experiences should be as profound as physical ones, our studio blends strategy, design, and technology to build category-defining products.
            </p>
            <p>
              We partner with visionary companies to conceptualize and craft digital ecosystems that are elegant, performant, and unforgettable.
            </p>
          </div>
          
          <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden bg-[#1B1B1B]">
             <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent z-10" />
             <div className="absolute inset-0 flex items-center justify-center opacity-30 blur-3xl">
               <div className="w-64 h-64 rounded-full bg-accent mix-blend-screen" />
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
