import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import About from './Pages/About'

const RouterApp = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
    )
}

export default RouterApp
