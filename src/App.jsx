import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"

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
    </>
  )
}

export default App
