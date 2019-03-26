import React from 'react';

class ReportTable extends React.Component {
  
  underline = {
    textDecoration: "underline",
  }

  render() {
    return (
      <div className="column is-full">
        <table class="table is-hoverable is-striped is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Report Number</th>
              <th>Reported by</th>
              <th>Type</th>
              <th>Time reported</th>
            </tr>
          </thead>
          <tbody>
            <tr style={this.underline}>
              <td>24</td>
              <td>Dave Martinez</td>
              <td>Assault</td>
              <td>March 24, 2019 - 21:02:02</td>
            </tr>
            <tr style={this.underline}>
              <td>37</td>
              <td>Jerime Moreno</td>
              <td>Robbery</td>
              <td>March 26, 2019 - 12:42:32</td>
            </tr>
            <tr style={this.underline}>
              <td>40</td>
              <td>Efren Mercado</td>
              <td>Robbery</td>
              <td>March 27, 2019 - 19:28:02</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ReportTable;