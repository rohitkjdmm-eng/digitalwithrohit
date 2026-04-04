import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { PROFILE_DATA } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-sm font-medium mb-4"
          >
            <MessageSquare size={16} />
            <span>Get In Touch</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to take your business to the next level? Contact me today for a free consultation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div className="glass-card p-8 flex items-center gap-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1 font-medium">Email Me</p>
                  <p className="text-xl font-bold">{PROFILE_DATA.email}</p>
                </div>
              </div>
              
              <div className="glass-card p-8 flex items-center gap-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-primary-purple/10 flex items-center justify-center text-primary-purple shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1 font-medium">Call Me</p>
                  <p className="text-xl font-bold">{PROFILE_DATA.phone}</p>
                </div>
              </div>
              
              <div className="glass-card p-8 flex items-center gap-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1 font-medium">Location</p>
                  <p className="text-xl font-bold">{PROFILE_DATA.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
