import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

export const withRouter = (Component) =>{
  const Wrapper = (props) =>{
      const navigate = useNavigate();
      return <Component navigate={navigate} {...props}/>
  } 
  return Wrapper;
}

const AddExperience = ({ addExperience, navigate }) => {
  const initialState = {
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
}

  const [formData, setFormData] = useState(initialState);

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, navigate);
  };
  return (
    <Fragment>
      <h1 class="large text-primary-app">
       Add An Experience
      </h1>
      <p class="lead-app">
        <i class="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={e => onSubmit(e)}>
        <div class="form-group">
          <input type="text" placeholder="* Job Title" name="title" required onChange={onChange} value={title}/>
        </div>
        <div class="form-group">
          <input type="text" placeholder="* Company" name="company" required onChange={e => onChange(e)} value={company} />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Location" name="location" onChange={e => onChange(e)} value={location} />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" onChange={e => onChange(e)} value={from} />
        </div>
         <div class="form-group">
          <p><input type="checkbox" name="current" checked={current} onChange={e => {
            setFormData({
              ...formData,
              current: !current,
            });
            toggleDisabled(!toDateDisabled);
          }} value={current} /> {' '} Current Job</p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" disabled={toDateDisabled ? 'disabled' : ''} onChange={e => onChange(e)} value={to} />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            onChange={e => onChange(e)}
            value={description}
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary-app my-1" />
        <Link to="/dev/dashboard" class="btn btn-light my-1">Go Back</Link>
      </form>
    </Fragment>
  )
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
}

export default connect(null, { addExperience })(withRouter(AddExperience));