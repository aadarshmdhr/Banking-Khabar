import React from 'react'
import Header from './Comp/Header'
import Footer from './Comp/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App