import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='loginContain'>
       <form >
        <div>
          <h3>ID</h3>
        <input type="text" placeholder="id"  /><br />
        </div>
        <div>
        <h3>Password</h3>
        <input type="password" placeholder="password"  /><br />
        </div>
        <br />
        <br />
        <button className='login-btn' type="submit" >Login</button>
        <br />
        <br />
        <Link to="/signup" className="sign-btn">Move to SignUp!</Link>
     
      </form>
        </div>
  )
}

export default Login