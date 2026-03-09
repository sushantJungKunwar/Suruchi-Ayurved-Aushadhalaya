import React, { useState } from 'react'
import './Contact.css'
import Message_icon from '../../assests/message-icon.png'
import Location_icon from '../../assests/location-icon.png'
import Call_icon from '../../assests/call-icon.png'
import submit_icon from '../../assests/Next-buttom.png'

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "b211c050-2cd5-44ee-9767-f03023672d5f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>Feel free to reach out through our contact form or
            find out our contact detail infromation from below.
        </p>
        <ul>
            <li><img src={Message_icon} alt="" />suruchisuppliers56@gmail.com</li>
            <li><img src={Call_icon} alt="" />+977 9847131528, 9847299660</li>
            <li><img src={Location_icon} alt="" />Bardaghat-4, Nawalparasi</li>
        </ul>
      </div>
      <div className="conatct-col">
        <form onSubmit={onSubmit} >
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone number</label>
            <input type='tel' name='number' placeholder='Enter your phone number' required/>
            <label>Write your message here</label>
            <textarea name='message' placeholder='Write your message' rows={6} required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={submit_icon} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
