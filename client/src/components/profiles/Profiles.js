import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } } ) => {

  useEffect(() => {
    getProfiles();
  }, [getProfiles])
  
  return loading ? 
    <Spinner />
    : (
      <Fragment>
        <h1 className="large text-primary-app">Developers</h1>
        <p className="lead-app">
          <i className="fab fa-connectdevelop"> Browse and connect with developers</i>
        </p>
        <div className="profiles">
          {
            profiles.length > 0 ? (
              profiles.map((profile) => <ProfileItem key={profile._id} profile={profile} />)
            ) : <h4>No profiles found...</h4>
          }
        </div>
      </Fragment>
    )
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getProfiles, })(Profiles)