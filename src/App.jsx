import './App.css'
import About from './components/about/About'
import Navbar from './navigation/Navbar'
import Skills from './components/skills/skills'
import Projects from './components/projects/Projects'


function App() {
  return (
    <>
      <Navbar />

      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  )
}

export default App