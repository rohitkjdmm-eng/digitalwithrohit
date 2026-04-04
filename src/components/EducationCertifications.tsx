import { motion } from "motion/react";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

const education = [
  {
    degree: "B.Com",
    institution: "Poddar International College, Jaipur",
    year: "2022",
    description: "Focused on business management and financial principles.",
  },
];

const certifications = [
  { name: "Digital Marketing", issuer: "Raj Skill Digital Institute" },
  { name: "RSCIT", issuer: "Rajasthan State Certificate in Information Technology" },
  { name: "Financial Management Skill", issuer: "Professional Certification" },
  { name: "MS Word", issuer: "Office Productivity Certification" },
];

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold">Education</h2>
            </div>
            
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.degree} className="glass-card p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-blue/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary-blue/10 transition-colors" />
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-blue">{edu.degree}</h3>
                      <p className="text-lg font-medium text-gray-300">{edu.institution}</p>
                    </div>
                    <span className="bg-white/5 border border-white/10 px-4 py-1 rounded-full text-sm font-bold">{edu.year}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple">
                <Award size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold">Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 flex items-start gap-4 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-purple/10 flex items-center justify-center text-primary-purple shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{cert.name}</h4>
                    <p className="text-xs text-gray-500">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
