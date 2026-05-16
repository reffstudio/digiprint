"use client"

import { motion } from "framer-motion"
import { Scissors, ImageIcon, Frame, Building2 } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Vinil Industrial y Stickers",
    description: "Tecnologia de corte de precision para produccion de alto volumen. Perfecto para rotulacion vehicular, etiquetas de productos e instalaciones de marca.",
    icon: Scissors,
    size: "large",
    gradient: "from-primary/20 to-transparent",
    image: "/images/service-vinyl.jpg",
  },
  {
    title: "Gran Formato en Alta Definicion",
    description: "Lonas, banners e impresiones a gran escala con excepcional precision de color y durabilidad.",
    icon: ImageIcon,
    size: "medium",
    gradient: "from-blue-500/10 to-transparent",
    image: "/images/service-largeformat.jpg",
  },
  {
    title: "Posters Fine-Art y Giclee",
    description: "Impresiones de calidad museo en sustratos premium para exposiciones y coleccionistas.",
    icon: Frame,
    size: "medium",
    gradient: "from-purple-500/10 to-transparent",
    image: "/images/service-fineart.jpg",
  },
  {
    title: "Branding Corporativo Personalizado",
    description: "Produccion integral de activos de marca desde tarjetas de presentacion hasta senalizacion arquitectonica.",
    icon: Building2,
    size: "large",
    gradient: "from-emerald-500/10 to-transparent",
    image: "/images/service-branding.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Servicios de Produccion Premium
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Capacidades de grado industrial para demandas empresariales
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isLarge = service.size === "large"
            
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`
                  group relative glass rounded-2xl overflow-hidden
                  hover:border-primary/30 transition-all duration-500
                  ${isLarge ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-1 lg:row-span-1"}
                `}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                </div>

                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className={`font-semibold mb-2 ${isLarge ? "text-xl md:text-2xl" : "text-lg"}`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-muted-foreground leading-relaxed ${isLarge ? "text-base" : "text-sm"}`}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
