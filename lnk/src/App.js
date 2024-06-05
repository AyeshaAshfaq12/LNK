import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import Scroll from './components/Scroll'
import Contact from './components/Contact'

const App = () => {

  return (
    <>
      <Header />

      <Routes>
        {/* <Route path="/" element={<Scroll />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App




