import React from 'react'
import{Link}from 'react-router-dom';

const Login = () => {
  return (
    
        <div className="container">
          <h2>Login</h2>
          <form>
          <input type="email" placeholder="Email" className="form-control mb-2" />
          <input type="password" placeholder="Password" className="form-control mb-3" />
          <button className="btn btn-primary w-100">Login</button>
          <p>New User?<Link to="/register">Register</Link></p>
          </form>
        </div>
  )
}

export default Login
