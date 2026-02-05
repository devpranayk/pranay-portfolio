import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

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
    </>
  )
}

export default App
