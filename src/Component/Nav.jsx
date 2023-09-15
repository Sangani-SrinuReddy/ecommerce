import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from "react-icons/bs"
import { CiLogin, CiLogout } from "react-icons/ci"
import "./Nav.css";
import { Link } from 'react-router-dom';
const Nav = ({searchBtn}) => {
    const[search,setSearch] = useState()
    const handleChange = (e)=>{
        setSearch(e.target.value)
        
    }
    return (
        <>
            <div className="free">
                <div className="icon">
                    <FaTruckMoving />
                </div>
                <p>Free Shipping when shopping upto $1000</p>
            </div>
            <div className="min_header">
                <div className="container">
                    <div className="logo">
                        <Link to="/"><img src="public/shopy.png" alt="logo" /></Link>
                    </div>
                    <div className="search_box">
                        <input type="text" value={search} placeholder='Search Your Product...' autoComplete='off'onChange={handleChange}/>
                        <button onClick={()=>searchBtn(search)}>Search</button>
                    </div>
                    <div className="icon">
                        <div className="account">
                            <div className="user_icon">
                                <AiOutlineUser />
                            </div>
                            <p>Hello,user</p>
                        </div>
                        <div
                            className="second_icon">
                            <Link to="/" className="link"><AiOutlineHeart /></Link>
                            <Link to="/cart" className="link"><BsBagCheck /></Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/" className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to="/product" className='link'>Products</Link>
                            </li>
                            <li>
                                <Link to="/about" className='link'>About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className='link'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="login">
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav