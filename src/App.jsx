import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Product from './Product'

function App() {
  return (
    <div>
      <h1>Hello react new page</h1>
      <Link to="/projectdata/product">Product</Link>
      <Routes>
        <Route path="/projectdata/product" element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
