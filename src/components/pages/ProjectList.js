import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

class ProjectList extends Component {

	state = {
	  
	}

	render() {
		
		return (
			<div>
				<Header />
			 	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				<Link to="/new_project">Add Project</Link>
				
				<br /><br />
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				
				Project 1 
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
	 			<Link to="/project_edit">Edit Project</Link>
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
	 			<Link to="/design">Design</Link>
	 			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
	 			<Link to="/reports_list">Reports</Link>

	 			<br /><br />
	 			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
	 			
	 			Project 2 
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
	 			<Link to="/project_edit">Edit Project</Link>
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
	 			<Link to="/design">Design</Link>
	 			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
	 			<Link to="/reports_list">Reports</Link>

	 			<br /><br />
	 			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

	 			Project 3 
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
	 			<Link to="/project_edit">Edit Project</Link>
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
	 			<Link to="/design">Design</Link>
	 			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
	 			<Link to="/reports_list">Reports</Link>
			
				<Footer />
			</div>
		)
	}
}
export default ProjectList;