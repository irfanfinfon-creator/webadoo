import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-10 sm:py-16 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Quote Section */}
          <motion.div
            className="lg:max-w-[824px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold text-white leading-tight">
              &ldquo;Identity will be the most valuable commodity for citizens in the future, and it will exist primarily online.&rdquo;
            </blockquote>
            <cite className="block mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-400 not-italic">
              &mdash; <span className="font-bold">Eric Schmidt</span>, The New Digital Age
            </cite>
          </motion.div>

          {/* Description Section */}
          <motion.div
            className="lg:max-w-[824px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-sm sm:text-base md:text-lg lg:text-base text-white leading-relaxed space-y-3 sm:space-y-4">
              <p>
                With over 8 years of experience in brand design and web development, we specialize in translating them into creating websites with distinctive identities that help businesses and individuals stand out in their markets.
              </p>
              <p>
                Our approach combines strategic thinking with creative execution, ensuring every websites is not only beautiful but also effective in achieving targeted online presence.
              </p>
              <p>
                From startups to established businesses, we&apos;ve helped dozens of clients transform their visual presence and connect meaningfully with their audiences.
              </p>
            </div>

            <motion.button
              className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-600/80 text-white rounded-full text-sm sm:text-base transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}