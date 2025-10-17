"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Network, Laptop, Lock, Code, Headphones } from "lucide-react"

const services = [
  { name: "CCTV & Security", href: "/services/cctv", icon: Shield },
  { name: "Networking", href: "/services/networking", icon: Network },
  { name: "Computer Repair", href: "/services/laptop-repair", icon: Laptop },
  { name: "Cybersecurity", href: "/services/security-devices", icon: Lock },
  { name: "Software Development", href: "/services/software", icon: Code },
  { name: "IT Support", href: "/services/it-support", icon: Headphones },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="RY Tech IT Solutions Logo" width={40} height={40} className="w-10 h-10" />
            <span className="font-bold text-xl text-foreground hidden sm:inline">RY Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors">Services</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 p-3 rounded-md hover:bg-secondary transition-colors"
                    >
                      <service.icon className="w-4 h-4 text-primary" />
                      <span className="text-card-foreground">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild className="animate-pulse-glow">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="px-3 py-2">
                <span className="text-card-foreground font-medium">Services</span>
                <div className="mt-2 space-y-1 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-3 h-3" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
