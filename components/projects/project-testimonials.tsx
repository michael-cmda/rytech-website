"use client"

import { useEffect, useRef, useState } from "react"
import { Quote, Star } from "lucide-react"

export default function ProjectTestimonials() {
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

  const testimonials = [
    {
      id: 1,
      name: "Maria Santos",
      position: "Operations Manager",
      company: "Manufacturing Corp",
      content:
        "RY Tech transformed our security infrastructure completely. The CCTV system they installed has given us peace of mind and significantly improved our facility's security. Their professional approach and ongoing support have been exceptional.",
      rating: 5,
      project: "Enterprise Security System",
    },
    {
      id: 2,
      name: "John Rodriguez",
      position: "IT Director",
      company: "Growing Business Inc",
      content:
        "The network infrastructure setup by RY Tech exceeded our expectations. Our internet speed increased dramatically, and the system has been incredibly reliable. They delivered on time and within budget.",
      rating: 5,
      project: "Corporate Network Infrastructure",
    },
    {
      id: 3,
      name: "Sarah Chen",
      position: "Store Manager",
      company: "Retail Chain",
      content:
        "The custom dashboard RY Tech developed has revolutionized how we manage our operations. Real-time insights and automated reporting have improved our decision-making process significantly.",
      rating: 5,
      project: "Custom Business Dashboard",
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
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hear what our clients have to say about their experience working with RY Tech
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Quote icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>

                {/* Author info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                  <div className="text-xs text-muted-foreground mt-2">Project: {testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
