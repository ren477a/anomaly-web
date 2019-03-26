import React from 'react';
import moment from 'moment'

class FeedAlerts extends React.Component {
  constructor(props) {
    super(props);

    var currentTime = moment().format('h:mm:ss');

    this.state = {
      time: currentTime
    }
  }

  tick() {
    this.setState({
      time: moment().format('h:mm:ss')
    })
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="box" style={{marginTop:"0px"}}>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p >
                <strong className="is-size-3">{ this.state.time }</strong> 
                <br />
                Feed from <strong> Gate 1 </strong>
                <br />
                <span className="has-text-success">Classifier API - Live Connection</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default FeedAlerts;