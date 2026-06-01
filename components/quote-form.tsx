"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Upload, ArrowRight, CheckCircle2 } from "lucide-react"

const projectTypes = [
  "Vinil Industrial y Stickers",
  "Impresión Gran Formato",
  "Impresiones Fine-Art y Giclée",
  "Paquete de Branding Corporativo",
  "Proyecto Personalizado",
]

const volumeOptions = [
  "Pequeño (Menos de 50 m²)",
  "Mediano (50-200 m²)",
  "Grande (200-500 m²)",
  "Industrial (500+ m²)",
]

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <section id="cotizar" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000033]/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Servicio de Cotización Concierge
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solicita una sesión informativa personalizada con nuestros especialistas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-10">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Solicitud Recibida</h3>
                <p className="text-muted-foreground">
                  Nuestro equipo te contactará en las próximas 24 horas con una sesión informativa personalizada.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name / Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground/80">
                    Nombre Completo / Empresa
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Ingresa tu nombre o empresa"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium mb-2 text-foreground/80">
                    Tipo de Proyecto
                  </label>
                  <Select required>
                    <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary h-12">
                      <SelectValue placeholder="Selecciona el tipo de proyecto" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Volume */}
                <div>
                  <label htmlFor="volume" className="block text-sm font-medium mb-2 text-foreground/80">
                    Volumen Estimado
                  </label>
                  <Select required>
                    <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary h-12">
                      <SelectValue placeholder="Selecciona el volumen estimado" />
                    </SelectTrigger>
                    <SelectContent>
                      {volumeOptions.map((option) => (
                        <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">
                    Archivos de Referencia (Opcional)
                  </label>
                  <div
                    className={`
                      relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300
                      ${dragActive ? "border-primary bg-primary/5" : "border-border/50 hover:border-primary/50"}
                      ${fileName ? "bg-primary/5 border-primary/50" : ""}
                    `}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                      accept=".pdf,.ai,.eps,.jpg,.jpeg,.png"
                    />
                    <Upload className={`w-8 h-8 mx-auto mb-3 ${fileName ? "text-primary" : "text-muted-foreground"}`} />
                    {fileName ? (
                      <p className="text-sm text-primary font-medium">{fileName}</p>
                    ) : (
                      <>
                        <p className="text-sm text-muted-foreground mb-1">
                          Arrastra y suelta o haz clic para subir
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          PDF, AI, EPS, JPG, PNG (max 25MB)
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-base font-semibold group"
                >
                  Solicitar Sesión Corporativa
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-center text-muted-foreground/70">
                  Al enviar, aceptas nuestros términos de servicio y política de privacidad.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
