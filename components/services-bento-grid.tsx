"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ImageIcon,
  Sticker,
  PanelTop,
  CarFront,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const services = [
  {
    title: "Vinil Industrial y Stickers",
    description: "Corte de precisión para etiquetas, calcomanías y producción de alto volumen.",
    icon: Sticker,
  },
  {
    title: "Gran Formato y Lonas",
    description: "Lonas, banners y vallas con color de alta fidelidad para exteriores e interiores.",
    icon: ImageIcon,
  },
  {
    title: "Rotulación Vehicular",
    description: "Wrap completo y rotulado parcial para flotillas, vans, food trucks y unidades comerciales.",
    icon: CarFront,
  },
  {
    title: "Señalética Arquitectónica",
    description: "Letreros, directorios y señalización corporativa instalada llave en mano.",
    icon: PanelTop,
  },
]

const installations = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0")
  return {
    src: `/installations/instalacion-${n}.jpg`,
    alt: `Instalación DigiPrint ${i + 1}`,
  }
})

function InstallationsSlideshow() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const total = installations.length

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total)
    },
    [total],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (isHovered) return
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, 4500)
    return () => clearInterval(id)
  }, [isHovered, total])

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-foreground/5">
        {installations.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            priority={i === 0}
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Imagen anterior"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/85 backdrop-blur-sm text-[#000066] shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Imagen siguiente"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/85 backdrop-blur-sm text-[#000066] shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 rounded-full bg-black/55 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
          {index + 1} / {total}
        </div>
      </div>

      {/* Thumbnails */}
      <div
        className="mt-4 flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-thin"
      >
        {installations.map((image, i) => (
          <button
            key={`thumb-${image.src}`}
            type="button"
            data-thumb-index={i}
            onClick={() => goTo(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            aria-current={i === index}
            className={`relative shrink-0 overflow-hidden rounded-lg transition-all duration-300 h-14 w-20 md:h-16 md:w-24 ${
              i === index
                ? "ring-2 ring-[#000066] opacity-100"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export function ServicesBentoGrid() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Servicios de Produccion Premium
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Capacidades de grado industrial para demandas empresariales
          </p>
        </motion.div>

        {/* Services list */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14 md:mb-20"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.li
                key={service.title}
                variants={itemVariants}
                className="group relative flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/40 p-5 hover:border-primary/40 hover:bg-background/60 transition-colors"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1.5">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>

        {/* Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Nuestras instalaciones en campo</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Producción, montaje y aplicación profesional para clientes en toda la región.
              </p>
            </div>
          </div>
          <InstallationsSlideshow />
        </motion.div>
      </div>
    </section>
  )
}
