import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Authentication/LoginPage/LoginPage'
import SignupPage from './Authentication/SignupPage/SignupPage'
import AMLForm from './pages/AML/AmlForm'
import AadharKYCForm from './pages/KYC/KycForm'
import OTP from './Authentication/Otp/Otp'
import OneStep from './Authentication/One_step/OneStep'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'


function App() {
 

  return (
    <Router>
      <ToastContainer /> 
      <Routes>
      
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/aml-form" element={<AMLForm />} />
        <Route path="/aadhar-kyc" element={<AadharKYCForm />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/OneStep" element={<OneStep />} />
        <Route path="/" element={<LoginPage />} />

      </Routes>
    </Router>
  )
}

export default App
