import React, { useState } from 'react'
import "./contact.css"
const Contact = () => {
    const [user, setUser] = useState({
        Name: "", Email: "", Subject: "", Message: ""
    })
    const sendData = async (e) => {
        e.preventDefault()
        const { Name, Email, Subject, Message } = user;
        const options = {
            method:"POST",
            headers: {
                'Content-Type' : "aplication/json"
            },
            body:JSON.stringify({
                Name,Email,Subject,Message
            })
        }
        const res = await fetch('https://e-commerce-contact-e3a2b-default-rtdb.firebaseio.com/Message.json',options)
        console.log(res)
        if(res){
            alert("Your Message Sent")
        }else{
            alert("An error occured")
        }
    }
    const data = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="contact_container">
                <div className="contant">
                    <h2># contact us</h2>
                    <div className="form">
                        <form method="POST"onSubmit={sendData}>
                            <input type="text" name="Name" value={user.Name} placeholder='Enter Your Full Name' autoComplete='off' onChange={data} required />
                            <input type="email" name="Email" value={user.Email} placeholder='Enter your Email' required autoComplete='off' onChange={data} />
                            <input type="text" name="Subject" value={user.Subject} placeholder='Enter Your Subject' required autoComplete='off' onChange={data} />
                            <textarea name="Message" value={user.Message} placeholder='Your Message' required autoComplete='off' onChange={data} />
                            <button type='submit'>Send</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact