"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"
import { LegalLinks } from "./legal-modals"

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#000066] mb-8 text-balance"
        >
          Impresion de Precision para Marcas que Exigen Excelencia
        </motion.h2>

        {/* Contact Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8"
        >
          {/* Phone Pill */}
          <a 
            href="tel:+526641234567"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#000066]/20 hover:border-[#000066]/40 transition-colors text-sm text-[#000066]"
          >
            <Phone className="w-4 h-4" />
            <span>+52 (664) 123-4567</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-[#000066] hover:bg-[#000055] flex items-center justify-center transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-[#000066] hover:bg-[#000055] flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-[#000066] hover:bg-[#000055] flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Email Pill */}
          <a 
            href="mailto:hola@digiprint.mx"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#000066]/20 hover:border-[#000066]/40 transition-colors text-sm text-[#000066]"
          >
            <Mail className="w-4 h-4" />
            <span>hola@digiprint.mx</span>
          </a>
        </motion.div>

        {/* Legal Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-10"
        >
          <LegalLinks />
        </motion.div>

        {/* Bottom Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-full h-48 md:h-64 lg:h-80 rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#000066]/40" />
          {/* Logo centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/logo-digiprint.svg"
              alt="DIGIPRINT"
              width={200}
              height={60}
              className="brightness-0 invert"
            />
          </div>
        </motion.div>

        {/* Copyright & Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-xs text-[#000066]/50 mb-1">
            © {new Date().getFullYear()} DIGIPRINT.
          </p>
          <p className="text-xs text-[#000066]/40">
            Powered by{" "}
            <a 
              href="https://www.reff.studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#ff0000] transition-colors"
            >
              REFF STUDIO
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
