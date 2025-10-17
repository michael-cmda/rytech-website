import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCTA from "@/components/service-cta"

export const metadata = {
  title: "CCTV Installation & Security Systems - RY Tech IT Solutions",
  description:
    "Professional CCTV installation and security monitoring systems. Protect your business with HD cameras, remote monitoring, and 24/7 surveillance solutions.",
}

export default function CCTVPage() {
  const features = [
    {
      icon: "Eye",
      title: "HD Camera Installation",
      description: "High-definition cameras with crystal clear video quality for optimal surveillance coverage",
    },
    {
      icon: "Monitor",
      title: "Remote Monitoring",
      description: "Access your security feeds from anywhere with our remote monitoring solutions",
    },
    {
      icon: "Smartphone",
      title: "Mobile App Access",
      description: "View live feeds and receive alerts directly on your smartphone or tablet",
    },
    {
      icon: "Cloud",
      title: "Cloud Storage",
      description: "Secure cloud storage for your surveillance footage with easy retrieval options",
    },
    {
      icon: "AlertTriangle",
      title: "Motion Detection",
      description: "Advanced motion detection with instant alerts for suspicious activities",
    },
    {
      icon: "Shield",
      title: "Night Vision",
      description: "Infrared night vision capabilities for 24/7 security monitoring",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Site Assessment",
      description:
        "We conduct a thorough assessment of your premises to identify optimal camera placement and coverage areas.",
    },
    {
      step: "2",
      title: "System Design",
      description: "Custom security system design tailored to your specific needs and budget requirements.",
    },
    {
      step: "3",
      title: "Professional Installation",
      description: "Expert installation of cameras, wiring, and monitoring equipment with minimal disruption.",
    },
    {
      step: "4",
      title: "Testing & Training",
      description: "Comprehensive system testing and staff training to ensure optimal operation and usage.",
    },
    {
      step: "5",
      title: "Ongoing Support",
      description: "24/7 monitoring support and maintenance to keep your security system running smoothly.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServiceHero
          title="CCTV Installation & Security Systems"
          description="Protect your business with professional security camera systems featuring HD video quality, remote monitoring, and 24/7 surveillance capabilities."
          icon="Shield"
          backgroundImage="/modern-security-camera-system-installation.jpg"
        />
        <ServiceFeatures
          title="Comprehensive Security Solutions"
          description="Our CCTV systems provide complete surveillance coverage with advanced features designed to keep your business secure."
          features={features}
        />
        <ServiceProcess
          title="Our Installation Process"
          description="From initial assessment to ongoing support, we ensure your security system is perfectly tailored to your needs."
          process={process}
        />
      </main>
      <Footer />
    </div>
  )
}
