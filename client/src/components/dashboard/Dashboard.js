import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layouts/Spinner';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { DashboardActions } from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({ auth: { user, isAuthenticated, loading: authLoading }, profile: { profile, loading }, getCurrentProfile, deleteAccount }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);


  if(!isAuthenticated && !authLoading) {
    return <Navigate to='/dev/login' />
  }
  return (
    loading && profile === null 
    ? <Spinner /> 
    : <Fragment>
        <h1 className='large text-primary-app'>Dashboard</h1>
        <p className='lead-app'>
          <i className='fas fa-user'></i>
          Welcome { user && user.name }
        </p>
        {
          profile !== null 
            ? <Fragment>
                <DashboardActions />
                <Experience experience={profile.experience} />
                <Education education={profile.education} />

                <div>
                  <button className='btn btn-danger-app' onClick={() => deleteAccount()}>
                    <i className='fas fa-user-minus'></i> Delete My Account</button>
                </div>
              </Fragment>
            : <Fragment>
                <p>You have not yet setup a Profile. Please add some information
                  <Link to="/dev/create-profile" className='btn btn-primary-app my-1'>Create Profile</Link>
                </p>
              </Fragment>
        }
      </Fragment>
  )
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);