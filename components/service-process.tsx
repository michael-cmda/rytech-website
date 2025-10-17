"use client"

import { useEffect, useRef, useState } from "react"

interface ProcessStep {
  step: string
  title: string
  description: string
}

interface ServiceProcessProps {
  title: string
  description: string
  process: ProcessStep[]
}

export default function ServiceProcess({ title, description, process }: ServiceProcessProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{description}</p>
          </div>

          {/* Process steps */}
          <div className="space-y-8">
            {process.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step number */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">{step.step}</span>
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line (except for last item) */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute left-8 mt-16 w-0.5 h-8 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
