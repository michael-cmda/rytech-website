"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Globe } from "lucide-react"
import Image from "next/image"

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const teamMembers = [
    {
      name: "Rendell Yap",
      role: "Founder & Lead IT Consultant",
      description:
        "With over 5 years of experience in IT solutions and cybersecurity, Rendell leads RY Tech with a passion for helping businesses leverage technology securely and efficiently. His expertise spans network infrastructure, security systems.",
      email: "rendellcolinayap@gmail.com",
      phone: "+63 955 961 0555",
      location: "B28 L31 Phase 3 NHA Bangkal, Talomo, Davao City 8000, Philippines",
      portfolio: "https://rendell-portfolio.vercel.app/",
      image: "/rendell.png",
    },
    {
      name: "Michael Jan Arieta",
      role: "Web & Mobile Developer",
      description:
        "Experienced in building reliable backend systems, seamless APIs, and cross-platform mobile applications. Focused on transforming complex challenges into efficient, scalable solutions.",
      email: "arietamichaeljan@gmail.com",
      phone: "0969 624 9603",
      location: "Davao City, Philippines",
      portfolio: "https://arietamichaeljan.vercel.app/",
      image: "/michael.png",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Led by experienced professionals dedicated to delivering exceptional IT solutions.
            </p>
          </div>

          {/* Team members */}
          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-md flex flex-col lg:flex-row transition-all duration-500 hover:shadow-xl hover:border-primary/50"
              >
                {/* Left: Big Image (fits perfectly) */}
         <div className="relative w-full lg:w-1/2 h-80 lg:h-auto bg-muted flex items-center justify-center">
  <Image
    src={member.image}
    alt={member.name}
    fill
    className="object-contain object-center w-full h-full rounded-none"
    sizes="(max-width: 1024px) 100vw, 50vw"
    priority
  />
</div>


                {/* Right: Info */}
                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center text-center lg:text-left bg-card">
                  <h3 className="text-3xl font-bold text-card-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{member.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                        {member.email}
                      </a>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                        {member.phone}
                      </a>
                    </div>

                    <div className="flex items-start justify-center lg:justify-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{member.location}</span>
                    </div>

                    {member.portfolio && (
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <Globe className="w-5 h-5 text-primary" />
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          View Portfolio
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
