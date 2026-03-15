import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark-surface text-text-light py-20 px-6 md:px-12 rounded-t-[40px] mt-24">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Let&apos;s build<br />
            something<br />
            <span className="text-accent">exceptional.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-black font-semibold rounded-full w-fit hover:scale-105 transition-transform"
            data-cursor="Open"
          >
            Start a Project
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white/50 mb-2">Social</h3>
          <a href="#" className="hover:text-accent transition-colors" data-cursor="Open">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors" data-cursor="Open">Twitter (X)</a>
          <a href="#" className="hover:text-accent transition-colors" data-cursor="Open">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors" data-cursor="Open">Behance</a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white/50 mb-2">Company</h3>
          <Link href="/work" className="hover:text-accent transition-colors" data-cursor="Open">Work</Link>
          <Link href="/studio" className="hover:text-accent transition-colors" data-cursor="Open">Studio</Link>
          <Link href="/contact" className="hover:text-accent transition-colors" data-cursor="Open">Contact</Link>
        </div>
      </div>
      
      <div className="max-w-[1320px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p>&copy; {new Date().getFullYear()} Studio Agency. All rights reserved.</p>
          <span className="hidden md:inline text-white/20">|</span>
          <p>
            Developed by: <a href="https://da.amz-creator.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">Digital Architect</a>
          </p>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
