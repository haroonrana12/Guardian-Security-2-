import { motion } from "framer-motion";
import { SectionTitle } from "./Services";

const cases = [
  {
    n: "Case 01",
    title: "Global Concert Tour",
    region: "12 Countries · 47 Shows",
    risk: "High",
    result: "Zero incidents",
    body: "Full-spectrum protection for a multi-platinum artist's world tour. Advance teams, venue hardening, motorcade choreography, and crowd-control liaison across four continents.",
  },
  {
    n: "Case 02",
    title: "Tech Founder Acquisition Roadshow",
    region: "Silicon Valley → Riyadh → Singapore",
    risk: "Elevated",
    result: "Deal closed on schedule",
    body: "Discreet executive protection during a sensitive M&A roadshow. Counter-surveillance, secure communications, and contingency exfiltration planning at every leg.",
  },
  {
    n: "Case 03",
    title: "Royal Family Mediterranean Summer",
    region: "Côte d'Azur · Sardinia",
    risk: "Severe",
    result: "Operation invisible",
    body: "Yacht and shoreside protection over a 9-week period. Maritime overlay, drone counter-measures, and a rotational close-protection cell on a strict no-photograph footing.",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="relative py-20 sm:py-28 md:py-40 px-5 sm:px-6 lg:px-10 bg-navy/30">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          kicker="Operations"
          title={<>Selected work,<br /><span className="text-gradient-gold italic font-light">redacted by necessity.</span></>}
          lead="Names withheld. Outcomes verified. These are the missions we are permitted to discuss."
        />

        <div className="mt-12 sm:mt-16 md:mt-20 relative">
          {/* Vertical timeline */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent origin-top"
          />

          <div className="space-y-12 sm:space-y-16">
            {cases.map((c, i) => (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-8 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Marker */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute left-3 sm:left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-4 ring-onyx z-10"
                >
                  <span className="absolute inset-0 rounded-full bg-gold pulse-ring" />
                </motion.div>

                <div className={`${i % 2 === 0 ? "md:pr-12 lg:pr-16 md:text-right" : "md:pl-12 lg:pl-16"} pl-10 sm:pl-12 md:pl-0`}>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-gold">{c.n}</span>
                  <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{c.region}</p>
                  <p className="mt-4 sm:mt-5 text-sm sm:text-base text-foreground/80 leading-relaxed">{c.body}</p>
                </div>

                <div className={`${i % 2 === 0 ? "md:pl-12 lg:pl-16" : "md:pr-12 lg:pr-16"} pl-10 sm:pl-12 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, borderColor: "oklch(0.745 0.105 85 / 0.5)" }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-sm p-5 sm:p-6 md:p-8 grid grid-cols-2 gap-4 sm:gap-6"
                  >
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Risk Level</div>
                      <div className="mt-2 text-xl sm:text-2xl font-semibold text-gradient-gold">{c.risk}</div>
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Outcome</div>
                      <div className="mt-2 text-xl sm:text-2xl font-semibold">{c.result}</div>
                    </div>
                    <div className="col-span-2 hairline pt-3 sm:pt-4 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-muted-foreground flex items-center justify-between">
                      <span>Classification</span>
                      <span className="text-gold">Restricted</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
