import React from 'react'
import './signlog.css'
import register from '../images/registration.jpeg'
import templates from '../images/templates.jpeg'
import { useNavigate } from 'react-router-dom'

function Resumepage() {
  const Navigate=useNavigate()
  return (
    <div>
    <div className='resumecard' >
    <div class="row row-cols-4 row-cols-md-2 g-8">
  <div class="col">
    <div class="ccard1">
    <div><h2 class="card-title">registration</h2></div><br/>
      <img className='reimage' src={register} style={{width:"350px",height:"350px",borderRadius:"24px"}} class="card-img-top onclick" onClick={()=>Navigate("/registration")} alt="..."/>
      <div class="card-body">
        <p class="card-text" style={{overflow:"hidden"}}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="ccard2">
    <div><h2 class="card-title">templates</h2></div><br/>
      <img  src={templates} style={{width:"350px",height:"350px",borderRadius:"24px"}} onClick={()=>Navigate("/templatespage")}  class="card-img-top onclick " alt="..."/>
      <div class="card-body">
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  </div>
  </div>
    </div>

  )
}

export default Resumepage

