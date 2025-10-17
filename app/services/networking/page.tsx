import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCTA from "@/components/service-cta"

export const metadata = {
  title: "Networking & Infrastructure Setup - RY Tech IT Solutions",
  description:
    "Professional network infrastructure setup including LAN, WLAN, VLAN configuration, and server installation for businesses.",
}

export default function NetworkingPage() {
  const features = [
    {
      icon: "Network",
      title: "Network Cabling",
      description: "Professional structured cabling installation for reliable and high-speed network connectivity",
    },
    {
      icon: "Wifi",
      title: "WiFi 6 Setup",
      description: "Latest WiFi 6 technology implementation for faster wireless speeds and better coverage",
    },
    {
      icon: "Server",
      title: "Server Configuration",
      description: "Complete server setup and configuration for file sharing, applications, and data management",
    },
    {
      icon: "Shield",
      title: "Network Security",
      description: "Firewall configuration and network security measures to protect your business data",
    },
    {
      icon: "Zap",
      title: "Performance Optimization",
      description: "Network performance tuning and optimization for maximum speed and reliability",
    },
    {
      icon: "Settings",
      title: "VLAN Configuration",
      description: "Virtual LAN setup for network segmentation and improved security management",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Network Assessment",
      description: "Comprehensive evaluation of your current network infrastructure and future requirements.",
    },
    {
      step: "2",
      title: "Design & Planning",
      description: "Custom network design with detailed planning for optimal performance and scalability.",
    },
    {
      step: "3",
      title: "Infrastructure Installation",
      description: "Professional installation of cables, switches, routers, and access points.",
    },
    {
      step: "4",
      title: "Configuration & Testing",
      description: "Complete system configuration and thorough testing to ensure optimal performance.",
    },
    {
      step: "5",
      title: "Documentation & Support",
      description: "Detailed network documentation and ongoing support for maintenance and troubleshooting.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServiceHero
          title="Networking & Infrastructure Setup"
          description="Build a robust network foundation with our professional infrastructure setup services including LAN, WLAN, server configuration, and network security."
          icon="Network"
          backgroundImage="/modern-office-network-infrastructure-setup.jpg"
        />
        <ServiceFeatures
          title="Complete Network Solutions"
          description="From basic connectivity to enterprise-grade infrastructure, we provide comprehensive networking solutions."
          features={features}
        />
        <ServiceProcess
          title="Our Network Implementation Process"
          description="Systematic approach to building reliable, secure, and scalable network infrastructure."
          process={process}
        />
      
      </main>
      <Footer />
    </div>
  )
}
