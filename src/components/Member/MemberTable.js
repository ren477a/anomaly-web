import React from 'react';

class MemberTable extends React.Component {
  
  underline = {
    textDecoration: "underline"
  }

  render() {
    return (
      <div className="column is-full">
        <table class="table is-hoverable is-striped is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Access Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={this.underline}>Dave Martinez</td>
              <td>dave@gmail.com</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td style={this.underline}>Efren Mercado</td>
              <td>efren@gmail.com</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td style={this.underline}>Jerime Moreno</td>
              <td>jerime@gmail.com</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default MemberTable;