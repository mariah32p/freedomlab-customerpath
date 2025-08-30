import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
import GetStartedPage from './pages/GetStartedPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App