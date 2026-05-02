import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Benefits", href: "#benefits" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-[1905px] px-6 py-5 lg:px-[89px]">
        <nav className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Webadoo
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10 text-base text-white">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="hover:text-indigo-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button
                aria-label="Open menu"
                className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black border-zinc-800">
              <div className="flex flex-col gap-8 mt-8">
                <a
                  href="#"
                  className="text-2xl font-bold text-white"
                  onClick={() => setOpen(false)}
                >
                  Webadoo
                </a>
                <ul className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-lg text-white hover:text-indigo-400 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}