import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCTA from "@/components/service-cta"

export const metadata = {
  title: "System Optimization & IT Support - RY Tech IT Solutions",
  description:
    "24/7 IT support, system monitoring, performance optimization, and helpdesk services to keep your business running smoothly.",
}

export default function ITSupportPage() {
  const features = [
    {
      icon: "Clock",
      title: "24/7 Support",
      description: "Round-the-clock IT support and helpdesk services for immediate assistance",
    },
    {
      icon: "Monitor",
      title: "System Monitoring",
      description: "Proactive monitoring of your IT infrastructure to prevent issues before they occur",
    },
    {
      icon: "Wrench",
      title: "Performance Optimization",
      description: "Regular system optimization and maintenance to ensure peak performance",
    },
    {
      icon: "Users",
      title: "Remote Assistance",
      description: "Quick remote support to resolve issues without on-site visits when possible",
    },
    {
      icon: "Shield",
      title: "Preventive Maintenance",
      description: "Scheduled maintenance and updates to prevent system failures and security issues",
    },
    {
      icon: "Headphones",
      title: "Helpdesk Services",
      description: "Dedicated helpdesk support for all your IT questions and technical issues",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your current IT infrastructure and support needs.",
    },
    {
      step: "2",
      title: "Support Plan Setup",
      description: "Customized support plan tailored to your business requirements and budget.",
    },
    {
      step: "3",
      title: "Monitoring Implementation",
      description: "Installation of monitoring tools and establishment of support protocols.",
    },
    {
      step: "4",
      title: "Team Training",
      description: "Training your staff on support procedures and best practices for IT usage.",
    },
    {
      step: "5",
      title: "Ongoing Support",
      description: "Continuous support, monitoring, and optimization of your IT systems.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServiceHero
          title="System Optimization & IT Support"
          description="Keep your business running smoothly with our comprehensive IT support services including 24/7 monitoring, helpdesk support, and system optimization."
          icon="Headphones"
          backgroundImage="/it-support-technician-helping-business-users.jpg"
        />
        <ServiceFeatures
          title="Complete IT Support Solutions"
          description="Proactive IT support and maintenance services to minimize downtime and maximize productivity."
          features={features}
        />
        <ServiceProcess
          title="Our Support Implementation Process"
          description="Structured approach to providing reliable, responsive IT support tailored to your business needs."
          process={process}
        />
      
      </main>
      <Footer />
    </div>
  )
}
