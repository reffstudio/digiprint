"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  { name: "Copachisa", src: "/clients/copachisa.jpg" },
  { name: "CW", src: "/clients/cw.png" },
  { name: "Hospital Infantil de las Californias", src: "/clients/hospital-idlc.jpg" },
  { name: "El Rooster", src: "/clients/el-rooster.jpg" },
  { name: "Agredanos", src: "/clients/agredanos.jpg" },
  { name: "Interceramic", src: "/clients/interceramic.png" },
  { name: "Gandhi", src: "/clients/gandhi.jpg" },
  { name: "SuKarne", src: "/clients/sukarne.jpg" },
  { name: "Visada MX", src: "/clients/visada-mx.png" },
  { name: "Ink Agency", src: "/clients/ink-agency.jpg" },
  { name: "CSI Creative", src: "/clients/csi-creative.jpg" },
  { name: "G Global", src: "/clients/g-global.png" },
  { name: "Alfa K9", src: "/clients/alfa-k9.jpg" },
]

function ClientLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="relative flex items-center justify-center h-14 w-32 shrink-0">
      <Image
        src={src}
        alt={name}
        fill
        sizes="128px"
        className="object-contain"
      />
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
          <div className="flex items-center gap-6 shrink-0">
            {logos.map((logo, index) => (
              <ClientLogo key={`first-${index}`} name={logo.name} src={logo.src} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-6 shrink-0 ml-6">
            {logos.map((logo, index) => (
              <ClientLogo key={`second-${index}`} name={logo.name} src={logo.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
