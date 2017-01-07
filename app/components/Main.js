import React from 'react';
import axios from 'axios';
import PostsList from './PostsList';
// import DateFormat from './DateFormat';
import DropdownBtn from '../Header/dropdownBtn';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            posts:[],
            date: []
        }
    }
    
    componentDidMount() {
     axios.get('/posts').then((posts) => {
        this.setState({posts: posts.data.posts})
    });
    }
    
    // componentDidUpdate(prevDate, currentDate) {
    //     prevDate = this.state.date;
    //     let date = [];
    //     this.state.posts.forEach((ele) => {
    //      let postDate = ele.created_at;            
    //      date.push(postDate);
    //      console.log(date)
    //     })       
    // }
    
    render() {
        return (
        <div>
            <DropdownBtn data={this.state.posts} />  
        <ul>
            {this.state.posts.map((data) => <PostsList key={data._id} post={data} />)}
        </ul>
        </div>
        
        )
    }
}