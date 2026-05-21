import React from 'react'
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>

      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;