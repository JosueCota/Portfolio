import './App.css'
import About from './pages/About'
import Showcase from './pages/Showcase'
import { Route, Routes } from 'react-router-dom'
import NavBar from './pages/NavBar'
import {animate, motion, transform} from "framer-motion"


function App() {

  //Routes to 'showcase' and 'about', 'about' being the "defualt" page
  return (
    <>
      <NavBar/>      
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/showcase' element={<Showcase/>} />
      </Routes>
      
    </>
  )
}

export default App
