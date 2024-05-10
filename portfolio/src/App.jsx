import './App.css'
import About from './Components/About'
import Projects from './Components/Projects'
import Showcase from './Components/Showcase'
import Skills from './Components/Skills'

function App() {

  return (
    <>
      <About/>
      <Showcase>
        <Projects/>
        <Skills/>
      </Showcase>
    </>
  )
}

export default App
