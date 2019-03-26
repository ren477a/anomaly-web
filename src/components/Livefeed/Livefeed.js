import React from 'react';

import Camerafeed from './Camerafeed';
import FeedAlerts from './FeedAlerts';
import LiveEvents from './LiveEvents';

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
            <div className="columns">
              <div className="column is-full">
                <FeedAlerts />
              </div>
            </div>
            <div className="columns">
              <div className="column is-full">
                <LiveEvents />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Livefeed;