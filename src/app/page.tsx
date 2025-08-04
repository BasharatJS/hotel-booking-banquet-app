import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import AboutSection from '@/components/AboutSection'
import RoomsShowcase from '@/components/RoomsShowcase'
import AmenitiesShowcase from '@/components/AmenitiesShowcase'
import GalleryShowcase from '@/components/GalleryShowcase'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <AboutSection />
      <RoomsShowcase />
      <AmenitiesShowcase />
      <GalleryShowcase />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
              <p className="text-muted mb-2">Phone: +91 12345 67890</p>
              <p className="text-muted mb-2">Email: info@omvatika.com</p>
              <p className="text-muted">Address: Om Vatika Guest House, City, State</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Book Banquet</h3>
              <p className="text-muted mb-4">
                Perfect venue for your special occasions with elegant decor and excellent service.
              </p>
              <button className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
                Contact for Booking
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
