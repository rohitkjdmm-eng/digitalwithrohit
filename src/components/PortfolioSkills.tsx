import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Search, Share2, BarChart3, Globe, Users, Zap, ArrowRight } from "lucide-react";

const skills = [
  {
    title: "SEO Optimization",
    description: "Expertise in SEO optimization to improve website visibility, increase organic traffic, and drive measurable growth.",
    icon: Search,
    color: "#3B82F6", // Blue
  },
  {
    title: "Meta Ads Campaigns",
    description: "Create and manage Facebook and Instagram advertising campaigns with targeted audiences and optimized budgets.",
    icon: Share2,
    color: "#22D3EE", // Cyan
  },
  {
    title: "Google Ads",
    description: "Experience in Google Ads campaign setup, keyword targeting, and performance optimization.",
    icon: BarChart3,
    color: "#60A5FA", // Light Blue
  },
  {
    title: "WordPress Website Creation",
    description: "Build and customize WordPress websites with modern layouts, plugins, and SEO-friendly structure.",
    icon: Globe,
    color: "#3B82F6", // Blue
  },
  {
    title: "Social Media Marketing",
    description: "Plan and manage engaging content strategies for social media platforms to increase reach and engagement.",
    icon: Share2,
    color: "#22D3EE", // Cyan
  },
  {
    title: "Lead Generation",
    description: "Implement digital marketing strategies to generate high-quality leads and convert visitors into potential clients.",
    icon: Users,
    color: "#60A5FA", // Light Blue
  },
];

export default function PortfolioSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div className="bg-black overflow-hidden relative">
      {/* Section 1: Neon Path & Skills */}
      <section id="skills" ref={containerRef} className="py-32 relative min-h-[1600px]">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-[#111827]" />
          <div className="absolute top-1/4 right-0 w-[60%] h-[50%] bg-blue-900/20 rounded-full blur-[150px] opacity-60" />
          <div className="absolute bottom-1/4 left-0 w-[50%] h-[40%] bg-cyan-900/10 rounded-full blur-[150px] opacity-40" />
          
          {/* Subtle blue neon glow lights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-500/5 rounded-full blur-[180px] pointer-events-none" />
          
          {/* Cosmic dust effect */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 0.5px, transparent 0.5px)', backgroundSize: '80px 80px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-40">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cyan-400 font-bold text-xs uppercase tracking-[0.4em] mb-4"
            >
              EXPERTISE
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
            >
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">Digital Marketing</span> Skills
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed font-light"
            >
              I've developed a strong foundation in digital marketing through intensive training and practical application.
            </motion.p>
          </div>

          <div className="relative min-h-[1200px]">
            {/* Neon Curved Path SVG - Desktop Only */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <svg
                viewBox="0 0 1000 1400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="neonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" /> {/* Blue */}
                    <stop offset="50%" stopColor="#22D3EE" /> {/* Cyan */}
                    <stop offset="100%" stopColor="#60A5FA" /> {/* Light Blue */}
                  </linearGradient>
                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="20" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="30" result="blur" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Outer Glow Path */}
                <motion.path
                  d="M 500 0 C 500 200 100 200 100 450 C 100 700 900 700 900 950 C 900 1200 500 1200 500 1400"
                  stroke="url(#neonGradient)"
                  strokeWidth="30"
                  strokeLinecap="round"
                  filter="url(#neonGlow)"
                  style={{ pathLength }}
                  className="opacity-20"
                />

                {/* Main Neon Path */}
                <motion.path
                  d="M 500 0 C 500 200 100 200 100 450 C 100 700 900 700 900 950 C 900 1200 500 1200 500 1400"
                  stroke="url(#neonGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  style={{ pathLength }}
                  className="opacity-80"
                />

                {/* Animated Pulse Glow */}
                <motion.path
                  d="M 500 0 C 500 200 100 200 100 450 C 100 700 900 700 900 950 C 900 1200 500 1200 500 1400"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="100 2000"
                  filter="url(#pulseGlow)"
                  animate={{ strokeDashoffset: [2100, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="opacity-60"
                />
              </svg>
            </div>

            {/* Skill Cards Grid - Staggered along the path */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 relative z-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`group ${
                    index % 2 === 1 ? 'md:mt-48' : ''
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -15, scale: 1.03 }}
                    className="relative p-12 rounded-[3rem] backdrop-blur-3xl bg-white/5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_30px_70px_rgba(34,211,238,0.2)] overflow-hidden"
                  >
                    {/* Glassmorphism Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />
                    
                    {/* Hover Neon Highlight */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                      style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent)` }}
                    />

                    <div 
                      className="w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl relative"
                      style={{ backgroundColor: `${skill.color}20`, color: skill.color, border: `1px solid ${skill.color}40` }}
                    >
                      <div className="absolute inset-0 rounded-3xl blur-lg opacity-40" style={{ backgroundColor: skill.color }} />
                      <skill.icon size={40} className="relative z-10" />
                    </div>

                    <h4 className="text-3xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors tracking-tight">
                      {skill.title}
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                      {skill.description}
                    </p>

                    {/* Decorative corner accent */}
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-40 transition-opacity"
                      style={{ background: `radial-gradient(circle at top right, ${skill.color}, transparent)` }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
