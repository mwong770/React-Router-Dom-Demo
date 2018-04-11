import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

class ProjectEditForm extends Component {

	state = {
	  
	}

	render() {
		return (
			<div>
				<Header />
			 	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
			 	&nbsp; &nbsp; &nbsp;
				Put Project Edit Form Here
				<br /><br />
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
				<Link to="/project_list">Return to Project List</Link>
			
				<Footer />
			</div>
		)
	}
}
export default ProjectEditForm;