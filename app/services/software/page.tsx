import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCTA from "@/components/service-cta"

export const metadata = {
  title: "Web & Software Development - RY Tech IT Solutions",
  description:
    "Custom web applications, software systems, APIs, and dashboards tailored to your business needs. Professional development services.",
}

export default function SoftwarePage() {
  const features = [
    {
      icon: "Globe",
      title: "Custom Web Applications",
      description: "Responsive web applications built with modern technologies for optimal performance",
    },
    {
      icon: "Code",
      title: "API Development",
      description: "RESTful API development for seamless integration between systems and applications",
    },
    {
      icon: "Database",
      title: "Database Design",
      description: "Efficient database architecture and optimization for data management and retrieval",
    },
    {
      icon: "Smartphone",
      title: "Mobile-Responsive Design",
      description: "Mobile-first design approach ensuring optimal experience across all devices",
    },
    {
      icon: "Zap",
      title: "Performance Optimization",
      description: "Code optimization and performance tuning for fast, efficient applications",
    },
    {
      icon: "Settings",
      title: "System Integration",
      description: "Seamless integration with existing systems and third-party services",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Requirements Analysis",
      description: "Detailed analysis of your business requirements and technical specifications.",
    },
    {
      step: "2",
      title: "System Design",
      description: "Comprehensive system architecture and user interface design planning.",
    },
    {
      step: "3",
      title: "Development",
      description: "Agile development process with regular updates and milestone reviews.",
    },
    {
      step: "4",
      title: "Testing & QA",
      description: "Thorough testing and quality assurance to ensure bug-free deployment.",
    },
    {
      step: "5",
      title: "Deployment & Support",
      description: "Professional deployment and ongoing maintenance and support services.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServiceHero
          title="Web & Software Development"
          description="Custom software solutions tailored to your business needs. From web applications to APIs and dashboards, we build scalable, efficient systems that drive your business forward."
          icon="Code"
          backgroundImage="/modern-business-dashboard.png"
        />
        <ServiceFeatures
          title="Custom Development Solutions"
          description="Full-stack development services using modern technologies to create powerful, scalable applications."
          features={features}
        />
        <ServiceProcess
          title="Our Development Process"
          description="Agile development methodology ensuring quality, transparency, and timely delivery of your project."
          process={process}
        />

      </main>
      <Footer />
    </div>
  )
}
