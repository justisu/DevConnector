import React, { Fragment } from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated) {
    return <Navigate to="/dev/dashboard" />
  }
  return (
    <Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead-app">
              Create a developer profile/portfolio, share posts and get help from
              other developers
            </p>
            <div className="buttons">
              <Link to="/dev/register" className="btn btn-primary-app">Sign Up</Link>
              <Link to="/dev/login" className="btn btn-light">Login</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
      <Outlet />
      </section>
    </Fragment>
  )
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Landing);