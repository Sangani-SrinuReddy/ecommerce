import React from 'react'
import { useState } from 'react';
import "./login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        username: "", password: ""
    })
    const [errors, setErrors] = useState({})
    const { username, password } = data;
    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();

        function Validate() {
            let errors = {}
            if (username) {
                setErrors.username = "Name Required"
            } else if (username.length < 5) {
                setErrors.username = "Name must be more than 5 characters"
            }
            if (password) {
                setErrors.password = "Password required"
            } else if (password.length < 5) {
                setErrors.password = "Password must be more than characters"
            }
            return errors;

        }

    }
    return (
        <div className='formDataWrapper'>
            <form action="" onSubmit={handleSubmit} className='formData'>
                <h1 style={{ textAlign: "center" }}>Login Form</h1>

                <label>UserName</label>
                <input type="text" name="username"  value={username} onChange={handleChange} />
                {errors.username && <span className='text-danger'>{username.name}</span>}

                <label>Password</label>
                <input type="password" name="password" value={password}  onChange={handleChange} />
                <button type='submit'>Login</button>
                <p>I don't have an account.<Link to="/register">Register</Link></p>


            </form>
        </div>
    )
}

export default Login;