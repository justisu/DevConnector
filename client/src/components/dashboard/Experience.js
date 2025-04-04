import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._d}>
      <td>{exp.company}</td>
      <td class="hide-sm">{exp.title}</td>
      <td class="hide-sm">
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - 
        {
          exp.to === null 
            ? (' Now') 
            : (<Moment format='YYYY/MM/DD'>{exp.to}</Moment> )
        }
      </td>
      <td><button onClick={() => deleteExperience(exp._id)} className='btn btn-danger-app'>Delete</button></td>
    </tr>
    )
  )

  return (
    <Fragment>
      <h2>Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th className="hide-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {experiences}
        </tbody>
      </table>
    </Fragment>
  )
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
}

export default connect(null, { deleteExperience } )(Experience);