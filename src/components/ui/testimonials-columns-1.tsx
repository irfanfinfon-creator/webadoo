"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/app/components/ui/utils";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "They didn't just build us a website — they built us a brand presence. Every detail, from the typography to the interactions, felt intentional and distinctly ours.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "The handoff was seamless. Clean code, solid documentation, and a CMS our non-technical team could actually use on day one.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "Communication was clear throughout the entire project. We always knew where things stood, and they never disappeared after launch.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "We rebranded and relaunched within six weeks. The site looked premium on day one — and our conversion rate followed.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc4aac10f?w=100&h=100&fit=crop&crop=face",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Deadlines were hit, feedback was acted on fast, and the final product looked better than what we had in our heads. That's rare.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "They asked the right questions before touching a single pixel. By the time design started, it felt like they understood our business better than some of our own team.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our audience noticed before we even announced the rebrand. That's how strong the new visual identity landed.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "The pitch deck they designed closed two enterprise deals in the same month. Good design isn't a cost — it's a closer.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Bounce rate dropped, session time went up, and checkout completions hit a new high — all within the first month after launch.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className={cn("flex flex-col gap-6 pb-6")}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-10 rounded-3xl border border-zinc-800 bg-zinc-900 shadow-lg shadow-purple-500/10 max-w-[1600px] hover:border-purple-500/50 transition-colors"
                  key={i}
                >
                  <div className="text-zinc-300">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-white">
                        {name}
                      </div>
                      <div className="leading-5 text-zinc-500 tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};