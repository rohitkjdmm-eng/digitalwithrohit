import { motion } from "motion/react";
import { ArrowRight, Sparkles, Download } from "lucide-react";

import { PROFILE_DATA } from "../constants";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center pt-28 pb-8 lg:pt-36 lg:pb-10 overflow-hidden">
      {/* Background with subtle dotted grid pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-purple/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        {/* Dotted grid pattern */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
        {/* Right Column: Profile Image - Moved to top for mobile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden">
            {/* Soft blue glow behind the image container */}
            <div className="absolute inset-0 bg-primary-blue/40 rounded-full blur-[100px] animate-pulse" />
            
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-primary-blue glow-blue shadow-2xl"
            >
              <img
                src={PROFILE_DATA.profileImage}
                alt={PROFILE_DATA.name}
                referrerPolicy="no-referrer"
                fetchPriority="high"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=1000&q=80";
                }}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </motion.div>
            
            {/* Decorative glow elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-purple/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-blue/20 rounded-full blur-3xl -z-10" />
          </div>
        </motion.div>

        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left order-2 md:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-blue text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            <span>Ready to Scale Your Business</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Fresher <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue via-blue-400 to-cyan-400">Digital Marketing</span> Executive
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            Helping businesses grow with SEO, Ads and Social Media strategies. Passionate about data-driven growth and creative marketing.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cta-yellow hover:bg-cta-yellow/90 text-dark-bg px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg shadow-cta-yellow/20"
            >
              Hire Me <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href={PROFILE_DATA.resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all"
            >
              Download Resume <Download size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
