"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Led by experienced professionals dedicated to delivering exceptional IT solutions
            </p>
          </div>

          {/* Team member */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Profile image placeholder */}
                <div className="lg:col-span-1">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border-4 border-primary/20">
                    <div className="text-6xl font-bold text-primary">RY</div>
                  </div>
                </div>

                {/* Profile info */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-card-foreground mb-2">Rendell Yap</h3>
                  <p className="text-xl text-primary mb-4">Founder & Lead IT Consultant</p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    With over 5 years of experience in IT solutions and cybersecurity, Rendell leads RY Tech with a
                    passion for helping businesses leverage technology securely and efficiently. His expertise spans
                    network infrastructure, security systems, and custom software development.
                  </p>

                  {/* Contact info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a
                        href="mailto:rendellcolinayap@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        rendellcolinayap@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a
                        href="tel:+639559610555"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +63 955 961 0555
                      </a>
                    </div>
                    <div className="flex items-start justify-center lg:justify-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        B28 L31 Phase 3 NHA Bangkal, Talomo, Davao City 8000, Philippines
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
