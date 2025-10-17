"use client"

import { motion } from "framer-motion"

export default function ContactMap() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-[var(--background)]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Our Service Area
          </h2>
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
            We proudly serve Davao and surrounding areas with on-site IT services and support.
          </p>
        </div>

        <div className="bg-[var(--card)] rounded-2xl p-8 shadow-xl">
          <div className="aspect-video rounded-lg overflow-hidden relative">
            {/* ✅ Google Map with a marker pin at 7.050804, 125.555019 */}
            <iframe
              src="https://www.google.com/maps?q=7.050804,125.555019&hl=en&z=15&output=embed"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 border-0"
            ></iframe>

            {/* Subtle brand gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent pointer-events-none"></div>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
              RY Tech - Davao Office
            </h3>
            <p className="text-[var(--muted-foreground)]">
              📍 7.050804, 125.555019 — Serving Davao and nearby provinces
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
