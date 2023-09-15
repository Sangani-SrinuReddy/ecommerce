import { useState } from "react"
import { Link } from "react-router-dom"
import "./Register.css"


const Register = () => {
    const [formData, setFormData] = useState({
        fullname: "", email: "", mobile: '', password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <div className="registerForm">
            <form method="post" onSubmit={handleSubmit} className="formData">
                <h1 style={{ textAlign: "center" }}>Register Form</h1>

                <label htmlFor="fullname">FullName</label>
                <input type="text" name="fullname" onChange={handleChange} value={formData.fullname} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} />
                <label htmlFor="mobile">MobileNumber</label>
                <input type="tel" name="mobile" onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} />
                <input type="submit" value="Register" className="register" />

                <p>Already I have an account. <Link to="/login">login</Link></p>
            </form>

        </div>
    )
}
export default Register