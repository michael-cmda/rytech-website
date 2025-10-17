"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Users, Award, Clock } from "lucide-react"

export default function AboutSection() {
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

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every solution we implement prioritizes your data security and system integrity",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with years of experience in IT and cybersecurity",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "We deliver reliable, tested solutions that meet industry standards",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance to keep your systems running smoothly",
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
              About <span className="gradient-text">RY Tech</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a trusted IT service provider delivering comprehensive technology, security, and digital solutions
              to businesses across the Philippines. Our mission is to empower organizations with secure, scalable, and
              efficient technology infrastructure.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
