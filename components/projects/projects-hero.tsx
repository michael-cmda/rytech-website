"use client"

import { useEffect, useState } from "react"
import { Briefcase, CheckCircle, Users } from "lucide-react"

export default function ProjectsHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Icon */}
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-primary/20">
            <Briefcase className="w-10 h-10 text-primary" />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Our <span className="gradient-text">Projects</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their IT infrastructure with innovative solutions in
            security, networking, software development, and more.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-card-foreground">100+ Projects Completed</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-card-foreground">50+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
