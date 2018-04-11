import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewUserProfileForm extends Component {

	state = {
	  
	}

	render() {
		
		return (
			<div> 
				<br/><br/><br/>
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; 
				Put User Profile Form Here
				<br/><br/>
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
				<Link to="/project_list">Submit</Link>
				
			</div>
		)
	}
}

export default NewUserProfileForm;