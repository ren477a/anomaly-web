import React from 'react';
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom';



class SideNav extends React.Component {
  activeClass = "is-active";
  render() {
    return (
      <div className="column is-3 ">
          <aside className="menu is-hidden-mobile">
            <p className="menu-label">General</p>
            <ul className="menu-list">
              <li><NavLink to="/dashboard" activeClassName={this.activeClass}>Dashboard</NavLink></li>
              <li><NavLink to="/livefeed" activeClassName={this.activeClass}>Live Feed</NavLink></li>

            </ul>
            <p className="menu-label">Administration</p>
            <ul className="menu-list">
              <li>
                <NavLink to="/member">Manage Your Team</NavLink>
                <ul>
                  <li><NavLink to="/member" activeClassName={this.activeClass} >Member List</NavLink></li>
                  <li><NavLink to="#">Add a New Member</NavLink></li>
                </ul>
              </li>
            </ul>
            <p className="menu-label">Incidents</p>
            <ul className="menu-list">
                <li><NavLink to="/incident" activeClassName={this.activeClass}>Incident List</NavLink></li>
            </ul>
            <p className="menu-label">Reports</p>
            <ul className="menu-list">
                <li><NavLink to="/report" activeClassName={this.activeClass}>Report List</NavLink></li>
            </ul>
            <p className="menu-label">Settings</p>
            <ul className="menu-list">
              <li><NavLink to="#">Server Settings</NavLink></li>
              <li><NavLink to="#">User Settings</NavLink></li>
            </ul>
          </aside>
        </div>
    )
  }
}

export default withRouter(SideNav);