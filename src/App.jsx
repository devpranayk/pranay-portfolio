import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

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
    </>
  )
}

export default App
