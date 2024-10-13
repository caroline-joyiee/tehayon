import React from 'react'
import About from './pages/about'
import Gallery from './pages/gallery'
import Home from './pages/home'
import Contact from './pages/contact'
// import { Route, Routes } from 'react-router'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header'






const App = () => {
  return (
    <div className='App'>
        <Routes>
            <Route path = 'about'

            element= {<About/>}
            />

            <Route path = '/'

            element = { <Home/>}
            />

            <Route path = 'gallery'

            element= { <Gallery/>}
            
            />

            <Route path = 'contact'

            element= { <Contact/>}
            
            />

            {/* <Header/> */}

        </Routes>


    </div>
  )
}

export default App