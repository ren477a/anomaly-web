import React from 'react';

class NewMemberForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      role: "member"
    }
  }

  render() {
    return (
      <form>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" placeholder="Full Name" name="name" value={this.state.name} />
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
        <div className="field">
          <div className="control"> 
            <button className="button is-success">Add New Member</button>
          </div>
        </div>
      </form>
    )
  }
}

export default NewMemberForm;