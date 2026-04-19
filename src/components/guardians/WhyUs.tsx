import { motion } from "framer-motion";
import { Eye, Crosshair, HeartPulse, Radar } from "lucide-react";
import { SectionTitle } from "./Services";

const pillars = [
  { icon: Eye, title: "Discreet Operations", desc: "Low-profile by design. Our presence is felt, never seen." },
  { icon: Crosshair, title: "Tactical Expertise", desc: "Operators drawn from special forces, federal protective services, and elite police units." },
  { icon: HeartPulse, title: "Medical Readiness", desc: "TCCC-certified personnel and on-call physicians. Survival in the first ten minutes." },
  { icon: Radar, title: "Risk Intelligence", desc: "In-house OSINT and analyst desk. Threats neutralized before they reach the perimeter." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-20 sm:py-28 md:py-40 px-5 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
        <div>
          <SectionTitle
            kicker="Why Guardians"
            title={<>The standard the<br /><span className="text-gradient-gold italic font-light">industry measures by.</span></>}
            lead="Four pillars define every detail we run. They are non-negotiable."
          />
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-5 sm:p-6 border border-border rounded-sm hover:border-gold/50 transition-all bg-card/30"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block"
                >
                  <p.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold mb-3 sm:mb-4" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-base sm:text-lg font-semibold">{p.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Radar / Shield visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square max-w-[420px] sm:max-w-[480px] lg:max-w-[560px] mx-auto w-full"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy via-onyx to-onyx border border-gold/20" />
          <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="sweep" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.745 0.105 85 / 0.5)" />
                <stop offset="100%" stopColor="oklch(0.745 0.105 85 / 0)" />
              </radialGradient>
            </defs>
            {[60, 110, 160, 195].map((r) => (
              <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="oklch(0.745 0.105 85 / 0.18)" strokeWidth="1" />
            ))}
            <line x1="200" y1="5" x2="200" y2="395" stroke="oklch(0.745 0.105 85 / 0.12)" />
            <line x1="5" y1="200" x2="395" y2="200" stroke="oklch(0.745 0.105 85 / 0.12)" />
            <g style={{ transformOrigin: "200px 200px" }}>
              <motion.path
                d="M 200 200 L 200 5 A 195 195 0 0 1 380 130 Z"
                fill="url(#sweep)"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              />
            </g>
            {[
              [140, 90], [280, 140], [120, 250], [310, 280], [220, 320], [90, 180],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="3" fill="oklch(0.58 0.22 264)" />
                <circle cx={cx} cy={cy} r="3" fill="none" stroke="oklch(0.58 0.22 264)" strokeWidth="1" className="pulse-ring" style={{ transformOrigin: `${cx}px ${cy}px` }} />
              </g>
            ))}
            <circle cx="200" cy="200" r="6" fill="oklch(0.745 0.105 85)" />
          </svg>
          <div className="absolute -inset-px rounded-full pointer-events-none [mask:radial-gradient(circle,transparent_60%,black_61%)] bg-gradient-to-tr from-gold/30 via-transparent to-electric/30 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
