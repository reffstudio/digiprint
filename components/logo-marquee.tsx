"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "Copachisa", letters: "CP" },
  { name: "CW", letters: "CW" },
  { name: "Hospital Infantil de las Californias", letters: "HI" },
  { name: "El Gallito", letters: "EG" },
  { name: "Rooster", letters: "RS" },
  { name: "Agredanos", letters: "AG" },
  { name: "Interceramic", letters: "IC" },
  { name: "Gandhi", letters: "GD" },
  { name: "SuKarne", letters: "SK" },
  { name: "Visada MX", letters: "VM" },
  { name: "Ink Agency", letters: "IA" },
  { name: "CSI Creative", letters: "CS" },
  { name: "G Global", letters: "GG" },
  { name: "Alfa K9", letters: "K9" },
]

function LogoPlaceholder({ name, letters }: { name: string; letters: string }) {
  return (
    <div className="group flex items-center justify-center h-12 px-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-foreground/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
          <span className="text-sm font-bold text-foreground/60 group-hover:text-primary transition-colors duration-300">
            {letters}
          </span>
        </div>
        <span className="text-lg font-semibold text-foreground/60 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  )
}

export function LogoMarquee() {
  return (
    <section className="py-16 border-y border-border/30 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 mb-8"
      >
        <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
          Décadas de calidad respaldadas por los líderes de la región.
        </p>
      </motion.div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee */}
        <div className="flex animate-marquee">
          {/* First set */}
          <div className="flex items-center gap-12 shrink-0">
            {logos.map((logo, index) => (
              <LogoPlaceholder key={`first-${index}`} name={logo.name} letters={logo.letters} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-12 shrink-0 ml-12">
            {logos.map((logo, index) => (
              <LogoPlaceholder key={`second-${index}`} name={logo.name} letters={logo.letters} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
