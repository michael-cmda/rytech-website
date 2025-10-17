import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCTA from "@/components/service-cta"

export const metadata = {
  title: "Computer & Laptop Repair Services - RY Tech IT Solutions",
  description:
    "Expert computer and laptop repair services including hardware repair, software optimization, data recovery, and virus removal.",
}

export default function LaptopRepairPage() {
  const features = [
    {
      icon: "Wrench",
      title: "Hardware Repair",
      description: "Professional repair of motherboards, screens, keyboards, and other hardware components",
    },
    {
      icon: "Cpu",
      title: "Performance Optimization",
      description: "System optimization and upgrades to improve speed and overall performance",
    },
    {
      icon: "HardDrive",
      title: "Data Recovery",
      description: "Professional data recovery services for damaged or corrupted storage devices",
    },
    {
      icon: "Monitor",
      title: "Screen Replacement",
      description: "LCD/LED screen replacement for laptops and desktop monitors with quality parts",
    },
    {
      icon: "Battery",
      title: "Battery Replacement",
      description: "Laptop battery replacement and power management optimization services",
    },
    {
      icon: "Laptop",
      title: "Virus Removal",
      description: "Complete malware and virus removal with system security enhancement",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Diagnostic Assessment",
      description: "Comprehensive diagnostic testing to identify hardware and software issues accurately.",
    },
    {
      step: "2",
      title: "Repair Quote",
      description: "Detailed repair estimate with transparent pricing and timeline for completion.",
    },
    {
      step: "3",
      title: "Professional Repair",
      description: "Expert repair using quality parts and industry-standard repair procedures.",
    },
    {
      step: "4",
      title: "Quality Testing",
      description: "Thorough testing and quality assurance to ensure optimal device performance.",
    },
    {
      step: "5",
      title: "Warranty & Support",
      description: "Repair warranty and ongoing support to ensure long-term device reliability.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServiceHero
          title="Computer & Laptop Repair"
          description="Expert repair and maintenance services for all types of computing devices. From hardware repairs to software optimization, we get your devices running like new."
          icon="Laptop"
          backgroundImage="/computer-repair-technician-working-on-laptop.jpg"
        />
        <ServiceFeatures
          title="Complete Repair Solutions"
          description="Professional repair services for all your computing needs with quality parts and expert technicians."
          features={features}
        />
        <ServiceProcess
          title="Our Repair Process"
          description="Systematic approach to diagnosing and repairing your devices with transparency and quality assurance."
          process={process}
        />
       
      </main>
      <Footer />
    </div>
  )
}
