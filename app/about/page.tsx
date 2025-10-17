import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/about-hero"
import CompanyStory from "@/components/about/company-story"
import MissionVision from "@/components/about/mission-vision"
import TeamSection from "@/components/about/team-section"
import CertificationsSection from "@/components/about/certifications-section"
import ValuesSection from "@/components/about/values-section"

export const metadata = {
  title: "About RY Tech IT Solutions - Your Trusted IT Partner",
  description:
    "Learn about RY Tech IT Solutions, our mission to deliver secure and scalable technology solutions, and our certified team of IT professionals.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <ValuesSection />
        <TeamSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  )
}
