import React, { useState } from 'react'
import './signlog.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  
  const[Data,setData]=useState({
    email:"",
    password:"",
  })
  const Navigate = useNavigate()
  
  const handleInputChange =(e)=>{
    setData({...Data,[e.target.id]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const data={
      "email":Data.email,
      "password":Data.password
    }
    try{
      let response = await axios.post("http://localhost:5000/user/login",data );
      console.log('response',response.data)
       Navigate("/resumepage")
      }catch(error){console.log('erroe posting data',error)
      
      }
  }
  return (
    <div className='login'>
    <div className='wrapper'>
    <form onSubmit={handleSubmit} action=''>
    <h1>login</h1>
    <div className='input-box'>
    <input type='email' placeholder='email' id='email' required onChange={handleInputChange}/>
    </div>
    <div className='input-box'>
    <input type='password' placeholder='password' id='password' required onChange={handleInputChange}/>
    </div>
    <div className='remember-forgot'>
    <label><input type='checkbox'/>Remember me</label>
    <a href='#'>forgot password ?</a>
    </div>
    <button  type='submit' ><a>login</a></button>
    </form>
    <div className='register-link'>
    <p style={{textAlign:"center"}}>Don't have an Account ? <a href='#' onClick={()=>Navigate("/signin")}> signin</a></p>
    </div>
    </div>
    
    
    </div>
  )
}

export default Login

