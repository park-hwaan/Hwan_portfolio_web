import './App.css'
import About from './components/about/About'
import Navbar from './navigation/Navbar'
import Skills from './components/skills/skills'


function App() {
  return (
    <>
      <Navbar />

      <main>
        <About />
        <Skills />
      </main>
    </>
  )
}

export default App