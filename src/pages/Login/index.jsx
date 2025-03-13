import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/imgs/login-logo.svg";
import "../../components/Header/header.css";
import { login } from '../../Redux/slices/authSlice';
import "./unified.css";
export default function Login() {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
    
      const isFormValid = formData?.username.trim() !== "" && formData.password.trim() !== "";
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
      
    dispatch(login(formData)); // Dispatch login action
    navigate("/");
      };
  return (
    <div className='container_login'>
    <div className="unifi-container">
        
        <div className="unifi-row">
            <div className="unifi-col">
                <div className="unifi-center">
                    
                    <div className="logo">
                        <img src={Logo} alt="Structured Settlement"/>
                    </div>

                    <div className="unifi-title">
                        <h1>Login Heading</h1>
                    </div>
                                       
                    <form className="unifi-form" onSubmit={handleSubmit}>
      <div className="unifi-input-group">
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="unifi-input-group">
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="unifi-btn" disabled={!isFormValid}>
        Sign In
      </button>

      <div className="unifi-options">
        <label>
          <input type="checkbox" /> Remember Me
        </label>
        <a href="#">Forgot Password?</a>
      </div>

      <div className="unifi-sign-up">
        <p>Don’t have an account? <a href="#">Signup</a></p>
      </div>
    </form>

                </div>
            </div>
        </div>

    </div>
    </div>
  )
}
