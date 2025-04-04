import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => 
  alerts && 
  alerts.length > 0 && 
  alerts.map(alert => (
  <div key={alert.id} className={`alert alert-${alert.alertType}`} style={{ marginTop: '4%', marginLeft: '15%', marginRight: '10%' }} >
    {alert.msg}
  </div>
  ))

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alert);