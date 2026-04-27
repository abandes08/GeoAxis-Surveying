import { Analytics } from "@vercel/analytics/react"
import { Helmet } from 'react-helmet-async'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>GeoAxis | Land Surveying & GIS Solutions</title>
        <meta
          name="description"
          content="GeoAxis provides accurate land surveying, drone mapping, GIS solutions, and topographic surveys for residential, commercial, and infrastructure projects."
        />
        <meta property="og:locale" content="en_PH" />
        
        <link rel="canonical" href="https://geoaxis-surveying.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="GeoAxis Surveying Services" />
        <meta property="og:description" content="Professional land surveying, drone mapping, and GIS solutions." />
        <meta property="og:image" content="https://geoaxis-surveying.vercel.app/GeoAxis-Surveying.png" />
        <meta property="og:url" content="https://geoaxis-surveying.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GeoAxis" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GeoAxis Surveying Services" />
        <meta name="twitter:description" content="Professional land surveying, drone mapping, and GIS solutions." />
        <meta name="twitter:image" content="https://geoaxis-surveying.vercel.app/GeoAxis-Surveying.png" />
        <meta name="twitter:site" content="@geoaxis" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GeoAxis",
            "url": "https://geoaxis-surveying.vercel.app/",
            "description": "Land surveying, drone mapping, and GIS services in the Philippines",
            "areaServed": "Philippines"
          })}
        </script>
      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </>
  )
}

export default App