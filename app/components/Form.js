import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            author: "",
            title: "",
            content: "",
            community: ""
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let currentState = this.state;
        axios.post('/create/publish', currentState)
        .then(res => {
           if(res.data.success) {
               return alert('posted successfully');
           }
        })
    }
    handleAuthorChange(event) {
        console.log(event.target.value)
        this.setState({author: event.target.value.toLowerCase()})
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value.toLowerCase()})
    }
    handleContentChange(event) {
        this.setState({content: event.target.value.toLowerCase()})
    }
    handleCommunityChange(event) {
        this.setState({community: event.target.value.toLowerCase()})
     
    }

    render() {
        return (
         <div className="container">
             <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
               <div className="form-group">
                    <label htmlFor="title">Author</label>
                    <input onChange={this.handleAuthorChange.bind(this)} type="text" className="form-control" id="exampleInputName2" placeholder="Enter Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input onChange={this.handleTitleChange.bind(this)} type="text" className="form-control" id="exampleInputName2" placeholder="Post Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea onChange={this.handleContentChange.bind(this)} type="text" className="form-control" id="exampleInputName2" placeholder="Post Content" />
                </div>
                 <div className="form-group">
                    <label htmlFor="community">Community</label>
                    <input onChange={this.handleCommunityChange.bind(this)} type="text" className="form-control" id="exampleInputName2" placeholder="Enter the community this post belong to Eg: Austin" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
        )
    }
}



    // Form.propTypes = {
    //     title(props, propName, component) {
    //         console.log('prop', props);
    //         console.log('propName', propsName);
    //         console.log('component', component);
    //     }
    //     // title: React.PropTypes.string.isRequired,
    //     // content: React.PropTypes.string.isRequired,
    //     // community: React.PropTypes.string.isRequired
    // }