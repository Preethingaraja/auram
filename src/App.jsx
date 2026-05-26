import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Branches from './components/Branches'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <main>
      <Hero />
      <Products />
      <WhyUs />
      <Branches />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
