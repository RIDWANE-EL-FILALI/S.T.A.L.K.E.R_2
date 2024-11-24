import React from 'react'
import Hero from './components/hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Buy from './components/Buy'
import Footer from './components/Footer'



const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-blue-50 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Buy />
      <Footer />
    </main>
  )
}

export default App