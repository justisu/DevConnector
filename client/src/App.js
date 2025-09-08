import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import axios from 'axios';
import Home from './components/home/index';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Alert from './components/layouts/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import JsonFormatter from './components/format/JsonFormatter';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const url = `https://mern-devconnector.onrender.com/`;
const interval = 120000;

function reloadWebsite() {
  axios.get(url)
    .then(response => {
      console.info(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}
setInterval(reloadWebsite, interval);  

const DevLayout = () => (
  <>
    <Navbar />
    <Alert />
    <section className="container">
      <Outlet />
    </section>
  </>
);

const LandingLayout = () => (
  <>
    <Navbar />
    <Alert />
    <Outlet />
  </>
);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<LandingLayout />} >
            <Route exact path="/dev" element={ <Landing />} />
          </Route>
          <Route element={<DevLayout />} >
            <Route path="/dev/register" element={ <Register /> } />
            <Route path="/dev/login" element={ <Login /> } />
            <Route path="/dev/profiles" element={ <Profiles /> } />
            
            <Route path="/dev/dashboard" element={ <Dashboard /> } />
            <Route path="/dev/profile/:id" element={ <Profile /> } />
            <Route exact path="/dev/create-profile" element={ <CreateProfile /> } />
            <Route exact path="/dev/edit-profile" element={ <EditProfile /> } />
            <Route exact path="/dev/add-experience" element={ <AddExperience /> } />
            <Route exact path="/dev/add-education" element={ <AddEducation /> } />
            <Route exact path="/dev/posts" element={ <Posts /> } />
            <Route exact path="/dev/posts/:id" element={ <Post /> } />
            <Route exact path="/dev/formatter" element={ <JsonFormatter /> } />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
