import { HeroSection } from "@/components/hero-section"
import { ServicesBentoGrid } from "@/components/services-bento-grid"
import { MetricsSection } from "@/components/metrics-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesBentoGrid />
      <MetricsSection />
      <Footer />
    </main>
  )
}
