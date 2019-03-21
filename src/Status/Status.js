import React from 'react';

class Status extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
      error: null
    }
  }

  componentDidMount() {
    this.ws = new WebSocket('ws://thawing-ravine-52538.herokuapp.com/ws/notifs/')
    this.ws.onmessage = e => this.setState({ message: e.data })
    this.ws.onerror = e => this.setState({ error: 'WebSocket error' })
    this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    return (
      <div>
        <h1>Real Time Stats</h1>
        <div className="text-center">
          <span>{ this.state.message }</span><br/>
        </div>
      </div>
    )
  }
}

export default Status;