import React from 'react'
import Quiz from './Quiz'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}  />
      <Route path='/sign_up' element={<SignUp />}  />
      <Route path='/quiz' element={<Quiz/>}  />

    </Routes>
    </BrowserRouter>
  )
}

export default App
