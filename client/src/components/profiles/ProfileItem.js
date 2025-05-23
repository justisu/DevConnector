import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const ProfileItem = ({profile}) => {
  const { user: { _id: identifier, name, avatar }, status, company, location, skills } = profile;

  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img"/>
      <div>
        <h2>{name}</h2>
        <p>{status} {company ? <span> at {company} </span> : null}</p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/dev/profile/${identifier}`} className='btn btn-primary-app'>View Profile</Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary-app'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileItem