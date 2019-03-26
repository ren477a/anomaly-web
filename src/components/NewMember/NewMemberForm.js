import React from 'react';

class NewMemberForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "admin"
    }
  }

  render() {
    return (
      <form>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="First Name" name="firstName" value={this.state.firstName} />
              </div>
            </div>

            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} />
              </div>
            </div>

            <div className="field">
              <label className="label">Role</label>
              <div className="control">
                <div className="select">
                  <select name="role" value={this.state.role}> 
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="text" placeholder="Username" name="username" value={this.state.username} />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" placeholder="Email" name="email" value={this.state.email} />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" placeholder="password" name="password" value={this.state.password} />
              </div>
            </div>
            <div className="field">
              <div className="control"> 
                <button className="button is-success is-right">Add New Member</button>
              </div>
            </div>
          </div>

         
        </div>
        

        
        
      </form>
    )
  }
}

export default NewMemberForm;