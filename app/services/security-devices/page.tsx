import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCTA from "@/components/service-cta"

export const metadata = {
  title: "Cybersecurity & Data Protection - RY Tech IT Solutions",
  description:
    "Comprehensive cybersecurity solutions including security audits, firewall setup, data encryption, and compliance support for businesses.",
}

export default function SecurityDevicesPage() {
  const features = [
    {
      icon: "Shield",
      title: "Security Audits",
      description: "Comprehensive security assessments to identify vulnerabilities and strengthen your defenses",
    },
    {
      icon: "Lock",
      title: "Firewall Configuration",
      description: "Advanced firewall setup and configuration to protect against cyber threats",
    },
    {
      icon: "Key",
      title: "Data Encryption",
      description: "End-to-end data encryption solutions to protect sensitive business information",
    },
    {
      icon: "FileCheck",
      title: "Compliance Support",
      description: "Assistance with regulatory compliance including GDPR, HIPAA, and industry standards",
    },
    {
      icon: "AlertTriangle",
      title: "Threat Monitoring",
      description: "24/7 threat monitoring and incident response to protect against cyber attacks",
    },
    {
      icon: "UserCheck",
      title: "Access Control",
      description: "Multi-factor authentication and access control systems for enhanced security",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture and potential vulnerabilities.",
    },
    {
      step: "2",
      title: "Risk Analysis",
      description: "Detailed risk analysis and prioritization of security improvements needed.",
    },
    {
      step: "3",
      title: "Solution Implementation",
      description: "Professional implementation of security measures and protective technologies.",
    },
    {
      step: "4",
      title: "Staff Training",
      description: "Security awareness training for your team to prevent human error vulnerabilities.",
    },
    {
      step: "5",
      title: "Ongoing Monitoring",
      description: "Continuous monitoring and maintenance to ensure ongoing security effectiveness.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServiceHero
          title="Cybersecurity & Data Protection"
          description="Protect your business from cyber threats with comprehensive security solutions including audits, firewall configuration, data encryption, and compliance support."
          icon="Lock"
          backgroundImage="/cybersecurity-professional-monitoring-security-sys.jpg"
        />
        <ServiceFeatures
          title="Complete Security Solutions"
          description="Multi-layered security approach to protect your business data and systems from evolving cyber threats."
          features={features}
        />
        <ServiceProcess
          title="Our Security Implementation Process"
          description="Systematic approach to building robust cybersecurity defenses tailored to your business needs."
          process={process}
        />
     
      </main>
      <Footer />
    </div>
  )
}
