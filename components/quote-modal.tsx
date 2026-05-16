"use client"

import { motion, AnimatePresence } from "framer-motion"
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
import { ArrowRight, CheckCircle2, X } from "lucide-react"

const projectTypes = [
  "Vinil Industrial y Stickers",
  "Impresion Gran Formato",
  "Impresiones Fine-Art y Giclee",
  "Paquete de Branding Corporativo",
  "Proyecto Personalizado",
]

const volumeOptions = [
  "Pequeno (Menos de 50 m2)",
  "Mediano (50-200 m2)",
  "Grande (200-500 m2)",
  "Industrial (500+ m2)",
]

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-xl z-50 overflow-auto"
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-auto">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Header */}
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#000066] mb-2">
                  Cotiza tu Proyecto
                </h2>
                <p className="text-[#000066]/60 text-sm md:text-base">
                  Solicita una sesion informativa personalizada con nuestros especialistas
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 md:py-12"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#ff0000]/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-[#ff0000]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#000066] mb-2">Solicitud Recibida</h3>
                  <p className="text-[#000066]/60 text-sm md:text-base mb-6">
                    Nuestro equipo te contactara en las proximas 24 horas con una sesion informativa personalizada.
                  </p>
                  <Button
                    onClick={handleClose}
                    className="bg-[#000066] hover:bg-[#000055] text-white rounded-full px-8 py-3"
                  >
                    Cerrar
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  {/* Name / Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-[#000066]">
                      Nombre Completo / Empresa
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Ingresa tu nombre o empresa"
                      required
                      className="bg-gray-50 border-gray-200 focus:border-[#ff0000] h-12 rounded-xl"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#000066]">
                      Correo Electronico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="bg-gray-50 border-gray-200 focus:border-[#ff0000] h-12 rounded-xl"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#000066]">
                      Numero de Telefono
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+52 664 123 4567"
                      required
                      className="bg-gray-50 border-gray-200 focus:border-[#ff0000] h-12 rounded-xl"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="project-type" className="block text-sm font-medium mb-2 text-[#000066]">
                      Tipo de Proyecto
                    </label>
                    <Select required>
                      <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-[#ff0000] h-12 rounded-xl">
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
                    <label htmlFor="volume" className="block text-sm font-medium mb-2 text-[#000066]">
                      Volumen Estimado
                    </label>
                    <Select required>
                      <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-[#ff0000] h-12 rounded-xl">
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

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#ff0000] hover:bg-[#dd0000] text-white h-14 text-base font-semibold rounded-xl group"
                  >
                    Solicitar Cotizacion
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-xs text-center text-gray-400">
                    Al enviar, aceptas nuestros terminos de servicio y politica de privacidad.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
