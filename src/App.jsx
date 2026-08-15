import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/home/Hero'
import Services from './components/home/Services'
import DigitalServices from './components/home/DigitalServices'
import WhyUs from './components/home/WhyUs'
import OurJourney from './components/home/OurJourney'
import ServiceCards from './components/home/ServiceCards'
import ContactUs from './components/home/ContactUs'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="digital-services">
          <DigitalServices />
        </div>
        <div id="why-choose-us">
          <WhyUs />
        </div>
        <div id="our-journey">
          <OurJourney />
        </div>
        <div id="service-cards">
          <ServiceCards />
        </div>
        <div id="contact-us">
          <ContactUs />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
