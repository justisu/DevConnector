import React from 'react'
import { Link } from 'react-router';

export const DashboardActions = () => {
  return (
    <div class="dash-buttons">
      <Link to="/dev/edit-profile" class="btn btn-light"
        ><i class="fas fa-user-circle text-primary-app"></i> Edit Profile</Link>
      <Link to="/dev/add-experience" class="btn btn-light"
        ><i class="fab fa-black-tie text-primary-app"></i> Add Experience</Link>
      <Link to="/dev/add-education" class="btn btn-light"
        ><i class="fas fa-graduation-cap text-primary-app"></i> Add Education</Link>
    </div>
  )
}
