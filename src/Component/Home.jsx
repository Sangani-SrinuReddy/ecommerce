// import React, { useState } from 'react'
import { BsArrowRight, BsCurrencyDollar } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { FiTruck } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlinePercentage,AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsEye } from "react-icons/bs";


import Homeproduct from "./homeProduct";
import "./Home.css";
const Home = ({ detail,view, close, setClose,addcart }) => {

    return (
        <>
            {
                close ?
                    <div className="product_detail">
                        <div className="container">
                            <button onClick={() => setClose(false)} className="closebtn"><AiOutlineCloseCircle />
                            </button>
                            {
                                detail.map((ele) => {
                                    return (
                                        <div className="productbox">
                                            <div className="img-box">
                                                <img src={ele.Img} alt={ele.title} />
                                            </div>
                                            <div className="detail">
                                                <h4>{ele.Cat}</h4>
                                                <h3>{ele.title}</h3>
                                                <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting</p>
                                                <h3>{ele.Price}</h3>
                                                <button>Add To Cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="productbox"></div>
                        </div>
                    </div> : null
            }
            <div className="top_banner">
                <div className="container">
                    <div className="detail">
                        <h2>The Best Note Book Collection 2023</h2>
                        <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
                    </div>
                    <div className="img_box">
                        <img src='public/tv.png' alt='sliderimg' className='img' />
                    </div>
                </div>
            </div>
            <div className="product_type">
                <div className="container">
                    <div className="box">
                        <div className="img-box">
                            <img src="mobile.png" alt="mobile" />
                        </div>
                        <div className="detail">
                            <p>23 Products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src="public/shirt.png" alt="earphone" />
                        </div>
                        <div className="detail">
                            <p>13 Products</p>
                        </div>
                    </div><div className="box">
                        <div className="img-box">
                            <img src="https://media.croma.com/image/upload/v1685025060/Croma%20Assets/Communication/Wearable%20Devices/Images/263701_0_oeuble.png" alt="smartwatch" width='300px' />
                        </div>
                        <div className="detail">
                            <p>32 Products</p>
                        </div>
                    </div><div className="box">
                        <div className="img-box">
                            <img src="tv.png" alt="mobile" />
                        </div>
                        <div className="detail">
                            <p>23 Products</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="box">
                        <div className="icon">
                            <FiTruck />
                        </div>
                        <div className="detail">
                            <h3>Free Shipping Order</h3>
                            <p>Order above<br />  $1000</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BiDollar />
                        </div>
                        <div className="detail">
                            <h3>Return & Refund</h3>
                            <p>Money Back Gaurenty</p>

                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <AiOutlinePercentage />
                        </div>
                        <div className="detail">
                            <h3>Member Discount</h3><p>On Every Order</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BiHeadphone />
                        </div>
                        <div className="detail">
                            <h3>Customer Support</h3><p>Every Time Call Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <h2>Top Products</h2>
                <div className="container">
                    {
                        Homeproduct.map((ele) => {
                            return (
                                <div className="box" key={ele.id}>
                                    <div className="img_box">
                                        <img src={ele.Img} alt={ele.title} className='img'/>
                                        <div className="icon">
                                            <li onClick={()=>addcart(ele)}><AiOutlineShoppingCart /></li>
                                            <li onClick={() => view(ele)}><BsEye /></li>
                                            <li><AiOutlineHeart /></li>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <p>{ele.Cat}</p>
                                        <h3>{ele.title}</h3>
                                        <h4>${ele.Price}</h4>
                                    </div>
                                </div>


                            )

                        })
                    }
                </div>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="detail">
                        <h4>LATEST TECHNOLOGY ADDED</h4>
                        <h3>Apple iPad 10.2 9th gen-2021</h3>
                        <p><BsCurrencyDollar />986</p>
                        <Link to="/product" className='link'>Shop Now<BsArrowRight /></Link>
                    </div>
                    <div className="img_box">
                        <img src="public/tv.png" alt="slidering" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
