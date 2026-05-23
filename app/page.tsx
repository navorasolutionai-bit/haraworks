import Hero from "./components/Hero";
import FeaturedTimeline from "./components/FeaturedTimeline";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import DesignStyles from "./components/DesignStyles";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <FeaturedTimeline />
      <Gallery />
      <Services />
      <DesignStyles />
      <About />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
    </>
  );
}
