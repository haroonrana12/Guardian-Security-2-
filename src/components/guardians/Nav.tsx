import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import { BrandLogo } from "@/components/guardians/BrandLogo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Global", href: "#global" },
  { label: "Why Us", href: "#why" },
  { label: "Operations", href: "#cases" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 mt-3 sm:mt-4">
        <div className="glass rounded-full flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3">
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="flex items-center shrink-0 min-w-0 group"
          >
            <BrandLogo className="opacity-95 group-hover:opacity-100 transition-opacity" />
          </motion.a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] bg-gold text-onyx px-4 py-2 rounded-full font-semibold hover:shadow-gold transition-shadow"
          >
            Request Detail
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-gold/30 text-foreground"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 z-40 bg-onyx/95 backdrop-blur-xl pt-24 px-6"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="block py-5 border-b border-border/40 text-2xl font-display tracking-tight hover:text-gold transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60 mr-3">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8 inline-flex items-center justify-center bg-gold text-onyx font-semibold px-6 py-4 rounded-full text-xs uppercase tracking-[0.25em]"
              >
                Request Detail
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
