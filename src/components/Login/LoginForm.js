import React from 'react';
import PropTypes from "prop-types";

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';


class LoginForm extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
 
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      email: '',
      password: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(
      (res) => this.props.history.push('/'),
      (err) => console.log("Login failed: " + err.data)
    );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="field">
            <div className="control">
                <input 
                  className="input is-large" 
                  type="text" 
                  placeholder="Username" 
                  name="username"
                  autoFocus="" 
                  onChange={this.onChange}
                  value={this.state.username}/>
            </div>
        </div>

        <div className="field">
            <div className="control">
                <input 
                  className="input is-large" 
                  type="password"
                  name="password"
                  placeholder="Your Password" 
                  onChange={this.onChange}  
                  value={this.state.password}/>
            </div>
        </div>
        <button type="submit" className="button is-block is-success is-large is-fullwidth">Login</button>
      </form>
    )
  }
}


export default connect(null, { login })(withRouter(LoginForm));