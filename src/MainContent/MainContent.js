import React from 'react';
import Tiles from './Tiles';
import RecentEvents from './RecentEvents';
import IncidentSearch from './IncidentSearch';

function MainContent() {
  return (
    <div className="column is-9">
        <section className="hero is-info welcome is-small">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Summary Report
              </h1>
              <h2 className="subtitle">
                January 31, 2019
              </h2>
            </div>
          </div>
        </section>

        <Tiles />

        <div className="columns">
            <RecentEvents />
            <IncidentSearch />
        </div>
      </div>
  )
}

export default MainContent;