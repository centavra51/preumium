"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-[1320px] mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              Let&apos;s start a <br/>
              <span className="text-black/30">conversation.</span>
            </h1>
            <p className="text-xl text-black/60 font-medium max-w-md">
              We&apos;re always interested in hearing about new projects, exciting ideas, or opportunities.
            </p>
            
            <div className="mt-16 space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-black/50 mb-2">Email</h3>
                <a href="mailto:hello@studio.agency" className="text-2xl font-medium hover:text-accent transition-colors" data-cursor="Open">hello@studio.agency</a>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-black/50 mb-2">Location</h3>
                <address className="text-2xl font-medium not-italic">
                  124 Digital Avenue<br/>
                  Design District<br/>
                  San Francisco, CA 94103
                </address>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-dark-surface p-12 md:p-16 rounded-[32px] text-white"
          >
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-white/50">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-accent transition-colors w-full" 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-white/50">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-accent transition-colors w-full" 
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-white/50">Project Details</label>
                <textarea 
                  id="message" 
                  className="bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-accent transition-colors w-full resize-none min-h-[120px]" 
                  placeholder="Tell us about what you want to build..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="mt-8 px-8 py-5 bg-accent text-black font-semibold rounded-full hover:bg-white hover:scale-105 transition-all w-full text-lg"
                data-cursor="Open"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
