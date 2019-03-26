import React from 'react';
import {Link} from 'react-router-dom';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      logoutHover: ""
    };

    this.logOutOnClick = this.logOutOnClick.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn(){
    this.setState({ logoutHover: "is-active" });
  }
  hoverOff(){ 
    this.setState({ logoutHover: "" });
  }

  logOutOnClick() {
    this.props.logout();
    console.log("User Logged Out.");
    this.props.history.push('/login');
  }


  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item brand-text" href="dashboard.html">
              <strong>Surveillance Hub</strong>
            </a>
            <div className="navbar-burger burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
  
          <div className="navbar-end">
            
            <div className={`navbar-item has-dropdown ${ this.state.logoutHover }`}
              onMouseEnter={this.hoverOn} 
              onMouseLeave={this.hoverOff}>

              <Link className="navbar-link" to="#">
                { this.props.user.username }
              </Link>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="#" onClick={this.logOutOnClick}>
                Logout
                </Link>
              </div>
            </div>

            
          </div>
        </div>
      </nav>
    );
  } 
}

function mapStateToProps(state) {
  const user = state.auth.user;
  return { user };
}

export default connect(mapStateToProps, { logout })((withRouter(NavBar)));