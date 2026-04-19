import { motion } from "framer-motion";
import { SectionTitle } from "./Services";
import team from "@/assets/team-training.jpg";

export function Team() {
  return (
    <section className="relative py-20 sm:py-28 md:py-40 px-5 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 sm:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7 relative"
        >
          <div className="relative overflow-hidden rounded-sm border border-border">
            <img
              src={team}
              alt="Guardians tactical training"
              loading="lazy"
              width={1600}
              height={1000}
              className="w-full h-auto grayscale contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-onyx/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[10px] uppercase tracking-[0.3em] text-foreground/70">
              <span>SECTOR-7 · LIVE FIRE</span>
              <span>03:42:18 UTC</span>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-5">
          <SectionTitle
            kicker="The Operators"
            title={<>Selected. Trained.<br /><span className="text-gradient-gold italic font-light">Refused twice over.</span></>}
            lead="Every Guardian completes 1,200+ hours of advanced training before deployment. Recruitment standards exclude 97% of applicants."
          />
          <div className="mt-10 space-y-5">
            {[
              ["Close Protection Doctrine", "UK · CPNI / IATA aligned"],
              ["Tactical Driving", "BSR & ILEETA certified"],
              ["Combat Medicine", "TCCC-AC standard"],
              ["Counter-Surveillance", "In-house tradecraft program"],
            ].map(([a, b]) => (
              <div key={a} className="flex items-center justify-between border-b border-border/60 pb-4">
                <span className="text-sm md:text-base">{a}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
