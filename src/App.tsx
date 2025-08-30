import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RouteGuard from './components/RouteGuard'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
import GetStartedPage from './pages/GetStartedPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <Router>
      <RouteGuard>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </RouteGuard>
    </Router>
  )
}

export default App