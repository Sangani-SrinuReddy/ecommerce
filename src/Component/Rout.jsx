import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './home'
import Product from './product';
import Cart from './cart';
import Contact from './contact';
import Login from './login';
import Register from '../register';

const Rout = ({ product, setProduct, detail, view, close, setClose ,cart , setCart,addcart}) => {
    return (
        <div>
        
                <Routes>
                    <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addcart={addcart}/>} />
                    <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addcart = {addcart}/>} />
                    <Route path='/cart' element={<Cart  cart = {cart} setCart = {setCart}/> }/>
                    <Route path='/login'element={<Login />}/>
                    <Route path='/register'element = {<Register />}/>
                    <Route path = "/contact"element = {<Contact />}/>
                    
                </Routes>
          


        </div>
    )
}

export default Rout