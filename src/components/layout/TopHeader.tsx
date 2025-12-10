import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const TopHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Use useEffect to ensure the component renders on the client side after hydration
  useEffect(() => {
    setIsVisible(true); // This will trigger re-render on the client
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="relative w-full bg-zinc-950 text-white overflow-hidden z-50 border-b border-white/10"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

          <div className="container mx-auto px-4 py-3 flex items-center justify-between relative z-10">
            <div className="flex-1 flex items-center justify-center gap-3 text-sm sm:text-base font-medium tracking-wide">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
              </motion.span>

              <span className="text-center group cursor-default flex flex-col sm:block leading-tight">
                <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors text-[10px] sm:text-base">Something big is brewing... </span>
                <span className="font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] mx-1 text-xs sm:text-base">Sustainable Hackathon</span>
                <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors hidden sm:inline"> is coming soon!</span>
              </span>

              <Link
                href="/sustainability-hackathon"
                className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] whitespace-nowrap"
              >
                Visit Now
              </Link>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors focus:outline-none text-zinc-400 hover:text-white"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopHeader;
