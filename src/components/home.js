import React from 'react';
import './home.css'
import { Navigate, useNavigate } from 'react-router-dom';


function Home() {
    const Navigate=useNavigate();
  return (
    <div>
    <section className='home'>
    <div className='home-content'>
    <h1>Craft Your Resume</h1>
    <p>resume builder is a user-friendly app designed to help you to create professional
    resumes effortlessiy.with customizable templates,step-by-step guidance ,and industry-
    specific tips ,you can craft a sandout resume in a minuties , the app feature intuitive
    input fields for contact information ,work experience ,education ,skill ,and more ,ensuring
    a polished and organized final product whether your a recent graduate or an experienced professional
    ,resume builder streamlines the resume creation process ,making it easy to showcase your qualification
    and land your dream job</p>
    <h3>For More</h3>
    <div className='btn-box'>
        <a href='#' onClick={()=>Navigate("/login")}>log in</a>
        <a href='#' onClick={()=>Navigate("/signin")}>sign in</a>
    </div>

    </div>
    </section>
    
    </div>
  )
}

export default Home