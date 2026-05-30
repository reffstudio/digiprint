"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"
import { CalendarDays, Building2, TrendingUp } from "lucide-react"

const stats = [
  {
    value: 10,
    prefix: "+",
    label: "Años de experiencia",
    icon: CalendarDays,
  },
  {
    value: 100,
    prefix: "+",
    label: "Empresas representadas",
    icon: Building2,
  },
  {
    value: 8,
    prefix: "+",
    label: "Proyectos sumados cada año",
    icon: TrendingUp,
  },
]

function AnimatedNumber({ value, prefix }: { value: number; prefix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (value >= 1000) {
      return `${Math.round(latest / 1000)}k`
    }
    return Math.round(latest).toString()
  })

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" })
    return controls.stop
  }, [count, value])

  return (
    <span className="inline-flex items-baseline justify-center">
      {prefix && <span className="text-primary mr-0.5">{prefix}</span>}
      <motion.span>{rounded}</motion.span>
    </span>
  )
}

export function MetricsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Reputacion a Escala
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Los numeros que definen la excelencia de grado industrial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="glass h-full flex flex-col items-center justify-between text-center rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <div className="text-4xl md:text-5xl font-bold mb-2 flex items-baseline justify-center">
                    <AnimatedNumber value={stat.value} prefix={stat.prefix} />
                  </div>

                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
