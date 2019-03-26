import React from 'react';

import NewMemberForm from './NewMemberForm';

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
                Add a New Users
              </h2>
            </div>
          </div>
        </section>


        <div className="columns" style={{paddingTop: "20px"}}>
          <div className="column is-full">
            <NewMemberForm />
          </div>
        </div>
        
      </div>
    )
  }
}

export default Member;