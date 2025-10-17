"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export default function ContactCTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your <span className="gradient-text">IT Infrastructure</span>?
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get in touch with our experts today and discover how we can help secure, optimize, and scale your technology
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="animate-pulse-glow text-lg px-8 py-3">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <a href="tel:+639559610555">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+63 955 961 0555</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>rendellcolinayap@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
