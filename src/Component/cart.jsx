import React from 'react'
import "./cart.css";
import { AiOutlineClose } from "react-icons/ai"
import { Link } from 'react-router-dom';
const Cart = ({ cart, setCart }) => {
    // inc qty
    const inqty = (product) => {
        const exist = cart.find((ele) => {
            return ele.id === product.id
        })
        setCart(cart.map((ele) => {
            return ele.id === product.id ? { ...exist, qty: exist.qty + 1 } : ele
        }))
    }
    // dec qty
    const decqty = (product) => {
        const exist = cart.find((ele) => {
            return ele.id === product.id
        })
        setCart(cart.map((ele) => {
            return ele.id === product.id ? { ...exist, qty: exist.qty - 1 } : ele
        }))
    }
    // Remove Cart Product
    const removeproduct = (product) => {
        const exist = cart.find((ele) => {
            return ele.id === product.id
        })
        if (exist.qty > 0) {
            setCart(cart.filter((ele) => {
                return ele.id !== product.id
            }))
        }
    }
    // Total Price
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
    return (
        <>

            <div className="cart-container">
                {
                    cart.length === 0 &&
                    <div className="empty-cart">
                        <h3 className="cart">Cart Is Empty</h3>
                        <Link to="/product" className='emptycartbtn'>Shop Now</Link>
                    </div>
                }
                <div className="contant">
                    {
                        cart.map((ele) => {
                            return (
                                <div className="cart_item"key={ele.id}>
                                    <div className="img_box">
                                        <img src={ele.Img} alt="" />
                                    </div>
                                    <div className="detail">
                                        <div className="info">
                                            <h4>{ele.Cat}</h4>
                                            <h3>{ele.title}</h3>
                                            <p>Price: ${ele.Price}</p>
                                            <div className="qty">
                                                <button className="inqty" onClick={() => inqty(ele)}>+</button>
                                                <input type="text" value={ele.qty} />
                                                <button className="decqty" onClick={() => decqty(ele)}>-</button>
                                            </div>

                                            <h4 className='subtotal'>sub total: ${ele.Price * ele.qty}</h4>
                                        </div>
                                    </div>
                                    <div className="close">
                                        <button onClick={() => removeproduct(ele)}><AiOutlineClose /></button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                {
                    cart.length > 0 &&
                    <>
                        <h2 className="totalprice">Total : ${Totalprice}</h2>
                        <button className="checkout">Checkout</button>
                    </>
                }
            </div>

        </>
    )
}

export default Cart