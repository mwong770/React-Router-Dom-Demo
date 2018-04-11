import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

class UserProfileEditForm extends Component {

	state = {
	  
	}

	render() {
		return (
			<div>
				<Header />
			 	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				Put Profile Edit Form Here
				<br /><br />
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				<Link to="/project_list">Submit</Link>

				<Footer />
			</div>
		)
	}
}
export default UserProfileEditForm;