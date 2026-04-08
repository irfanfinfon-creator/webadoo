import { motion } from "motion/react";
import { TestimonialsColumn, testimonials } from "@/components/ui/testimonials-columns-1";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="py-10 sm:py-16 lg:py-[100px] bg-black">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="flex justify-center mb-4 sm:mb-5">
            <div className="border border-[#5d00ff]/50 text-[#5d00ff] py-1.5 px-4 rounded-lg text-sm">
              Testimonials
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white tracking-tight text-center">
            What our users say
          </h2>
          <p className="text-center mt-3 sm:mt-4 text-zinc-400 text-sm sm:text-base">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}