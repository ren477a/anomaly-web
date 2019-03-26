import React from 'react';
import {Link} from 'react-router-dom';

import IncidentTable from './FeedAlerts';
import Camerafeed from './Camerafeed';
import FeedAlerts from './FeedAlerts';

class Livefeed extends React.Component {
  render() {
    return (
      <div className="column is-9">
        <section className="hero is-info welcome is-small">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Livefeed
              </h1>
              <h2 className="subtitle">
                Camera feed from the location
              </h2>
            </div>
          </div>
        </section>

        <div className="columns" style={{padding: "20px 0 0 0"}}>
          <div className="column has-text-centered">
            <Camerafeed />
          </div>
          <div className="column">
            <FeedAlerts />
          </div>
        </div>
      </div>
    )
  }
}

export default Livefeed;