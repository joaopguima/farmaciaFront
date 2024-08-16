import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <div className='min-h-[80vh]'>
      <div className='text-center justify-center'>
        TESTANDO
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
