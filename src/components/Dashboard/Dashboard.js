import React from 'react';
import Tiles from './Tiles';
import moment from 'moment'
import RecentEvents from './RecentEvents';
import IncidentSearch from './IncidentSearch';

class  Dashboard extends React.Component {
  constructor(props) {
    super(props)

    var currentDate = moment().format('MMMM D, YYYY')

    this.state = {
      currentDate: currentDate
    }
  }
  
  render() {
    return (
      <div className="column is-9">
          <section className="hero is-info welcome is-small">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Summary Report
                </h1>
                <h2 className="subtitle">
                  { this.state.currentDate }
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
}

export default Dashboard;