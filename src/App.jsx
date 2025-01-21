// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// // 1
// // import './App.css';
// import './styles/styles.css'

// import Particle from './components/Particle'

// import Home from './pages/Home'
// import Registration from './pages/Registration'

// import Mindscape from './pages//tech/Mindscape'
// import CodeRoulette from './pages/tech/CodeRoulette';
// import TechTrivia from './pages/tech/TechTrivia'
// import GreyScale from './pages/tech/GreyScale'
// import TechQuest from './pages/tech/TechQuest'

// import GameVerse from './pages/nontech/GameVerse'
// import FilmFrency from './pages/nontech/FilmFrency'
// import ApexConquest from './pages/nontech/ApexConquest'

// import Footer from './components/Footer'

// //2
// import Update from './components/Update'


// function App() {

//   return (
   
//       <BrowserRouter>
//       <Particle />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/registration" element={<Registration />} /> 
          
//           {/* Technical Events */}
//           <Route path='/event/mindscapes-unfold' element={<Mindscape/>} />
//           <Route path='/event/CodeRoulette' element={<CodeRoulette/>} />
//           <Route path='/event/tech-trivia' element={<TechTrivia/>} />
//           <Route path='/event/greyscale' element={<GreyScale/>} />
//           <Route path='/event/TechQuest' element={<TechQuest/>} />


//           {/* Non-Technical Events */}
//           <Route path='/event/snap-seek' element={<GameVerse/>} />
//           <Route path='/event/film-frency' element={<FilmFrency/>} />
//           <Route path='/event/apex-conquest' element={<ApexConquest/>} />

//           {/* Test Route - temp */}
//           {/* <Route path='/event/update' element={<Update/>} /> */}
//         </Routes>
//         <Footer/>
//       </BrowserRouter>
//   )
// }

// export default App




import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 1
// import './App.css';
import './styles/styles.css'

import Particle from './components/Particle'

import Home from './pages/Home'
import Registration from './pages/Registration'
import Navbar from './components/Navbar'
import Mindscape from './pages/tech/CodeRoulette'
import CodeRoulette from './pages/tech/CodeRoulette';
import GreyScale from './pages/tech/GreyScale'
import TechQuest from './pages/tech/TechQuest'

import GameVerse from './pages/nontech/GameVerse'
import FilmFrency from './pages/nontech/FilmFrency'
import ApexConquest from './pages/nontech/ApexConquest'
import BioScope from './pages/nontech/BioScope'

import Footer from './components/Footer'

//2
import Update from './components/Update'




function App() {
  return (
    <BrowserRouter>
      
      <Particle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} /> 

        {/* Technical Events */}
        <Route path='/event/mindscapes-unfold' element={<Mindscape/>} />
        <Route path='/event/CodeRoulette' element={<CodeRoulette/>} />
        <Route path='/event/greyscale' element={<GreyScale/>} />
        <Route path='/event/TechQuest' element={<TechQuest/>} />

        {/* Non-Technical Events */}
        <Route path='/event/snap-seek' element={<GameVerse/>} />
        <Route path='/event/film-frency' element={<FilmFrency/>} />
        <Route path='/event/apex-conquest' element={<ApexConquest/>} />
        <Route path='/event/BioScope' element={<BioScope/>} />

        {/* Test Route - temp */}
        {/* <Route path='/event/update' element={<Update/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;