import './App.css'
import About from './pages/About'
import Showcase from './pages/Showcase'
import Contacts from './pages/Contacts'
import { Route, Routes } from 'react-router-dom'
import NavBar from './pages/NavBar'



function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/showcase' element={<Showcase/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>

      {/* <svg className="relative bottom-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#119999" fill-opacity="1" d="M0,128L7.5,160C15,192,30,256,45,282.7C60,309,75,299,90,256C105,213,120,139,135,128C150,117,165,171,180,170.7C195,171,210,117,225,122.7C240,128,255,192,270,197.3C285,203,300,149,315,138.7C330,128,345,160,360,165.3C375,171,390,149,405,122.7C420,96,435,64,450,58.7C465,53,480,75,495,96C510,117,525,139,540,176C555,213,570,267,585,288C600,309,615,299,630,256C645,213,660,139,675,96C690,53,705,43,720,58.7C735,75,750,117,765,149.3C780,181,795,203,810,213.3C825,224,840,224,855,218.7C870,213,885,203,900,181.3C915,160,930,128,945,122.7C960,117,975,139,990,144C1005,149,1020,139,1035,144C1050,149,1065,171,1080,176C1095,181,1110,171,1125,186.7C1140,203,1155,245,1170,245.3C1185,245,1200,203,1215,165.3C1230,128,1245,96,1260,80C1275,64,1290,64,1305,90.7C1320,117,1335,171,1350,181.3C1365,192,1380,160,1395,144C1410,128,1425,128,1433,128L1440,128L1440,320L1432.5,320C1425,320,1410,320,1395,320C1380,320,1365,320,1350,320C1335,320,1320,320,1305,320C1290,320,1275,320,1260,320C1245,320,1230,320,1215,320C1200,320,1185,320,1170,320C1155,320,1140,320,1125,320C1110,320,1095,320,1080,320C1065,320,1050,320,1035,320C1020,320,1005,320,990,320C975,320,960,320,945,320C930,320,915,320,900,320C885,320,870,320,855,320C840,320,825,320,810,320C795,320,780,320,765,320C750,320,735,320,720,320C705,320,690,320,675,320C660,320,645,320,630,320C615,320,600,320,585,320C570,320,555,320,540,320C525,320,510,320,495,320C480,320,465,320,450,320C435,320,420,320,405,320C390,320,375,320,360,320C345,320,330,320,315,320C300,320,285,320,270,320C255,320,240,320,225,320C210,320,195,320,180,320C165,320,150,320,135,320C120,320,105,320,90,320C75,320,60,320,45,320C30,320,15,320,8,320L0,320Z"></path></svg>

      <svg className="relative bottom-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#119999" fill-opacity="1" d="M0,128L7.5,149.3C15,171,30,213,45,197.3C60,181,75,107,90,69.3C105,32,120,32,135,48C150,64,165,96,180,101.3C195,107,210,85,225,96C240,107,255,149,270,170.7C285,192,300,192,315,176C330,160,345,128,360,122.7C375,117,390,139,405,170.7C420,203,435,245,450,256C465,267,480,245,495,213.3C510,181,525,139,540,149.3C555,160,570,224,585,208C600,192,615,96,630,53.3C645,11,660,21,675,21.3C690,21,705,11,720,16C735,21,750,43,765,64C780,85,795,107,810,133.3C825,160,840,192,855,213.3C870,235,885,245,900,224C915,203,930,149,945,149.3C960,149,975,203,990,234.7C1005,267,1020,277,1035,266.7C1050,256,1065,224,1080,213.3C1095,203,1110,213,1125,208C1140,203,1155,181,1170,154.7C1185,128,1200,96,1215,74.7C1230,53,1245,43,1260,53.3C1275,64,1290,96,1305,106.7C1320,117,1335,107,1350,90.7C1365,75,1380,53,1395,58.7C1410,64,1425,96,1433,112L1440,128L1440,0L1432.5,0C1425,0,1410,0,1395,0C1380,0,1365,0,1350,0C1335,0,1320,0,1305,0C1290,0,1275,0,1260,0C1245,0,1230,0,1215,0C1200,0,1185,0,1170,0C1155,0,1140,0,1125,0C1110,0,1095,0,1080,0C1065,0,1050,0,1035,0C1020,0,1005,0,990,0C975,0,960,0,945,0C930,0,915,0,900,0C885,0,870,0,855,0C840,0,825,0,810,0C795,0,780,0,765,0C750,0,735,0,720,0C705,0,690,0,675,0C660,0,645,0,630,0C615,0,600,0,585,0C570,0,555,0,540,0C525,0,510,0,495,0C480,0,465,0,450,0C435,0,420,0,405,0C390,0,375,0,360,0C345,0,330,0,315,0C300,0,285,0,270,0C255,0,240,0,225,0C210,0,195,0,180,0C165,0,150,0,135,0C120,0,105,0,90,0C75,0,60,0,45,0C30,0,15,0,8,0L0,0Z"></path></svg> */}
    </>
  )
}

export default App
