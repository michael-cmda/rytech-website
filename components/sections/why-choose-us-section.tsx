"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Clock, Shield } from "lucide-react"

export default function WhyChooseUsSection() {
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

  const reasons = [
    {
      icon: Award,
      title: "Certified Expertise",
      description: "Our team holds industry certifications including CEH, CySA+, and NPC-DPO",
    },
    {
      icon: Shield,
      title: "Security-First Approach",
      description: "Every solution is designed with security and data protection as top priorities",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "We work closely with each client to understand their unique needs and challenges",
    },
    {
      icon: Clock,
      title: "Reliable Support",
      description: "24/7 monitoring and support to ensure your systems are always running optimally",
    },
  ]


  return (
    <section ref={sectionRef} className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="gradient-text">RY Tech</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with personalized service to deliver solutions that drive your business
              forward
            </p>
          </div>

          {/* Reasons grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`flex items-start space-x-4 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
