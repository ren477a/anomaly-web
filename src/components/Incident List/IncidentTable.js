import React from 'react';

class IncidentTable extends React.Component {
  
  underline = {
    textDecoration: "underline"
  }

  render() {
    return (
      <div className="column is-full">
        <table class="table is-hoverable is-striped is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Incident Number</th>
              <th>Type</th>
              <th>Time occured</th>
            </tr>
          </thead>
          <tbody>
            <tr style={this.underline}>
              <td>24</td>
              <td>Assault</td>
              <td>March 24, 2019 - 21:02:02</td>
            </tr>
            <tr style={this.underline}>
              <td>37</td>
              <td>Robbery</td>
              <td>March 26, 2019 - 12:42:32</td>
            </tr>
            <tr style={this.underline}>
              <td>40</td>
              <td>Robbery</td>
              <td>March 27, 2019 - 19:28:02</td>
            </tr>
  
          </tbody>
        </table>
      </div>
    )
  }
}

export default IncidentTable;