import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

	state = {
	  
	}

	render() {
		
		return (
			
			<div> 
				<br/>
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				<Link to="/profile_edit">User Profile</Link>
				 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				<Link to="/">Sign Out</Link>
				<br/>
				<hr />
				<br />
			</div>
			
		)
	}
}
export default Header;