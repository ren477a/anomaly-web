import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import NavBar from './components/NavBar/NavBar';
import SideNav from './components/SideNav/SideNav';
import Member from './components/Member/Member';
import Dashboard from './components/Dashboard/Dashboard';
import Incident from './components/Incident List/Incident';
import Livefeed from './components/Livefeed/Livefeed';
import Report from './components/ReportList/ReportList';
import Login from './components/Login/Login';


const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <NavBar />
        <div className="container">
          <div className="columns">
            <SideNav />
            <Component {...matchProps} />
          </div>
        </div>
        </div>
    )} />
  )
};


class App extends Component {
  render() {
    return (
      <Router>
        
        <Route exact path="/login" component={Login} />
    
        <DefaultLayout exact path="/" component={Dashboard} /> 
        <DefaultLayout path="/dashboard" component={Dashboard} />
        <DefaultLayout path="/member" component={Member} />
        <DefaultLayout path="/livefeed" component={Livefeed} />
        <DefaultLayout path="/incident" component={Incident} />
        <DefaultLayout path="/report" component={Report} />

      </Router>
    );
  }
}

export default App;