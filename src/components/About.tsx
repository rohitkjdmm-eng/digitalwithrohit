import { motion } from "motion/react";
import { User, Target, TrendingUp } from "lucide-react";
import { PROFILE_DATA } from "../constants";

export default function About() {
  return (
    <section id="about" className="pt-12 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-blue/20 rounded-full blur-3xl" />
            
            {/* Image Frame */}
            <div className="relative mb-12 lg:mb-0">
              <motion.div
                whileHover={{ rotateY: 10, rotateX: -5 }}
                className="relative z-10 rounded-2xl overflow-hidden border border-white/10 glow-purple aspect-[4/5] max-w-[400px] mx-auto lg:mx-0"
              >
                <img 
                  src={PROFILE_DATA.aboutImage} 
                  alt={PROFILE_DATA.name} 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=1000&q=80";
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-primary-blue font-bold text-sm uppercase tracking-widest mb-1">Digital Executive</p>
                  <h4 className="text-xl font-bold">{PROFILE_DATA.name}</h4>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-purple/20 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-10 relative z-10">
              <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
                <User className="text-primary-blue" />
                About Me
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {PROFILE_DATA.about}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Goal Oriented</h4>
                    <p className="text-sm text-gray-400">Focused on delivering measurable results for every campaign.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-purple/10 flex items-center justify-center text-primary-purple shrink-0">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Growth Mindset</h4>
                    <p className="text-sm text-gray-400">Always learning and adapting to the latest digital trends.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
