import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
const success =() => {prompt(`Welcome Successfully registered`)}
const Signup = () => {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [name,setName]=useState('');
  const [email,setemail]=useState('');
  const [mobileNumber,setMobileNumber]=useState('')

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(userName);
  }
  return (
    <div className='signup'>
      <div className='formDiv'>
    <form  onSubmit={handleSubmit} >
      <div className="name">
 <label htmlFor="name">  Full Name</label>
      <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" id='name' />
      </div>
     
     <div className="userName">
      <label htmlFor="userName">User Name </label>
      <input value={userName} onChange={(e)=>setUserName(e.target.value)}  type="text" />
     </div>
     <div className="email">
      <label htmlFor=" email">Email</label>
      <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" id="email" />
      </div>
      <div className="mobileNumber">
      <label htmlFor="mobileNumber">Mobile Number </label>
      <input value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}  type="number"  id="number" />
      </div>
       <div className="password">
      <label htmlFor="password">Set Password</label>
   <input  type="password"  id="password" value={password} onChange={handlePasswordChange} />
   </div>
   <div className="confirm-password">
      <label htmlFor=" confirm-assword">Confirm Password </label>
      <input   type='password'  id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
      </div>
<div className="bottom">
    <p>Already registered</p>
<Link to='/Login'>Login</Link>
<button className='btn' onClick={success}> Submit</button>

</div>

    </form>
    </div>
    </div>
  )
}

export default Signup
