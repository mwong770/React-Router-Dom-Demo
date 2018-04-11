
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Login extends Component {

	state = {
	  
	}

	render() {
		
		return (
			<div> 
				<br/><br/><br/>
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				<Link to="/new_profile">Sign Up</Link>
				<br /><br />
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
	 			<Link to="/project_list">Login</Link>
			</div>
		)
	}
}
//TO USE BUTTON LINKS:
//https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button

export default Login;