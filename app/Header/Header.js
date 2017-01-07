import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {
	render() {
		return (
		<div className="container">
	      <div className="jumbotron">
	        <h2><strong>Reddit!</strong></h2>
				<Link to="create">Create Post</Link>
		  </div>			
	    </div>
		);
	}
}

// Header.defaultProps = {
// 	value: "select an option"
// }
