import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CountdownPage from './pages/CountdownPage'
import CardPage from './pages/CardPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/birthday' element={<LandingPage/>}/>
        <Route path='/birthday/countdown' element={<CountdownPage/>}/>
        <Route path='/birthday/card' element={<CardPage/>}/>
      </Routes>
    </Router>
  )
}

export default App