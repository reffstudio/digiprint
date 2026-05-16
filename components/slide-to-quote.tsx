"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

interface SlideToQuoteProps {
  onComplete: () => void
}

export function SlideToQuote({ onComplete }: SlideToQuoteProps) {
  const [isComplete, setIsComplete] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  
  const trackWidth = 280
  const handleWidth = 56
  const threshold = trackWidth - handleWidth - 8

  const backgroundOpacity = useTransform(x, [0, threshold], [0, 1])
  const textOpacity = useTransform(x, [0, threshold * 0.5], [1, 0])

  const resetSlider = () => {
    animate(x, 0, { duration: 0.3, type: "spring", stiffness: 400, damping: 25 })
    setIsComplete(false)
  }

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX >= threshold * 0.9) {
      animate(x, threshold, { duration: 0.2 })
      setIsComplete(true)
      setTimeout(() => {
        onComplete()
        // Reset slider after modal opens
        setTimeout(resetSlider, 100)
      }, 300)
    } else {
      animate(x, 0, { duration: 0.3, type: "spring", stiffness: 400, damping: 25 })
    }
  }

  return (
    <div
      ref={constraintsRef}
      className="relative h-14 w-[280px] md:w-[320px] bg-white/90 backdrop-blur-sm rounded-full border-2 border-[#ff0000] overflow-hidden shadow-lg"
    >
      {/* Progress fill */}
      <motion.div
        className="absolute inset-0 bg-[#ff0000]"
        style={{ opacity: backgroundOpacity }}
      />

      {/* Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: textOpacity }}
      >
        <span className="text-[#ff0000] font-semibold text-sm md:text-base uppercase tracking-wide ml-8">
          Cotizar Proyecto
        </span>
      </motion.div>

      {/* Complete text */}
      {isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <CheckCircle2 className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-semibold text-sm md:text-base uppercase tracking-wide">
            Abriendo
          </span>
        </motion.div>
      )}

      {/* Draggable handle */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: threshold }}
        dragElastic={0}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className={`
          absolute left-1 top-1 bottom-1 w-12 md:w-14 
          bg-[#ff0000] rounded-full 
          flex items-center justify-center 
          cursor-grab active:cursor-grabbing
          shadow-md
          ${isComplete ? "pointer-events-none" : ""}
        `}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={isComplete ? {} : { x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </motion.div>
      </motion.div>
    </div>
  )
}
