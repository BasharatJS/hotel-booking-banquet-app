import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import AboutSection from '@/components/AboutSection'
import RoomsShowcase from '@/components/RoomsShowcase'
import AmenitiesShowcase from '@/components/AmenitiesShowcase'
import GalleryShowcase from '@/components/GalleryShowcase'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Home() {
  return (
    <ClientWrapper>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSlider />
        <AboutSection />
        <RoomsShowcase />
        <AmenitiesShowcase />
        <GalleryShowcase />
        <Footer />
      </div>
    </ClientWrapper>
  );
}
