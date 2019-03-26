import React, { Component } from 'react';
import { Route } from "react-router-dom";


import NavBar from './components/NavBar/NavBar';
import SideNav from './components/SideNav/SideNav';
import Member from './components/Member/Member';
import Dashboard from './components/Dashboard/Dashboard';
import Incident from './components/Incident List/Incident';
import Livefeed from './components/Livefeed/Livefeed';
import Report from './components/ReportList/ReportList';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import requireAuth from './utils/requireAuth';
import FlashMessagesList from './components/FlashMessage/FlashMessageList';
import NewMember from './components/NewMember/NewMember';


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
      <div>
        {/* <FlashMessagesList /> */}

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <DefaultLayout exact path="/" component={requireAuth(Dashboard)} /> 
        <DefaultLayout path="/dashboard" component={requireAuth(Dashboard)} />
        <DefaultLayout path="/member" component={requireAuth(Member)} />
        <DefaultLayout path="/addmember" component={requireAuth(NewMember)} />
        <DefaultLayout path="/livefeed" component={requireAuth(Livefeed)} />
        <DefaultLayout path="/incident" component={requireAuth(Incident)} />
        <DefaultLayout path="/report" component={requireAuth(Report)} />

      </div>
    );
  }
}

export default App;