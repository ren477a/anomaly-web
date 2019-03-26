import React from 'react';
import {Link} from 'react-router-dom';

import IncidentTable from './IncidentTable';

class Incident extends React.Component {
  render() {
    return (
      <div className="column is-9">
        <section className="hero is-info welcome is-small">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Incident List
              </h1>
              <h2 className="subtitle">
                Incident List and Detail
              </h2>
            </div>
          </div>
        </section>

        <div className="columns" style={{paddingTop: "20px"}}>
          <IncidentTable />
        </div>

        
        
      </div>
    )
  }
}

export default Incident;