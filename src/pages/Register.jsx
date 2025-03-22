import React from 'react'
import{Link}from 'react-router-dom';

const Register = () => {
  return (
    <div className="container">
          <h2>Register</h2>
          <input type="text" placeholder="Username"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password" />
          <button>Register</button>
          <p>New User?<Link to="/login">Login</Link></p>
        </div>
  )
}

export default Register
