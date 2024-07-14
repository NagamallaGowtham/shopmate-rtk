import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import PageNotFound from '../pages/PageNotFound'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}

export default AllRoutes