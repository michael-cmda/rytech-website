"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Eye } from "lucide-react"

export default function MissionVision() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-card-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower businesses with secure, scalable, and efficient technology solutions that drive growth and
                innovation. We are committed to delivering exceptional IT services that protect, optimize, and transform
                our clients' digital infrastructure while providing unparalleled support and expertise.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-card-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the leading IT solutions provider in the Philippines, recognized for our expertise in
                cybersecurity, innovative technology implementations, and commitment to client success. We envision a
                future where every business has access to enterprise-grade technology solutions that enable them to
                compete and thrive in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
