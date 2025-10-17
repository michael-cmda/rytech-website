"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[var(--background)] via-[var(--card)] to-[var(--background)] overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--accent)] opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-[var(--foreground)]/80 mb-8 max-w-2xl mx-auto">
            Ready to secure your digital future? Contact RY Tech IT Solutions today for expert consultation and tailored
            technology solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-[var(--accent)]">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+63 955 961 0555</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="font-medium">rendellcolinayap@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">B28 L31 Phase 3 NHA Bangkal, Talomo, Davao City 8000, Philippines</span>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/30"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
