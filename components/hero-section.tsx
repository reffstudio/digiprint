"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { SlideToQuote } from "./slide-to-quote"
import { QuoteModal } from "./quote-modal"

const logos = [
  { name: "Copachisa", src: "/clients/COPACHISA.png" },
  { name: "CW", src: "/clients/CW.png" },
  { name: "Hospital Infantil de las Californias", src: "/clients/HIDLC.png" },
  { name: "El Rooster", src: "/clients/El Rooster.png" },
  { name: "Agredanos", src: "/clients/AGREDANOS.png" },
  { name: "Interceramic", src: "/clients/INTERCERAMIC.png" },
  { name: "Gandhi", src: "/clients/GANDHI.png" },
  { name: "SuKarne", src: "/clients/SUKARNE.png" },
  { name: "Visada MX", src: "/clients/VISADA MX.png" },
  { name: "Ink Agency", src: "/clients/INK.png" },
  { name: "CSI Creative", src: "/clients/CSi.png" },
  { name: "G Global", src: "/clients/G-GLOBAL.png" },
  { name: "Alfa K9", src: "/clients/ALFA K9.png" },
]

function ClientLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="relative flex items-center justify-center h-10 md:h-12 w-20 md:w-28 shrink-0">
      <Image
        src={src}
        alt={name}
        fill
        sizes="(max-width: 768px) 80px, 112px"
        className="object-contain"
      />
    </div>
  )
}

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="fixed top-4 right-4 md:top-6 md:right-8 lg:right-12 z-40">
        <SlideToQuote onComplete={() => setIsModalOpen(true)} />
      </div>

      <section className="h-screen bg-white flex flex-col overflow-hidden">
        {/* Top White Section with Logo, Headline and Description */}
        <div className="bg-white px-4 md:px-8 lg:px-12 pt-4 md:pt-6 pb-4 md:pb-6 shrink-0">
          {/* Header with Logo and CTA */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6 lg:mb-8"
          >
            <Image
              src="/logo-digiprint.svg"
              alt="DIGIPRINT Logo"
              width={140}
              height={42}
              className="w-28 md:w-36 lg:w-44 h-auto"
              priority
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-end">
            {/* Headline - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[0.9] uppercase">
                <span className="text-[#000066]">El Socio</span>{" "}
                <span className="text-[#ff0000]">de</span>
                <br />
                <span className="text-[#000066]">Imprenta</span>{" "}
                <span className="text-[#ff0000]">para las</span>
                <br />
                <span className="text-[#ff0000]">Marcas de</span>{" "}
                <span className="text-[#000066]">Tijuana</span>
              </h1>
            </motion.div>

            {/* Description and CTA - Takes 1 column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3 md:gap-4"
            >
              <p className="text-[#000066]/70 text-sm md:text-base leading-relaxed">
                Combinamos tecnología de punta, trabajo meticuloso y compromiso con la excelencia para entregar resultados de alta calidad en cada proyecto.
              </p>
              <a 
                href="#servicios" 
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-[#000066] font-medium group"
              >
                <span className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#000066] flex items-center justify-center group-hover:bg-[#000066] group-hover:text-white transition-colors">
                  <ArrowDown className="w-3 h-3 md:w-4 md:h-4" />
                </span>
                <span className="uppercase tracking-wide text-xs md:text-sm">Explorar Servicios</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Video Container with Rounded Corners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 min-h-0 px-3 md:px-6"
        >
          <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Logo Authority Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white px-3 md:px-6 py-4 md:py-6 shrink-0"
        >
          <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#000066]/60 font-medium mb-3 md:mb-4">
            Décadas de calidad respaldadas por los líderes de la región.
          </p>

          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Marquee */}
            <div className="flex animate-marquee">
              {/* First set */}
              <div className="flex items-center gap-3 md:gap-5 shrink-0">
                {logos.map((logo, index) => (
                  <ClientLogo key={`first-${index}`} name={logo.name} src={logo.src} />
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-3 md:gap-5 shrink-0 ml-3 md:ml-5">
                {logos.map((logo, index) => (
                  <ClientLogo key={`second-${index}`} name={logo.name} src={logo.src} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
