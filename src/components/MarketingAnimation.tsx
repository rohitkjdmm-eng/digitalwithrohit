import { motion } from "motion/react";
import { Search, BarChart3, Share2, Mail, PieChart, TrendingUp, Globe, Zap } from "lucide-react";

const icons = [
  { Icon: Search, color: "text-blue-400", label: "SEO", size: 40, delay: 0, x: "10%", y: "20%" },
  { Icon: BarChart3, color: "text-cyan-400", label: "Ads", size: 48, delay: 2, x: "80%", y: "15%" },
  { Icon: Share2, color: "text-purple-400", label: "Social", size: 36, delay: 1, x: "30%", y: "60%" },
  { Icon: Mail, color: "text-blue-500", label: "Email", size: 42, delay: 3, x: "70%", y: "70%" },
  { Icon: PieChart, color: "text-cyan-500", label: "Analytics", size: 52, delay: 0.5, x: "50%", y: "30%" },
  { Icon: TrendingUp, color: "text-purple-500", label: "Growth", size: 44, delay: 2.5, x: "15%", y: "80%" },
  { Icon: Globe, color: "text-blue-300", label: "Web", size: 38, delay: 1.5, x: "85%", y: "50%" },
  { Icon: Zap, color: "text-yellow-400", label: "Strategy", size: 46, delay: 4, x: "40%", y: "10%" },
];

export default function MarketingAnimation() {
  return (
    <div className="relative h-40 md:h-48 w-full overflow-hidden bg-dark-bg border-y border-white/5">
      {/* Dotted grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.1]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Subtle glowing particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-primary-blue rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Floating Marketing Icons */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute"
            style={{ left: item.x, top: item.y }}
          >
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
              className={`relative flex flex-col items-center group cursor-default`}
            >
              {/* Icon with Glow */}
              <div className={`relative p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-primary-blue/50 group-hover:bg-primary-blue/5`}>
                <item.Icon 
                  size={item.size} 
                  className={`${item.color} drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]`} 
                />
                
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 bg-primary-blue/10 rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Label */}
              <motion.span 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="mt-2 text-[10px] font-bold tracking-widest uppercase text-gray-500 group-hover:text-primary-blue transition-colors"
              >
                {item.label}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Transition Gradients */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-dark-bg to-transparent z-20" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark-bg to-transparent z-20" />
    </div>
  );
}
