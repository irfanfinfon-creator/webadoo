import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import heroBackground from "@/assets/herosection.svg";
import heroImage from "@/assets/84efad3d294207d3ccb519a45cecdb30aab2edc2.png";

export function Hero() {
  return (
    <section className="relative pt-20 sm:pt-[100px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 pt-12 sm:pt-16 lg:pt-20">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Hero Title */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold text-white tracking-tight leading-[1.1]">
              Creating <span className="text-indigo-600">Websites</span>
              <br className="hidden sm:block" />
              That is Fulfilling
            </h1>
          </motion.div>

          {/* Hero Subtitle */}
          <motion.p
            className="max-w-md sm:max-w-lg text-center text-base sm:text-lg lg:text-[20.8px] text-white/90 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafting distinctive brand identities that capture attention, build trust, and drive business growth
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="mt-2 sm:mt-4 px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 bg-indigo-600 hover:scale-105 text-white rounded-full text-sm sm:text-base transition-all duration-300 flex items-center gap-2 group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Work Together
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Hero Image */}
        <motion.div
          className="mt-10 sm:mt-14 lg:mt-20 rounded-xl group"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={heroImage}
            alt="Website examples"
            className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  );
}