import { Linkedin, Instagram, Twitter } from "lucide-react";

import { BrandLogo } from "@/components/guardians/BrandLogo";

const offices = [
  ["London", "12 Berkeley Square, W1J"],
  ["New York", "450 Park Avenue, 10022"],
  ["Dubai", "DIFC Gate Village 04"],
  ["Singapore", "1 Raffles Quay #20"],
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-5 sm:px-6 lg:px-10 pt-14 sm:pt-20 pb-8 sm:pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12">
          <div className="lg:col-span-4">
            <a href="#" className="inline-flex items-center">
              <BrandLogo className="h-8 sm:h-10 max-w-[min(100%,240px)] sm:max-w-[280px]" />
            </a>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Elite protection services for those who cannot afford error. Headquartered in London, deployed worldwide since 2005.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:border-gold hover:text-gold transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold">Navigate</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {["Services", "Global Network", "Why Guardians", "Operations", "Careers", "Press"].map((l) => (
                <li key={l}><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold">Global Offices</h4>
            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              {offices.map(([city, addr]) => (
                <div key={city} className="border-l border-gold/30 pl-4">
                  <div className="text-sm font-semibold">{city}</div>
                  <div className="text-xs text-muted-foreground mt-1">{addr}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-xs text-muted-foreground">
              <div>24/7 Operations Desk</div>
              <a href="tel:+442070000000" className="text-foreground text-base font-display hover:text-gold transition-colors">+44 (0) 20 7000 0000</a>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-5 sm:pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Guardians Protective Services Ltd. — All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">ISO 18788</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
