import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RouteGuard from './components/RouteGuard'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import GetStartedPage from './pages/GetStartedPage'
import DashboardPage from './pages/DashboardPage'
import DemoPage from './pages/DemoPage'
import SuccessPage from './pages/SuccessPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <Router>
      <RouteGuard>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </RouteGuard>
    </Router>
  )
}

export default App