import React from 'react'
import { useState } from 'react';
import "./login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        username: "", password: ""
    })

    const { username, password } = data;
    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)


    }
    return (
        <div className='formDataWrapper'>
            <form action="" onSubmit={handleSubmit} className='formData'>
                <h1 style={{ textAlign: "center" }}>Login Form</h1>

                <label>UserName</label>
                <input type="text" name="username" value={username} onChange={handleChange} />


                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handleChange} />
                <button type='submit'>Login</button>
                <p>I don't have an account.<Link to="/register">Register</Link></p>


            </form>
        </div>
    )
}

export default Login;