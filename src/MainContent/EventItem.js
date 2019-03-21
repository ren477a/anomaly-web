import React from 'react';

class EventItem extends React.Component {
  render() {
    return (
      <tr>
        <td width="5%"><i className="fa fa-bell-o"></i></td>
        <td>{ this.props.name } occured at <br /><strong className="has-text-info"> { this.props.location } </strong></td>
        <td>
          {/* <p className="has-text-right">January 31, 2019<br />13:24:56</p> */}
          <p className="has-text-right"> { this.props.time }</p>
        </td>
      </tr>
    )
  }
}


export default EventItem;
