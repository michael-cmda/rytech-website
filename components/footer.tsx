import Link from "next/link"
import Image from "next/image"
import { Shield, Network, Laptop, Lock, Code, Headphones, Mail, Phone, MapPin } from "lucide-react"

const services = [
  { name: "CCTV & Security", href: "/services/cctv", icon: Shield },
  { name: "Networking", href: "/services/networking", icon: Network },
  { name: "Computer Repair", href: "/services/laptop-repair", icon: Laptop },
  { name: "Cybersecurity", href: "/services/security-devices", icon: Lock },
  { name: "Software Development", href: "/services/software", icon: Code },
  { name: "IT Support", href: "/services/it-support", icon: Headphones },
]

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="RY Tech IT Solutions Logo" width={48} height={48} className="w-12 h-12" />
              <span className="font-bold text-xl text-card-foreground">RY Tech</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner in IT, security, and digital solutions. Delivering secure, scalable, and efficient
              technology solutions for businesses.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <service.icon className="w-3 h-3" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:rendellcolinayap@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  rendellcolinayap@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+639559610555"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +63 955 961 0555
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  B28 L31 Phase 3 NHA Bangkal, Talomo, Davao City 8000, Philippines
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} RY Tech IT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
