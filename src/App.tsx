import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Component as Navbar } from './components/navbar/Navbar'
import Header from './components/header/Header'

import Gallery from './components/Gallery/Gallery'
import Slide from './components/slide/Slide'
import Message from './components/message/Message'
import Flower from './components/flower/Flower'

const App:React.FC = () => {
  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<> 
          <Navbar />
          <Header />
          <Slide />
          <Gallery />
          <Message />
          </>} />
          <Route path='/flower' element={<Flower />} />

        </Routes>
       </Router>
    
    </>
  )
}

export default App