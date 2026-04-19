import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-guardians.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Elite executive protection team at night"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-onyx/40 to-onyx" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pt-32 sm:pt-44 pb-28 sm:pb-24 min-h-[100svh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 self-start rounded-full border border-gold/30 bg-onyx/40 px-4 py-1.5 mb-8"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-gold" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold-soft">Licensed · Vetted · Discreet</span>
        </motion.div>

        <h1 className="max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] font-semibold tracking-tight">
          {["Elite Protection.", "Global Reach.", "Absolute Discretion."].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {i === 2 ? <span className="text-gradient-gold italic font-light">{line}</span> : line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Trusted by Fortune 500 executives, global icons, and high-risk environments
          across six continents. Twenty years of operational excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a href="#contact" className="group inline-flex items-center justify-center gap-2 bg-gold text-onyx font-semibold px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all">
            Request Protection
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#services" className="group inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-sm uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors">
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-6 left-5 right-5 lg:left-10 lg:right-10 flex items-end justify-between text-[10px] sm:text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scaleX: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-px w-8 sm:w-12 bg-gold/50 origin-left"
            />
            <span className="uppercase tracking-[0.3em]">Scroll</span>
          </div>
          <div className="hidden md:block uppercase tracking-[0.3em]">
            EST. 2005 — LON · NYC · DXB · SGP
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
