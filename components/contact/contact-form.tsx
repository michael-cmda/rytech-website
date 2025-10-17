"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="bg-slate-gray border-slate-gray/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-soft-white">Send Us a Message</CardTitle>
          <p className="text-soft-white/70">Fill out the form below and we'll get back to you within 24 hours.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-soft-white mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-charcoal border-slate-gray/30 text-soft-white focus:border-cyber-aqua"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-soft-white mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-charcoal border-slate-gray/30 text-soft-white focus:border-cyber-aqua"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-soft-white mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-charcoal border-slate-gray/30 text-soft-white focus:border-cyber-aqua"
                  placeholder="+63 917 123 4567"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-soft-white mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-charcoal border border-slate-gray/30 rounded-md text-soft-white focus:border-cyber-aqua focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="cctv">CCTV & Security Systems</option>
                  <option value="networking">Networking Solutions</option>
                  <option value="repair">Computer Repair</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="software">Software Development</option>
                  <option value="support">IT Support</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-soft-white mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-charcoal border-slate-gray/30 text-soft-white focus:border-cyber-aqua resize-none"
                placeholder="Tell us about your project requirements..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-cyber-aqua hover:bg-cyber-aqua/90 text-charcoal font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyber-aqua/25"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
