import axios from 'axios';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/imgs/login-logo.svg';
import '../../components/Header/header.css';
import { login } from '../../Redux/slices/authSlice';
import './unified.css';
import { setLoading } from '../../Redux/slices/loadingSlice';
export default function Login() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSSN, setShowSSN] = useState(false);
  const [formData, setFormData] = useState({
    lastname: '',
    dob: '',
    ssn: '',
  });

  const isFormValid =
    formData?.username?.trim() !== '' && formData.dob.trim() !== '' && formData.ssn.trim() !== '';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const data = {
      lastName: formData?.lastname,
      dob: formData?.dob,
      fourDigitSSN: formData?.ssn,
    };
    axios
      .post('http://localhost:3000/api/auth', data, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true, // If using cookies
      })
      .then((response) => {
        if (response?.data?.status) {
          dispatch(login(response?.data));
          navigate('/');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container_login">
      <div className="unifi-container">
        <div className="unifi-row">
          <div className="unifi-col">
            <div className="unifi-center">
              <div className="logo">
                <img src={Logo} alt="Structured Settlement" />
              </div>

              <div className="unifi-title">
                <h1>Login Heading</h1>
              </div>

              <form className="unifi-form" onSubmit={handleSubmit}>
                <div className="unifi-input-group">
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Lastname"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    style={{ fontSize: '13px' }}
                  />
                </div>
                <div className="unifi-input-container">
                  <div className="unifi-input-group">
                    <input
                      type="text"
                      id="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      placeholder="Date of Birth (MM/YYYY)"
                      required
                      style={{ fontSize: '13px' }}
                    />
                  </div>
                  <div className="unifi-input-group">
                    <input
                      type={showSSN ? 'text' : 'password'}
                      id="ssn"
                      placeholder="Last Four Digits of SSN"
                      required
                      value={formData.ssn}
                      onChange={handleChange}
                      style={{ fontSize: '12px' }}
                    />
                    <span style={styles.eyeIcon} onClick={() => setShowSSN(!showSSN)}>
                      {showSSN ? (
                        <FaEyeSlash size={16} color="gray" />
                      ) : (
                        <FaEye size={16} color="gray" />
                      )}
                    </span>
                  </div>
                </div>

                <a href="#" style={styles.link}>
                  Log in with my MCM Account Number instead
                </a>

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
                  <p>
                    Don’t have an account? <a href="#">Signup</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  inputContainer: {
    position: 'relative',
    flex: '1',
  },
  eyeIcon: {
    position: 'absolute',
    right: '10px',
    top: '55%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '16px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'underline',
    fontSize: '14px',
    marginTop: '10px',
    marginBottom: '0.7rem',
  },
};
