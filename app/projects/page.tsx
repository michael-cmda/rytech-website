import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProjectsHero from "@/components/projects/projects-hero"
import ProjectsGrid from "@/components/projects/projects-grid"
import ProjectStats from "@/components/projects/project-stats"
import ProjectTestimonials from "@/components/projects/project-testimonials"

export const metadata = {
  title: "Our Projects Portfolio - RY Tech IT Solutions",
  description:
    "Explore our successful IT projects including CCTV installations, network setups, software development, and cybersecurity implementations.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProjectsHero />
        <ProjectStats />
        <ProjectsGrid />
        <ProjectTestimonials />
      </main>
      <Footer />
    </div>
  )
}
