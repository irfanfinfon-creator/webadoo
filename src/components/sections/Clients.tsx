import { motion } from "motion/react";
import innovatech from "@/assets/innovatech.svg";
import brando from "@/assets/brando-studio.svg";
import nexus from "@/assets/NEXUS.svg";
import sonus from "@/assets/Sonus.svg";
import dama from "@/assets/dama.svg";
import scarabshop from "@/assets/Scarabshop.svg";

const clients = [
  { id: 1, name: "Innovatech", logo: innovatech },
  { id: 2, name: "Nexus", logo: nexus },
  { id: 3, name: "Sonus", logo: sonus },
  { id: 4, name: "DAMA", logo: dama },
  { id: 5, name: "Scarabshop", logo: scarabshop },
  { id: 6, name: "Brando", logo: brando },
];

interface Client {
  id: number;
  name: string;
  logo: string | null;
}

interface ClientsProps {
  clients?: Client[];
}

export function Clients({ clients: customClients }: ClientsProps) {
  const clientList = customClients || clients;

  return (
    <section className="py-1 sm:py-2 lg:py-4 bg-black border-t border-b border-zinc-800">
      <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Client Logos Marquee */}
        <div className="relative flex overflow-hidden group w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-4">
          <motion.div
            className="flex flex-nowrap items-center gap-16 sm:gap-24 pr-16 sm:pr-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // Adjust this duration to control speed
            }}
          >
            {[...clientList, ...clientList, ...clientList, ...clientList].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-none flex items-center justify-center p-2"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-4 sm:h-6 lg:h-6 w-auto object-contain transition-all duration-300 hover:scale-110"
                  />
                ) : (
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-600 hover:text-indigo-500 transition-colors duration-300">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Clients;