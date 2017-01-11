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

	render() {		
		return (
			<ul>
				{ this.state.posts.map((data) => <PostsList key={data._id}  post={data} /> )}
			</ul>
		);
	}
	}

