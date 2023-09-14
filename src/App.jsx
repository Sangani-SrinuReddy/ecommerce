import React, { useState } from 'react'
import Nav from './Component/Nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './Component/Rout'
import Footer from './Component/footer'
import Productdetail from './Component/productDetail'


const App = () => {
  // product detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  const [cart, setCart] = useState([])
  // Filter Prouduct  
  const [product, setProduct] = useState(Productdetail)
  const searchBtn = (product) => {
    const change = Productdetail.filter((ele) => {
      return ele.Cat === product
    })
    setProduct(change)
  }
  // product detail
  const view = (product) => {

    setDetail([{ ...product }])
    setClose(true)
  }

  // add cart
  const addcart = (product) => {
    const exist = cart.find((ele) => {
      return ele.id === product.id
    })
    if (exist) {

      alert("This Product is already added to cart")
    } else {
      setCart([...cart, { ...product, qty: 1 }])
      alert("product is added to cart")
    }

  }
  return (

    <>
      <BrowserRouter>
        <Nav searchBtn={searchBtn} />
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addcart={addcart} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App