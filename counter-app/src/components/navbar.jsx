import React, { Component } from 'react';


class NavBar extends Component {
    state = {  }
    render() { 
        return ( <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Nav Bar {" "}
            <span className="badge badge-warning badghe-secondary">{this.props.totalCounters}</span>
            </a>
            
        </nav>);
    }
}
 
export default NavBar;