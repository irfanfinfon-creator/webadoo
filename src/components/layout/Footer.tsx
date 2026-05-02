import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  company: [
    { name: "Home", href: "#" },
    { name: "Benefits", href: "#benefits" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
  ],
  contact: {
    email: "info@webadoo.com",
    phone: "+60 123 456 789",
    address: ["22 Jump Street", "Hollywood", "United States of America"],
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10 sm:py-12 lg:py-[50px]">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-10 sm:mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-white tracking-wide mb-4">
              Webadoo
            </h3>
            <p className="text-sm text-zinc-400">
              Crafting distinctive brand identities that capture attention, build trust, and drive business growth.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base font-bold text-white mb-4">Company</h4>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${footerLinks.contact.email}`}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {footerLinks.contact.email}
              </a>
              <a
                href={`tel:${footerLinks.contact.phone}`}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {footerLinks.contact.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-zinc-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  {footerLinks.contact.address.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-base font-bold text-white mb-4">Connect with us</h4>
            <p className="text-sm text-zinc-400 mb-4">
              Let&apos;s build something great together.
            </p>
            <motion.button
              className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-zinc-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-white">
            &copy; {currentYear} Webadoo. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}