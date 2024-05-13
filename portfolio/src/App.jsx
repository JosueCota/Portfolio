import './App.css'
import About from './pages/About'
import Showcase from './pages/Showcase'
import Contacts from './pages/Contacts'
import { Route, Routes } from 'react-router-dom'
import NavBar from './pages/NavBar'
import {animate, motion, transform} from "framer-motion"


function App() {

  return (
    <>
      <NavBar/>
      <motion.div 
        animate={{rotate: 360}}
      >

      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/showcase' element={<Showcase/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>

      </motion.div>
      
    </>
  )
}

export default App
