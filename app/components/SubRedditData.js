import React from 'react';
import axios from 'axios';
import PostsList from './PostsList';

export default class DropdwnBtn extends React.Component {  
    	constructor(props) {
		super(props);
		this.state = {
			posts: []
		}
		}

		componentDidMount() {
			axios.get('/posts/' + this.props.params.subredditId).then(posts => {
			this.setState({ posts: posts.data });
			});
		}

		// filter(e) {
		// 	this.setState({filter: e.target.value})
		// }

	render() {		
		// if(this.state.filter) {
		// 	posts = posts.filter (post => 
		// 		post.community
		// 		.includes(this.state.filter.toLowerCase())
		// 	)
		// }
		return (
	// 		<div>
	// <input type="text" onChange={this.filter.bind(this)}/>
			<ul>
				{ this.state.posts.map((data) => <PostsList key={data._id}  post={data} /> )}
			</ul>
			// </div>
		);
	}
	}

