import React from 'react'
import './app.css'
import { ProductCard } from './components/productCard/ProductCard'
import { CreateButton } from './components/Button'

const App = () => {
  return (
    <>
      <ProductCard 
        name="Spicy fried chicken"
        price="40,000 VND"
        image="../../../asset/fried-chicken.jpg"
      />
      <CreateButton text = "Hello world" type = "primary" />
    </>
  )
}

export default App