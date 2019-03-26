import React from 'react';

function Tiles() {
  return (
    <section className="info-tiles">
      <div className="tile is-ancestor has-text-centered">
        <div className="tile is-parent">
          <article className="tile is-child box has-background-primary">
            <p className="title has-text-white">23</p>
            <p className="subtitle has-text-white">Alerts received</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box  has-background-info">
            <p className="title has-text-white">19</p>
            <p className="subtitle has-text-white">Request filed</p>
          </article>
        </div>
        <div className="tile is-parent">
            <article className="tile is-child box has-background-link">
              <p className="title has-text-white">19</p>
              <p className="subtitle has-text-white">Exceptions</p>
            </article>
          </div>
        <div className="tile is-parent">
          <article className="tile is-child box has-background-danger">
            <p className="title has-text-white">2</p>
            <p className="subtitle has-text-white">Red Alerts</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Tiles;
