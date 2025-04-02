import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../actions/auth';
import '../../App.css';

export const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password, } = formData;

  const onChange = e => setFormData({ 
    ...formData, 
    [e.target.name]: e.target.value
  });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  }

  // Redirect if logged in
  if(isAuthenticated) {
    return <Navigate to="/dev/dashboard" />
  }

  return (
    <>
      <h1 className="large text-primary-app">Sign In</h1>
      <p className="lead-app"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={(e) => onChange(e)} />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} 
            onChange={(e) => onChange(e)} 
          />

          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        
        <input type="submit" className="btn btn-primary-app" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/dev/register">Sign Up</Link>
      </p>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

export default connect(mapStateToProps, { login })(Login);