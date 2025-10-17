import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import ProjectsSection from "@/components/sections/projects-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import ContactCTASection from "@/components/sections/contact-cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  )
}
