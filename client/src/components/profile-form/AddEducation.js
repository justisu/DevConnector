import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

export const withRouter = (Component) =>{
  const Wrapper = (props) =>{
      const navigate = useNavigate();
      return <Component navigate={navigate} {...props}/>
  } 
  return Wrapper;
}

const AddEducation = ({ addEducation, navigate }) => {
  const initialState = {
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
}

  const [formData, setFormData] = useState(initialState);

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, navigate)
  };
  return (
    <Fragment>
      <h1 class="large text-primary-app">
       Add Your Education
      </h1>
      <p class="lead-app">
        <i class="fas fa-code-branch"></i> Add any school or bootcamps that you have had in the past
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={e => onSubmit(e)}>
        <div class="form-group">
          <input type="text" placeholder="* School or Bootcamp" name="school" required onChange={onChange} value={school}/>
        </div>
        <div class="form-group">
          <input type="text" placeholder="* Degree or Certifcate" name="degree" required onChange={e => onChange(e)} value={degree} />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Filed Of Study" name="fieldofstudy" onChange={e => onChange(e)} value={fieldofstudy} />
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
          }} value={current} /> {' '} Current School</p>
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
            placeholder="Program Description"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(withRouter(AddEducation));