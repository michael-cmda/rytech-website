"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Network, Code } from "lucide-react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
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
        <div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary rounded-full animate-float opacity-30"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-primary rounded-full animate-float opacity-40"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-12 flex justify-center">
            <Image
              src="/logo.png"
              alt="RY Tech IT Solutions Logo"
              width={280}
              height={280}
              priority
              className="drop-shadow-lg"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="gradient-text">RY Tech IT Solutions</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-muted-foreground">
              Your Partner in IT, Security & Digital Solutions
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Delivering secure, scalable, and efficient technology solutions for businesses
          </p>

          {/* Service highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-card-foreground">Security Systems</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <Network className="w-5 h-5 text-primary" />
              <span className="text-card-foreground">Networking</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-card-foreground">Software Development</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="animate-pulse-glow text-lg px-8 py-3">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

          </div>
        </div>
      </div>

    </section>
  )
}
