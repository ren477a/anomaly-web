import React from 'react';
import {Link} from 'react-router-dom';

function SideNav() {
  return (
    <div className="column is-3 ">
        <aside className="menu is-hidden-mobile">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li><Link to="#" className="is-active">Dashboard</Link></li>
          </ul>
          <p className="menu-label">Administration</p>
          <ul className="menu-list">
            <li>
              <Link to="#">Manage Your Team</Link>
              <ul>
                <li><Link to="#">Member List</Link></li>
                <li><Link to="#">Add a New Member</Link></li>
              </ul>
            </li>
          </ul>
          <p className="menu-label">Reports</p>
          <ul className="menu-list">
              <li><Link to="#">Report List</Link></li>
          </ul>
          <p className="menu-label">Settings</p>
          <ul className="menu-list">
            <li><Link to="#">Server Settings</Link></li>
            <li><Link to="#">User Settings</Link></li>
          </ul>
        </aside>
      </div>
  )
}

export default SideNav;