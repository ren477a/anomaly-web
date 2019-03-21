import React from 'react';
import {Link} from 'react-router-dom';

import EventItem from './EventItem';

class RecentEvents extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
      error: null
    };
  }

  handleAddItem(item) {
    let events = this.state.events;
    console.log(item)
    events.splice(0, 0, item);
    

    this.setState({
     events: events.slice(0, 4)
    });
  }

  renderEvents(){
    return this.state.events.map(e => {
        return <EventItem name={e[0]} time={e[1]} location={e[2]['name']} key={e[1]}/>
    })
  }

  componentDidMount() {
    this.ws = new WebSocket('ws://thawing-ravine-52538.herokuapp.com/ws/notifs/');
    this.ws.onmessage = e => this.handleAddItem(Object.values(JSON.parse(e.data)));
    this.ws.onerror = e => this.setState({ error: 'WebSocket error' });
    this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` });
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    return (
      <div className="column is-6">
        <h1> { this.props.events }</h1>
        <div className="card events-card">
          <header className="card-header">
            <p className="card-header-title">Recent Events</p>
            <Link to="#" className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </ Link>
          </header>
          <div className="card-table">
            <div className="content">
              <table className="table is-fullwidth is-striped">
                <tbody>
                  { this.renderEvents() }
                </tbody>
              </table>
            </div>
          </div>
          <footer className="card-footer">
            <Link to="#" className="card-footer-item">View All</ Link>
          </footer>
        </div>
      </div>
    )
  }
}
  

export default RecentEvents;
