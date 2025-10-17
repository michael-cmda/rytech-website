"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Building2, Users } from "lucide-react"

const contactMethods = [
  {
    icon: Clock,
    title: "Business Hours (PH Time)",
    details: ["Mon–Fri: 8:00 AM – 6:00 PM", "Sat: 9:00 AM – 4:00 PM"],
    description: "Emergency support available 24/7",
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="mb-8 text-center md:text-left">
        <p className="text-[var(--muted-foreground)] text-lg">
          Choose the most convenient way to get in touch. We're here to help with all your IT needs.
        </p>
      </div>

      <div className="grid gap-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[var(--card)] border-[var(--border)] hover:bg-[var(--card)]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--accent)]/10 rounded-lg">
                    <method.icon className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">{method.title}</h3>
                    <div className="space-y-1 mb-2">
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-[var(--accent)] font-medium">{detail}</p>
                      ))}
                    </div>
                    <p className="text-[var(--muted-foreground)] text-sm">{method.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <Card className="bg-[var(--card)]/80 border-[var(--accent)]/20">
          <CardContent className="p-6 flex gap-3">
            <Building2 className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">Company Details</h3>
              <p className="text-[var(--muted-foreground)] text-sm mb-2">
                <span className="font-semibold">Founded:</span> 2024
              </p>
              <p className="text-[var(--muted-foreground)] text-sm mb-2">
                <span className="font-semibold">Owner:</span> Rendell Yap
              </p>
              <p className="text-[var(--muted-foreground)] text-sm">
                <span className="font-semibold">Specialization:</span> Web Development, IT Solutions, Security Systems, Networking
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[var(--card)]/80 border-[var(--accent)]/20">
          <CardContent className="p-6 flex gap-3">
            <Users className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">Service Coverage</h3>
              <p className="text-[var(--muted-foreground)] text-sm mb-2">
                <span className="font-semibold">Area:</span> Davao & Nearby Provinces
              </p>
              <p className="text-[var(--muted-foreground)] text-sm mb-2">
                <span className="font-semibold">Response Time:</span> Same-day for urgent issues
              </p>
             
            </div>
          </CardContent>
        </Card>
      </div>

    </motion.div>
  )
}
