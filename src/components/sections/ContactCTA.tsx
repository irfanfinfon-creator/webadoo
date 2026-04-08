import { motion } from "motion/react";
import { Phone } from "lucide-react";

import ctaBackground from "@/assets/361f97ad4a4b8e633cf3b1884047109cc9c820fe.png";

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-[113px]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBackground}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold text-white mb-4 sm:mb-6">
            Ready to Elevate your Online Presence?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto">
            Get in touch and let&apos;s discuss how we can work together to build a brand that truly represents you.
          </p>
          <motion.button
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-xl text-sm sm:text-base transition-all duration-300 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
            Book a Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}