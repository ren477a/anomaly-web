import React from 'react';

import MemberTable from './MemberTable';

class Member extends React.Component {
  render() {
    return (
      <div className="column is-9">
        <section className="hero is-info welcome is-small">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Team Management
              </h1>
              <h2 className="subtitle">
                Member list and role management
              </h2>
            </div>
          </div>
        </section>
        {/* <div className="columns">
          <div className="column">
            <button className="button is-success">Add New Member</button>
          </div>
        
        </div> */}

        <div className="columns" style={{paddingTop: "20px"}}>
          <MemberTable />
        </div>
        
      </div>
    )
  }
}

export default Member;