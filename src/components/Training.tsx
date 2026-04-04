import { motion } from "motion/react";
import { BookOpen, CheckCircle2, Calendar } from "lucide-react";

const trainingSteps = [
  {
    title: "Digital Marketing Training",
    description: "Intensive training at Raj Skill Digital Institute, Jaipur.",
    points: [
      "SEO practice on websites",
      "Google Ads campaign setup",
      "Facebook Ads practice",
      "Keyword research & Content planning",
    ],
    date: "2023 - 2024",
  },
  {
    title: "Practical Work & Learning",
    description: "Hands-on experience with real-world marketing scenarios.",
    points: [
      "Developing SEO strategies for demo sites",
      "Setting up and managing mock ad campaigns",
      "Analyzing market trends and competitor data",
      "Creating social media content calendars",
    ],
    date: "Ongoing",
  },
];

export default function Training() {
  return (
    <section id="training" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-purple/10 border border-primary-purple/20 text-primary-purple text-sm font-medium mb-4"
          >
            <BookOpen size={16} />
            <span>My Learning Journey</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Training & <span className="text-gradient">Practical Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've focused on building a solid foundation through structured training and hands-on practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Vertical line for timeline on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          {trainingSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
            >
              {/* Dot on timeline */}
              <div className="hidden md:block absolute top-10 left-1/2 w-4 h-4 bg-primary-blue rounded-full -translate-x-1/2 z-10 border-4 border-dark-bg" />
              
              <div className="glass-card p-10 hover:bg-white/10 transition-all duration-300 group">
                <div className={`flex items-center gap-4 mb-6 ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-primary-blue font-bold text-sm">{step.date}</p>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-8">{step.description}</p>
                
                <ul className={`space-y-4 ${i % 2 === 0 ? "md:items-end" : "md:items-start"} flex flex-col`}>
                  {step.points.map((point) => (
                    <li key={point} className={`flex items-center gap-3 text-gray-300 ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                      <CheckCircle2 size={18} className="text-primary-purple shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
