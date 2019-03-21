import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import SideNav from './SideNav/SideNav';
import MainContent from './MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
          <div className="columns">
            <SideNav />
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;