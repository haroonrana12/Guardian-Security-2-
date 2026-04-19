const items = [
  "Established 2005",
  "Operating in 50+ Countries",
  "5,000+ Missions Completed",
  "Zero Client Compromises",
  "24/7 Global Operations Center",
  "ISO 18788 Certified",
];

export function TrustBar() {
  return (
    <section className="relative border-y border-border/50 bg-onyx py-6 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...Array(2)].map((_, dup) => (
          <div key={dup} className="flex items-center shrink-0">
            {items.map((t, i) => (
              <div key={`${dup}-${i}`} className="flex items-center gap-6 px-10">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  {t}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
