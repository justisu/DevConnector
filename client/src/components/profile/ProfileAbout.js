import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <div class="profile-about bg-light p-2">
      { bio && (
        <Fragment>
          <h2 class="text-primary-app">{name.split(' ')[0]}'s Bio</h2>
          <p>{bio}</p>
        </Fragment>
      )}
      
      <div class="line"></div>
      <h2 class="text-primary-app">Skill Set</h2>
      <div class="skills">
        {skills.map((skill, index) => (
          <div class="p-1"><i class="fa fa-check"></i> {skill}</div>
        ))}
      </div>
    </div>
  )
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileAbout