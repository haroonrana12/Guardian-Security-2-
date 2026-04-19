import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { SectionTitle } from "./Services";

const quotes = [
  { q: "True gentlemen — a rarity in this industry. Their team became invisible when needed and immovable when required.", a: "CEO · Fortune 50 Tech" },
  { q: "Twelve cities, forty-seven shows, not a single incident. They run the tightest operation I've ever travelled with.", a: "World-touring artist" },
  { q: "Discretion of a Swiss bank, precision of a special forces unit. We trust no one else with the family.", a: "European principal" },
  { q: "Their advance work caught threats our internal team missed entirely. Indispensable.", a: "Head of Security · Sovereign fund" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 md:py-40 px-5 sm:px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-7xl relative">
        <SectionTitle
          kicker="Voices"
          title={<>Spoken quietly,<br /><span className="text-gradient-gold italic font-light">where it matters.</span></>}
        />

        <div className="mt-10 sm:mt-16 relative min-h-[340px] sm:min-h-[280px] md:min-h-[240px]">
          {quotes.map((qu, idx) => (
            <motion.figure
              key={idx}
              initial={false}
              animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : 20, scale: i === idx ? 1 : 0.98 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 glass rounded-sm p-6 sm:p-8 md:p-12 flex flex-col justify-center"
              style={{ pointerEvents: i === idx ? "auto" : "none" }}
            >
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-gold mb-4 sm:mb-6" strokeWidth={1.2} />
              <blockquote className="text-base sm:text-xl md:text-3xl font-display font-light leading-snug max-w-4xl">
                "{qu.q}"
              </blockquote>
              <figcaption className="mt-4 sm:mt-6 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold">— {qu.a}</figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-8 flex gap-2 justify-center">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-1 rounded-full transition-all ${i === idx ? "w-10 bg-gold" : "w-4 bg-foreground/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
