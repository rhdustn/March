import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  login  from './Login'; 

const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: '',
    pw: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    dispatch(login(formData));
    
  };

  return (
    <div className='loginContain'>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>ID</h3>
          <input  type="text" placeholder="id"name="id"value={formData.id}onChange={handleChange}/><br />
        </div>
        <div>
          <h3>Password</h3>
          <input type='password'placeholder="password"name="pw"value={formData.pw}onChange={handleChange}/><br />
        </div>
        <div>
          <h3>Nickname</h3>
          <input type="text"placeholder="Nickname"name="name"value={formData.name}onChange={handleChange}/><br />
        </div>
        <br />
        <br />
        <button className='login-btn' type="submit" >SignUp</button>
        <br />
        <Link to="/" className="sign-btn">Move to Login!</Link>
      </form>
    </div>
  )
}

export default SignUp;