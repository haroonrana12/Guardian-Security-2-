import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 md:py-44 px-5 sm:px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-onyx to-onyx" />
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.745 0.105 85 / 0.18), transparent 60%)" }}
        />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Begin a confidential conversation</span>
          <h2 className="mt-6 text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] font-semibold tracking-tight">
            Your safety is <br />
            <span className="text-gradient-gold italic font-light">not optional.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Speak with a senior Guardians coordinator. All inquiries are received under strict NDA and routed to our principals desk within the hour.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="#" className="group inline-flex items-center justify-center gap-2 bg-gold text-onyx font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all">
              Request Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="tel:+10000000000" className="group inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-sm uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors">
              <Phone className="h-4 w-4" />
              24/7 Operations
            </a>
          </div>

          <div className="mt-12 sm:mt-16 flex items-center justify-center gap-2 sm:gap-3 text-[9px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-6 sm:w-10 bg-gold/40" />
            <span className="text-center">Encrypted · NDA-bound · Always answered</span>
            <span className="h-px w-6 sm:w-10 bg-gold/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
