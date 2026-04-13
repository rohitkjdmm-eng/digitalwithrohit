import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Maximize2, Sparkles, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { AI_IMAGES } from "../constants";

export default function AIImageShowcase() {
  const [selectedImage, setSelectedImage] = useState<typeof AI_IMAGES[0] | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const navigateImage = useCallback((direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const currentIndex = AI_IMAGES.findIndex(img => img.id === selectedImage.id);
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % AI_IMAGES.length;
    } else {
      nextIndex = (currentIndex - 1 + AI_IMAGES.length) % AI_IMAGES.length;
    }
    setSelectedImage(AI_IMAGES[nextIndex]);
  }, [selectedImage]);

  const handleDownload = async (url: string, title: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${title.toLowerCase().replace(/\s+/g, '-')}-ai-ad.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback for cross-origin issues
      window.open(url, '_blank');
    }
  };

  return (
    <section id="ai-showcase" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-blue text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            <span>AI Creative Ads</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            AI Image Generation <span className="text-primary-blue">Showcase</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            I create hyper-realistic AI generated product ads and lifestyle images that capture attention and drive conversions. Elevate your brand with cutting-edge visual storytelling.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {AI_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div 
                className="relative aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {/* Shimmer Placeholder */}
                {!loadedImages[image.id] && (
                  <div className="absolute inset-0 bg-white/5 animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  </div>
                )}

                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(image.id)}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    loadedImages[image.id] ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs font-bold text-primary-blue uppercase tracking-wider mb-1 block">
                        {image.category}
                      </span>
                      <h4 className="text-white font-bold text-lg">{image.title}</h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 text-center">
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
                  AI Generated – Created by Rohit
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </motion.button>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-4 md:inset-x-10 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-[110]">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors pointer-events-auto backdrop-blur-md"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors pointer-events-auto backdrop-blur-md"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>

            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row bg-dark-bg rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-[2] overflow-hidden bg-black/20 relative group/img">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  decoding="async"
                  loading="eager"
                  className="w-full h-full object-contain p-2 md:p-4"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full md:w-72 p-6 md:p-8 flex flex-col justify-center bg-white/[0.02] border-l border-white/10">
                <span className="text-primary-blue font-bold text-sm uppercase tracking-widest mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-3xl font-display font-bold mb-4">{selectedImage.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  High-fidelity AI generated visual designed for premium advertising campaigns. Optimized for brand storytelling and visual impact.
                </p>
                
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => handleDownload(selectedImage.url, selectedImage.title)}
                    className="w-full py-3 px-6 rounded-xl bg-primary-blue hover:bg-primary-blue/90 text-white font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <Download size={18} />
                    Download Image
                  </button>
                  
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                      Created by Rohit Kumar
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
