"use client"

import { useEffect, useRef, useState } from "react"
import { Building, Users, Target } from "lucide-react"

export default function CompanyStory() {
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the technology gap for businesses across the Philippines, RY Tech IT
                  Solutions has grown from a small startup to a trusted partner for organizations seeking reliable IT
                  infrastructure and security solutions.
                </p>
                <p>
                  Our journey began with a simple belief: every business deserves access to enterprise-grade technology
                  solutions that are both secure and scalable. Over the years, we've helped countless organizations
                  transform their operations through strategic technology implementations.
                </p>
                <p>
                  Today, we continue to evolve with the rapidly changing technology landscape, ensuring our clients stay
                  ahead of the curve with cutting-edge solutions in cybersecurity, networking, software development, and
                  IT support.
                </p>
              </div>
            </div>

            {/* Visual elements */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">Established</h3>
                    <p className="text-muted-foreground">Serving businesses since 2019</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">Team</h3>
                    <p className="text-muted-foreground">Certified IT professionals</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">Focus</h3>
                    <p className="text-muted-foreground">Security-first approach</p>
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
