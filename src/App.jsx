import './App.css'
import About from './components/About'
import Navbar from './navigation/Navbar'


function App() {
  return (
    <>
      <Navbar />

      <main>
        <h2>안녕하세요 끊기있는 안드로이드 개발자 박환입니다!</h2>
        <About />
      </main>
    </>
  )
}

export default App