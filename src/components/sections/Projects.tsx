import { motion } from "motion/react";

import innovatech from "@/assets/innovatech.png";
import brando from "@/assets/brando.png";
import nexus from "@/assets/nexus.png";
import sonus from "@/assets/sonus.png";
import damacrm from "@/assets/damacrm.png";
import scarabshop from "@/assets/scarabshop.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Innovatech Solution",
    description: "Innovatech Solution created a solution for technology across the industries",
    image: innovatech,
  },
  {
    id: 2,
    title: "Brando Studio",
    description: "Brando Studio is our partner in creative direction of our production and development",
    image: brando,
  },
  {
    id: 3,
    title: "Nexus",
    description: "Nexus aimed to be the main hub of digital security of the businesses and operations",
    image: nexus,
  },
  {
    id: 4,
    title: "Sonus",
    description: "Sonus become the backbone of the local business automation in software and AI expertise",
    image: sonus,
  },
  {
    id: 5,
    title: "Dama CRM",
    description: "Dama is a SaaS product that smoothen the sales and marketing operation of business",
    image: damacrm,
  },
  {
    id: 6,
    title: "Scarabshop",
    description: "Scarabshop is an e-Commerce platform that prioritize local product to the international users",
    image: scarabshop,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-16 lg:py-[100px]">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 ">
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-10 lg:mb-[50px] flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex mb-4 sm:mb-5">
            <div className="border border-indigo-600/50 text-indigo-600 py-1.5 px-4 rounded-lg text-sm">
              Projects
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-2 sm:mb-3">
            Featured Works
          </h2>
          <p className="text-sm sm:text-lg text-zinc-400">
            A selection of recent web development projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-indigo-500/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}