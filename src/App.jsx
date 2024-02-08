import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Animation from './utilities/Animation'
import ConfirmOtp from './components/auth/ConfirmOtp'
import Signup from './components/auth/Signup'
import OnBoard from './components/auth/OnBoard'

function App() {
  return (
    <>
      <Animation>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/confirm-otp' element={<ConfirmOtp />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/onboard' element={<OnBoard />} />
        </Routes>
        {/* <Login /> */}
      </Animation>
    </>
  )
}

export default App
