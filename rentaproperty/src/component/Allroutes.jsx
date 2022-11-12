import React from 'react'
import Home from '../Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Favourite from '../Pages/Favourite';
const MainRoute = () => {
  return (
    <div>        
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favourite" element={<Favourite/>}/>
    </Routes>
    </div>
  )
}

export default MainRoute