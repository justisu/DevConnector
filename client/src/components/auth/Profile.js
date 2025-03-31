import React from 'react';

import * as body from './Profile.css';

const styles = {
  container: {
    background: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh',
  },
  slider: {
    ':before': {
      background: 'linear-gradient(0deg, #525252 0% #373737 100%);',
      width: '10em',
      height: '10em',
      borderRadius: '50%',
      boxShadow: ['0px -20px 20px #757575', '0px 20px 35px #111111', 'inset 0px 5 px 6px #979797', 'inset 0px -5 px 6px #242424'],
      '&.knob': {
        width: '10em',
        height: '10em',
        position: 'relative',
      },
    },
  },
  knob: {
    content: '',
    position: 'absolute',
    borderRadius: '50%',
    ':before': {
      content: '',
      position: 'absolute',
      borderRadius: '50%',
      top: '15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '10em',
      height: '10em',
      background: '#fff',
      boxShadow: '0px 0px 10px #349beb',
    },
    ':after': {
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%, -50%)',
      border: '3 px soid #fff',
      width: '130%',
      height: '130%',
      boxShadow: ['0px 0px 10px #349beb', 'inset 0px 0px 10px #349beb']
    },
  }
}
console.log(styles.container);
const Profile = () =>
  <div style={body}>
    <div style={styles.knob} >dfdfdf</div>
  </div>

export default Profile



