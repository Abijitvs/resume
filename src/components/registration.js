import React from 'react'
import './signlog.css'

function Registration() {
  return (
<div>

<section className='registration'>
<div class="row row-cols-4 row-cols-md-2 g-8">
<div class="col">
<div class="cardz">
<div><h2 class="card-title">registration form</h2></div><br/>
<br/>

  <form>
  <div className='input-box'>
  <input type="text" id="fullName" placeholder="fullName" required/>
</div>
<br/>

<div className='input-box'>
  <input type="email" id="email" placeholder="email" required/>
</div><br/>

<div className='input-box'>
  <input type="tel" id="phone" placeholder="phone" required/>
</div>
<br/>
<div className='input-box'>
  <input type="date" id="dob" placeholder="dob" required/>
</div><br/>

<div className='input-box'>
  <input type="text" id="address" placeholder="address" required/>
</div><br/>

<div className='input-box'>
  <input type="text" id="city" placeholder="city" required/>
</div><br/>

<div className='input-box'>
  <input type="text" id="state" placeholder="state" required/>
</div><br/>

<div className='input-box'>
  <input type="text" id="postalCode" placeholder="postalCode" required/>
</div><br/>

<div className='input-box'>
  <input type="text" id="country" placeholder="country" require/>
</div><br/>

<div className='input-box'>
  <input type="text" id="education" placeholder="education" required/>
</div><br/>

<div className='input-box'>
  <input type="text" id="institution" placeholder="institution" required/>
</div><br/>

<div className='input-box'>
  <input type="text" id="graduationYear" placeholder="graduationYear" required/>
</div>
</form>


</div>
</div>
<div class="col">
<div class="cardz">

<br/><br/>
<form>
<div className='input-box'>
    <input type="text" id="jobTitle" placeholder="jobTitle" required/>
</div><br/>

<div className='input-box'>
    <input type="text" id="companyName" placeholder="companyName" required/>
</div><br/>

<div className='input-box'>
    <input type="text" id="employmentDuration" placeholder="employmentDuration" required/>
</div><br/>

<div className='input-box'>
    <textarea id="responsibilities" placeholder="responsibilities" rows="4" required></textarea>
</div><br/>

<div className='input-box'>
    <input type="text" id="skills" placeholder="skills" required/>
</div><br/>

<div className='input-box'>
    <input type="text" id="certifications" placeholder="certifications"/>
</div><br/>

<div className='input-box'>
    <input type="text" id="referenceName" placeholder="referenceName" required/>
</div><br/>

<div className='input-box'>
    <input type="text" id="referenceContact" placeholder="referenceContact" required/>
</div><br/>

<div className='input-box'>
    <input type="file" id="coverLetter" placeholder="coverLetter"/>
</div><br/>

<div className='input-box'>
    <input type="file" id="resume" placeholder="resume" required/>
</div><br/>

<div className="submit-btn input-box">
    <input type="submit" className='button' value="Submit"/>
</div>
    </form>


</div>
</div>
</div>
</section>
  
    
</div>

  )
}

export default Registration


