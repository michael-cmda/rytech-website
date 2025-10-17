import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"

export const metadata = {
  title: "Contact Us - RY Tech IT Solutions",
  description:
    "Get in touch with RY Tech IT Solutions for all your technology needs. Contact us for CCTV, networking, cybersecurity, and IT support services.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHero />
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactInfo />
            </div>
          </div>
        </div>
        <ContactMap />
      </main>
      <Footer />
    </div>
  )
}
