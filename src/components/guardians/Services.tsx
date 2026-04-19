import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import exec from "@/assets/executive-protection.jpg";
import celeb from "@/assets/celebrity-protection.jpg";
import resi from "@/assets/residential-security.jpg";
import comm from "@/assets/commercial-security.jpg";
import event from "@/assets/event-security.jpg";

const services = [
  { n: "01", title: "Executive Protection", desc: "Close protection for C-suite, royalty, and diplomats. Advance teams, secure transport, residential security.", img: exec },
  { n: "02", title: "Celebrity Protection", desc: "Discreet, low-profile details for artists, athletes, and public figures — on tour, on set, and at home.", img: celeb },
  { n: "03", title: "Residential Security", desc: "24/7 estate protection. Threat assessment, perimeter design, vetted in-residence personnel.", img: resi },
  { n: "04", title: "Commercial Security", desc: "Corporate campus and headquarters protection — concierge, surveillance, and rapid response integration.", img: comm },
  { n: "05", title: "Event Security", desc: "From galas to global tours. Crowd management, asset protection, command-and-control from a single operator.", img: event },
];

function SectionTitle({ kicker, title, lead }: { kicker: string; title: React.ReactNode; lead?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl"
    >
      <div className="flex items-center gap-3 mb-5 sm:mb-6">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px w-8 sm:w-10 bg-gold origin-left"
        />
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-gold">{kicker}</span>
      </div>
      <h2 className="text-[clamp(1.75rem,5vw,4rem)] leading-[1.05] font-semibold tracking-tight">{title}</h2>
      {lead && <p className="mt-5 sm:mt-6 text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">{lead}</p>}
    </motion.div>
  );
}

export { SectionTitle };

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 md:py-40 px-5 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          kicker="Capabilities"
          title={<>Five disciplines.<br /><span className="text-gradient-gold italic font-light">One standard.</span></>}
          lead="Every Guardians detail is engineered around a single principle: nothing happens. Our services are calibrated to the threat profile of those who cannot afford error."
        />

        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-gold ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <div className={`relative ${i === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[640px]" : "aspect-[4/5] sm:aspect-[5/6]"} overflow-hidden`}>
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-onyx/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -inset-px rounded-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/30 via-transparent to-electric/20 [mask:linear-gradient(#000,transparent_70%)]" />
              </div>

              <div className="absolute inset-0 p-5 sm:p-7 md:p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="text-[10px] sm:text-xs tracking-[0.3em] text-gold/80">{s.n}</span>
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/40 group-hover:text-gold group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                </div>
                <div>
                  <h3 className={`${i === 0 ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl"} font-semibold tracking-tight`}>{s.title}</h3>
                  {/* Always visible on mobile, expand on hover desktop */}
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md md:hidden">{s.desc}</p>
                  <div className="hidden md:grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">{s.desc}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
                        Brief our desk <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold md:hidden">
                    Brief our desk <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
