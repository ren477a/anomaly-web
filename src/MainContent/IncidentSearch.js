import React from 'react';
import {Link} from 'react-router-dom';

function IncidentSearch() {
  return (
    <div className="column is-6">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Incident Search</p>
          <Link className="card-header-icon" to="#">
          <span className="icon">
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </Link>
        </header>

        <div className="card-content">
          <div className="content">
            <div className="control has-icons-left has-icons-right">
              <input className="input is-large" type="text" placeholder="Enter Incident Number " />
              <span className="icon is-medium is-left"><i className="fa fa-search"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default IncidentSearch;
