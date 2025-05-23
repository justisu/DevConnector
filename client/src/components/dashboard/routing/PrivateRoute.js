import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ element: Component, auth: { isAuthenticated, loading }, ...rest }) => (
    !isAuthenticated && !loading ? (<Navigate to='/dev/login' />) : (<Component />)
)

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
})
export default connect(mapStateToProps)(PrivateRoute);