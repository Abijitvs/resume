import React from 'react'
import './home.css'
import facebook from '../images/facebook.png'
import insta from '../images/insta.png'
import whatsapp from '../images/whatsapp.png'
import youtube from '../images/youtube.png'
import x from '../images/x.png'

function Contact() {
  return (
    <div>
    <section className='home'>
    <div >
    <h1>contact</h1>
    <div className='logos'>
    <div class="row row-cols-1 row-cols-md-5 g-5" >
  <div class="col">
    <div class="click" style={{width:'10rem',height:'20rem'}}>
      <img src={facebook} style={{borderRadius:"25px"}} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Facebook</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class=" click" style={{width:'10rem',height:'20rem'}}>
      <img src={insta} style={{borderRadius:"25px"}} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Instagram</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="click" style={{width:'10rem',height:'20rem'}}>
      <img src={whatsapp} style={{borderRadius:"25px"}} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">WhatsApp</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="click" style={{width:'10rem',height:'20rem'}}>
      <img src={youtube} style={{borderRadius:"25px"}} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Youtube</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="click" style={{width:'10rem',height:'20rem'}}>
      <img src={x} style={{borderRadius:"25px"}} class="card-img-top" alt="..."/>
      <div class="card-body">

        <h5 class="card-title">X</h5>
      </div>
    </div>
  </div>

  
</div>
    
</div>
    </div>
    </section>
    
    
    
    </div>
  )
}

export default Contact