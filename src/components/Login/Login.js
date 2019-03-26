import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

class Login extends React.Component {
  logoStyle = {
    width: "128px",
    height: "128px"
  }

  render() {
    return (
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title has-text-info">Surveillance Hub</h3>
                    <p className="subtitle has-text-grey is-size-6">Please login to proceed.</p>
                    <div className="box">
                        <figure className="avatar">
                            <img src={logo}  style={this.logoStyle}/>
                        </figure>
                        <form>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-large" type="email" placeholder="Your Email" autofocus="" />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input className="input is-large" type="password" placeholder="Your Password" />
                                </div>
                            </div>
                            <Link to="/dashboard" className="button is-block is-info is-large is-fullwidth">Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}

export default Login;