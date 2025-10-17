"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Shield, Users, FileCheck } from "lucide-react"

export default function CertificationsSection() {
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

  const certifications = [
    {
      icon: Shield,
      title: "CEH",
      fullName: "Certified Ethical Hacker",
      description: "Advanced cybersecurity certification for identifying and addressing security vulnerabilities",
      issuer: "EC-Council",
    },
    {
      icon: Award,
      title: "CySA+",
      fullName: "CompTIA Cybersecurity Analyst",
      description: "Cybersecurity analyst certification focusing on threat detection and analysis",
      issuer: "CompTIA",
    },
    {
      icon: FileCheck,
      title: "NPC-DPO",
      fullName: "Data Protection Officer",
      description: "Certified Data Protection Officer for privacy compliance and data governance",
      issuer: "National Privacy Commission",
    },
    {
      icon: Users,
      title: "IT Professional",
      fullName: "Certified IT Professional",
      description: "Comprehensive IT certification covering multiple technology domains",
      issuer: "Industry Standard",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Certifications & <span className="gradient-text">Credentials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our team maintains industry-leading certifications to ensure we deliver the highest quality IT solutions
            </p>
          </div>

          {/* Certifications grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-2xl font-bold text-primary">{cert.title}</h3>
                      <span className="text-sm text-muted-foreground">({cert.issuer})</span>
                    </div>

                    <h4 className="text-lg font-semibold text-card-foreground mb-3">{cert.fullName}</h4>

                    <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional credibility section */}
          <div className="mt-16 text-center">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Commitment to Excellence</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our certifications represent our ongoing commitment to staying current with industry best practices and
                emerging technologies. We continuously invest in professional development to ensure our clients receive
                the most advanced and secure IT solutions available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
