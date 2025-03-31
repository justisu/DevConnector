import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading}, logout}) => {
  useEffect(() => {
    document.title = "Dev Connector Demo";
  }, []);
  const authLink = (
    <ul>
       <li>
        <Link to="/">
          <i className='fas fa-user'>{' '}
            <span className="hide-sm">Home</span>
          </i>
        </Link>
      </li>

      <li>
        <Link to="/dev/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/dev/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/dev/posts">Posts</Link>
      </li>      
      <li>
        <a onClick={logout} href="#!">
          <i className='fas fa-sign-out-alt'>{' '}
            <span className="hide-sm">Logout</span>
          </i>
        </a>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul>
      <li>
        <Link to="/">
          <i className='fas fa-user'>{' '}
            <span className="hide-sm">Home</span>
          </i>
        </Link>
      </li>
      <li>
        <Link to="/dev/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/dev/register">Register</Link>
      </li>
      <li><Link to="/dev/login">Login</Link></li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to='/dev'> DevConnector</Link>
      </h1>
      { !loading && (<Fragment> { isAuthenticated ? authLink : guestLinks } </Fragment>) }
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);