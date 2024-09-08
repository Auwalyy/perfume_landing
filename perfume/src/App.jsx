import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Product from './components/Product'
import Newsletter from './components/Subscribe'
import Footer from './components/Footer'
 
function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Section />
    <Product />
    <Newsletter />
    <Footer />
    </>
  )
}

export default App
