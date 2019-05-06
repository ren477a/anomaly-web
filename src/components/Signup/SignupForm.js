import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      redirect: false,
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let register_data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    console.log(register_data)
    axios.post('http://127.0.0.1:8000/useraccounts/users/', register_data)
      .then(res => {
        console.log(res.status);
        if (res.status === 201) {
          alert("Registration successful!")
          this.setRedirect();
        }
      })
      .catch( err => {
        console.log(err)
        alert("Username/Email is already taken!");
      });
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
        {this.renderRedirect()}
        <button type="submit" className="button is-block is-success is-large is-fullwidth">Register</button>
      </form>
    )
  }
}

export default SignupForm;