import React, { useState } from 'react'
import './signlog.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signup() {
const[Data,setData]=useState({
  fullname:"",
  password:"",
  email:""
})
const navigate = useNavigate()

const handleInputChange =(e)=>{
  setData({...Data,[e.target.id]:e.target.value})
}
const handleSubmit=async(e)=>{
  e.preventDefault();
  const data={
    "fullname":Data.fullname,
    "email":Data.email,
    "password":Data.password
  }
  try{
    let response = await axios.post("http://localhost:5000/user/signup",data );
    console.log('response',response.data)
    navigate("/login")
    }catch(error){console.log('erroe posting data',error)
    
    }
}
  return (

    <div className='login'>
    <div className='wrapper'>
    <form onSubmit={handleSubmit} action=''>
    <h1>Sign up</h1>
    <div className='input-box'>
    <input type='text' placeholder='fullname' id="fullname" required onChange={handleInputChange}/>
    </div>
    <div className='input-box'>
    <input type='email' placeholder='email' id="email" required onChange={handleInputChange}/>
    </div>
    <div className='input-box'>
    <input type='password' id="password" placeholder='password(6 or more characters)' required onChange={handleInputChange}/>
    </div>
    <button type='submit'>sign up</button>
    </form>
    
    </div>
    
    
    </div>
 
  )
}

export default Signup