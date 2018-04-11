import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

class DesignPlan extends Component {

	state = {
	  
	}

	render() {
		return (
			<div> 
				<Header />
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				Design Area
				<br /><br />
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
				<Link to="/project_list">Return to Project List</Link>
			
				<Footer />
			</div>
		)
	}
}
export default DesignPlan;