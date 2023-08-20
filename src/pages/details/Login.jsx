


import React, { useState } from 'react';
import './login.css'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="mail">
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="pass">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className='loginbtn' type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
