import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import BackToTop from "./components/BackToTop"
import Footer from "./components/Footer"




function App() {
  return (
    <>
      {/* Navbar*/}
      <Navbar/>


      {/* Intro */}
      <Hero />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />


      {/* projects */}
      <Projects />

      

      {/* contact */}
      <Contact />
      {/* BackToTop Button*/}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </>
    
  )
}

export default App
