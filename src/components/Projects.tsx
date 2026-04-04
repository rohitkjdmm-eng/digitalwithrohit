import { motion } from "motion/react";
import { ExternalLink, Github, Layout, Search, Share2 } from "lucide-react";

const projects = [
  {
    title: "SEO Optimization (Demo Website)",
    description: "Implemented comprehensive SEO strategies for a demo website, including keyword research, on-page optimization, and backlink analysis.",
    icon: Search,
    tags: ["SEO", "Keyword Research", "On-page"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Ads Campaign Practice",
    description: "Set up and managed mock Google and Meta ad campaigns, focusing on audience targeting, ad copy creation, and budget optimization.",
    icon: Layout,
    tags: ["Google Ads", "Meta Ads", "PPC"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Social Media Page Growth",
    description: "Developed and executed a social media content strategy for a demo page, focusing on engagement and audience building.",
    icon: Share2,
    tags: ["SMM", "Content Strategy", "Engagement"],
    color: "from-orange-500 to-red-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-sm font-medium mb-4"
          >
            <Layout size={16} />
            <span>My Practical Work</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="text-gradient">Projects</span> & Case Studies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Even small projects show my commitment to learning and applying digital marketing principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group relative overflow-hidden flex flex-col h-full"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <project.icon size={64} className="text-white/80 group-hover:scale-110 transition-transform duration-500" />
                
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-black/30 backdrop-blur-md text-white px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary-blue transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-4">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                  <span className="text-xs font-bold text-primary-blue uppercase tracking-widest">Case Study</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
