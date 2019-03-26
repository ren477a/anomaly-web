import React from 'react';

import ReportTable from './ReportTable';

class Report extends React.Component {
  render() {
    return (
      <div className="column is-9">
        <section className="hero is-info welcome is-small">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Report List
              </h1>
              <h2 className="subtitle">
                Report List and Detail
              </h2>
            </div>
          </div>
        </section>

        <div className="columns" style={{paddingTop: "20px"}}>
          <ReportTable />
        </div>

        
        
      </div>
    )
  }
}

export default Report;