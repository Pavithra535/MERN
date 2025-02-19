import React from 'react'
import Home from './components/functional component/Home.jsx'
import About from './components/functional component/About.jsx'
import Gallery from './components/functional component/Gallery.jsx'
import Contact from './components/functional component/Contact.jsx'
import Login from './components/functional component/Login.jsx'
import Signup from './components/functional component/signup.jsx'
import Navbar from './components/functional component/Navbar.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App(){
  return(
    <main>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/About' element={<About></About>}></Route>
    </Routes>
    </BrowserRouter>
    <hr/>
    <Home/>
    <hr/>
    <About/>
    <hr/>
    <Gallery/>
    <hr/>
    <Contact/>
    <hr/>
    <Login/>
    <hr/>
    <Signup/>
    <hr/>
    </main>
    )
}
export default App