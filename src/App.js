import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Works from './components/Works'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;