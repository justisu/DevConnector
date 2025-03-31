import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    })
  } catch (error) {

    dispatch({
      type: PROFILE_ERROR,
      payload: { 
        msg: 'Failed to load profile', 
        status: error.response.status
      }
    });
    dispatch({
      type: PROFILE_ERROR,
      payload: { 
        msg: error.response, 
        status: error.response.status
      }
    })
  }
}

// Get all profiles
export const getProfiles = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile');
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { 
        msg: 'Failed to load profiles', 
        status: error.response.status
      }
    })
  }
}

// Get profile by Id
export const getProfileById = (userId) => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { 
        msg: 'Failed to load profile', 
        status: error.response.status
      }
    })
  }
}

// Get all profiles
export const getGithubRepos = (username) => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/github/${username}`);

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { 
        msg: 'Failed to load profile', 
        status: error.response.status
      }
    })
  }
}

// Create or Update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('/api/profile', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if(!edit) {
      history.navigate("/dev/dashboard");
    }
  } catch (error) {
    const errors = error.response.data.errors;

    if(errors) {
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: 'Profile could not be saved',
        status: error.response.status,
      }
    }); 
  }
}

// Add Experience
export const addExperience = (formData, navigate) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.put('/api/profile/experience', formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert('Experience Added', 'success'));

    navigate("/dev/dashboard");
  } catch (error) {
    const errors = error.response.data.errors;

    if(errors) {
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: 'Profile could not be saved',
        status: error.response.status,
      }
    }); 
  }  
}

// Add Education
export const addEducation = (formData, navigate) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.put('/api/profile/education', formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert('Education Added', 'success'));
    
    navigate("/dev/dashboard");

  } catch (error) {
    const errors = error.response.data.errors;

    if(errors) {
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: 'Profile could not be saved',
        status: error.response.status,
      }
    }); 
  }  
}

// Delete Experience
export const deleteExperience = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert('Experience Removed', 'success'));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: 'Experience could not be deleted',
        status: error.response.status,
      }
    });
  }
}

// Delete Education 
export const deleteEducation = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert('Education Removed', 'success'));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: 'Education could not be deleted',
        status: error.response.status,
      }
    });
  }
}

// Delete Account & Profile
export const deleteAccount = () => async dispatch => {
  if(window.confirm('Are you sure? This cannot be undone')) {
    try {
      await axios.delete('/api/profile');

      dispatch({ 
        type: CLEAR_PROFILE,
      });
  
      dispatch({
        type: ACCOUNT_DELETED,
      });
  
      dispatch(setAlert('YOUR account has been permanantly deleted'));
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: 'Your account could not be deleted',
          status: error.response.status,
        }
      });
    }
  }  
}


