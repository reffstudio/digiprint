"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
  "Gran Formato y Lonas",
  "Rotulación Vehicular",
  "Señalética Arquitectónica",
  "Posters y Fine-Art Giclée",
  "Branding Corporativo Integral",
  "Proyecto Personalizado",
]

const volumeOptions = [
  "Pequeño (Menos de 50 m2)",
  "Mediano (50-200 m2)",
  "Grande (200-500 m2)",
  "Industrial (500+ m2)",
]

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormState = {
  nombreEmpresa: string
  correoElectronico: string
  numeroTelefono: string
  tipoProyecto: string
  volumenEstimado: string
  comentarios: string
}

const initialFormState: FormState = {
  nombreEmpresa: "",
  correoElectronico: "",
  numeroTelefono: "",
  tipoProyecto: "",
  volumenEstimado: "",
  comentarios: "",
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>(initialFormState)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      "Tiempo de captura": new Date().toISOString(),
      "Nombre / Empresa": form.nombreEmpresa,
      "Correo Electrónico": form.correoElectronico,
      "Número de teléfono": form.numeroTelefono,
      "Tipo de proyecto": form.tipoProyecto,
      "Volumen Estimado": form.volumenEstimado,
      "Comentarios": form.comentarios,
    }

    // TODO: enviar `payload` al endpoint conectado al Google Sheet
    console.log("Quote submission", payload)

    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setForm(initialFormState)
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
                aria-label="Cerrar"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Header */}
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#000066] mb-2">
                  Cotiza tu Proyecto
                </h2>
                <p className="text-[#000066]/60 text-sm md:text-base">
                  Solicita una sesión informativa personalizada con nuestros especialistas
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
                    Nuestro equipo te contactará en las próximas 24 horas con una sesión informativa personalizada.
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
                  {/* Nombre / Empresa */}
                  <div>
                    <label htmlFor="nombre-empresa" className="block text-sm font-medium mb-2 text-[#000066]">
                      Nombre / Empresa
                    </label>
                    <Input
                      id="nombre-empresa"
                      name="Nombre / Empresa"
                      type="text"
                      placeholder="Ingresa tu nombre o empresa"
                      required
                      value={form.nombreEmpresa}
                      onChange={(e) => setForm({ ...form, nombreEmpresa: e.target.value })}
                      className="bg-gray-50 border-gray-200 focus:border-[#ff0000] h-12 rounded-xl"
                    />
                  </div>

                  {/* Correo Electrónico */}
                  <div>
                    <label htmlFor="correo-electronico" className="block text-sm font-medium mb-2 text-[#000066]">
                      Correo Electrónico
                    </label>
                    <Input
                      id="correo-electronico"
                      name="Correo Electrónico"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      value={form.correoElectronico}
                      onChange={(e) => setForm({ ...form, correoElectronico: e.target.value })}
                      className="bg-gray-50 border-gray-200 focus:border-[#ff0000] h-12 rounded-xl"
                    />
                  </div>

                  {/* Número de teléfono */}
                  <div>
                    <label htmlFor="numero-telefono" className="block text-sm font-medium mb-2 text-[#000066]">
                      Número de teléfono
                    </label>
                    <Input
                      id="numero-telefono"
                      name="Número de teléfono"
                      type="tel"
                      placeholder="+52 664 123 4567"
                      required
                      value={form.numeroTelefono}
                      onChange={(e) => setForm({ ...form, numeroTelefono: e.target.value })}
                      className="bg-gray-50 border-gray-200 focus:border-[#ff0000] h-12 rounded-xl"
                    />
                  </div>

                  {/* Tipo de proyecto */}
                  <div>
                    <label htmlFor="tipo-proyecto" className="block text-sm font-medium mb-2 text-[#000066]">
                      Tipo de proyecto
                    </label>
                    <Select
                      required
                      value={form.tipoProyecto}
                      onValueChange={(value) => setForm({ ...form, tipoProyecto: value })}
                    >
                      <SelectTrigger
                        id="tipo-proyecto"
                        className="bg-gray-50 border-gray-200 focus:border-[#ff0000] h-12 rounded-xl"
                      >
                        <SelectValue placeholder="Selecciona el tipo de proyecto" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Volumen Estimado */}
                  <div>
                    <label htmlFor="volumen-estimado" className="block text-sm font-medium mb-2 text-[#000066]">
                      Volumen Estimado
                    </label>
                    <Select
                      required
                      value={form.volumenEstimado}
                      onValueChange={(value) => setForm({ ...form, volumenEstimado: value })}
                    >
                      <SelectTrigger
                        id="volumen-estimado"
                        className="bg-gray-50 border-gray-200 focus:border-[#ff0000] h-12 rounded-xl"
                      >
                        <SelectValue placeholder="Selecciona el volumen estimado" />
                      </SelectTrigger>
                      <SelectContent>
                        {volumeOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Comentarios */}
                  <div>
                    <label htmlFor="comentarios" className="block text-sm font-medium mb-2 text-[#000066]">
                      Comentarios
                    </label>
                    <Textarea
                      id="comentarios"
                      name="Comentarios"
                      placeholder="Cuéntanos más sobre tu proyecto, fechas de entrega, archivos a producir, etc."
                      rows={4}
                      value={form.comentarios}
                      onChange={(e) => setForm({ ...form, comentarios: e.target.value })}
                      className="bg-gray-50 border-gray-200 focus:border-[#ff0000] min-h-28 rounded-xl resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#ff0000] hover:bg-[#dd0000] text-white h-14 text-base font-semibold rounded-xl group"
                  >
                    Solicitar Cotización
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-xs text-center text-gray-400">
                    Al enviar, aceptas nuestros términos de servicio y política de privacidad.
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
