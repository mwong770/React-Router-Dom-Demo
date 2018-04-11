import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

class NewProjectForm extends Component {

	state = {
	  
	}

	render() {
		return (
			<div>
				<Header />
			 	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; &nbsp;
				Put New Project Form Here
				<br /><br />
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				<Link to="/project_list">Return to Project List</Link>
			
				<Footer />
			</div>
		)
	}
}
export default NewProjectForm;