"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getIcon } from "@/lib/icon-map"

interface ServiceHeroProps {
  title: string
  description: string
  icon: string
  backgroundImage?: string
}

export default function ServiceHero({ title, description, icon: iconName, backgroundImage }: ServiceHeroProps) {
  const [mounted, setMounted] = useState(false)
  const Icon = getIcon(iconName)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img src={backgroundImage || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
      )}

      {/* Gradient background if no image */}
      {!backgroundImage && <div className="absolute inset-0 gradient-bg"></div>}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Service icon */}
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-primary/20">
            <Icon className="w-10 h-10 text-primary" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">{title}</h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">{description}</p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div>
        </div>
      </div>
    </section>
  )
}
