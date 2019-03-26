import React from 'react';
import axios from 'axios';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

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
    
    axios.post('http://127.0.0.1:8000/useraccounts/users/', this.state)
      .then(res => {
        console.log(res);
      })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="field">
            <div className="control">
                <input 
                  className="input is-large" 
                  type="text" 
                  placeholder="Full Name" 
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
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  onChange={this.onChange}
                  value={this.state.email}/>
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
        <button type="submit" className="button is-block is-success is-large is-fullwidth">Register</button>
      </form>
    )
  }
}

export default SignupForm;