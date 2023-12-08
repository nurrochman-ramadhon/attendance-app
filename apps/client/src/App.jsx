import React from 'react'
import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Login from './Pages/Login'


function App() {
return (
    <>
     <Routes>
      <Route path='/' element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
