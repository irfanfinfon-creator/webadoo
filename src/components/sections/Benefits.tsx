import { motion } from "motion/react";

const benefits = [
  {
    title: "Business Recognition",
    description: "A strong brand identity makes your business instantly recognizable, helping you stand out in crowded markets and stay top-of-mind with customers.",
  },
  {
    title: "Increased Value",
    description: "Strategic branding increases perceived value, allowing businesses to command premium prices and attract higher-quality clients.",
  },
  {
    title: "Emotional Connection",
    description: "Great brands create emotional connections with audiences, turning customers into loyal advocates who spread the word.",
  },
  {
    title: "Customer Trust",
    description: "Professional branding builds credibility and trust. Customers are more likely to choose brands that look established and legitimate.",
  },
  {
    title: "Personal Authority",
    description: "For individuals, strong personal branding establishes you as an authority in your field and opens doors to new opportunities.",
  },
  {
    title: "Growth Catalyst",
    description: "Consistent branding across all touchpoints accelerates business growth and makes marketing efforts more effective.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-10 sm:py-16 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="gap-8 lg:gap-16 items-start">
          {/* Section Header */}
          <motion.div
            className="lg:flex-1 lg:pr-8 xl:pr-[100px] pb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold text-white leading-tight mb-4 sm:mb-6">
              &ldquo;A website is your brand&apos;s gateway to digital success.&rdquo;
            </h2>
            <p className="text-base sm:text-lg lg:text-base text-white/90 leading-relaxed">
              A strong brand presence isn&apos;t just about visibility &mdash; it&apos;s about making a lasting impact and resonating with your audiences. By merging design with functionality, a well-designed website can transform casual visitors into loyal customers, driving growth and solidifying your market position.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-zinc-900 p-4 sm:p-5 rounded-lg border border-zinc-900 hover:border-indigo-500/50 transition-colors duration-300 transition-transform duration-500 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}