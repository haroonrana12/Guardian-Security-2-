import { motion } from "framer-motion";
import { SectionTitle } from "./Services";

const cities = [
  { name: "London", x: 495, y: 165 },
  { name: "New York", x: 285, y: 200 },
  { name: "Los Angeles", x: 175, y: 215 },
  { name: "São Paulo", x: 340, y: 345 },
  { name: "Dubai", x: 615, y: 235 },
  { name: "Lagos", x: 500, y: 290 },
  { name: "Mumbai", x: 680, y: 250 },
  { name: "Singapore", x: 770, y: 305 },
  { name: "Hong Kong", x: 805, y: 240 },
  { name: "Tokyo", x: 870, y: 215 },
  { name: "Sydney", x: 880, y: 380 },
  { name: "Johannesburg", x: 555, y: 365 },
];

const routes: [number, number][] = [
  [0, 1], [0, 4], [0, 5], [1, 2], [4, 6], [4, 7], [6, 7], [7, 8], [8, 9], [7, 10], [4, 11], [1, 3],
];

export function GlobalMap() {
  return (
    <section id="global" className="relative py-20 sm:py-28 md:py-40 px-5 sm:px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-7xl relative">
        <SectionTitle
          kicker="Global Operations"
          title={<>A worldwide network,<br /><span className="text-gradient-gold italic font-light">always within reach.</span></>}
          lead="Strategically placed teams across 50+ countries — coordinated by our 24/7 Global Operations Center. Where you go, we are already there."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-10 sm:mt-16 relative rounded-sm border border-gold/15 bg-navy/30 p-3 sm:p-6 md:p-10"
        >
          <svg viewBox="0 0 1000 500" className="w-full h-auto" role="img" aria-label="World operations map">
            <defs>
              <radialGradient id="dot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.745 0.105 85)" />
                <stop offset="100%" stopColor="oklch(0.745 0.105 85 / 0)" />
              </radialGradient>
              <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.745 0.105 85 / 0)" />
                <stop offset="50%" stopColor="oklch(0.745 0.105 85 / 0.7)" />
                <stop offset="100%" stopColor="oklch(0.58 0.22 264 / 0)" />
              </linearGradient>
            </defs>

            {/* Dotted continents (stylized) */}
            <g fill="oklch(0.965 0.005 270 / 0.18)">
              {Array.from({ length: 600 }).map((_, i) => {
                const x = (i * 53) % 1000;
                const y = ((i * 31) % 500);
                const inBand =
                  (y > 120 && y < 260 && ((x > 120 && x < 350) || (x > 430 && x < 720) || (x > 760 && x < 900))) ||
                  (y > 260 && y < 400 && ((x > 280 && x < 380) || (x > 480 && x < 600) || (x > 820 && x < 920)));
                return inBand ? <circle key={i} cx={x} cy={y} r={1.2} /> : null;
              })}
            </g>

            {/* Routes */}
            {routes.map(([a, b], i) => {
              const A = cities[a], B = cities[b];
              const mx = (A.x + B.x) / 2;
              const my = Math.min(A.y, B.y) - 50;
              return (
                <motion.path
                  key={i}
                  d={`M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`}
                  fill="none"
                  stroke="url(#line)"
                  strokeWidth={1.2}
                  strokeDasharray="4 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: 0.3 + i * 0.1 }}
                />
              );
            })}

            {/* Cities */}
            {cities.map((c, i) => (
              <g key={c.name}>
                <circle cx={c.x} cy={c.y} r={14} fill="url(#dot)">
                  <animate attributeName="r" values="10;22;10" dur="2.6s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0;0.7" dur="2.6s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={c.x} cy={c.y} r={3} fill="oklch(0.745 0.105 85)" />
                <text x={c.x + 8} y={c.y - 8} fill="oklch(0.965 0.005 270 / 0.7)" fontSize="14" fontFamily="Inter, sans-serif" letterSpacing="1">
                  {c.name.toUpperCase()}
                </text>
              </g>
            ))}
          </svg>

          <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              ["50+", "Countries"],
              ["24/7", "Operations Desk"],
              ["< 4h", "Global Deployment"],
              ["12", "Regional HQs"],
            ].map(([n, l], i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l border-gold/30 pl-3 sm:pl-4"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gradient-gold">{n}</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground mt-1">{l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
